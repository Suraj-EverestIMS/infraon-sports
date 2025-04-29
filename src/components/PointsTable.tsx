import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Group, MatchResult } from '../types';
import { previousMatches } from '../data/tournamentData';

interface PointsTableProps {
  groups: Group[];
}

const PointsTable: React.FC<PointsTableProps> = ({ groups }) => {
  const [expandedPlayerId, setExpandedPlayerId] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState(groups[0].id);

  const togglePlayer = (playerId: string) => {
    if (expandedPlayerId === playerId) {
      setExpandedPlayerId(null);
    } else {
      setExpandedPlayerId(playerId);
    }
  };

  const getPlayerMatches = (playerId: string): MatchResult[] => {
    return previousMatches.filter(
      match => match.player1.id === playerId || match.player2.id === playerId
    );
  };

  const currentGroup = groups.find(g => g.id === activeGroup) || groups[0];

  return (
    <section id="points" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Points Table</h2>
        
        {/* Group tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {groups.map(group => (
            <button
              key={group.id}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeGroup === group.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveGroup(group.id)}
            >
              {group.name}
            </button>
          ))}
        </div>
        
        {/* Points table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-4 py-3 text-left">Ranking</th>
                  <th className="px-4 py-3 text-left">Player</th>
                  <th className="px-4 py-3 text-center">Matches</th>
                  <th className="px-4 py-3 text-center">Wins</th>
                  <th className="px-4 py-3 text-center">Losses</th>
                  <th className="px-4 py-3 text-center">No Results</th>
                  <th className="px-4 py-3 text-center">Points</th>
                </tr>
              </thead>
              <tbody>
                {currentGroup.players
                  .sort((a, b) => b.points - a.points)
                  .map((player, index) => {
                    const playerMatches = getPlayerMatches(player.id);
                    
                    return (
                      <React.Fragment key={player.id}>
                        <tr 
                          className={`border-b hover:bg-gray-50 cursor-pointer transition-colors ${
                            index < 2 ? 'bg-green-50' : ''
                          }`}
                          onClick={() => togglePlayer(player.id)}
                        >
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                                index < 2 ? 'bg-green-600 text-white' : 'bg-gray-200'
                              }`}>
                                {index + 1}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <img 
                                src={player.avatar || 'https://via.placeholder.com/40'} 
                                alt={player.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <div>
                                <div className="font-medium">{player.name}</div>
                                <div className="text-xs text-gray-500">
                                  {index < 2 ? 'Qualified' : 'Group Stage'}
                                </div>
                              </div>
                              {expandedPlayerId === player.id ? (
                                <ChevronUp size={16} className="ml-2" />
                              ) : (
                                <ChevronDown size={16} className="ml-2" />
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center">{player.matches}</td>
                          <td className="px-4 py-3 text-center">{player.wins}</td>
                          <td className="px-4 py-3 text-center">{player.losses}</td>
                          <td className="px-4 py-3 text-center">{player.noResults}</td>
                          <td className="px-4 py-3 text-center font-bold">{player.points}</td>
                        </tr>
                        
                        {/* Expandable match history */}
                        {expandedPlayerId === player.id && (
                          <tr>
                            <td colSpan={7} className="bg-gray-50 px-4 py-4">
                              <div className="text-sm">
                                <h4 className="font-semibold mb-2">Match History</h4>
                                {playerMatches.length > 0 ? (
                                  <div className="grid gap-3">
                                    {playerMatches.map(match => {
                                      const isPlayer1 = match.player1.id === player.id;
                                      const opponent = isPlayer1 ? match.player2 : match.player1;
                                      const playerScore = isPlayer1 ? match.player1.score : match.player2.score;
                                      const opponentScore = isPlayer1 ? match.player2.score : match.player1.score;
                                      const isWinner = match.winner === player.id;
                                      const didNotPlay = playerScore.length === 0 || opponentScore.length === 0;
                                      
                                      return (
                                        <div key={match.id} className="bg-white p-3 rounded border flex items-center justify-between">
                                          <div className="flex items-center gap-2">
                                            <img 
                                              src={opponent.avatar || 'https://via.placeholder.com/32'} 
                                              alt={opponent.name}
                                              className="w-8 h-8 rounded-full object-cover"
                                            />
                                            <span>vs {opponent.name}</span>
                                          </div>
                                          <div className="flex items-center gap-2">
                                            {didNotPlay ? (
                                              <span className="text-gray-500 font-medium">Did not play!</span>
                                            ) : (
                                              <>
                                                <span className={isWinner ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                                                  {isWinner ? 'Win' : 'Loss'}
                                                </span>
                                                <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                                                  {playerScore.join('-')} | {opponentScore.join('-')}
                                                </span>
                                              </>
                                            )}
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                ) : (
                                  <p>No match history available</p>
                                )}
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Top 2 players from each group qualify for the knockout stage</p>
        </div>
      </div>
    </section>
  );
};

export default PointsTable;