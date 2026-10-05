import React, { useState } from 'react';
import { FLEET_DATA, AircraftSpec } from '../data/fleet';
import { Atr72Graphic, A320NeoGraphic } from '../assets/aircraftGraphics';
import { Plane, Gauge, Fuel, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FleetSectionProps {
  onSelectAircraft?: (aircraft: AircraftSpec) => void;
  onBookFlight?: () => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({
  onSelectAircraft,
  onBookFlight
}) => {
  const [activeTab, setActiveTab] = useState<'atr' | 'a320'>('atr');
  const [activeView, setActiveView] = useState<'exterior' | 'cabin'>('exterior');

  const activeAircraft = activeTab === 'atr' ? FLEET_DATA[0] : FLEET_DATA[1];

  return (
    <section id="fleet" className="py-24 bg-gradient-to-b from-[#07182D] via-[#0B2341] to-[#07182D] border-t border-[#155FA0]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D7193F] font-bold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7193F]" />
              <span>COMMERCIAL FLEET ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Built for the Journey.
            </h2>
            <p className="text-sm sm:text-base text-[#E7ECF2] mt-2 max-w-2xl leading-relaxed">
              Our fleet strategy combines regional aircraft for short-haul connectivity with next-generation narrow-body aircraft for the network ahead.
            </p>
          </div>

          {/* Model Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#07182D] border border-[#155FA0]/40 rounded-xl shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('atr')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'atr'
                  ? 'bg-[#D7193F] text-white shadow-md'
                  : 'text-[#E7ECF2] hover:text-white'
              }`}
            >
              ATR 72-600 (72 Seats)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('a320')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'a320'
                  ? 'bg-[#D7193F] text-white shadow-md'
                  : 'text-[#E7ECF2] hover:text-white'
              }`}
            >
              Airbus A320 NEO (180 Seats)
            </button>
          </div>
        </div>

        {/* Main Aircraft Feature Showcase */}
        <div className="bg-[#0B2341] border border-[#155FA0]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Aircraft Model Profile (Large & Immersive) */}
            <div className="lg:col-span-7 relative flex flex-col justify-center">
              {/* View Switcher: Exterior Profile vs Cabin Interior */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#2F8FE8] font-bold">
                  {activeTab === 'atr' ? 'REGIONAL FOUNDATION (PHASE 1)' : 'FUTURE EXPANSION AMBITION (PHASE 2)'}
                </span>
                <div className="flex items-center gap-1 bg-[#07182D] p-1 rounded-lg border border-[#155FA0]/40 text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveView('exterior')}
                    className={`px-3 py-1 rounded font-medium transition-colors cursor-pointer ${
                      activeView === 'exterior' ? 'bg-[#155FA0] text-white' : 'text-[#E7ECF2]'
                    }`}
                  >
                    Exterior Aero
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveView('cabin')}
                    className={`px-3 py-1 rounded font-medium transition-colors cursor-pointer ${
                      activeView === 'cabin' ? 'bg-[#155FA0] text-white' : 'text-[#E7ECF2]'
                    }`}
                  >
                    Cabin Interior
                  </button>
                </div>
              </div>

              <div className="relative min-h-[300px] sm:min-h-[360px] flex items-center justify-center p-4 bg-[#07182D]/80 rounded-2xl border border-[#155FA0]/30">
                {activeView === 'exterior' ? (
                  activeTab === 'atr' ? (
                    <Atr72Graphic className="w-full max-h-[380px]" />
                  ) : (
                    <A320NeoGraphic className="w-full max-h-[380px]" />
                  )
                ) : (
                  <div className="w-full">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/9]">
                      <svg viewBox="0 0 600 340" className="w-full h-full select-none" fill="none">
                        <defs>
                          <linearGradient id="cabin-glow" x1="0" y1="0" x2="600" y2="0">
                            <stop stopColor="#2F8FE8" stopOpacity="0.8" />
                            <stop offset="0.5" stopColor="#D7193F" stopOpacity="0.9" />
                            <stop offset="1" stopColor="#2F8FE8" stopOpacity="0.8" />
                          </linearGradient>
                        </defs>
                        <rect width="600" height="340" fill="#07182D" />
                        {/* Aisle and Seats perspective */}
                        <polygon points="270,100 330,100 400,340 200,340" fill="#0B2341" stroke="#155FA0" />
                        <line x1="270" y1="100" x2="200" y2="340" stroke="#2F8FE8" strokeWidth="2" strokeDasharray="6 4" opacity="0.8" />
                        <line x1="330" y1="100" x2="400" y2="340" stroke="#2F8FE8" strokeWidth="2" strokeDasharray="6 4" opacity="0.8" />
                        {/* Ceiling LED strip */}
                        <line x1="100" y1="40" x2="500" y2="40" stroke="url(#cabin-glow)" strokeWidth="3" />
                        {/* Left Seats */}
                        <g fill="#0B2341" stroke="#155FA0">
                          <rect x="50" y="160" width="120" height="150" rx="12" />
                          <rect x="70" y="180" width="80" height="40" rx="8" fill="#07182D" stroke="#D7193F" strokeWidth="2" />
                          <rect x="110" y="120" width="70" height="80" rx="8" />
                        </g>
                        {/* Right Seats */}
                        <g fill="#0B2341" stroke="#155FA0">
                          <rect x="430" y="160" width="120" height="150" rx="12" />
                          <rect x="450" y="180" width="80" height="40" rx="8" fill="#07182D" stroke="#D7193F" strokeWidth="2" />
                          <rect x="420" y="120" width="70" height="80" rx="8" />
                        </g>
                        {/* Overlay text */}
                        <text x="300" y="310" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontFamily="sans-serif" fontWeight="700">
                          {activeTab === 'atr' ? 'ATR 72-600 · 2 x 2 Armonia Cabin Layout' : 'Airbus A320 NEO · 3 x 3 Airspace Cabin Architecture'}
                        </text>
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Deployment Tag */}
              <div className="mt-4 p-3 bg-[#07182D] border border-[#155FA0]/30 rounded-xl text-xs text-[#E7ECF2] flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#D7193F] animate-pulse shrink-0" />
                <span className="font-mono text-[#2F8FE8] font-bold uppercase text-[10px]">
                  {activeTab === 'atr' ? 'CURRENT FOCUS:' : 'FUTURE EXPANSION:'}
                </span>
                <span className="text-[11px]">{activeAircraft.plannedDeployment}</span>
              </div>
            </div>

            {/* Specifications & Overview */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D7193F] font-bold">
                  {activeAircraft.tagline}
                </span>
                <h3 className="text-3xl font-extrabold text-white mt-1">
                  {activeAircraft.name}
                </h3>
                <span className="text-xs text-[#E7ECF2] font-medium block mt-0.5">
                  {activeAircraft.role}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#E7ECF2] leading-relaxed">
                {activeAircraft.description}
              </p>

              {/* Key Quantitative Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#07182D] p-3.5 rounded-xl border border-[#155FA0]/30 text-center">
                  <span className="text-[10px] font-mono uppercase text-[#64748B] block">
                    SEATING
                  </span>
                  <span className="text-xl sm:text-2xl font-mono font-extrabold text-white mt-0.5 block">
                    {activeAircraft.seats}
                  </span>
                  <span className="text-[10px] text-[#E7ECF2]/80">Passenger Cap</span>
                </div>

                <div className="bg-[#07182D] p-3.5 rounded-xl border border-[#155FA0]/30 text-center">
                  <span className="text-[10px] font-mono uppercase text-[#64748B] block">
                    MAX RANGE
                  </span>
                  <span className="text-xl sm:text-2xl font-mono font-extrabold text-white mt-0.5 block">
                    {activeAircraft.rangeKm.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-[#E7ECF2]/80">Kilometers</span>
                </div>

                <div className="bg-[#07182D] p-3.5 rounded-xl border border-[#155FA0]/30 text-center">
                  <span className="text-[10px] font-mono uppercase text-[#64748B] block">
                    CRUISE SPEED
                  </span>
                  <span className="text-xl sm:text-2xl font-mono font-extrabold text-white mt-0.5 block">
                    {activeAircraft.cruiseSpeedKmh}
                  </span>
                  <span className="text-[10px] text-[#E7ECF2]/80">km/h</span>
                </div>
              </div>

              {/* Detailed Specs List */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#155FA0]/20 text-[#64748B]">
                  <span>Engine Model:</span>
                  <span className="text-white font-medium">{activeAircraft.engines}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#155FA0]/20 text-[#64748B]">
                  <span>Cabin Seating:</span>
                  <span className="text-white font-medium">{activeAircraft.cabinConfiguration}</span>
                </div>
                <div className="flex justify-between py-1.5 text-[#64748B]">
                  <span>Wingspan / Length:</span>
                  <span className="text-white font-mono">
                    {activeAircraft.wingspanM}m / {activeAircraft.lengthM}m
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={onBookFlight}
                  className="flex-1 py-3 bg-[#D7193F] hover:bg-[#E3294E] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Plane className="w-3.5 h-3.5" />
                  <span>BOOK ON THIS AIRCRAFT</span>
                </button>
              </div>
            </div>
          </div>

          {/* Highlights & Engineering Features */}
          <div className="mt-10 pt-8 border-t border-[#155FA0]/30">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#2F8FE8] font-bold mb-4">
              AIRCRAFT ENGINEERING HIGHLIGHTS:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {activeAircraft.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-[#07182D] p-3.5 rounded-xl border border-[#155FA0]/30 flex items-start gap-2.5 text-xs text-[#E7ECF2]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D7193F] mt-0.5 shrink-0" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
