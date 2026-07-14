import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getSeasonData } from "../../firebase/seasonService";
import type { SeasonData, Match } from "../../types";
import MatchEditorModal from "../components/MatchEditorModal";
import { getPlayers, PlayerProfile } from "../../firebase/playerService";

export default function Matches() {
  const { seasonId } = useParams();

  const [season, setSeason] = useState<SeasonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [players, setPlayers] = useState<Record<string, PlayerProfile>>({});

  useEffect(() => {
    if (!seasonId) return;

    loadSeason();
  }, [seasonId]);

  async function loadSeason() {
    try {
      const data = await getSeasonData(seasonId!);
      const playerData = await getPlayers();
      setSeason(data);
      setPlayers(playerData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading season...</div>;
  }

  if (!season) {
    return <div>Season not found.</div>;
  }

  function formatStage(match: Match) {
    if (match.stage === "group") {
      const letter = match.groupId?.replace("group-", "").toUpperCase();
      return `Group ${letter}`;
    }

    switch (match.round) {
      case "quarterfinal":
        return "Quarter Final";

      case "semifinal":
        return "Semi Final";

      case "final":
        return "Final";

      case "third_place":
        return "Third Place";

      default:
        return match.round;
    }
  }

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">{season.meta.name}</h1>

      <div className="overflow-x-auto rounded-lg border bg-white">
        <table className="min-w-full">
          <thead className="border-b bg-gray-100">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Stage</th>
              <th className="p-3 text-left">Player 1</th>
              <th className="p-3 text-left">Player 2</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Winner</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {season.matches.map((match) => (
              <tr
                key={match.id}
                className="border-b transition hover:bg-gray-50"
              >
                <td className="p-3">{match.date}</td>

                <td className="p-3">
                  {formatStage(match)}
                </td>

                <td className="p-3">{match.player1.name}</td>

                <td className="p-3">{match.player2.name}</td>

                <td className="p-3 capitalize">{match.status}</td>

                <td className="p-3">
                  {match.winner
                    ? match.winner === match.player1.id
                      ? match.player1.name
                      : match.player2.name
                    : "-"}
                </td>

                <td className="p-3 text-center">
                  <button
                    onClick={() => setSelectedMatch(match)}
                    className="rounded bg-blue-600 px-3 py-1 text-white transition hover:bg-blue-700"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedMatch && (
        <MatchEditorModal
          season={season}
          players={players}
          match={selectedMatch}
          onClose={() => setSelectedMatch(null)}
        />
      )}
    </div>
  );
}
