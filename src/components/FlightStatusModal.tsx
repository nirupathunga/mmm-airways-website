import React, { useState } from 'react';
import { MOCK_FLIGHTS, Flight } from '../data/flights';
import { AIRPORTS } from '../data/airports';
import { Search, X, Plane, Clock, MapPin, CheckCircle, AlertTriangle } from 'lucide-react';

interface FlightStatusModalProps {
  onClose: () => void;
  initialFlightNumber?: string;
}

export const FlightStatusModal: React.FC<FlightStatusModalProps> = ({
  onClose,
  initialFlightNumber = 'MMM 101'
}) => {
  const [searchQuery, setSearchQuery] = useState(initialFlightNumber);
  const [selectedDate, setSelectedDate] = useState('2026-10-12');
  const [foundFlight, setFoundFlight] = useState<Flight | null>(
    MOCK_FLIGHTS.find(f => f.flightNumber.toLowerCase() === initialFlightNumber.toLowerCase()) || MOCK_FLIGHTS[0]
  );
  const [searchAttempted, setSearchAttempted] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchAttempted(true);
    const cleaned = searchQuery.trim().toLowerCase();
    const flight = MOCK_FLIGHTS.find(
      f =>
        f.flightNumber.toLowerCase() === cleaned ||
        f.flightNumber.toLowerCase().replace(' ', '') === cleaned.replace(' ', '') ||
        f.fromCode.toLowerCase() === cleaned ||
        f.toCode.toLowerCase() === cleaned
    );
    setFoundFlight(flight || null);
  };

  const fromAirport = foundFlight ? AIRPORTS.find(a => a.code === foundFlight.fromCode) : null;
  const toAirport = foundFlight ? AIRPORTS.find(a => a.code === foundFlight.toCode) : null;

  const getStatusBadge = (status: Flight['status']) => {
    switch (status) {
      case 'ON TIME':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case 'BOARDING':
        return 'bg-[#F28C28]/20 text-[#F28C28] border-[#F28C28]/40 animate-pulse';
      case 'DELAYED':
        return 'bg-[#D7193F]/20 text-[#D7193F] border-[#D7193F]/40';
      case 'DEPARTED':
        return 'bg-[#2F8FE8]/20 text-[#2F8FE8] border-[#2F8FE8]/40';
      case 'ARRIVED':
        return 'bg-[#155FA0]/30 text-[#E7ECF2] border-[#155FA0]/40';
      default:
        return 'bg-[#0B2341] text-[#E7ECF2] border-[#155FA0]/30';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#07182D] border border-[#155FA0]/40 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B2341] border-b border-[#155FA0]/30">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D7193F] font-bold">
              RADAR TRACKER
            </span>
            <h3 className="text-lg font-bold text-white">Check Flight Status</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#E7ECF2] hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-6 border-b border-[#155FA0]/30 bg-[#07182D]">
          <form onSubmit={handleSearch} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-7">
                <label className="text-[11px] font-semibold uppercase text-[#E7ECF2] block mb-1">
                  Flight Number or Airport Code
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. MMM 101, MMM 201, MAA"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full bg-[#0B2341] border border-[#155FA0]/40 text-white text-xs p-3 rounded-xl font-mono focus:border-[#2F8FE8] outline-none uppercase"
                  />
                  <Search className="w-4 h-4 text-[#64748B] absolute right-3 top-3.5" />
                </div>
              </div>
              <div className="sm:col-span-5">
                <label className="text-[11px] font-semibold uppercase text-[#E7ECF2] block mb-1">
                  Flight Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={e => setSelectedDate(e.target.value)}
                  className="w-full bg-[#0B2341] border border-[#155FA0]/40 text-white text-xs p-3 rounded-xl font-mono focus:border-[#2F8FE8] outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-1">
              <div className="text-[11px] text-[#E7ECF2] flex items-center gap-1.5 overflow-x-auto">
                <span className="shrink-0 text-[#64748B]">Try:</span>
                {['MMM 101', 'MMM 201', 'MMM 210', 'MMM 301'].map(num => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => {
                      setSearchQuery(num);
                      const f = MOCK_FLIGHTS.find(fl => fl.flightNumber === num);
                      setFoundFlight(f || null);
                    }}
                    className="font-mono text-[#2F8FE8] hover:text-[#D7193F] hover:underline cursor-pointer"
                  >
                    {num}
                  </button>
                ))}
              </div>
              <button
                type="submit"
                className="px-5 py-2 bg-[#D7193F] hover:bg-[#E3294E] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                CHECK STATUS
              </button>
            </div>
          </form>
        </div>

        {/* Result Area */}
        <div className="p-6">
          {foundFlight ? (
            <div className="space-y-6">
              {/* Top Status & Flight No */}
              <div className="flex items-center justify-between border-b border-[#155FA0]/30 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold font-mono text-white">
                      {foundFlight.flightNumber}
                    </span>
                    <span className="text-xs text-[#E7ECF2]">
                      ({foundFlight.aircraft})
                    </span>
                  </div>
                  <span className="text-xs text-[#64748B] mt-0.5 block">
                    Scheduled Operations · Flight Date: {selectedDate}
                  </span>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${getStatusBadge(
                    foundFlight.status
                  )}`}
                >
                  ● {foundFlight.status}
                </span>
              </div>

              {/* Progress Flow Route */}
              <div className="bg-[#0B2341] border border-[#155FA0]/30 rounded-xl p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-extrabold font-mono text-white">
                      {foundFlight.fromCode}
                    </span>
                    <span className="text-xs text-[#E7ECF2] block font-medium">
                      {fromAirport?.city}
                    </span>
                    <span className="text-xs text-[#2F8FE8] font-mono mt-1 block">
                      Dep: {foundFlight.departureTime}
                    </span>
                  </div>

                  <div className="flex flex-col items-center px-4 flex-1 max-w-[200px]">
                    <span className="text-[11px] text-[#E7ECF2] font-mono mb-1">
                      {foundFlight.duration}
                    </span>
                    <div className="w-full h-1 bg-[#07182D] rounded-full relative overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#D7193F] to-[#2F8FE8] rounded-full"
                        style={{
                          width:
                            foundFlight.status === 'ARRIVED'
                              ? '100%'
                              : foundFlight.status === 'DEPARTED'
                              ? '60%'
                              : foundFlight.status === 'BOARDING'
                              ? '15%'
                              : '0%'
                        }}
                      />
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-[#64748B] mt-1">
                      <Clock className="w-3 h-3 text-[#2F8FE8]" />
                      <span>Non-stop regional</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-3xl font-extrabold font-mono text-white">
                      {foundFlight.toCode}
                    </span>
                    <span className="text-xs text-[#E7ECF2] block font-medium">
                      {toAirport?.city}
                    </span>
                    <span className="text-xs text-[#2F8FE8] font-mono mt-1 block">
                      Arr: {foundFlight.arrivalTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Terminal & Gate Specifications */}
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-[#0B2341] p-3 rounded-lg border border-[#155FA0]/30">
                  <span className="text-[10px] uppercase text-[#64748B] block">
                    Departure Terminal
                  </span>
                  <span className="font-bold text-white text-sm mt-0.5 block">
                    {foundFlight.terminal || 'T1'}
                  </span>
                </div>
                <div className="bg-[#0B2341] p-3 rounded-lg border border-[#155FA0]/30">
                  <span className="text-[10px] uppercase text-[#64748B] block">
                    Assigned Gate
                  </span>
                  <span className="font-bold text-[#D7193F] text-sm mt-0.5 block">
                    {foundFlight.gate || '4B'}
                  </span>
                </div>
                <div className="bg-[#0B2341] p-3 rounded-lg border border-[#155FA0]/30">
                  <span className="text-[10px] uppercase text-[#64748B] block">
                    Baggage Belt
                  </span>
                  <span className="font-bold text-white text-sm mt-0.5 block font-mono">
                    Belt 03
                  </span>
                </div>
              </div>

              <div className="text-[11px] text-[#64748B] text-center">
                Simulated flight status for regional aviation demonstration. Actual flight operations subject to DGCA / ATC scheduling.
              </div>
            </div>
          ) : searchAttempted ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#D7193F]/10 border border-[#D7193F]/30 flex items-center justify-center mx-auto text-[#D7193F]">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">FLIGHT NOT FOUND</h4>
              <p className="text-xs text-[#E7ECF2] max-w-sm mx-auto">
                Please check the flight number and date. Try one of our scheduled demo numbers like <strong>MMM 101</strong> or <strong>MMM 201</strong>.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
