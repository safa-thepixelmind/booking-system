// src/components/HeroSection.tsx
'use client';

import Image from 'next/image';
import React from 'react';

// Swiper imports
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import the allVillas data from your centralized file
import { allVillas } from '@/app/context/Villa';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[90vh] max-h-[800px] font-sans overflow-hidden shadow-2xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        className="w-full h-full"
      >
        {allVillas.map((villa) => (
          <SwiperSlide key={villa.id}>
            <div className="relative w-full h-full">
              <Image
                src={villa.images[0]}
                alt={villa.name}
                fill
                priority={villa.id === 1}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                style={{ objectFit: 'cover' }}
                className="brightness-75"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                    {villa.name}
                  </h1>
                  <p className="text-lg md:text-xl mb-2 font-light">
                    {villa.city}
                  </p>
                  <p className="text-base md:text-lg mb-8 max-w-lg mx-auto font-light">
                    {villa.about}
                  </p>
                  <button className="bg-white text-gray-800 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;