import React, { useState, useEffect } from 'react';

export default function Carousel({ items, cardsPerView = 4, renderItem }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCardsPerView, setCurrentCardsPerView] = useState(cardsPerView);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 950);
  const totalCards = items.length;

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 950;
      setIsMobile(mobile);
      setCurrentCardsPerView(mobile ? 1 : cardsPerView);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cardsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + currentCardsPerView >= totalCards ? 0 : prevIndex + currentCardsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - currentCardsPerView < 0
        ? Math.floor((totalCards - 1) / currentCardsPerView) * currentCardsPerView
        : prevIndex - currentCardsPerView
    );
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden px-8">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / currentCardsPerView)}%)`,
          }}
        >
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`flex-none p-4 ${isMobile ? 'w-full' : 'w-1/4'}`}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-10 hover:cursor-pointer"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-10 hover:cursor-pointer"
      >
        →
      </button>
    </div>
  );
} 