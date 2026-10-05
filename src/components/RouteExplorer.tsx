import React, { useState } from 'react';
import { AIRPORTS, Airport } from '../data/airports';
import { getFlightsBetween } from '../data/flights';
import { Plane, ArrowRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';

interface RouteExplorerProps {
  onBookRoute: (fromCode: string, toCode: string) => void;
}

export const RouteExplorer: React.FC<RouteExplorerProps> = ({ onBookRoute }) => {
  const [fromCode, setFromCode] = useState('BLR');
  const [toCode, setToCode] = useState('COK');

  const fromAirport = AIRPORTS.find(a => a.code === fromCode) || AIRPORTS[0];
  const toAirport = AIRPORTS.find(a => a.code === toCode) || AIRPORTS[3];

  const matchingFlights = getFlightsBetween(fromCode, toCode);
  const sampleFlight = matchingFlights[0];

  return (
    <section className="py-20 bg-[#F5F7FA] border-y border-[#E7ECF2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D7193F] font-bold">
            ROUTE CALCULATOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2341] tracking-tight mt-1">
            Find Your Connection.
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-2">
            Choose your departure and arrival city to calculate flight duration, aircraft assignment, and planned schedule frequencies.
          </p>
        </div>

        {/* Route Selectors Bar */}
        <div className="max-w-4xl mx-auto bg-white border border-[#E7ECF2] rounded-2xl p-6 shadow-xl ring-1 ring-black/5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Origin Select */}
            <div className="md:col-span-5">
              <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                Departure City
              </label>
              <select
                value={fromCode}
                onChange={e => {
                  setFromCode(e.target.value);
                  if (e.target.value === toCode) {
                    const fallback = AIRPORTS.find(a => a.code !== e.target.value);
                    if (fallback) setToCode(fallback.code);
                  }
                }}
                className="w-full bg-[#F5F7FA] border border-[#E7ECF2] text-[#0B2341] text-xs p-3.5 rounded-xl font-medium focus:border-[#2F8FE8] focus:bg-white outline-none cursor-pointer transition-colors"
              >
                {AIRPORTS.map(a => (
                  <option key={a.code} value={a.code}>
                    {a.city} ({a.code}) — {a.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Arrow Divider */}
            <div className="md:col-span-2 flex justify-center py-2 md:py-0">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E7ECF2] flex items-center justify-center text-[#2F8FE8] shadow-sm">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Destination Select */}
            <div className="md:col-span-5">
              <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                Arrival City
              </label>
              <select
                value={toCode}
                onChange={e => setToCode(e.target.value)}
                className="w-full bg-[#F5F7FA] border border-[#E7ECF2] text-[#0B2341] text-xs p-3.5 rounded-xl font-medium focus:border-[#2F8FE8] focus:bg-white outline-none cursor-pointer transition-colors"
              >
                {AIRPORTS.filter(a => a.code !== fromCode).map(a => (
                  <option key={a.code} value={a.code}>
                    {a.city} ({a.code}) — {a.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Route Result Card */}
          <div className="mt-6 pt-6 border-t border-[#E7ECF2] bg-[#F5F7FA] rounded-xl p-5 border border-[#E7ECF2]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              {/* Route Codes & Names */}
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#0B2341]">
                    {fromCode}
                  </div>
                  <div className="text-xs text-[#64748B] font-medium">{fromAirport.city}</div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-[11px] font-mono text-[#155FA0] font-semibold mb-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#2F8FE8]" />
                    <span>{sampleFlight.duration}</span>
                  </span>
                  <div className="w-20 sm:w-28 h-0.5 bg-[#155FA0]/30 relative">
                    <Plane className="w-3.5 h-3.5 text-[#D7193F] absolute -top-1.5 left-1/2 -translate-x-1/2 rotate-90" />
                  </div>
                  <span className="text-[10px] text-[#64748B] mt-1 font-medium">Non-stop</span>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#0B2341]">
                    {toCode}
                  </div>
                  <div className="text-xs text-[#64748B] font-medium">{toAirport.city}</div>
                </div>
              </div>

              {/* Equipment & CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="text-left sm:text-right">
                  <div className="text-xs font-bold text-[#0B2341] font-mono">
                    {sampleFlight.aircraft}
                  </div>
                  <div className="text-[11px] text-[#64748B]">
                    Fares from ₹{sampleFlight.basePrice.toLocaleString('en-IN')}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onBookRoute(fromCode, toCode)}
                  className="px-6 py-2.5 bg-[#D7193F] hover:bg-[#E3294E] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] flex items-center gap-2 cursor-pointer"
                >
                  <Plane className="w-3.5 h-3.5" />
                  <span>EXPLORE FLIGHTS</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
