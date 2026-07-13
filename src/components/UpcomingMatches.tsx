import React from "react";
import { Clock, MapPin } from "lucide-react";
import { Match } from "../types";

interface UpcomingMatchesProps {
  matches: Match[];
}

const UpcomingMatches: React.FC<UpcomingMatchesProps> = ({ matches }) => {
  const groupedMatches = matches.reduce<Record<string, Match[]>>(
    (acc, match) => {
      if (!acc[match.date]) {
        acc[match.date] = [];
      }

      acc[match.date].push(match);

      return acc;
    },
    {},
  );

  const groupedEntries = Object.entries(groupedMatches).sort(
    ([dateA], [dateB]) => new Date(dateA).getTime() - new Date(dateB).getTime(),
  );

  if (matches.length === 0) {
    return (
      <section id="matches" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Upcoming Matches
          </h2>
          <div className="inline-block bg-green-50 border border-green-200 rounded-xl px-8 py-6">
            <p className="text-lg font-semibold text-green-700">
              All matches are complete!
            </p>
            <p className="text-gray-500 mt-1">
              Check out the results below or relive the highlights.
            </p>
          </div>
        </div>
      </section>
    );
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
        return "";
    }
  }

  return (
    <section id="matches" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Upcoming Matches
        </h2>

        {groupedEntries.map(([date, matches]) => (
          <div key={date} className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                {new Date(date).toLocaleDateString("en-GB", {
                  weekday: "long",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </h3>

              <div className="flex-1 h-px bg-gray-300" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {matches.map((match) => (
                <div
                  key={match.id}
                  className="bg-gray-50 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div
                    key={match.id}
                    className="bg-gray-50 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="bg-blue-600 text-white py-2 px-4 font-semibold text-center">
                      {formatStage(match)}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div className="flex flex-1 flex-col items-center">
                          <img
                            src={
                              match.player1.avatar ||
                              "https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/user.svg"
                            }
                            alt={match.player1.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                          />
                          <h3 className="font-semibold mt-2 text-center">
                            {match.player1.name}
                          </h3>
                        </div>

                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-500">
                            VS
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col items-center">
                          <img
                            src={
                              match.player2.avatar ||
                              "https://infraon-assets.s3-accelerate.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/user.svg"
                            }
                            alt={match.player2.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                          />
                          <h3 className="font-semibold mt-2 text-center">
                            {match.player2.name}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600 border-t pt-4">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>
                            {new Date(match.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>Main Arena</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingMatches;
