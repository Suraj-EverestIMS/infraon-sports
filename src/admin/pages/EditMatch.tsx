import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getSeasonData } from "../../firebase/seasonService";
import type { Match, SeasonData } from "../../types";

export default function EditMatch() {
  const { seasonId, matchId } = useParams();

  const [season, setSeason] = useState<SeasonData | null>(null);
  const [match, setMatch] = useState<Match | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!seasonId || !matchId) return;

    loadMatch();
  }, [seasonId, matchId]);

  async function loadMatch() {
    try {
      const data = await getSeasonData(seasonId!);

      setSeason(data);

      const selectedMatch = data.matches.find((m) => m.id === matchId);

      if (selectedMatch) {
        setMatch(selectedMatch);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading match...</div>;
  }

  if (!season || !match) {
    return <div>Match not found.</div>;
  }

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-gray-600 hover:text-black"
      >
        <ArrowLeft size={18} />
        Back
      </button>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Edit Match</h1>

          <p className="text-gray-500">{season.meta.name}</p>
        </div>

        <div className="rounded-lg border bg-white p-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="mb-2 text-lg font-semibold">Player 1</h2>

              <p>{match.player1.name}</p>

              <p className="text-sm text-gray-500">{match.player1.id}</p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold">Player 2</h2>

              <p>{match.player2.name}</p>

              <p className="text-sm text-gray-500">{match.player2.id}</p>
            </div>
          </div>

          <hr className="my-6" />

          <div className="grid grid-cols-2 gap-6">
            <div>
              <strong>Date</strong>

              <p>{match.date}</p>
            </div>

            <div>
              <strong>Status</strong>

              <p>{match.status}</p>
            </div>

            <div>
              <strong>Stage</strong>

              <p>{match.stage}</p>
            </div>

            <div>
              <strong>Winner</strong>

              <p>{match.winner || "Not decided"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
