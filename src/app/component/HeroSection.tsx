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

// --- TYPESCRIPT DATA STRUCTURES ---
export type Villa = {
  id: number;
  name: string;
  city: string;
  images: string[];
  guests: number;
  bedrooms: number;
  about: string;
};

// --- MOCK DATABASE ---
const allVillas: Villa[] = [
  {
    id: 1,
    name: "Serene Mountain Retreat",
    city: "Lonavala",
    images: ["/images/HeroSection/lonavla-villa.jpg"],
    guests: 10,
    bedrooms: 4,
    about: "Nestled in the hills, this villa offers breathtaking views and complete privacy. Perfect for family getaways.",
  },
  {
    id: 2,
    name: "Coastal Breeze Villa",
    city: "Alibag",
    images: ["/images/HeroSection/Alibaug-villa.webp"],
    guests: 8,
    bedrooms: 3,
    about: "A beautiful villa just a short walk from the beach. Enjoy the sea breeze from the spacious verandah.",
  },
  {
    id: 3,
    name: "The Royal Heritage",
    city: "Udaipur",
    images: ["/images/HeroSection/Udaipur-villa.jpg"],
    guests: 12,
    bedrooms: 5,
    about: "Experience luxury in this palace-like villa, offering a glimpse into royal Rajasthani culture.",
  },
  {
    id: 4,
    name: "Goan Paradise",
    city: "Goa",
    images: ["/images/HeroSection/Goa-villa.jpg"],
    guests: 6,
    bedrooms: 2,
    about: "Your perfect escape in the heart of Goa. Close to famous beaches and vibrant nightlife.",
  },
];

// --- SLIDER COMPONENT ---
const HeroSlider: React.FC = () => {
  return (
    <div className="relative w-full h-[90vh] max-h-[800px] font-sans overflow-hidden rounded-lg shadow-2xl">
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
            <div className="w-full h-full flex-shrink-0 relative bg-black">
              <Image
                src={villa.images[0]}
                alt={villa.name}
                fill
                priority={villa.id === 1} 
                style={{ objectFit: 'cover' }}
                className="brightness-75"
              />

              <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
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

export default HeroSlider;