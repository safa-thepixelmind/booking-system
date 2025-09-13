"use client";

import React from 'react';
import Link from 'next/link';
// Define the type for a single destination
interface Destination {
  id: number;
  name: string;
  imageUrl: string;
}

const PopularDestinations: React.FC = () => {
  // Mock data for popular destinations in India - now with only three
  const destinations: Destination[] = [
    {
      id: 1,
      name: 'Lonavala, Maharashtra',
      imageUrl: '/images/HeroSection/lonavla-villa.jpg',
    },
    {
      id: 2,
      name: 'Udaipur, Rajasthan',
      imageUrl: '/images/HeroSection/Alibaug-villa.webp',
    },
    {
      id: 3,
      name: 'Shimla, Himachal Pradesh',
      imageUrl: '/images/HeroSection/Udaipur-villa.jpg',
    },
  ];

  return (
    <div className="bg-white font-sans antialiased">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our Popular Destinations
            </h2>
            <Link href="/villas" passHref>
            <span className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-300 hidden sm:block">
              View More
            </span>
            </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="group">
               <div className="relative rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                 <img
                    src={destination.imageUrl}
                    alt={destination.name}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite loop
                      target.src = `https://placehold.co/400x320/E2E8F0/4A5568?text=Location`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-0 left-0 p-4 text-white text-xl font-semibold">
                    {destination.name}
                  </h3>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;

