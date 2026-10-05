import React from 'react';
import { Atr72Graphic } from '../assets/aircraftGraphics';
import { Plane, Compass, ArrowRight } from 'lucide-react';

interface FinalCtaProps {
  onBookFlight: () => void;
  onExploreDestinations: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  onBookFlight,
  onExploreDestinations
}) => {
  return (
    <section className="py-28 bg-gradient-to-r from-[#07182D] via-[#0B2341] to-[#155FA0]/70 border-t border-[#155FA0]/30 relative overflow-hidden">
      {/* Radial Atmospheric Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D7193F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-[#2F8FE8]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D7193F] font-bold">
            THE JOURNEY IS JUST BEGINNING.
          </span>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Where Will You Fly Next?
          </h2>

          <p className="text-sm sm:text-base text-[#E7ECF2] max-w-xl mx-auto leading-relaxed [text-wrap:balance]">
            Discover the growing MMM Airways network and start your next journey across the cities and hubs of South India.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onBookFlight}
              className="w-full sm:w-auto px-8 py-4 bg-[#D7193F] hover:bg-[#E3294E] hover:shadow-[0_0_25px_rgba(215,25,63,0.45)] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
            >
              <Plane className="w-4 h-4" />
              <span>BOOK A FLIGHT</span>
            </button>
            <button
              type="button"
              onClick={onExploreDestinations}
              className="w-full sm:w-auto px-8 py-4 bg-[#07182D]/80 hover:bg-[#0B2341] text-[#F5F7FA] hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all border border-[#2F8FE8]/60 hover:border-[#2F8FE8] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#2F8FE8]" />
              <span>EXPLORE DESTINATIONS</span>
            </button>
          </div>
        </div>

        {/* Closing Aircraft Vector Artwork */}
        <div className="mt-16 max-w-4xl mx-auto opacity-95 hover:opacity-100 transition-opacity">
          <Atr72Graphic className="w-full max-h-[260px]" animated={false} />
        </div>
      </div>
    </section>
  );
};
