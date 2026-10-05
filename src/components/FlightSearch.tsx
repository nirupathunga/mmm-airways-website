import React, { useState } from 'react';
import { AIRPORTS, Airport } from '../data/airports';
import {
  PlaneTakeoff,
  PlaneLanding,
  Calendar,
  Users,
  ArrowRightLeft,
  Search,
  Check,
  ChevronDown
} from 'lucide-react';

export interface SearchParams {
  tripType: 'roundTrip' | 'oneWay' | 'multiCity';
  fromAirport: Airport;
  toAirport: Airport;
  departureDate: string;
  returnDate: string;
  passengers: number;
  cabinClass: 'Standard' | 'Flex';
}

interface FlightSearchProps {
  onSearch: (params: SearchParams) => void;
  initialFrom?: string;
  initialTo?: string;
}

export const FlightSearch: React.FC<FlightSearchProps> = ({
  onSearch,
  initialFrom = 'MAA',
  initialTo = 'COK'
}) => {
  const [tripType, setTripType] = useState<'oneWay' | 'roundTrip' | 'multiCity'>('roundTrip');
  const [fromCode, setFromCode] = useState<string>(initialFrom);
  const [toCode, setToCode] = useState<string>(initialTo);
  const [departureDate, setDepartureDate] = useState<string>('2026-10-12');
  const [returnDate, setReturnDate] = useState<string>('2026-10-18');
  const [passengers, setPassengers] = useState<number>(1);
  const [cabinClass, setCabinClass] = useState<'Standard' | 'Flex'>('Standard');

  // Dropdown states
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [passengerOpen, setPassengerOpen] = useState(false);
  const [searchQueryFrom, setSearchQueryFrom] = useState('');
  const [searchQueryTo, setSearchQueryTo] = useState('');

  const currentFrom = AIRPORTS.find(a => a.code === fromCode) || AIRPORTS[1];
  const currentTo = AIRPORTS.find(a => a.code === toCode) || AIRPORTS[3];

  const filteredFromAirports = AIRPORTS.filter(
    a =>
      a.city.toLowerCase().includes(searchQueryFrom.toLowerCase()) ||
      a.code.toLowerCase().includes(searchQueryFrom.toLowerCase()) ||
      a.name.toLowerCase().includes(searchQueryFrom.toLowerCase())
  );

  const filteredToAirports = AIRPORTS.filter(
    a =>
      a.code !== fromCode &&
      (a.city.toLowerCase().includes(searchQueryTo.toLowerCase()) ||
        a.code.toLowerCase().includes(searchQueryTo.toLowerCase()) ||
        a.name.toLowerCase().includes(searchQueryTo.toLowerCase()))
  );

  const handleSwap = () => {
    const temp = fromCode;
    setFromCode(toCode);
    setToCode(temp);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      tripType,
      fromAirport: currentFrom,
      toAirport: currentTo,
      departureDate,
      returnDate,
      passengers,
      cabinClass
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white border border-[#E7ECF2] rounded-2xl shadow-[0_20px_50px_rgba(7,24,45,0.18)] p-5 sm:p-7 relative z-30 ring-1 ring-black/5">
      {/* Top Segmented Controls: ONE WAY, ROUND TRIP, MULTI CITY */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5 border-b border-[#E7ECF2] pb-4">
        <div className="flex items-center gap-1 p-1 bg-[#F5F7FA] rounded-xl border border-[#E7ECF2]">
          <button
            type="button"
            onClick={() => setTripType('oneWay')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
              tripType === 'oneWay'
                ? 'bg-[#D7193F] text-white shadow-md'
                : 'text-[#64748B] hover:text-[#0B2341]'
            }`}
          >
            ONE WAY
          </button>
          <button
            type="button"
            onClick={() => setTripType('roundTrip')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
              tripType === 'roundTrip'
                ? 'bg-[#D7193F] text-white shadow-md'
                : 'text-[#64748B] hover:text-[#0B2341]'
            }`}
          >
            ROUND TRIP
          </button>
          <button
            type="button"
            onClick={() => setTripType('multiCity')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
              tripType === 'multiCity'
                ? 'bg-[#D7193F] text-white shadow-md'
                : 'text-[#64748B] hover:text-[#0B2341]'
            }`}
          >
            MULTI CITY
          </button>
        </div>

        {/* Fare Class Preference Indicator */}
        <div className="flex items-center gap-3 text-xs">
          <span className="text-[#64748B] font-medium">Cabin:</span>
          <div className="flex items-center bg-[#F5F7FA] p-1 rounded-lg border border-[#E7ECF2]">
            <button
              type="button"
              onClick={() => setCabinClass('Standard')}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                cabinClass === 'Standard'
                  ? 'bg-white text-[#0B2341] shadow-sm border border-[#E7ECF2]'
                  : 'text-[#64748B] hover:text-[#0B2341]'
              }`}
            >
              Standard Regional
            </button>
            <button
              type="button"
              onClick={() => setCabinClass('Flex')}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                cabinClass === 'Flex'
                  ? 'bg-white text-[#0B2341] shadow-sm border border-[#E7ECF2]'
                  : 'text-[#64748B] hover:text-[#0B2341]'
              }`}
            >
              Flex Corporate
            </button>
          </div>
        </div>
      </div>

      {/* Main Search Inputs Grid */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 lg:gap-4 relative">
          {/* FROM AIRPORT */}
          <div className="md:col-span-3 relative">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1.5 flex items-center gap-1.5">
              <PlaneTakeoff className="w-3.5 h-3.5 text-[#2F8FE8]" />
              <span>FROM</span>
            </label>
            <div
              onClick={() => {
                setFromOpen(!fromOpen);
                setToOpen(false);
                setPassengerOpen(false);
              }}
              className="bg-[#F5F7FA] hover:bg-[#E7ECF2]/60 border border-[#E7ECF2] hover:border-[#2F8FE8]/50 rounded-xl p-3 cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold font-mono text-[#0B2341] tracking-wide">
                  {currentFrom.code}
                </span>
                <span className="text-xs font-semibold text-[#0B2341] truncate max-w-[110px] text-right">
                  {currentFrom.city}
                </span>
              </div>
              <div className="text-[11px] text-[#64748B] truncate mt-0.5">
                {currentFrom.name}
              </div>
            </div>

            {/* FROM Autocomplete Dropdown */}
            {fromOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#E7ECF2] rounded-xl shadow-2xl z-50 max-h-72 overflow-y-auto p-2">
                <input
                  type="text"
                  placeholder="Search city or code..."
                  value={searchQueryFrom}
                  onChange={e => setSearchQueryFrom(e.target.value)}
                  className="w-full bg-[#F5F7FA] border border-[#E7ECF2] text-xs text-[#0B2341] px-3 py-2 rounded-lg mb-2 focus:outline-none focus:border-[#2F8FE8]"
                  autoFocus
                />
                {filteredFromAirports.map(airport => (
                  <div
                    key={airport.code}
                    onClick={() => {
                      setFromCode(airport.code);
                      setFromOpen(false);
                      setSearchQueryFrom('');
                    }}
                    className={`flex items-center justify-between p-2 rounded-lg cursor-pointer text-xs transition-colors ${
                      fromCode === airport.code
                        ? 'bg-[#D7193F]/10 text-[#D7193F] font-semibold'
                        : 'text-[#0B2341] hover:bg-[#F5F7FA]'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-[#0B2341] mr-2 font-mono">
                        {airport.code}
                      </span>
                      <span>{airport.city}</span>
                      <span className="text-[10px] text-[#64748B] block">
                        {airport.name}
                      </span>
                    </div>
                    {fromCode === airport.code && (
                      <Check className="w-3.5 h-3.5 text-[#D7193F]" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SWAP BUTTON */}
          <div className="hidden md:flex md:col-span-1 items-center justify-center -mx-3 z-10 pt-5">
            <button
              type="button"
              onClick={handleSwap}
              aria-label="Swap origin and destination"
              className="w-8 h-8 rounded-full bg-white hover:bg-[#D7193F] border border-[#E7ECF2] hover:border-[#D7193F] flex items-center justify-center text-[#155FA0] hover:text-white transition-all shadow-md group"
            >
              <ArrowRightLeft className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
            </button>
          </div>

          {/* TO AIRPORT */}
          <div className="md:col-span-3 relative">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1.5 flex items-center gap-1.5">
              <PlaneLanding className="w-3.5 h-3.5 text-[#2F8FE8]" />
              <span>TO</span>
            </label>
            <div
              onClick={() => {
                setToOpen(!toOpen);
                setFromOpen(false);
                setPassengerOpen(false);
              }}
              className="bg-[#F5F7FA] hover:bg-[#E7ECF2]/60 border border-[#E7ECF2] hover:border-[#2F8FE8]/50 rounded-xl p-3 cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold font-mono text-[#0B2341] tracking-wide">
                  {currentTo.code}
                </span>
                <span className="text-xs font-semibold text-[#0B2341] truncate max-w-[110px] text-right">
                  {currentTo.city}
                </span>
              </div>
              <div className="text-[11px] text-[#64748B] truncate mt-0.5">
                {currentTo.name}
              </div>
            </div>

            {/* TO Autocomplete Dropdown */}
            {toOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#E7ECF2] rounded-xl shadow-2xl z-50 max-h-72 overflow-y-auto p-2">
                <input
                  type="text"
                  placeholder="Search city or code..."
                  value={searchQueryTo}
                  onChange={e => setSearchQueryTo(e.target.value)}
                  className="w-full bg-[#F5F7FA] border border-[#E7ECF2] text-xs text-[#0B2341] px-3 py-2 rounded-lg mb-2 focus:outline-none focus:border-[#2F8FE8]"
                  autoFocus
                />
                {filteredToAirports.map(airport => (
                  <div
                    key={airport.code}
                    onClick={() => {
                      setToCode(airport.code);
                      setToOpen(false);
                      setSearchQueryTo('');
                    }}
                    className={`flex items-center justify-between p-2 rounded-lg cursor-pointer text-xs transition-colors ${
                      toCode === airport.code
                        ? 'bg-[#D7193F]/10 text-[#D7193F] font-semibold'
                        : 'text-[#0B2341] hover:bg-[#F5F7FA]'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-[#0B2341] mr-2 font-mono">
                        {airport.code}
                      </span>
                      <span>{airport.city}</span>
                      <span className="text-[10px] text-[#64748B] block">
                        {airport.name}
                      </span>
                    </div>
                    {toCode === airport.code && (
                      <Check className="w-3.5 h-3.5 text-[#D7193F]" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* DATES */}
          <div className="md:col-span-3 grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#2F8FE8]" />
                <span>DEPART</span>
              </label>
              <input
                type="date"
                value={departureDate}
                onChange={e => setDepartureDate(e.target.value)}
                className="w-full bg-[#F5F7FA] border border-[#E7ECF2] rounded-xl p-3 text-xs font-mono font-medium text-[#0B2341] focus:outline-none focus:border-[#2F8FE8] cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#2F8FE8]" />
                <span>RETURN</span>
              </label>
              <input
                type="date"
                value={returnDate}
                disabled={tripType === 'oneWay'}
                onChange={e => setReturnDate(e.target.value)}
                className={`w-full bg-[#F5F7FA] border border-[#E7ECF2] rounded-xl p-3 text-xs font-mono font-medium text-[#0B2341] focus:outline-none focus:border-[#2F8FE8] cursor-pointer ${
                  tripType === 'oneWay' ? 'opacity-40 cursor-not-allowed bg-slate-100' : ''
                }`}
              />
            </div>
          </div>

          {/* PASSENGERS & SUBMIT */}
          <div className="md:col-span-2 relative">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#2F8FE8]" />
              <span>TRAVELLERS</span>
            </label>
            <div
              onClick={() => {
                setPassengerOpen(!passengerOpen);
                setFromOpen(false);
                setToOpen(false);
              }}
              className="bg-[#F5F7FA] hover:bg-[#E7ECF2]/60 border border-[#E7ECF2] hover:border-[#2F8FE8]/50 rounded-xl p-3 cursor-pointer transition-colors flex items-center justify-between"
            >
              <div>
                <span className="text-sm font-bold text-[#0B2341]">
                  {passengers} {passengers === 1 ? 'Passenger' : 'Passengers'}
                </span>
                <span className="text-[10px] text-[#64748B] block">
                  {cabinClass}
                </span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#64748B]" />
            </div>

            {/* Passenger Selector Popup */}
            {passengerOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-[#E7ECF2] rounded-xl shadow-2xl z-50 p-4 w-60">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-semibold text-[#0B2341] block">Adults</span>
                    <span className="text-[10px] text-[#64748B]">Age 12+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={passengers <= 1}
                      onClick={() => setPassengers(Math.max(1, passengers - 1))}
                      className="w-7 h-7 rounded bg-[#F5F7FA] border border-[#E7ECF2] text-[#0B2341] disabled:opacity-30"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold font-mono text-[#0B2341] w-5 text-center">
                      {passengers}
                    </span>
                    <button
                      type="button"
                      disabled={passengers >= 6}
                      onClick={() => setPassengers(Math.min(6, passengers + 1))}
                      className="w-7 h-7 rounded bg-[#F5F7FA] border border-[#E7ECF2] text-[#0B2341] disabled:opacity-30"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setPassengerOpen(false)}
                  className="w-full py-1.5 bg-[#0B2341] hover:bg-[#155FA0] text-xs font-medium text-white rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Popular Route Presets & Search CTA Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-[#E7ECF2]">
          <div className="flex items-center gap-2 overflow-x-auto text-xs text-[#64748B] py-1">
            <span className="text-[11px] uppercase tracking-wider text-[#64748B] font-bold shrink-0">
              Popular:
            </span>
            {[
              { from: 'MAA', to: 'COK', label: 'Chennai → Kochi' },
              { from: 'BLR', to: 'COK', label: 'Bengaluru → Kochi' },
              { from: 'HYD', to: 'VGA', label: 'Hyderabad → Vijayawada' },
              { from: 'BLR', to: 'GOA', label: 'Bengaluru → Goa' },
            ].map(p => (
              <button
                key={p.label}
                type="button"
                onClick={() => {
                  setFromCode(p.from);
                  setToCode(p.to);
                }}
                className="px-2.5 py-1 bg-[#F5F7FA] hover:bg-[#E7ECF2] border border-[#E7ECF2] rounded-full text-[#0B2341] transition-colors text-[11px] whitespace-nowrap font-medium"
              >
                {p.label}
              </button>
            ))}
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#D7193F] hover:bg-[#E3294E] hover:shadow-[0_0_25px_rgba(215,25,63,0.45)] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>SEARCH FLIGHTS</span>
          </button>
        </div>
      </form>
    </div>
  );
};
