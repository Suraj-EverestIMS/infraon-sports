import React, { useRef } from 'react';
import { Highlight } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HighlightsProps {
  highlights: Highlight[];
}

const Highlights: React.FC<HighlightsProps> = ({ highlights }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = 320;
    const currentScroll = scrollRef.current.scrollLeft;
    
    scrollRef.current.scrollTo({
      left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="highlights" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tournament Highlights</h2>
        
        <div className="relative">
          {/* Navigation arrows */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 rounded-full shadow-md flex items-center justify-center hover:bg-white transition-colors"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 rounded-full shadow-md flex items-center justify-center hover:bg-white transition-colors"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Scrollable highlights */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {highlights.map(highlight => (
              <div 
                key={highlight.id} 
                className="min-w-[300px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={highlight.imageUrl} 
                    alt={highlight.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-xs text-gray-300">
                      {new Date(highlight.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <h3 className="text-white font-semibold">
                      {highlight.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-gray-600 text-sm">
                    {highlight.description}
                  </p>
                  
                  <button className="mt-3 text-blue-600 text-sm font-medium flex items-center gap-1 hover:text-blue-700">
                    Watch Highlight
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            View All Highlights
          </button>
        </div>
      </div>
    </section>
  );
};

export default Highlights;