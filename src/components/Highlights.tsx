import React from 'react';
import Slider from 'react-slick';

import type { Highlight } from '../types';

interface HighlightsProps {
  highlights: Highlight[];
}

const Highlights: React.FC<HighlightsProps> = ({ highlights }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
    pauseOnHover: true,
    arrows: true,
  };

  if (highlights.length === 0) {
    return (
      <section id="highlights" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Tournament Highlights
          </h2>

          <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 py-16 text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Nothing to show yet
            </h3>

            <p className="mt-2 text-gray-500">
              Photos and videos from this tournament will appear here once they're available.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="highlights" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tournament Highlights
        </h2>

        <Slider {...settings}>
          {highlights.map((item) => (
            <div key={item.id}>
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={`Tournament highlight ${item.id}`}
                  className="w-full h-auto"
                />
              ) : (
                <video controls className="w-full h-auto">
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Highlights;