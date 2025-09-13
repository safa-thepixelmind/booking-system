// /components/VillaCard.tsx

import Image from 'next/image';
import { Villa } from '@/app/context/villa'; // Adjust import path as needed

// Helper for primary info like guests and bedrooms
const InfoPill = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1 text-gray-600">
    <span className="text-lg">{icon}</span>
    <span className="text-sm font-medium">{text}</span>
  </div>
);

// Helper for displaying facilities inside the card
const FacilityBadge = ({ text }: { text: string }) => (
    <span className="rounded-md bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-700 ">
        {text}
    </span>
);

export const VillaCard = ({ villa }: { villa: Villa }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
      {/* Image Section */}
      <div className="relative h-56 w-full">
        <Image
          src={villa.images[0]}
          alt={`Image of ${villa.name}`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-semibold text-gray-500">{villa.city}</p>
        <h3 className="mt-1 text-xl font-bold text-gray-800">{villa.name}</h3>

        <div className="my-4 flex flex-wrap items-center gap-3">
          <InfoPill icon="👥" text={`${villa.guests} Guests`} />
          <InfoPill icon="🛏️" text={`${villa.bedrooms} Bedrooms`} />
        </div>

        {/* Facilities Section inside the card */}
        <div className="mt-auto border-t border-gray-100 pt-4">
            <div className="flex flex-wrap gap-2">
                {villa.facilities.wifi && <FacilityBadge text="WiFi" />}
                {villa.facilities.ac && <FacilityBadge text="AC" />}
                {villa.facilities.powerBackup && <FacilityBadge text="Power Backup" />}
                {villa.facilities.smokingAllowed && <FacilityBadge text="Smoking Allowed" />}
                {villa.facilities.meal && <FacilityBadge text="Meal " />}
                {villa.facilities.Pool && <FacilityBadge text="Pool" />}
            </div>
        </div>
      </div>
    </div>
  );
};