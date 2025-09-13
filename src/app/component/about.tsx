"use client";

import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white font-sans antialiased">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">
          Our Story
        </h2>
        <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12 lg:gap-16">
          
          {/* Image Section */}
          <div className="w-full md:w-5/12 lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop"
                alt="Luxurious villa with a pool"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  target.src = `https://placehold.co/600x800/E2E8F0/4A5568?text=Dream+Villa`;
                }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Crafting Your Perfect Getaway
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Welcome to VillaBook, where we believe travel is not just about visiting new places, but about experiencing them. Our journey began with a simple passion: to find the most beautiful, private, and inspiring villas and share them with the world.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We handpick every property, ensuring it meets our high standards of luxury, comfort, and character. From tranquil beachfront escapes to grand countryside estates, our curated collection is designed to provide an unforgettable backdrop for your most cherished memories.
            </p>
            <div className="border-l-4 border-blue-500 pl-4 mt-auto">
              <p className="text-lg text-gray-800 italic">
                Our mission is to transform your vacation dreams into reality, one exceptional stay at a time.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;

