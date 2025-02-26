'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { carouselImages } from '@/data/carousel';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自動スライド
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // 前のスライドへ
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  // 次のスライドへ
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* スライド */}
      <div 
        className="relative w-full h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="absolute flex">
          {carouselImages.map((image, index) => (
            <div
              key={image.id}
              className="relative w-screen h-[600px] flex-shrink-0"
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* グラデーションオーバーレイ */}
              <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-gray-100 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* 矢印ボタン */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-4 rounded-full transition-colors"
        aria-label="前の画像へ"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-4 rounded-full transition-colors"
        aria-label="次の画像へ"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* インジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`スライド ${index + 1} へ`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 