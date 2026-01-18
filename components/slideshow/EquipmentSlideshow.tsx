'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

interface EquipmentSlideshowProps {
  images: { src: string; alt: string }[];
  downloadLink?: string;
  autoAdvanceMs?: number;
}

export default function EquipmentSlideshow({
  images,
  downloadLink,
  autoAdvanceMs = 5000,
}: EquipmentSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = images.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused || autoAdvanceMs <= 0) return;

    intervalRef.current = setInterval(nextSlide, autoAdvanceMs);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, autoAdvanceMs, nextSlide]);

  return (
    <div className="bg-gray-50 border border-gray-200 my-8">
      {/* Header */}
      <div className="flex items-center justify-between p-6 md:p-8 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d4af37"
            strokeWidth="1.5"
            strokeLinecap="square"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          <h2 className="font-heading text-2xl">
            Equipment <span className="text-brand-gold italic">Collection</span>
          </h2>
        </div>
        <span className="text-xs uppercase tracking-widest text-gray-600 border border-gray-300 px-4 py-2 font-semibold">
          Catalog 2025
        </span>
      </div>

      {/* Slide Stage */}
      <div
        className="relative bg-white p-6 md:p-10 min-h-[400px] md:min-h-[600px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Counter */}
        <div className="absolute top-4 right-4 font-heading text-lg text-brand-gold bg-white px-4 py-1 border border-gray-200">
          {currentIndex + 1} — {totalSlides}
        </div>

        {/* Slides */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center p-6 md:p-10 transition-all duration-500 ${
              index === currentIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-[0.98] pointer-events-none'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={750}
              className="max-w-full max-h-[500px] md:max-h-[700px] object-contain drop-shadow-lg"
            />
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-brand-gold hover:border-gray-900 transition-all"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-brand-gold hover:border-gray-900 transition-all"
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 md:p-8 bg-gray-50 border-t border-gray-200">
        {/* Dots */}
        <div className="flex flex-wrap gap-2 max-w-[60%]">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 transition-all ${
                index === currentIndex
                  ? 'bg-brand-gold scale-125'
                  : 'bg-gray-300 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Download Button */}
        {downloadLink && (
          <a
            href={downloadLink}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white font-bold uppercase tracking-wide text-sm hover:bg-white hover:text-gray-900 border border-gray-900 hover:border-brand-gold transition-all"
            download
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download PDF
          </a>
        )}
      </div>
    </div>
  );
}
