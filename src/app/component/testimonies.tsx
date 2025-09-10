import React from 'react';

// Define the type for a single testimonial
interface Testimonial {
  id: number;
  name: string;
  location: string;
  testimonial: string;
}

// Testimonial Card Component
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-6 rounded-lg border border-blue-400 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
    <p className="text-gray-600 leading-relaxed mb-4 flex-grow">{`"${testimonial.testimonial}"`}</p>
    <div>
      <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
      <p className="text-sm text-gray-500">{testimonial.location}</p>
    </div>
  </div>
);

// Main Testimonials Component
const App: React.FC = () => {
  // Mock data for testimonials
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Goa, India',
      testimonial: "Our stay was magical! The villa was even more beautiful than the pictures, and the private pool was a dream. The staff was incredibly attentive and made our vacation perfect.",
    },
    {
      id: 2,
      name: 'Rohan Mehta',
      location: 'Lonavala, India',
      testimonial: "A perfect weekend getaway from Mumbai. The villa was spacious, clean, and offered stunning valley views. Booking was seamless. We'll definitely be back!",
    },
    {
      id: 3,
      name: 'Anjali Desai',
      location: 'Udaipur, India',
      testimonial: "Staying in a villa with views of the lake was an unforgettable experience. The architecture was beautiful and the service was top-notch. Highly recommend for a royal-like stay.",
    },
    {
      id: 4,
      name: 'Vikram Singh',
      location: 'Manali, India',
      testimonial: "The mountain view from our villa's balcony was breathtaking. It was the perfect cozy retreat for our family. The fireplace was a wonderful touch for the chilly evenings.",
    },
  ];

  return (
    <div className="bg-gray-50/50 font-sans antialiased">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;


