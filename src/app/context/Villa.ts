// villa.ts
// Define what a single Villa object looks like
export type Villa = {
  id: number;
  name: string;
  city: string;
  state: string;
  address: string;
  images: string[];
  guests: number;
  bedrooms: number;
  about: string;

  // List of facilities
  facilities: {
    wifi: boolean;
    ac: boolean;
    ensuiteBathroom: boolean;
    alcoholAllowed: boolean;
    smokingAllowed: boolean;
    powerBackup: boolean;
  };

  // A list of reviews for the villa
  reviews: {
    author: string;
    rating: number;
    comment: string;
  }[];
};

// Create and export your list of villas
export const allVillas: Villa[] = [
  // Villa 1
  {
    id: 1,
    name: "Serene Mountain Retreat",
    city: "Lonavala",
    state: "Maharashtra",
    address: "Road, opp. Lodha Gold Crest, near Khatri Park, Valvan, Lonavala, Maharashtra 410401",
    images: ["/images/HeroSection/Serene-Mountain-Retreat-villa.jpg"],
    guests: 10,
    bedrooms: 4,
    about: "Nestled in the hills, this villa offers breathtaking views and complete privacy. Perfect for family getaways.",
    facilities: {
      wifi: true,
      ac: true,
      ensuiteBathroom: true,
      alcoholAllowed: true,
      smokingAllowed: false,
      powerBackup: true,
    },
    reviews: [
      { author: "Rohan S.", rating: 5, comment: "Amazing place!" },
      { author: "Priya M.", rating: 4, comment: "Had a great time." },
    ],
  },
  // Villa 2
  {
    id: 2,
    name: "Coastal Breeze Villa",
    city: "Alibag",
    state: "Maharashtra",
    address: "Revdanda - Murud Rd, Surai, Borli Village, Revdanda, Alibaug, Maharashtra 402202",
    images: ["/images/HeroSection/Coastal-Breeze-villa.webp"],
    guests: 8,
    bedrooms: 3,
    about: "A beautiful villa just a short walk from the beach. Enjoy the sea breeze from the spacious verandah.",
    facilities: {
      wifi: true,
      ac: true,
      ensuiteBathroom: false,
      alcoholAllowed: true,
      smokingAllowed: true,
      powerBackup: false,
    },
    reviews: [
      { author: "Amit K.", rating: 5, comment: "Perfect location and very clean." },
    ],
  },
  // Villa 3
  {
    id: 3,
    name: "The Royal Heritage",
    city: "Udaipur",
    state: "Rajasthan",
    address: "Kodiyat Main Road, Eklavya Colony, Udaipur, Rajasthan 313001",
    images: ["/images/HeroSection/The-Royal-Heritage-villa.jpg"],
    guests: 12,
    bedrooms: 5,
    about: "Experience luxury in this palace-like villa, offering a glimpse into royal Rajasthani culture.",
    facilities: {
      wifi: true,
      ac: true,
      ensuiteBathroom: true,
      alcoholAllowed: false,
      smokingAllowed: false,
      powerBackup: true,
    },
    reviews: [
      { author: "Ananya R.", rating: 5, comment: "Felt like a king! The service and ambiance were exceptional." },
      { author: "Karthik P.", rating: 5, comment: "Highly recommend for a grand vacation." },
    ],
  },
  // Villa 4
  {
    id: 4,
    name: "Goan Paradise",
    city: "Goa",
    state: "Goa",
    address: "No. 9/10/11, 3rd Floor, Patto Centre Building, EDC Complex, Panaji, Goa 403001",
    images: ["/images/HeroSection/Goan-Paradise-villa.jpg"],
    guests: 6,
    bedrooms: 2,
    about: "Your perfect escape in the heart of Goa. Close to famous beaches and vibrant nightlife.",
    facilities: {
      wifi: true,
      ac: true,
      ensuiteBathroom: true,
      alcoholAllowed: true,
      smokingAllowed: true,
      powerBackup: false,
    },
    reviews: [
      { author: "Sara J.", rating: 4, comment: "Fun and lively. Exactly what we needed for our trip." },
      { author: "Vikram G.", rating: 3, comment: "A bit loud at night, but a great location." },
    ],
  },
  // Villa 5
  {
    id: 5,
    name: "Forest Haven",
    city: "Wayanad",
    state: "Kerala",
    address: "2/436, Mankulam Road, Post Office, Vattayar, Kallar, Wayanad, Kerala 685612",
    images: ["/images/HeroSection/Forest-Haven-villa.jpg"],
    guests: 8,
    bedrooms: 3,
    about: "A secluded villa in the heart of the Western Ghats. Wake up to the sound of birds and the aroma of coffee plantations.",
    facilities: {
      wifi: false,
      ac: false,
      ensuiteBathroom: true,
      alcoholAllowed: false,
      smokingAllowed: true,
      powerBackup: true,
    },
    reviews: [
      { author: "Kabir D.", rating: 5, comment: "A true escape from city life. Loved the serenity." },
      { author: "Leena K.", rating: 4, comment: "The lack of AC was a small issue, but the natural beauty made up for it." },
    ],
  },
  // Villa 6
  {
    id: 6,
    name: "Himalayan Hideout",
    city: "Manali",
    state: "Himachal Pradesh",
    address: "Village- Channala, P.O- Jagatsukh, District- Kullu, Manali, Himachal Pradesh 175143",
    images: ["/images/HeroSection/Himalayan Hideout-villa.jpg"],
    guests: 6,
    bedrooms: 3,
    about: "Cozy villa with a fireplace and stunning views of snow-capped peaks. Ideal for a winter holiday.",
    facilities: {
      wifi: true,
      ac: false,
      ensuiteBathroom: true,
      alcoholAllowed: true,
      smokingAllowed: false,
      powerBackup: true,
    },
    reviews: [
      { author: "Rahul P.", rating: 5, comment: "Incredible views and a very peaceful stay. The fireplace was a nice touch." },
      { author: "Neha G.", rating: 5, comment: "Perfect for a family vacation. The kids loved the snow." },
    ],
  },
  // Villa 7
  {
    id: 7,
    name: "Puducherry Palms",
    city: "Puducherry",
    state: "Puducherry",
    address: "361/1 Kali kovil street, Serenity Beach Rd, Thanthirayakuppam, Kottakuppam, Puducherry 605111",
    images: ["/images/HeroSection/Puducherry-Palms-villa.webp"],
    guests: 7,
    bedrooms: 3,
    about: "A quaint French-style villa with a private courtyard. Walk to the promenade and enjoy the coastal vibe.",
    facilities: {
      wifi: true,
      ac: true,
      ensuiteBathroom: true,
      alcoholAllowed: true,
      smokingAllowed: false,
      powerBackup: false,
    },
    reviews: [
      { author: "Divya A.", rating: 4, comment: "Charming and well-located. A bit expensive for the amenities provided." },
      { author: "Arjun S.", rating: 5, comment: "The architecture is beautiful and the location is excellent." },
    ],
  },
  // Villa 8
  {
    id: 8,
    name: "Backwater Bliss",
    city: "Alleppey",
    state: "Kerala",
    address: "Kanniakonil Parel Near Nedumudy Bridge, Ponga P.O, Alappuzha, Kerala 689572",
    images: ["/images/HeroSection/Backwater-Bliss-villa.jpg"],
    guests: 4,
    bedrooms: 2,
    about: "A traditional houseboat-style villa on the serene backwaters of Kerala. Experience a unique and tranquil stay.",
    facilities: {
      wifi: false,
      ac: true,
      ensuiteBathroom: true,
      alcoholAllowed: false,
      smokingAllowed: false,
      powerBackup: false,
    },
    reviews: [
      { author: "Meera V.", rating: 5, comment: "Unforgettable experience! A must-try for everyone." },
      { author: "Suresh P.", rating: 4, comment: "The food was fantastic, and the views were incredible." },
    ],
  },
  // Villa 9
  {
    id: 9,
    name: "The Mysore Mansion",
    city: "Mysore",
    state: "Karnataka",
    address: "#36, Shalivahana Road, Nazarbad, Mysore, Karnataka 570010",
    images: ["/images/HeroSection/The-Mysore-Mansion-villa.jpg"],
    guests: 10,
    bedrooms: 4,
    about: "A grand villa with a blend of modern comfort and royal aesthetics. Explore the 'City of Palaces' from here.",
    facilities: {
      wifi: true,
      ac: true,
      ensuiteBathroom: true,
      alcoholAllowed: true,
      smokingAllowed: false,
      powerBackup: true,
    },
    reviews: [
      { author: "Ramesh C.", rating: 5, comment: "Luxury at its finest. The staff was incredibly hospitable." },
      { author: "Pooja B.", rating: 5, comment: "Felt like a home away from home." },
    ],
  },
  // Villa 10
  {
    id: 10,
    name: "The Green Retreat",
    city: "Coorg",
    state: "Karnataka",
    address: "Manu Estate, P.B. No. 32, Kutta Post, South Kodagu, Coorg, Karnataka 571250",
    images: ["/images/HeroSection/The-Green-Retreat-villa.webp"],
    guests: 8,
    bedrooms: 3,
    about: "Surrounded by lush coffee plantations and misty hills, this villa is a nature lover's paradise. Enjoy trekking and bird-watching.",
    facilities: {
      wifi: true,
      ac: false,
      ensuiteBathroom: true,
      alcoholAllowed: true,
      smokingAllowed: true,
      powerBackup: false,
    },
    reviews: [
      { author: "Samarth L.", rating: 4, comment: "Beautiful location, but the roads to get there were a bit difficult." },
      { author: "Tina S.", rating: 5, comment: "Absolutely loved the peace and tranquility." },
    ],
  },
];