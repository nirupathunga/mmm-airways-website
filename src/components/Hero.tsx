import React from 'react';
import { CinematicHeroAircraft } from './CinematicHeroAircraft';
import { Plane, Compass, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onBookFlight: () => void;
  onExploreDestinations: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookFlight,
  onExploreDestinations
}) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden min-h-[82vh] flex items-center">
      {/* Rich Deep Navy to Primary Navy to Subtle Aviation Blue Atmospheric Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07182D] via-[#0B2341] to-[#155FA0]/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07182D]/90 via-transparent to-[#07182D] pointer-events-none" />

      {/* Atmospheric Right-Side Blue Sky Horizon Glow behind Aircraft */}
      <div className="absolute top-1/3 right-0 w-[700px] h-[500px] bg-gradient-to-l from-[#2F8FE8]/25 via-[#155FA0]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-[500px] h-[250px] bg-[#2F8FE8]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigational Vector Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2F8FE80a_1px,transparent_1px),linear-gradient(to_bottom,#2F8FE80a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Dark Navy Scrim with Headline, Tagline, & CTAs */}
          <div className="lg:col-span-6 text-left relative z-20 space-y-6">
            {/* Subtle Overline Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07182D]/90 border border-[#155FA0]/40 text-xs font-semibold text-[#2F8FE8] shadow-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7193F] animate-ping" />
              <span className="tracking-widest uppercase text-[11px] font-mono">
                WELCOME ABOARD MMM AIRWAYS
              </span>
            </div>

            {/* Large Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] [text-wrap:balance]">
              BEYOND THE SKY.
            </h1>

            {/* Primary Brand Slogan */}
            <p className="text-lg sm:text-2xl font-light text-[#F5F7FA] tracking-wide">
              Connecting South India, one journey at a time.
            </p>

            {/* Supporting Statement in soft white / light grey */}
            <p className="text-xs sm:text-sm text-[#E7ECF2] max-w-xl leading-relaxed [text-wrap:balance]">
              Discover a growing regional network designed to bring emerging cities, major hubs and the destinations that matter closer together with next-generation regional flight connectivity.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onBookFlight}
                className="px-8 py-3.5 bg-[#D7193F] hover:bg-[#E3294E] hover:shadow-[0_0_25px_rgba(215,25,63,0.45)] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Plane className="w-4 h-4" />
                <span>BOOK A FLIGHT</span>
              </button>
              <button
                type="button"
                onClick={onExploreDestinations}
                className="px-7 py-3.5 bg-[#07182D]/80 hover:bg-[#0B2341] text-[#F5F7FA] hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all border border-[#2F8FE8]/60 hover:border-[#2F8FE8] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#2F8FE8]" />
                <span>EXPLORE DESTINATIONS</span>
              </button>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-4 border-t border-[#155FA0]/30 flex items-center gap-6 text-xs text-[#E7ECF2] font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F8FE8]" />
                <span>UDAN / RCS Network</span>
              </div>
              <span className="text-[#64748B]">·</span>
              <div>
                <span>Fleet: ATR 72-600 &amp; A320 NEO</span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Cinematic Aircraft Visual */}
          <div className="lg:col-span-6 relative z-10 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-xl lg:max-w-none transform transition-all duration-700 hover:translate-y-[-4px]">
              {/* Cinematic Aircraft Visual */}
              <CinematicHeroAircraft className="w-full" />

              {/* Floating Airline HUD Badges */}
              <div className="absolute top-4 right-2 sm:right-6 bg-[#07182D]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#155FA0]/40 text-xs shadow-xl hidden sm:flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#2F8FE8] animate-pulse" />
                <div>
                  <span className="text-[9px] uppercase font-bold text-[#E7ECF2] block font-mono">
                    SCHEDULED CORRIDOR
                  </span>
                  <span className="font-bold text-white text-[11px]">Chennai · Kochi · Bengaluru</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-2 sm:left-6 bg-[#07182D]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#155FA0]/40 text-xs shadow-xl hidden sm:flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#D7193F]" />
                <div>
                  <span className="text-[9px] uppercase font-bold text-[#E7ECF2] block font-mono">
                    REGIONAL FLEET
                  </span>
                  <span className="font-bold text-white text-[11px]">ATR 72-600 &amp; Airbus A320 NEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

