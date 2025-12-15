import React, { useState, useEffect } from 'react';
import Result1 from '../assets/images/Result1.jpeg'
import Result2 from '../assets/images/Result2.jpeg'
import Result3 from '../assets/images/Result3.jpeg'
import Result4 from '../assets/images/Result4.jpeg'

const Results = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: Result1 },
    { id: 2, image: Result2 },
    { id: 3, image: Result3 },
    { id: 4, image: Result4 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        
        {/* Main Slide Container */}
        <div className="relative overflow-hidden shadow-2xl">
          
          {/* Slides Wrapper */}
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="min-w-full"
              >
                <div className="relative w-full h-[400px]">
                  <img
                    src={slide.image}
                    alt={`Result ${slide.id}`}
                    className="w-full h-full object-contain"
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="mt-8 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'bg-slate-800 w-12 h-3 shadow-md'
                  : 'bg-slate-300 hover:bg-slate-400 w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;