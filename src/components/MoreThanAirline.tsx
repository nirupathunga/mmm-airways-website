import React, { useState } from 'react';
import { ECOSYSTEM_DIVISIONS, AviationDivision } from '../data/ecosystem';
import { Plane, Compass, Wrench, GraduationCap, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface MoreThanAirlineProps {
  onExploreFlights: () => void;
  onExploreCharter: () => void;
  onExploreDivision: (divisionId: string) => void;
}

export const MoreThanAirline: React.FC<MoreThanAirlineProps> = ({
  onExploreFlights,
  onExploreCharter,
  onExploreDivision
}) => {
  const [selectedDivision, setSelectedDivision] = useState<AviationDivision>(ECOSYSTEM_DIVISIONS[0]);

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'scheduled-airline':
        return <Plane className="w-5 h-5 text-[#D7193F]" />;
      case 'charter-nsop':
        return <Compass className="w-5 h-5 text-[#F28C28]" />;
      case 'heli-seaplane':
        return <Sparkles className="w-5 h-5 text-[#2F8FE8]" />;
      case 'mro':
        return <Wrench className="w-5 h-5 text-[#155FA0]" />;
      case 'flight-training':
        return <GraduationCap className="w-5 h-5 text-[#2F8FE8]" />;
      default:
        return <Plane className="w-5 h-5 text-[#E7ECF2]" />;
    }
  };

  const getStatusColor = (status: AviationDivision['status']) => {
    switch (status) {
      case 'Current Focus':
        return 'text-[#D7193F] bg-[#D7193F]/15 border-[#D7193F]/40';
      case 'Planned — Phase 2':
        return 'text-[#F28C28] bg-[#F28C28]/15 border-[#F28C28]/40';
      case 'Planned — Phase 3':
        return 'text-[#2F8FE8] bg-[#2F8FE8]/15 border-[#2F8FE8]/40';
      default:
        return 'text-[#E7ECF2] bg-[#07182D] border-[#155FA0]/40';
    }
  };

  return (
    <section id="ecosystem" className="py-24 bg-[#07182D] relative overflow-hidden border-t border-[#155FA0]/30">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D7193F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2F8FE8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D7193F] font-bold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7193F]" />
            <span>OUR AVIATION ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            More Than an Airline.
          </h2>
          <p className="text-sm sm:text-base text-[#E7ECF2] mt-3 leading-relaxed [text-wrap:balance]">
            MMM Airways is building an integrated aviation ecosystem designed to connect people, businesses and regions through multiple modes of air mobility.
          </p>
        </div>

        {/* 5 Visual Service Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Left Column: Numbered Service Selection List */}
          <div className="md:col-span-6 space-y-3">
            {ECOSYSTEM_DIVISIONS.map(div => {
              const isSelected = selectedDivision.id === div.id;
              return (
                <div
                  key={div.id}
                  onClick={() => setSelectedDivision(div)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B2341] border-[#D7193F] shadow-xl ring-1 ring-[#D7193F]/40'
                      : 'bg-[#0B2341]/60 hover:bg-[#0B2341] border-[#155FA0]/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs font-bold text-[#2F8FE8] mt-1">
                        {div.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-white">
                            {div.name}
                          </h3>
                        </div>
                        <p className="text-xs text-[#E7ECF2] line-clamp-2">
                          {div.summary}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border shrink-0 ${getStatusColor(
                        div.status
                      )}`}
                    >
                      {div.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Selected Division In-depth Detail Card */}
          <div className="md:col-span-6 bg-[#0B2341] border border-[#155FA0]/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[#155FA0]/30 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#07182D] border border-[#155FA0]/40 flex items-center justify-center">
                  {getDivisionIcon(selectedDivision.id)}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#2F8FE8] block">
                    {selectedDivision.phaseLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedDivision.name}
                  </h3>
                </div>
              </div>

              <span
                className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${getStatusColor(
                  selectedDivision.status
                )}`}
              >
                {selectedDivision.status}
              </span>
            </div>

            <p className="text-sm text-[#E7ECF2] leading-relaxed mb-6">
              {selectedDivision.description}
            </p>

            {/* Strategic Capabilities */}
            <div className="space-y-3 mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#2F8FE8] font-bold block">
                Planned Capabilities:
              </span>
              <ul className="space-y-2 text-xs text-[#E7ECF2]">
                {selectedDivision.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D7193F] mt-1.5 shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment Focus & Regional Need */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-[#07182D] p-4 rounded-xl border border-[#155FA0]/30 mb-6">
              <div>
                <span className="text-[10px] uppercase text-[#64748B] block font-mono">
                  EQUIPMENT FOCUS
                </span>
                <span className="font-semibold text-white mt-0.5 block">
                  {selectedDivision.equipmentFocus}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#64748B] block font-mono">
                  REGIONAL IMPACT
                </span>
                <span className="text-[#E7ECF2] mt-0.5 block text-[11px] leading-snug">
                  {selectedDivision.marketNeed}
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              {selectedDivision.id === 'scheduled-airline' ? (
                <button
                  type="button"
                  onClick={onExploreFlights}
                  className="w-full py-3 bg-[#D7193F] hover:bg-[#E3294E] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Plane className="w-4 h-4" />
                  <span>EXPLORE FLIGHTS</span>
                </button>
              ) : selectedDivision.id === 'charter-nsop' ? (
                <button
                  type="button"
                  onClick={onExploreCharter}
                  className="w-full py-3 bg-[#F28C28] hover:bg-[#EA580C] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Compass className="w-4 h-4" />
                  <span>EXPLORE CHARTER SERVICES</span>
                </button>
              ) : selectedDivision.id === 'heli-seaplane' ? (
                <button
                  type="button"
                  onClick={onExploreCharter}
                  className="w-full py-3 bg-[#155FA0] hover:bg-[#2F8FE8] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>DISCOVER AVIATION SERVICES</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => onExploreDivision(selectedDivision.id)}
                  className="w-full py-3 bg-[#07182D] hover:bg-[#155FA0]/40 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-[#2F8FE8]/50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>LEARN MORE ABOUT {selectedDivision.name.toUpperCase()}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2F8FE8]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
