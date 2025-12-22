import React, { useState, useEffect } from 'react';

// Import statements (these would be your actual imports)
import Result1 from '../assets/images/Result1.jpeg'
import Result2 from '../assets/images/Result2.jpeg'
import Result3 from '../assets/images/Result3.jpeg'
import Result4 from '../assets/images/Result4.jpeg'
import ChristmasBanner from '../assets/videos/Christmas_offer.mp4'

const Results = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, type: 'image', src: Result1 },
    { id: 2, type: 'image', src: Result2 },
    { id: 3, type: 'image', src: Result3 },
    { id: 4, type: 'image', src: Result4 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

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
                <div className="relative w-full h-[400px] overflow-hidden bg-slate-100">
                  {slide.type === "video" ? (
                    <video
                      src={slide.src}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={slide.src}
                      alt={`Result ${slide.id}`}
                      className="w-full h-full object-cover object-[50%_50%]"
                      draggable="false"
                    />
                  )}
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