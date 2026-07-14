import React from "react";
import { Match, SeasonData } from "../types";
import { PlayerProfile } from "../firebase/playerService";

interface KnockoutBracketProps {
  data: SeasonData;
  players: Record<string, PlayerProfile>;
}

const KnockoutBracket: React.FC<KnockoutBracketProps> = ({ data, players }) => {
  const { matches, groups, meta } = data;

  const knockoutMatches = matches.filter((match) => match.stage === "knockout");

  const quarterfinals = knockoutMatches.filter(
    (match) => match.round === "quarterfinal",
  );

  const leftQuarters = quarterfinals.slice(0, 2);
  const rightQuarters = quarterfinals.slice(2, 4);

  const semifinals = knockoutMatches.filter(
    (match) => match.round === "semifinal",
  );

  const leftSemi = semifinals[0];
  const rightSemi = semifinals[1];

  const final = knockoutMatches.filter((match) => match.round === "final");

  const thirdPlace = knockoutMatches.filter(
    (match) => match.round === "third_place",
  );

  const finalMatch = final[0];
  const thirdPlaceMatch = thirdPlace[0];

  const winner =
    finalMatch?.winner === finalMatch?.player1?.id
      ? finalMatch.player1
      : finalMatch?.winner === finalMatch?.player2?.id
        ? finalMatch.player2
        : null;

  const championStats = winner
    ? matches
        .filter(
          (match) =>
            match.status === "completed" &&
            (match.player1.id === winner.id || match.player2.id === winner.id),
        )
        .reduce(
          (stats, match) => {
            const isPlayer1 = match.player1.id === winner.id;

            const playerScores = isPlayer1
              ? match.player1.score
              : match.player2.score;

            const opponentScores = isPlayer1
              ? match.player2.score
              : match.player1.score;

            let setsWon = 0;
            let setsLost = 0;

            playerScores.forEach((score, i) => {
              if (score > opponentScores[i]) {
                setsWon++;
              } else {
                setsLost++;
              }
            });

            stats.matches++;

            if (match.winner === winner.id) {
              stats.wins++;
            } else {
              stats.losses++;
            }

            stats.setsWon += setsWon;
            stats.setsLost += setsLost;

            return stats;
          },
          {
            matches: 0,
            wins: 0,
            losses: 0,
            setsWon: 0,
            setsLost: 0,
          },
        )
    : null;

  const groupCount = groups.length;

  const playersPerGroup = groups.length > 0 ? groups[0].players.length : 0;

  const renderMatch = (match: Match) => {
    const player1 = match.player1 || { id: "", name: "TBD" };
    const player2 = match.player2 || { id: "", name: "TBD" };
    const player1Sets =
      match?.player1?.score &&
      match?.player2?.score &&
      Array.isArray(match.player1.score) &&
      Array.isArray(match.player2.score)
        ? match.player1.score.reduce((count, score, i) => {
            const opponentScore = match.player2!.score[i];
            return score > opponentScore ? count + 1 : count;
          }, 0)
        : 0;

    const player2Sets =
      match?.player2?.score &&
      match?.player1?.score &&
      Array.isArray(match.player2.score) &&
      Array.isArray(match.player1.score)
        ? match.player2.score.reduce((count, score, i) => {
            const opponentScore = match.player1!.score[i];
            return score > opponentScore ? count + 1 : count;
          }, 0)
        : 0;

    const stageLabels: Record<string, string> = {
      quarterfinal: "Quarter Final",
      semifinal: "Semi Final",
      final: "Grand Final",
      third_place: "3rd Place Match",
    };

    const stageLabel = stageLabels[match.round ?? ""] ?? "Match";

    return (
      <div className="match-card bg-white rounded-lg shadow-md p-4 w-full transform transition-transform hover:scale-[1.02]">
        <div className="flex justify-between items-center mb-3">
          <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 text-[11px] font-semibold px-2.5 py-1">
            {stageLabel}
          </span>

          <span className="text-xs text-gray-500">
            {match.date &&
              new Date(match.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
          </span>
        </div>

        <div
          className={`player-row p-2 mb-1 rounded border transition-colors ${
            !match.player1
              ? "bg-gray-100 border-gray-200"
              : match.winner === match.player1.id
                ? "bg-green-50 border-green-300"
                : "bg-white border-gray-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <img
              src={
                players[match.player1.id]?.avatar ??
                "https://placehold.net/avatar-5.svg"
              }
              alt={match.player1.name}
              className="w-6 h-6 rounded-full object-cover"
            />

            <span
              className={`flex justify-between items-center w-full ${
                !match.player1
                  ? "text-gray-400"
                  : match.winner === match.player1.id
                    ? "font-semibold text-green-700"
                    : "font-medium text-gray-800"
              }`}
            >
              <span>{player1.name}</span>
              <span>{player1Sets}</span>
            </span>
          </div>
        </div>

        <div
          className={`player-row p-2 rounded border transition-colors ${
            !match.player2
              ? "bg-gray-100 border-gray-200"
              : match.winner === match.player2.id
                ? "bg-green-50 border-green-300"
                : "bg-white border-gray-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <img
              src={
                players[match.player2.id]?.avatar ??
                "https://placehold.net/avatar-5.svg"
              }
              alt={match.player2.name}
              className="w-6 h-6 rounded-full object-cover"
            />

            <span
              className={`flex justify-between items-center w-full ${
                !match.player2
                  ? "text-gray-400"
                  : match.winner === match.player2.id
                    ? "font-semibold text-green-700"
                    : "font-medium text-gray-800"
              }`}
            >
              <span>{player2.name}</span>
              <span>{player2Sets}</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="brackets"
      className="py-16 px-4 bg-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2025/table-tennis-ping-pong(1).webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
          backgroundAttachment: "fixed",
          filter: "brightness(0.5)",
        }}
      />

      <div className="container mx-auto max-w-8xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Tournament Bracket
        </h2>

        <div className="grid grid-cols-5 gap-8 items-center">
          <div className="flex flex-col justify-center h-full">
            <div>{renderMatch(leftQuarters[0])}</div>

            <div className="mt-24">{renderMatch(leftQuarters[1])}</div>
          </div>

          <div className="flex flex-col justify-center h-full">
            {leftSemi && renderMatch(leftSemi)}
          </div>

          <div className="flex flex-col justify-center gap-8">
            {winner ? (
              <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-yellow-400">
                <div className="text-center">
                  <img
                    src={
                      players[winner.id]?.avatar ??
                      "https://placehold.net/avatar-5.svg"
                    }
                    className="w-[4rem] h-[4rem] rounded-full mx-auto mt-0 border-4 border-yellow-400"
                  />

                  <h3 className="text-xl font-bold mt-3">{winner.name} 🏆</h3>

                  <span className="text-sm text-gray-500">
                    Tournament Champion
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-6">
                  <p className="text-xs text-gray-500">
                    Matches:{" "}
                    <span className="font-bold">
                      {championStats?.matches ?? 0}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Wins:{" "}
                    <span className="font-bold">
                      {championStats?.wins ?? 0}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Losses:{" "}
                    <span className="font-bold">
                      {championStats?.losses ?? 0}
                    </span>
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto" />
                <h3>TBD</h3>
              </>
            )}

            {finalMatch && renderMatch(finalMatch)}

            {thirdPlaceMatch && renderMatch(thirdPlaceMatch)}
          </div>

          <div className="flex flex-col justify-center h-full">
            {rightSemi && renderMatch(rightSemi)}
          </div>

          <div className="flex flex-col justify-center h-full">
            <div>{renderMatch(rightQuarters[0])}</div>

            <div className="mt-24">{renderMatch(rightQuarters[1])}</div>
          </div>
        </div>
        <div className="mt-12 p-6 bg-blue-50 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Tournament Format</h3>
          <p className="text-gray-700">
            Group stage: {groupCount} groups of {playersPerGroup} players,{" "}
            {meta.groupStageSets}-set matches
            <br />
            Top {meta.qualifiersPerGroup} from each group advance to
            quarterfinals
            <br />
            Knockout stage: {meta.knockoutStageSets}-set matches
          </p>
        </div>
      </div>
    </section>
  );
};

export default KnockoutBracket;
