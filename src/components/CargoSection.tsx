import React from 'react';
import { Pill, Fish, Flower2, ShoppingBag, ArrowRight, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

interface CargoSectionProps {
  onContactCargo: () => void;
}

export const CargoSection: React.FC<CargoSectionProps> = ({ onContactCargo }) => {
  const cargoVerticals = [
    {
      title: 'Pharmaceuticals',
      subtitle: 'TIME-SENSITIVE HEALTHCARE',
      icon: <Pill className="w-6 h-6 text-[#D7193F]" />,
      description:
        'Time-sensitive life-saving vaccines, diagnostics and active pharmaceutical ingredients need dependable same-day regional connectivity and cold-chain integrity.'
    },
    {
      title: 'Seafood Logistics',
      subtitle: 'COASTAL HARVEST EXPRESS',
      icon: <Fish className="w-6 h-6 text-[#2F8FE8]" />,
      description:
        'Connecting fresh coastal catches from Kochi, Thoothukudi and Visakhapatnam to inland metropolitan gourmet and export markets within hours.'
    },
    {
      title: 'Floriculture',
      subtitle: 'PERISHABLE BOTANICALS',
      icon: <Flower2 className="w-6 h-6 text-[#F28C28]" />,
      description:
        'Moving delicate jasmine, orchids and cut flowers from Salem, Madurai and Bengaluru where temperature control and rapid flight timing matter most.'
    },
    {
      title: 'E-Commerce Logistics',
      subtitle: 'NEXT-DAY REGIONAL FULFILLMENT',
      icon: <ShoppingBag className="w-6 h-6 text-[#155FA0]" />,
      description:
        'Supporting the movement of retail parcels, electronics and commercial spare parts across tier-2 and tier-3 consumer supply chains.'
    }
  ];

  return (
    <section id="cargo" className="py-24 bg-[#F5F7FA] border-t border-[#E7ECF2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D7193F] font-bold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7193F]" />
            <span>AIR FREIGHT &amp; LOGISTICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2341] tracking-tight leading-tight [text-wrap:balance]">
            More Than Passengers.<br />
            <span className="text-[#64748B] font-light">Moving what matters.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-3 leading-relaxed [text-wrap:balance]">
            MMM Airways is building cargo capabilities alongside its passenger network, creating connections for businesses that depend on speed, reliability, and regional reach.
          </p>
        </div>

        {/* 4 Cargo Verticals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cargoVerticals.map((vert, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E7ECF2] hover:border-[#2F8FE8]/50 rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F5F7FA] border border-[#E7ECF2] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {vert.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#155FA0] font-bold block mb-1">
                  {vert.subtitle}
                </span>
                <h3 className="text-xl font-bold text-[#0B2341] mb-2">
                  {vert.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {vert.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E7ECF2] flex items-center justify-between text-[11px] text-[#64748B]">
                <span>ATR Belly Capacity</span>
                <span className="text-[#D7193F] font-mono font-semibold">Priority</span>
              </div>
            </div>
          ))}
        </div>

        {/* Cargo CTA Banner */}
        <div className="bg-gradient-to-r from-[#07182D] via-[#0B2341] to-[#07182D] border border-[#155FA0]/40 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D7193F] font-bold">
              COMMERCIAL FREIGHT PARTNERSHIPS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Move Your Business With Us.
            </h3>
            <p className="text-xs sm:text-sm text-[#E7ECF2] max-w-xl">
              Discuss scheduled belly cargo allocation, charter freight corridors, or cold-chain storage agreements across South India.
            </p>
          </div>

          <button
            type="button"
            onClick={onContactCargo}
            className="px-8 py-3.5 bg-[#D7193F] hover:bg-[#E3294E] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>CONTACT CARGO</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
