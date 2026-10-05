import React, { useState } from 'react';
import { GROWTH_TIMELINE, GrowthMilestone } from '../data/fleet';
import { Plane, TrendingUp, Calendar, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

export const GrowthVision: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<GrowthMilestone>(GROWTH_TIMELINE[0]);

  return (
    <section className="py-24 bg-[#07182D] border-t border-[#155FA0]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D7193F] font-bold mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-[#2F8FE8]" />
            <span>GROWTH AMBITION &amp; ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            From Regional Connections<br />
            <span className="text-[#64748B] font-light">to a National Network.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#E7ECF2] mt-3 leading-relaxed [text-wrap:balance]">
            MMM Airways is designed around a phased aviation growth strategy — beginning with regional scheduled connectivity and progressively expanding into a broader integrated aviation ecosystem.
          </p>
        </div>

        {/* Phased Strategic Architecture (3 Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#0B2341] border border-[#D7193F]/40 rounded-2xl p-6 relative shadow-lg">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#D7193F]/15 text-[#D7193F] border border-[#D7193F]/30">
              PHASE 1 · CURRENT FOCUS
            </span>
            <h3 className="text-xl font-bold text-white mt-3 mb-2">
              Scheduled UDAN / RCS
            </h3>
            <p className="text-xs text-[#E7ECF2] leading-relaxed mb-4">
              Core scheduled regional operations deployed across South India with ATR 72-600 turboprops, followed by initial Airbus A320 NEO narrow-body growth.
            </p>
            <div className="text-[11px] font-mono text-[#F5F7FA] space-y-1">
              <div>· 5 to 12 ATR 72-600 Fleet</div>
              <div>· 17 to 45 Regional Airports</div>
            </div>
          </div>

          <div className="bg-[#0B2341] border border-[#F28C28]/40 rounded-2xl p-6 relative shadow-lg">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#F28C28]/15 text-[#F28C28] border border-[#F28C28]/30">
              PHASE 2 · PLANNED SCALE
            </span>
            <h3 className="text-xl font-bold text-white mt-3 mb-2">
              Charter &amp; Air Mobility
            </h3>
            <p className="text-xs text-[#E7ECF2] leading-relaxed mb-4">
              Flexible corporate NSOP business aviation, medical evacuation, twin-engine helicopter shuttles, and amphibious seaplane backwater corridors.
            </p>
            <div className="text-[11px] font-mono text-[#F5F7FA] space-y-1">
              <div>· Corporate &amp; Medical Charter</div>
              <div>· Island &amp; Backwater Corridors</div>
            </div>
          </div>

          <div className="bg-[#0B2341] border border-[#2F8FE8]/40 rounded-2xl p-6 relative shadow-lg">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#2F8FE8]/15 text-[#2F8FE8] border border-[#2F8FE8]/30">
              PHASE 3 · ECOSYSTEM PLATFORM
            </span>
            <h3 className="text-xl font-bold text-white mt-3 mb-2">
              CAR-145 MRO &amp; Academy
            </h3>
            <p className="text-xs text-[#E7ECF2] leading-relaxed mb-4">
              DGCA-certified line and base maintenance engineering facility, coupled with an ab-initio Flight Training Academy to build a pilot talent pipeline.
            </p>
            <div className="text-[11px] font-mono text-[#F5F7FA] space-y-1">
              <div>· Multi-Bay Maintenance Hangar</div>
              <div>· Full Flight Simulators &amp; CPL</div>
            </div>
          </div>
        </div>

        {/* 5-Year Fleet & Network Milestone Timeline */}
        <div className="bg-[#0B2341] border border-[#155FA0]/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex items-center justify-between border-b border-[#155FA0]/30 pb-5 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#2F8FE8] font-bold">
                STATED FLEET EXPANSION AMBITION
              </span>
              <h3 className="text-2xl font-bold text-white mt-0.5">
                5-Year Network Trajectory
              </h3>
            </div>
            <div className="hidden sm:block text-right">
              <span className="text-xs text-[#E7ECF2]">Planned Growth Roadmap</span>
              <span className="text-xs font-mono text-[#D7193F] block font-bold">2027 — 2031</span>
            </div>
          </div>

          {/* Interactive Horizontal Year Track */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {GROWTH_TIMELINE.map(item => {
              const isSelected = selectedMilestone.year === item.year;
              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setSelectedMilestone(item)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#07182D] border-[#D7193F] text-white shadow-lg ring-1 ring-[#D7193F]/40'
                      : 'bg-[#07182D]/70 border-[#155FA0]/30 text-[#E7ECF2] hover:text-white hover:border-[#2F8FE8]/50'
                  }`}
                >
                  <div className="font-mono text-2xl font-extrabold tracking-wider text-white">
                    {item.year}
                  </div>
                  <div className="text-xs font-semibold text-[#D7193F] mt-1">
                    {item.atrCount} ATR {item.a320Count > 0 ? `+ ${item.a320Count} A320` : ''}
                  </div>
                  <div className="text-[11px] text-[#E7ECF2] mt-0.5">
                    {item.airports}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Year Focus Box */}
          <div className="bg-[#07182D] border border-[#155FA0]/30 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#155FA0]/20 pb-4 mb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#2F8FE8] font-bold block">
                  {selectedMilestone.phase}
                </span>
                <h4 className="text-xl font-bold text-white mt-0.5">
                  Year {selectedMilestone.year} Milestone: {selectedMilestone.label}
                </h4>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <div className="px-3 py-1.5 rounded-lg bg-[#0B2341] border border-[#155FA0]/40">
                  <span className="text-[#64748B] mr-2">Fleet:</span>
                  <span className="font-mono font-bold text-white">
                    {selectedMilestone.atrCount} ATR 72-600
                    {selectedMilestone.a320Count > 0 && ` + ${selectedMilestone.a320Count} A320 NEO`}
                  </span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-[#0B2341] border border-[#155FA0]/40">
                  <span className="text-[#64748B] mr-2">Network Reach:</span>
                  <span className="font-mono font-bold text-[#2F8FE8]">
                    {selectedMilestone.airports}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E7ECF2] leading-relaxed">
              {selectedMilestone.focus}
            </p>
          </div>

          <div className="mt-6 text-center text-[11px] text-[#64748B]">
            * Fleet numbers and network metrics reflect company business plan ambitions and are subject to DGCA slot allocations, aircraft delivery cycles, and bilateral approvals.
          </div>
        </div>
      </div>
    </section>
  );
};
