import { useEffect, useState } from "react";
import type { Match, SeasonData } from "../../types";
import { updateSeasonData } from "../../firebase/seasonService";
import { recalculateSeason } from "../services/standings.service";

interface MatchEditorModalProps {
  season: SeasonData;
  match: Match;
  onClose: () => void;
}

export default function MatchEditorModal({
  season,
  match,
  onClose,
}: MatchEditorModalProps) {
  const [editedMatch, setEditedMatch] = useState(match);

  useEffect(() => {
    setEditedMatch(match);
  }, [match]);

  const totalSets =
    editedMatch.stage === "group"
      ? season.meta.groupStageSets
      : editedMatch.round === "final"
        ? season.meta.finalsSets
        : season.meta.knockoutStageSets;

  function updateScore(
    player: "player1" | "player2",
    setIndex: number,
    value: string,
  ) {
    const score = value === "" ? undefined : Number(value);

    const updatedScores = [...editedMatch[player].score];
    updatedScores[setIndex] = score as number;

    const updatedMatch = {
      ...editedMatch,
      [player]: {
        ...editedMatch[player],
        score: updatedScores,
      },
    };

    setEditedMatch(calculateWinner(updatedMatch));
  }

  async function handleSave() {
    try {
      const updatedSeason: SeasonData = {
        ...season,
        matches: season.matches.map((m) =>
          m.id === editedMatch.id ? editedMatch : m,
        ),
      };

      const recalculatedSeason = recalculateSeason(updatedSeason);

      await updateSeasonData(recalculatedSeason.meta.id, recalculatedSeason);

      alert("Match updated successfully.");

      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to update match.");
    }
  }

  function calculateWinner(updatedMatch: Match): Match {
    let player1Sets = 0;
    let player2Sets = 0;

    updatedMatch.player1.score.forEach((score1, index) => {
      const score2 = updatedMatch.player2.score[index];

      if (score1 == null || score2 == null) return;

      if (score1 > score2) {
        player1Sets++;
      } else if (score2 > score1) {
        player2Sets++;
      }
    });

    return {
      ...updatedMatch,
      winner:
        player1Sets > player2Sets
          ? updatedMatch.player1.id
          : player2Sets > player1Sets
            ? updatedMatch.player2.id
            : "",
    };
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-6">
          <div>
            <h2 className="text-2xl font-bold">Edit Match</h2>
            <p className="text-sm text-gray-500">
              {editedMatch.stage === "group"
                ? editedMatch.groupId
                : editedMatch.round}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-3xl leading-none text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>

        <div className="space-y-8 p-6">
          <div className="flex items-center justify-between">
            {/* Match Info */}
            <div className="">
              <h3 className="text-3xl font-bold">
                {editedMatch.player1.name}{" "}
                <span className="my-2 text-lg font-semibold text-gray-400">
                  VS
                </span>{" "}
                {editedMatch.player2.name}
              </h3>

              <p className="mt-3 text-gray-500">{editedMatch.date}</p>
            </div>

            {/* Match Options */}
            <div className="grid gap-6">
              <div className="flex items-center gap-2">
                <label className="block font-medium">Status</label>

                <select
                  value={editedMatch.status}
                  onChange={(e) => {
                    const status = e.target.value as Match["status"];

                    setEditedMatch({
                      ...editedMatch,
                      status,
                      isWalkover: status === "walkover",
                      winner: "",
                      player1: {
                        ...editedMatch.player1,
                        score: [],
                      },
                      player2: {
                        ...editedMatch.player2,
                        score: [],
                      },
                    });
                  }}
                  className="w-[15rem] rounded-lg border p-3"
                >
                  <option value="scheduled">Scheduled</option>
                  <option value="completed">Completed</option>
                  <option value="walkover">Walkover</option>
                </select>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-100 p-4">
            <p className="text-sm text-gray-500">Winner</p>

            <p className="text-xl font-semibold">
              {editedMatch.winner === ""
                ? "-"
                : editedMatch.winner === editedMatch.player1.id
                  ? editedMatch.player1.name
                  : editedMatch.player2.name}
            </p>
          </div>

          {/* Scores */}
          {editedMatch.status === "completed" && (
            <div>
              <h3 className="mb-4 text-xl font-semibold">Scores</h3>

              <div className="overflow-x-auto">
                <table className="min-w-full border">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border p-3"></th>

                      {Array.from({ length: totalSets }).map((_, index) => (
                        <th key={index} className="border p-3 text-center">
                          Set {index + 1}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {/* Player 1 */}

                    <tr>
                      <td className="border p-3 font-semibold whitespace-nowrap">
                        {editedMatch.player1.name}
                      </td>

                      {Array.from({ length: totalSets }).map((_, index) => (
                        <td key={index} className="border p-3 text-center">
                          <input
                            type="number"
                            min={0}
                            value={editedMatch.player1.score[index] ?? ""}
                            onChange={(e) =>
                              updateScore("player1", index, e.target.value)
                            }
                            onWheel={(e) => e.currentTarget.blur()}
                            className="h-12 w-16 rounded border text-center"
                          />
                        </td>
                      ))}
                    </tr>

                    {/* Player 2 */}

                    <tr>
                      <td className="border p-3 font-semibold whitespace-nowrap">
                        {editedMatch.player2.name}
                      </td>

                      {Array.from({ length: totalSets }).map((_, index) => (
                        <td key={index} className="border p-3 text-center">
                          <input
                            type="number"
                            min={0}
                            value={editedMatch.player2.score[index] ?? ""}
                            onChange={(e) =>
                              updateScore("player2", index, e.target.value)
                            }
                            onWheel={(e) => e.currentTarget.blur()}
                            className="h-12 w-16 rounded border text-center"
                          />
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {editedMatch.status === "walkover" && (
            <div className="space-y-3">
              <label className="font-medium">Walkover Winner</label>

              <select
                value={editedMatch.winner}
                onChange={(e) =>
                  setEditedMatch({
                    ...editedMatch,
                    winner: e.target.value,
                  })
                }
                className="w-full rounded-lg border p-3"
              >
                <option value="">No Winner (Both Players Absent)</option>

                <option value={editedMatch.player1.id}>
                  {editedMatch.player1.name}
                </option>

                <option value={editedMatch.player2.id}>
                  {editedMatch.player2.name}
                </option>
              </select>
            </div>
          )}

          {/* Footer */}

          <div className="flex justify-end gap-3 border-t pt-6">
            <button onClick={onClose} className="rounded-lg border px-5 py-2">
              Cancel
            </button>

            <button
              disabled={editedMatch.status === "scheduled"}
              onClick={handleSave}
              className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
              Save Match
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
