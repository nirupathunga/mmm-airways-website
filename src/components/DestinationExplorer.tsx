import React, { useState } from 'react';
import { AIRPORTS, Airport } from '../data/airports';
import { MapPin, Plane, ArrowUpRight, Compass, Filter } from 'lucide-react';

interface DestinationExplorerProps {
  onSelectAirport: (airport: Airport) => void;
  onBookTo: (destCode: string) => void;
}

export const DestinationExplorer: React.FC<DestinationExplorerProps> = ({
  onSelectAirport,
  onBookTo
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showAll, setShowAll] = useState(true);

  const categories = ['All', 'Major Hub', 'Regional Hub', 'Coastal', 'Heritage', 'Business'];

  const filteredAirports = AIRPORTS.filter(airport => {
    if (selectedCategory === 'All') return true;
    return airport.category === selectedCategory;
  });

  const visibleAirports = showAll ? filteredAirports : filteredAirports.slice(0, 8);

  return (
    <section id="destinations" className="py-24 bg-[#F5F7FA] border-t border-[#E7ECF2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D7193F] font-bold mb-2">
              <Compass className="w-3.5 h-3.5 text-[#2F8FE8]" />
              <span>DESTINATION DISCOVERY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2341] tracking-tight">
              Where Will You Go Next?
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-xl">
              Explore the growing MMM Airways network across commercial corridors, sun-drenched coastlines, and historic cultural landmarks.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E7ECF2] rounded-xl shadow-sm overflow-x-auto max-w-full">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#D7193F] text-white shadow-sm'
                    : 'text-[#64748B] hover:text-[#0B2341]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleAirports.map(airport => (
            <div
              key={airport.code}
              onClick={() => onSelectAirport(airport)}
              className="group relative bg-white border border-[#E7ECF2] hover:border-[#2F8FE8]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-2xl flex flex-col justify-between cursor-pointer"
            >
              {/* Destination Image Banner */}
              <div className="relative h-44 w-full overflow-hidden bg-[#07182D]">
                {airport.imageUrl ? (
                  <img
                    src={airport.imageUrl}
                    alt={`${airport.city} (${airport.code}) destination - ${airport.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0B2341] to-[#155FA0]" />
                )}
                {/* Dark Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07182D] via-[#07182D]/40 to-transparent pointer-events-none" />

                {/* Top Overlay Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-white bg-[#07182D]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                    {airport.category}
                  </span>
                  <span className="font-mono text-xs font-extrabold text-white bg-[#D7193F] px-2.5 py-1 rounded-md shadow-sm">
                    {airport.code}
                  </span>
                </div>

                {/* City & State Overlaid at bottom of image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-extrabold text-white tracking-tight drop-shadow-md">
                    {airport.city}
                  </h3>
                  <div className="text-xs text-[#E7ECF2] font-medium drop-shadow-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#2F8FE8]" />
                    <span>{airport.state}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3 mb-4">
                    {airport.description}
                  </p>

                  <div className="mb-4 text-[11px] text-[#0B2341] font-medium bg-[#F5F7FA] p-2 rounded-lg border border-[#E7ECF2] flex items-center gap-1.5">
                    <span className="text-[#D7193F] font-bold">Key:</span>
                    <span className="truncate text-[#64748B]">{airport.popularWith}</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-[#E7ECF2] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#64748B] font-mono">
                    {airport.directConnections.length} Direct Routes
                  </span>

                  <button
                    type="button"
                    onClick={e => {
                      e.stopPropagation();
                      onBookTo(airport.code);
                    }}
                    className="text-[#D7193F] hover:text-[#E3294E] font-semibold flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>Book Flight</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Toggle Button */}
        {filteredAirports.length > 8 && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-white hover:bg-[#E7ECF2] text-[#0B2341] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-[#2F8FE8]/40 shadow-sm cursor-pointer"
            >
              {showAll ? 'SHOW LESS DESTINATIONS' : `VIEW ALL DESTINATIONS (${filteredAirports.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
