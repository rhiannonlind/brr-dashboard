import React, { useState } from 'react';

export default function Carousel({ items, cardsPerView = 4, renderItem }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = items.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerView >= totalCards ? 0 : prevIndex + cardsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsPerView < 0
        ? Math.floor((totalCards - 1) / cardsPerView) * cardsPerView
        : prevIndex - cardsPerView
    );
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden px-8">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-none w-1/4 p-4">
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-10"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-10"
      >
        →
      </button>
    </div>
  );
} 