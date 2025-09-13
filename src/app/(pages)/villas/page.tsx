// /app/villas/page.tsx

'use client';

import { useState, useMemo } from 'react';
import { allVillas, Villa } from '@/app/context/villa'; // Adjust import path
import { VillaCard } from '@/app/component/VillaCard'; // Adjust import path

export default function VillasPage() {
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Expanded state to include all filters
  const [filters, setFilters] = useState({
    city: 'All',
    minGuests: 0,
    // Facilities
    wifi: false,
    ac: false,
    powerBackup: false,
    // New Filters
    mealPlan: {
        Breakfast: false,
        Lunch: false,
        Dinner: false,
    },
    suitableFor: {
        Family: false,
        Couples: false,
        Party: false,
    }
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const cities = ['All', ...new Set(allVillas.map((villa) => villa.city))];

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement;
        // Handle nested state for mealPlan and suitableFor
        if (name in filters.mealPlan) {
            setFilters(prev => ({ ...prev, mealPlan: { ...prev.mealPlan, [name]: checked }}));
        } else if (name in filters.suitableFor) {
            setFilters(prev => ({ ...prev, suitableFor: { ...prev.suitableFor, [name]: checked }}));
        } else {
            setFilters(prev => ({ ...prev, [name]: checked }));
        }
    } else {
        setFilters(prev => ({ ...prev, [name]: name === 'minGuests' ? Number(value) : value }));
    }
  };

  const filteredVillas = useMemo(() => {
    return allVillas.filter((villa) => {
        // Text search and basic filters
        const searchMatch = villa.name.toLowerCase().includes(searchTerm.toLowerCase());
        const cityMatch = filters.city === 'All' || villa.city === filters.city;
        const guestsMatch = filters.minGuests === 0 || villa.guests >= filters.minGuests;
        const facilitiesMatch = (!filters.wifi || villa.facilities.wifi) && (!filters.ac || villa.facilities.ac) && (!filters.powerBackup || villa.facilities.powerBackup);
        
        // New Meal Plan filter logic
        const selectedMeals = Object.entries(filters.mealPlan).filter(([, isChecked]) => isChecked).map(([meal]) => meal);
        const mealMatch = selectedMeals.every(meal => villa.mealPlan.includes(meal as any));

        // New Occasion filter logic
        const selectedOccasions = Object.entries(filters.suitableFor).filter(([, isChecked]) => isChecked).map(([occasion]) => occasion);
        const occasionMatch = selectedOccasions.every(occasion => villa.suitableFor.includes(occasion as any));

        return searchMatch && cityMatch && guestsMatch && facilitiesMatch && mealMatch && occasionMatch;
    });
  }, [searchTerm, filters]);

  // Helper component for filter sections
  const FilterSection: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => (
    <div>
        <h3 className="text-base font-semibold text-gray-700 mb-3">{title}</h3>
        {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-800">Find Your Perfect Villa</h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">Discover the ideal getaway for your next vacation.</p>
        </header>

        {/* Search and Filter Trigger */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Search by villa name..."
            className="flex-grow rounded-lg border-gray-300 p-3 text-base text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => setIsFilterOpen(true)} className="flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-base font-semibold text-gray-700 border border-gray-300 shadow-sm hover:bg-gray-100 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.572a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" /></svg>
            Filters
          </button>
        </div>

        {/* Villa Grid */}
        {filteredVillas.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVillas.map((villa) => <VillaCard key={villa.id} villa={villa} />)}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-600">No Villas Found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </main>

      {/* Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)}>
            <div className="relative w-full max-w-lg rounded-xl bg-white p-8 shadow-2xl" onClick={e => e.stopPropagation()}>
                <button onClick={() => setIsFilterOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Filter Options</h2>
                
                <div className="space-y-6">
                    {/* Main Filters with hover labels */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['city', 'minGuests'].map(field => (
                           <div key={field} className="relative group pt-2">
                             <label htmlFor={field} className="absolute -top-1 left-2 text-xs text-gray-700 bg-white px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">{field === 'minGuests' ? 'Min Guests' : 'City'}</label>
                             {field === 'city' ? (
                                <select id="city" name="city" value={filters.city} onChange={handleFilterChange} className="w-full rounded-md border-gray-300 text-gray-500 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                                    {cities.map(city => <option key={city} value={city}>{city}</option>)}
                                </select>
                             ) : (
                                <input type="number" id="minGuests" name="minGuests" min="0" value={filters.minGuests} onChange={handleFilterChange} className="w-full rounded-md text-gray-500 border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                             )}
                           </div>
                        ))}
                    </div>

                    {/* Date Pickers */}
                    <FilterSection title="Select Dates">
                        {/* Note: Date filtering logic is not implemented as availability data is not present in the Villa object. */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative group pt-2">
                                <label htmlFor="checkin" className="absolute -top-1 left-2 text-xs text-gray-700 bg-white px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Check-in</label>
                                <input type="date" id="checkin" name="checkin" className="w-full rounded-md border-gray-300 p-2 text-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
                            </div>
                            <div className="relative group pt-2">
                                <label htmlFor="checkout" className="absolute -top-1 left-2 text-xs text-gray-700 bg-white px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Check-out</label>
                                <input type="date" id="checkout" name="checkout" className="w-full rounded-md border-gray-300 p-2 text-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
                            </div>
                        </div>
                    </FilterSection>

                    {/* Checkbox Sections */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                      <FilterSection title="Meals">
                          <div className="space-y-2">
                              {Object.keys(filters.mealPlan).map(meal => (
                                  <div key={meal} className="flex items-center">
                                      <input id={meal} name={meal} type="checkbox" checked={filters.mealPlan[meal as keyof typeof filters.mealPlan]} onChange={handleFilterChange} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                      <label htmlFor={meal} className="ml-3 text-sm text-gray-700">{meal}</label>
                                  </div>
                              ))}
                          </div>
                      </FilterSection>

                      <FilterSection title="Occasion">
                          <div className="space-y-2">
                              {Object.keys(filters.suitableFor).map(occasion => (
                                  <div key={occasion} className="flex items-center">
                                      <input id={occasion} name={occasion} type="checkbox" checked={filters.suitableFor[occasion as keyof typeof filters.suitableFor]} onChange={handleFilterChange} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                      <label htmlFor={occasion} className="ml-3 text-sm text-gray-700">{occasion}</label>
                                  </div>
                              ))}
                          </div>
                      </FilterSection>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}