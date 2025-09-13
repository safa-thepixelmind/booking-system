// /data/villas.ts

// Define what a single Villa object looks like
export type Villa = {
  id: number;
  name: string;
  city: string;
  images: string[];
  guests: number;
  bedrooms: number;
  about: string;
  facilities: {
    wifi: boolean;
    ac: boolean;
    ensuiteBathroom: boolean;
    alcoholAllowed: boolean;
    smokingAllowed: boolean;
    powerBackup: boolean;
    meal:boolean;
    Pool:boolean;
  };
  reviews: {
    author: string;
    rating: number;
    comment: string;
  }[];
  // NEW PROPERTIES ADDED
  mealPlan: ('Breakfast' | 'Lunch' | 'Dinner')[];
  suitableFor: ('Family' | 'Couples' | 'Party')[];
};

// Create and export your list of villas with the new data
export const allVillas: Villa[] = [
  {
    id: 1,
    name: "Serene Mountain Retreat",
    city: "Lonavala",
    images: ["/images/HeroSection/Alibaug-villa.webp"],
    guests: 10,
    bedrooms: 4,
    about: "A beautiful villa in the hills.",
    facilities: {
      wifi: true, ac: true, ensuiteBathroom: true, alcoholAllowed: true,
      smokingAllowed: false, powerBackup: true,meal:true,Pool:true,
    },
    reviews: [],
    mealPlan: ['Breakfast', 'Dinner'],
    suitableFor: ['Family', 'Couples'],
  },
  {
    id: 2,
    name: "Coastal Breeze Villa",
    city: "Alibag",
    images: ["/images/HeroSection/lonavla-villa.jpg"],
    guests: 8,
    bedrooms: 3,
    about: "A lovely villa near the beach.",
    facilities: {
      wifi: true, ac: true, ensuiteBathroom: false, alcoholAllowed: true,
      smokingAllowed: true, powerBackup: true,meal:false,Pool:true,
    },
    reviews: [],
    mealPlan: ['Breakfast'],
    suitableFor: ['Party', 'Family'],
  },
  {
    id: 3,
    name: "Lakeside Paradise",
    city: "Goa",
    images: ["/images/HeroSection/Udaipur-villa.jpg"],
    guests: 12,
    bedrooms: 5,
    about: "Stunning villa with a private pool.",
    facilities: {
      wifi: true, ac: true, ensuiteBathroom: true, alcoholAllowed: false,
      smokingAllowed: false, powerBackup: true,meal:true,Pool:true,
    },
    reviews: [],
    mealPlan: ['Breakfast', 'Lunch', 'Dinner'],
    suitableFor: ['Party'],
  },
   
];