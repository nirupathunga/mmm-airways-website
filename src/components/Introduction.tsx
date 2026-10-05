import React from 'react';
import { ArrowRight, Plane, Building2, MapPin, Sparkles } from 'lucide-react';

interface IntroductionProps {
  onDiscoverMore: () => void;
  onExploreEcosystem: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({
  onDiscoverMore,
  onExploreEcosystem
}) => {
  return (
    <section className="py-20 bg-[#F5F7FA] border-t border-[#E7ECF2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D7193F] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7193F]" />
              <span>THE JOURNEY STARTS HERE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2341] tracking-tight leading-tight [text-wrap:balance]">
              Closer Cities.<br />
              <span className="text-[#64748B] font-light">Bigger Possibilities.</span>
            </h2>

            <div className="space-y-4 text-[#0B2341]/90 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-[#0B2341]">
                MMM Airways is being built around a simple idea — make regional air travel more connected and accessible.
              </p>
              <p className="text-[#64748B]">
                Our initial network focuses on South India, connecting important regional destinations with major cities through a growing network of short-haul routes.
              </p>
              <p className="text-[#64748B]">
                As we grow, our network will evolve from regional connectivity into a broader domestic network, linking regional economic hubs directly to the national skyway.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onDiscoverMore}
                className="px-6 py-3 bg-[#D7193F] hover:bg-[#E3294E] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>DISCOVER MMM AIRWAYS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={onExploreEcosystem}
                className="px-6 py-3 bg-white hover:bg-[#E7ECF2] text-[#0B2341] hover:text-[#155FA0] border border-[#2F8FE8]/50 font-semibold rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                OUR AVIATION ECOSYSTEM
              </button>
            </div>
          </div>

          {/* Right Column: Visual Asymmetry / Key Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-[#E7ECF2] hover:border-[#2F8FE8]/50 rounded-2xl p-6 space-y-3 relative group shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#2F8FE8]/10 border border-[#2F8FE8]/30 flex items-center justify-center text-[#155FA0]">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B2341]">Regional Focus</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Prioritizing direct point-to-point flights connecting industrial clusters, tier-2 cities, and state capitals.
              </p>
            </div>

            <div className="bg-white border border-[#E7ECF2] hover:border-[#D7193F]/50 rounded-2xl p-6 space-y-3 relative group shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#D7193F]/10 border border-[#D7193F]/30 flex items-center justify-center text-[#D7193F]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B2341]">South India Gateway</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Headquartered in Chennai and Bengaluru, bridging Tamil Nadu, Karnataka, Kerala, Andhra Pradesh &amp; Telangana.
              </p>
            </div>

            <div className="bg-white border border-[#E7ECF2] hover:border-[#F28C28]/50 rounded-2xl p-6 space-y-3 relative group shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#F28C28]/10 border border-[#F28C28]/30 flex items-center justify-center text-[#F28C28]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B2341]">Fleet Precision</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Tailored pairing of ATR 72-600 turboprops for short-haul agility with Airbus A320 NEO for high-density corridors.
              </p>
            </div>

            <div className="bg-white border border-[#E7ECF2] hover:border-[#155FA0]/50 rounded-2xl p-6 space-y-3 relative group shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#155FA0]/10 border border-[#155FA0]/30 flex items-center justify-center text-[#155FA0]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B2341]">Integrated Platform</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Beyond passenger aviation: scheduled flights, executive charter, seaplane routes, MRO, and flight training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
