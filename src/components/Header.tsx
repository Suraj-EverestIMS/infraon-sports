import React from 'react';
// import { CookingPot as PingPong } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center text-white rounded-full">
            {/* <PingPong size={24} /> */}
            <img src="https://infraon.io/assets/img/favicon.svg" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-bold text-blue-600">Infraon Sports Tournament 2025</span>
        </a>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
          <a href="#matches" className="text-gray-700 hover:text-blue-600 transition-colors">Matches</a>
          <a href="#points" className="text-gray-700 hover:text-blue-600 transition-colors">Points Table</a>
          <a href="#brackets" className="text-gray-700 hover:text-blue-600 transition-colors">Brackets</a>
          <a href="#highlights" className="text-gray-700 hover:text-blue-600 transition-colors">Highlights</a>
        </div>
        
        <button className="block md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;