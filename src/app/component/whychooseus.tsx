"use client"; // Add this directive at the top

import React from 'react';

// Define the type for a feature
interface Feature {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

// Feature Card Component
const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
    <div className="relative">
      <img
        className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
        src={feature.imageUrl}
        alt={feature.title}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null; // Prevent infinite loop
          target.src = `https://placehold.co/400x224/E2E8F0/4A5568?text=Image+Not+Found`;
        }}
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  </div>
);

// Main "Why Choose Us" Component
const WhyChooseUs: React.FC = () => {
  // Mock data for features, with updated text for a villa booking website
  const features: Feature[] = [
    {
      id: 1,
      title: 'Exclusive & Private Villas',
      description: 'Every villa in our collection is handpicked for its unique character, luxury, and utmost privacy. Your serene escape awaits.',
      imageUrl: 'https://images.unsplash.com/photo-1440778303588-435521a205bc?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Seamless Booking Experience',
      description: 'Our intuitive platform and dedicated support team make booking your dream villa simple, secure, and stress-free from start to finish.',
      imageUrl: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Unforgettable Locations',
      description: 'From sun-kissed beaches to tranquil mountain retreats, discover stunning properties in the most sought-after destinations.',
      imageUrl: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-white font-sans antialiased">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
