import React, { useState } from "react";
import Slider from "react-slick";

import type { Highlight } from "../types";

interface HighlightsProps {
  highlights: Highlight[];
}

const Highlights: React.FC<HighlightsProps> = ({ highlights }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    pauseOnHover: true,
    arrows: true,
    // centerMode: true,
    responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
    },
  },
],
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
              Photos and videos from this tournament will appear here once
              they're available.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const previousImage = () => {
  if (selectedIndex === null) return;

  setSelectedIndex(
    (selectedIndex - 1 + highlights.length) % highlights.length
  );
};

const nextImage = () => {
  if (selectedIndex === null) return;

  setSelectedIndex(
    (selectedIndex + 1) % highlights.length
  );
};

  return (
    <section id="highlights" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tournament Highlights
        </h2>

        <Slider {...settings}>
          {highlights.map((item, index) => (
            <div key={item.id} className="px-3">
              {item.type === "image" ? (
                <img
                  src={item.url}
                  alt={`Tournament highlight ${item.id}`}
                  className="w-full h-auto hover:shadow-2xl transition-all"
                  onClick={() => setSelectedIndex(index)}
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

      {selectedIndex !== null && (
  <div
    onClick={() => setSelectedIndex(null)}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
  >
    <button
      onClick={(e) => {
        e.stopPropagation();
        previousImage();
      }}
      className="mr-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-4xl text-gray-800 shadow-xl transition hover:bg-white"
    >
      ‹
    </button>

    <div
      onClick={(e) => e.stopPropagation()}
      className="relative animate-scaleIn"
    >
      <button
        onClick={() => setSelectedIndex(null)}
        className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-lg hover:bg-gray-100"
      >
        ✕
      </button>

      <img
        src={highlights[selectedIndex].url}
        alt=""
        className="max-h-[90vh] max-w-[80vw] rounded-xl shadow-2xl"
      />
    </div>

    <button
      onClick={(e) => {
        e.stopPropagation();
        nextImage();
      }}
      className="ml-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-4xl text-gray-800 shadow-xl transition hover:bg-white"
    >
      ›
    </button>
  </div>
)}
    </section>
  );
};

export default Highlights;
