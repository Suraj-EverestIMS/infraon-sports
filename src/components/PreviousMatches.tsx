import React, { useState } from 'react';
import { Match } from '../types';
import { PlayerProfile } from '../firebase/playerService';

interface PreviousMatchesProps {
  matches: Match[];
  players: Record<string, PlayerProfile>;
}

const PreviousMatches: React.FC<PreviousMatchesProps> = ({ matches, players }) => {
  const [filter, setFilter] = useState<string>("all");
  
  const filteredMatches = matches.filter(match => {
    if (filter === "all") return true;

    if (filter.startsWith("group:")) {
      return match.groupId === filter.replace("group:", "");
    }

    if (filter.startsWith("round:")) {
      return match.round === filter.replace("round:", "");
    }

    return true;
  });
    
  const groups = [
    ...new Set(
      matches
        .filter(m => m.stage === "group" && m.groupId)
        .map(m => m.groupId!)
    ),
  ];

  const roundOrder = [
    "quarterfinal",
    "semifinal",
    "final",
    "third_place",
  ];

  const rounds = [
    ...new Set(
      matches
        .filter(m => m.stage === "knockout" && m.round)
        .map(m => m.round!)
    ),
  ].sort(
    (a, b) => roundOrder.indexOf(a) - roundOrder.indexOf(b)
  );

  console.log("Groups:", groups);
console.log("Rounds:", rounds);

  const roundLabels: Record<string, string> = {
    quarterfinal: "Quarter Finals",
    semifinal: "Semi Finals",
    final: "Grand Final",
    third_place: "3rd Place Match",
  };

  return (
    <section className="py-16 px-4 bg-gray-50" id='matchResults'>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Previous Match Results</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === "all" 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          
          {groups.map(group => (
            <button
              key={group.replace('group-', 'Group ').replace(/\b\w/g, c => c.toUpperCase())}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === `group:${group}`
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setFilter(`group:${group}`)}
            >
              {group.replace('group-', 'Group ').replace(/\b\w/g, c => c.toUpperCase())}
            </button>
          ))}
          
          {rounds.map(round => (
            <button
              key={round}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === `round:${round}`
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setFilter(`round:${round}`)}
            >
              {roundLabels[round] ?? round}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMatches.map(match => {
            const player1Sets = match.player1.score.reduce(
              (count, score, i) => (score > match.player2.score[i] ? count + 1 : count),
              0
            );
            const player2Sets = match.player2.score.reduce(
              (count, score, i) => (score > match.player1.score[i] ? count + 1 : count),
              0
            );
            
            return (
              <div key={match.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-lg">
                <div className="bg-gray-100 p-3 text-sm text-gray-600 flex justify-between items-center">
                  <span>
                    {match.stage === "group"
                      ? match.groupId
                          ?.replace("group-", "Group ")
                          .replace(/\b\w/g, c => c.toUpperCase())
                      : roundLabels[match.round ?? ""] ?? "Knockout"}
                  </span>
                  <span>{new Date(match.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}</span>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                    <div className="flex flex-col items-center text-center mb-4 md:mb-0">
                      <img 
                        src={players[match.player1.id]?.avatar ?? "https://placehold.net/avatar-5.svg"} 
                        alt={match.player1.name}
                        className={`w-16 h-16 rounded-full object-cover border-2 ${
                          match.winner === match.player1.id ? 'border-green-500' : 'border-gray-200'
                        }`}
                      />
                      <h3 className="font-semibold mt-2">{match.player1.name}</h3>
                      <div className={`text-sm font-medium ${
                        match.winner === match.player1.id ? 'text-green-600' : 'text-gray-500'
                      }`}>
                        {player1Sets} Sets
                      </div>
                    </div>
                    
                    <div className="score-display bg-gray-100 rounded-lg px-3 py-2 mb-4 md:mb-0">
                      <div className="text-xl font-bold">
                        {player1Sets} - {player2Sets}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <img 
                        src={players[match.player2.id]?.avatar ?? "https://placehold.net/avatar-5.svg"} 
                        alt={match.player2.name}
                        className={`w-16 h-16 rounded-full object-cover border-2 ${
                          match.winner === match.player2.id ? 'border-green-500' : 'border-gray-200'
                        }`}
                      />
                      <h3 className="font-semibold mt-2">{match.player2.name}</h3>
                      <div className={`text-sm font-medium ${
                        match.winner === match.player2.id ? 'text-green-600' : 'text-gray-500'
                      }`}>
                        {player2Sets} Sets
                      </div>
                    </div>
                  </div>
                  
                  <div className="set-scores bg-blue-50 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Set Scores</h4>
                    <div className={`grid gap-2`} style={{gridTemplateColumns: `repeat(${match.player1.score.length}, minmax(0, 1fr))`,}}>
                      {match.player1.score.map((score, idx) => (
                        <div key={idx} className="text-center">
                          <div className="grid grid-cols-1 gap-1">
                            <div className={`px-2 py-1 rounded text-sm ${
                              score > match.player2.score[idx] ? 'bg-green-100 text-green-800' : 'bg-gray-100'
                            }`}>
                              {score}
                            </div>
                            <div className={`px-2 py-1 rounded text-sm ${
                              match.player2.score[idx] > score ? 'bg-green-100 text-green-800' : 'bg-gray-100'
                            }`}>
                              {match.player2.score[idx]}
                            </div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">Set {idx + 1}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {filteredMatches.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No match results available for the selected filter.
          </div>
        )}
      </div>
    </section>
  );
};

export default PreviousMatches;