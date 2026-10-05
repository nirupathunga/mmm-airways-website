import React from 'react';
import { Compass, ShieldCheck, Target, Layers, Users, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onExploreEcosystem: () => void;
  onExploreFleet: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onExploreEcosystem,
  onExploreFleet
}) => {
  return (
    <section id="about" className="py-24 bg-white border-t border-[#E7ECF2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D7193F] font-bold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7193F]" />
            <span>ORGANIZATIONAL PURPOSE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2341] tracking-tight leading-tight [text-wrap:balance]">
            We&apos;re Building What Comes Next.
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-3 leading-relaxed [text-wrap:balance]">
            MMM Airways is an emerging integrated aviation platform focused on regional connectivity, beginning with South India and building toward a wider domestic network.
          </p>
        </div>

        {/* Core Positioning Statement Banner */}
        <div className="bg-gradient-to-r from-[#07182D] via-[#0B2341] to-[#07182D] border border-[#155FA0]/40 rounded-3xl p-8 sm:p-10 mb-16 shadow-2xl">
          <div className="max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2F8FE8] font-bold block mb-2">
              FOUNDATIONAL VISION
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              REGIONAL CONNECTIVITY.<br />
              INTEGRATED AVIATION.<br />
              BUILT FOR THE FUTURE.
            </h3>
            <p className="text-xs sm:text-sm text-[#E7ECF2] mt-4 leading-relaxed max-w-2xl">
              MMM Airways is not merely a conventional airline. We are developing an integrated regional air mobility platform where our scheduled passenger airline serves as the bedrock for executive charter, island/backwater connectivity, certified CAR-145 MRO capabilities, and DGCA flight training infrastructure.
            </p>
          </div>
        </div>

        {/* Two Core Pillars: Purpose & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Pillar 1: Purpose */}
          <div className="bg-[#F5F7FA] border border-[#E7ECF2] hover:border-[#2F8FE8]/40 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#E7ECF2] shadow-sm flex items-center justify-center text-[#D7193F]">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D7193F] font-bold block">
              OUR PURPOSE
            </span>
            <h3 className="text-2xl font-bold text-[#0B2341]">
              Make Connectivity More Accessible.
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              India&apos;s aviation network continues to grow, but many regional destinations remain underserved. Tier-2 and tier-3 industrial and pilgrimage centers often endure 8-12 hours of highway transit to reach major commercial hubs. MMM Airways is being built to connect these destinations with a focused regional network, making air travel standard, efficient, and accessible.
            </p>
          </div>

          {/* Pillar 2: Approach */}
          <div className="bg-[#F5F7FA] border border-[#E7ECF2] hover:border-[#2F8FE8]/40 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#E7ECF2] shadow-sm flex items-center justify-center text-[#155FA0]">
              <Layers className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#155FA0] font-bold block">
              OUR APPROACH
            </span>
            <h3 className="text-2xl font-bold text-[#0B2341]">
              Regional First. Built to Scale.
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              We begin with the ATR 72-600 and a focused South Indian network, where short-runway capabilities and low fuel burn deliver immediate operational viability. As the network matures, our fleet strategy expands toward the Airbus A320 NEO and larger domestic markets, creating a resilient, scalable carrier.
            </p>
          </div>
        </div>

        {/* Leadership & Advisory Governance Notice */}
        <div className="bg-[#F5F7FA] border border-[#E7ECF2] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#155FA0] font-bold">
              GOVERNANCE &amp; ADVISORY BOARD
            </span>
            <h4 className="text-lg font-bold text-[#0B2341]">
              Aviation Leadership &amp; Operational Governance
            </h4>
            <p className="text-xs text-[#64748B] max-w-xl">
              Steered by veteran airline commanders, DGCA regulatory specialists, and civil aviation infrastructure advisors with decades of commercial flight experience.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onExploreEcosystem}
              className="px-5 py-2.5 bg-white hover:bg-[#E7ECF2] text-[#0B2341] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors border border-[#2F8FE8]/50 shadow-sm cursor-pointer"
            >
              EXPLORE ECOSYSTEM
            </button>
            <button
              type="button"
              onClick={onExploreFleet}
              className="px-5 py-2.5 bg-[#D7193F] hover:bg-[#E3294E] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] cursor-pointer"
            >
              VIEW FLEET STRATEGY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
