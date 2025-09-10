import { allVillas } from "@/app/context/Villa";
import Image from "next/image";

// Helper function to calculate average rating
const getAverageRating = (reviews: { rating: number }[]) => {
  if (reviews.length === 0) return 0;
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (totalRating / reviews.length).toFixed(1);
};

// Villa Card Component
const VillaCard = ({ villa }: { villa: (typeof allVillas)[0] }) => {
  const averageRating = getAverageRating(villa.reviews);

  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden my-4 mx-2">
      <div className="relative w-full md:w-1/3 h-64">
        <Image
          src={villa.images[0]}
          alt={villa.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6 w-full md:w-2/3">
        <h2 className="text-2xl font-bold text-gray-800">{villa.name}</h2>
        <p className="text-sm text-gray-500 mt-1">
          {villa.city}, {villa.state}
        </p>
        <p className="text-md font-semibold text-gray-700 mt-2">
          Guests: {villa.guests} | Bedrooms: {villa.bedrooms}
        </p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 font-bold text-lg">★ {averageRating}</span>
          <span className="text-sm text-gray-600 ml-2">
            ({villa.reviews.length} reviews)
          </span>
        </div>
        <p className="text-gray-600 mt-4 leading-relaxed line-clamp-3">
          {villa.about}
        </p>
      </div>
    </div>
  );
};

// Main Villa Listing Page Component
const VillaListingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
        Discover Your Perfect Villa Getaway
      </h1>
      <div className="max-w-4xl mx-auto">
        {allVillas.map((villa) => (
          <VillaCard key={villa.id} villa={villa} />
        ))}
      </div>
    </div>
  );
};

export default VillaListingPage;