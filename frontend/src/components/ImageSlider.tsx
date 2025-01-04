'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    '/images/slider/slide1.webp',
    '/images/slider/slide2.webp',
    '/images/slider/slide3.webp'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full relative">
      <div className="w-full relative h-[35vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out transform slider-slide ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0'
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-contain"
              quality={90}
            />
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-1 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-3 z-10 slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
