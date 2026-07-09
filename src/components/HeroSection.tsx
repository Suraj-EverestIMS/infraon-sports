import React from 'react';
import { SeasonData } from '../types';

interface HeroSectionProps {
  data: SeasonData;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const uniquePlayers = new Set(
    data.groups.flatMap(group =>
      group.players.map(player => player.id)
    )
  ).size;

  const groupCount = data.groups.length;

  return (
    <section id="home" className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/976873/pexels-photo-976873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.5)',
        }}
      />

      {/* Content container */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
          <span className="block">Table Tennis</span>
          <span className="block mt-2 text-blue-400">Championships {data.meta.year}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Get ready to spin, smash, and serve your way to victory in our all-out table tennis battle — Ready to rule the room now?
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#matches" 
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            View Matches
          </a>
          <a 
            href="#brackets" 
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            Tournament Brackets
          </a>
        </div>
        
        <div className="mt-12 flex justify-center items-center gap-6 text-white">
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold">{uniquePlayers}</div>
            <div className="text-sm uppercase tracking-wider">Players</div>
          </div>
          <div className="h-8 w-px bg-gray-400"></div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold">{groupCount}</div>
            <div className="text-sm uppercase tracking-wider">Groups</div>
          </div>
          <div className="h-8 w-px bg-gray-400"></div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold">{data.meta.finalsSets}</div>
            <div className="text-sm uppercase tracking-wider">Finals Sets</div>
          </div>
        </div>
        
        <div className="mt-5 flex justify-center items-center gap-6 text-white">
          <div className="h-[2px] w-20 bg-gray-400"></div>
          <div className="text-center">
            <div className="text-sm uppercase tracking-wider">6PM Onwards</div>
          </div>
          <div className="h-[2px] w-20 bg-gray-400"></div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;