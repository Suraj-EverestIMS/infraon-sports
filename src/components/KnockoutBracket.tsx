import React from 'react';
import { KnockoutMatch } from '../types';

interface KnockoutBracketProps {
  matches: KnockoutMatch[];
}

const KnockoutBracket: React.FC<KnockoutBracketProps> = ({ matches }) => {
  const quarterfinals = matches.filter(match => match.round === 'quarterfinal');
  const semifinals = matches.filter(match => match.round === 'semifinal');
  const final = matches.filter(match => match.round === 'final');

  const renderMatch = (match: KnockoutMatch) => {
    const player1 = match.player1 || { id: '', name: 'TBD' };
    const player2 = match.player2 || { id: '', name: 'TBD' };
    const player1Sets =
      match?.player1?.score && match?.player2?.score && Array.isArray(match.player1.score) && Array.isArray(match.player2.score)
        ? match.player1.score.reduce((count, score, i) => {
            const opponentScore = match.player2!.score[i];
            return score > opponentScore ? count + 1 : count;
          }, 0)
        : 0;

    const player2Sets =
      match?.player2?.score && match?.player1?.score && Array.isArray(match.player2.score) && Array.isArray(match.player1.score)
        ? match.player2.score.reduce((count, score, i) => {
            const opponentScore = match.player1!.score[i];
            return score > opponentScore ? count + 1 : count;
          }, 0)
        : 0;
    
    
    return (
      <div className="match-card bg-white rounded-lg shadow-md p-4 mb-8 w-full transform transition-transform hover:scale-[1.02]">
        <div className="text-xs text-gray-500 mb-2">
          {match.date && new Date(match.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          {match.time && ` • ${match.time}`}
        </div>
        
        <div className={`player-row p-2 mb-1 rounded ${!match.player1 ? 'bg-gray-100' : 'bg-white border'} ${match.player1 && match.winner === match.player1.id ? 'bg-lime-200' : ''}`}>
          <div className="flex items-center gap-2">
            {match.player1?.avatar ? (
              <img 
                src={match.player1.avatar} 
                alt={match.player1.name}
                className="w-6 h-6 rounded-full object-cover"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
            )}
            <span className={`font-medium flex justify-between align-center w-full ${!match.player1 ? 'text-gray-400' : ''}`}>
              <span>
                {player1.name}
              </span>
              <span>
                {player1Sets}
              </span>
            </span>
          </div>
        </div>
        
        <div className={`player-row p-2 rounded ${!match.player2 ? 'bg-gray-100' : 'bg-white border'} ${match.player2 && match.winner === match.player2.id ? 'bg-lime-200' : ''}`}>
          <div className="flex items-center gap-2">
            {match.player2?.avatar ? (
              <img 
                src={match.player2.avatar} 
                alt={match.player2.name}
                className="w-6 h-6 rounded-full object-cover"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
            )}
            <span className={`font-medium flex justify-between align-center w-full ${!match.player2 ? 'text-gray-400' : ''}`}>
              <span>
                {player2.name}
              </span>
              <span>
                {player2Sets}
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="brackets" className="py-16 px-4 bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/4568152/pexels-photo-4568152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tournament Bracket</h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 lg:gap-10">
          {/* Quarterfinals */}
          <div className="round flex-1">
            <h3 className="text-center text-xl font-semibold mb-6 text-blue-600">Quarterfinals</h3>
            <div className="flex flex-col items-center justify-around h-full">
              {quarterfinals.map(match => (
                <div key={match.id} className="w-full max-w-xs">
                  {renderMatch(match)}
                </div>
              ))}
            </div>
          </div>
          
          {/* Semifinals */}
          <div className="round flex-1">
            <h3 className="text-center text-xl font-semibold mb-6 text-blue-600">Semifinals</h3>
            <div className="flex flex-col items-center justify-around h-full">
              {semifinals.map(match => (
                <div key={match.id} className="w-full max-w-xs">
                  {renderMatch(match)}
                </div>
              ))}
            </div>
          </div>
          
          {/* Final */}
          <div className="round flex-1">
            <h3 className="text-center text-xl font-semibold mb-6 text-blue-600">Final</h3>
            <div className="flex flex-col items-center justify-around h-full">
              {final.map(match => (
                <div key={match.id} className="w-full max-w-xs">
                  {renderMatch(match)}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-blue-50 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Tournament Format</h3>
          <p className="text-gray-700">
            Group stage: 4 groups of 4 players, 5-set matches<br />
            Top 2 from each group advance to quarterfinals<br />
            Knockout stage: 7-set matches
          </p>
        </div>
      </div>
    </section>
  );
};

export default KnockoutBracket;