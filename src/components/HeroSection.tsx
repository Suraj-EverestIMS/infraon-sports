import React from 'react';

const HeroSection: React.FC = () => {
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
          <span className="block mt-2 text-blue-400">Championships 2025</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Experience world-class table tennis as 16 elite players compete for the ultimate title
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
            <div className="text-2xl md:text-4xl font-bold">16</div>
            <div className="text-sm uppercase tracking-wider">Players</div>
          </div>
          <div className="h-8 w-px bg-gray-400"></div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold">4</div>
            <div className="text-sm uppercase tracking-wider">Groups</div>
          </div>
          <div className="h-8 w-px bg-gray-400"></div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold">7</div>
            <div className="text-sm uppercase tracking-wider">Finals Sets</div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;