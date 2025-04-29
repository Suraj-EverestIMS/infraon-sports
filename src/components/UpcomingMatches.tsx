import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { Match } from '../types';

interface UpcomingMatchesProps {
  matches: Match[];
}

const UpcomingMatches: React.FC<UpcomingMatchesProps> = ({ matches }) => {
  return (
    <section id="matches" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Upcoming Matches</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map(match => (
            <div key={match.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-blue-600 text-white py-2 px-4 font-semibold text-center">
                {match.round}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex flex-1 flex-col items-center">
                    <img 
                      src={match.player1.avatar || 'https://via.placeholder.com/60'} 
                      alt={match.player1.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                    />
                    <h3 className="font-semibold mt-2 text-center">{match.player1.name}</h3>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-500">VS</div>
                  </div>
                  
                  <div className="flex flex-1 flex-col items-center">
                    <img 
                      src={match.player2.avatar || 'https://via.placeholder.com/60'} 
                      alt={match.player2.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                    />
                    <h3 className="font-semibold mt-2 text-center">{match.player2.name}</h3>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 border-t pt-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{new Date(match.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })} {match.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>Main Arena</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            View All Matches
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatches;