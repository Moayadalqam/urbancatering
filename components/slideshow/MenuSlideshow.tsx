'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface MenuSlideshowProps {
  images: { src: string; alt: string }[];
  downloadLink?: string;
  downloadText?: string;
  autoAdvanceMs?: number;
}

export default function MenuSlideshow({
  images,
  downloadLink,
  downloadText = 'Download Menu PDF',
  autoAdvanceMs = 10000,
}: MenuSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoAdvanceMs <= 0) return;

    const interval = setInterval(nextSlide, autoAdvanceMs);
    return () => clearInterval(interval);
  }, [autoAdvanceMs, nextSlide]);

  return (
    <div className="bg-gray-100 p-4 md:p-5">
      {/* Download Button */}
      {downloadLink && (
        <a
          href={downloadLink}
          className="block w-full max-w-xs mx-auto mb-5 py-3 px-6 bg-brand-blue text-white text-center font-bold rounded hover:bg-green-600 transition-colors shadow-md"
          download
        >
          {downloadText}
        </a>
      )}

      {/* Slideshow Container */}
      <div className="relative max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Slides */}
        <div className="relative h-[400px] md:h-[600px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 p-4 md:p-5 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain rounded"
                sizes="(max-width: 768px) 100vw, 1000px"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/80 text-white p-4 font-bold text-lg transition-colors"
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/80 text-white p-4 font-bold text-lg transition-colors"
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4 py-3 bg-white max-w-4xl mx-auto rounded-b-lg">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-gray-700' : 'bg-gray-400 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
