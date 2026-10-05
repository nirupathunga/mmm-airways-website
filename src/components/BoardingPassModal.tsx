import React from 'react';
import { MmmLogo } from '../assets/logo';
import { BookingRecord } from '../data/mockBookings';
import { AIRPORTS } from '../data/airports';
import { X, Printer, Download, CheckCircle, Plane, Luggage, Clock } from 'lucide-react';

interface BoardingPassModalProps {
  booking: BookingRecord;
  onClose: () => void;
}

export const BoardingPassModal: React.FC<BoardingPassModalProps> = ({
  booking,
  onClose
}) => {
  const fromAirport = AIRPORTS.find(a => a.code === booking.flight.fromCode);
  const toAirport = AIRPORTS.find(a => a.code === booking.flight.toCode);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#07182D] text-white">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2F8FE8]">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Official Electronic Boarding Pass</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-[#0B2341] hover:bg-[#155FA0] text-white rounded text-xs font-medium flex items-center gap-1.5 transition-colors border border-[#155FA0]/40 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#E7ECF2] hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Boarding Pass Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Header with Logo & PNR */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-5">
            <MmmLogo variant="dark" size="md" />
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#64748B] block">
                Booking Reference (PNR)
              </span>
              <span className="text-2xl font-mono font-extrabold text-[#D7193F] tracking-wider">
                {booking.pnr}
              </span>
            </div>
          </div>

          {/* Route Display */}
          <div className="bg-[#F5F7FA] border border-[#E7ECF2] rounded-xl p-5 flex items-center justify-between">
            <div>
              <span className="text-3xl md:text-4xl font-mono font-extrabold text-[#0B2341]">
                {booking.flight.fromCode}
              </span>
              <div className="text-xs font-bold text-slate-700 mt-0.5">
                {fromAirport?.city}
              </div>
              <div className="text-[11px] text-[#64748B]">
                Depart: {booking.flight.departureTime}
              </div>
            </div>

            <div className="flex flex-col items-center px-4">
              <span className="text-[11px] text-[#64748B] font-mono">
                {booking.flight.duration}
              </span>
              <div className="flex items-center gap-2 my-1">
                <div className="w-12 md:w-24 h-0.5 bg-[#155FA0]/30" />
                <Plane className="w-4 h-4 text-[#D7193F] rotate-90" />
                <div className="w-12 md:w-24 h-0.5 bg-[#155FA0]/30" />
              </div>
              <span className="text-[10px] text-emerald-700 bg-emerald-100 font-medium px-2 py-0.5 rounded-full">
                NON-STOP
              </span>
            </div>

            <div className="text-right">
              <span className="text-3xl md:text-4xl font-mono font-extrabold text-[#0B2341]">
                {booking.flight.toCode}
              </span>
              <div className="text-xs font-bold text-slate-700 mt-0.5">
                {toAirport?.city}
              </div>
              <div className="text-[11px] text-[#64748B]">
                Arrive: {booking.flight.arrivalTime}
              </div>
            </div>
          </div>

          {/* Passenger & Flight Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-2 border-y border-[#E7ECF2] text-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#64748B] block">
                Passenger
              </span>
              <span className="font-bold text-[#0B2341] text-sm">
                {booking.passenger.firstName} {booking.passenger.lastName}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#64748B] block">
                Flight No
              </span>
              <span className="font-mono font-bold text-[#0B2341] text-sm">
                {booking.flight.flightNumber}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#64748B] block">
                Date
              </span>
              <span className="font-mono font-bold text-[#0B2341] text-sm">
                {booking.flight.date}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#64748B] block">
                Assigned Seat
              </span>
              <span className="font-mono font-extrabold text-[#D7193F] text-lg">
                {booking.seat || 'AUTO'}
              </span>
            </div>
          </div>

          {/* Boarding Info */}
          <div className="grid grid-cols-3 gap-4 text-xs bg-[#07182D] text-white p-4 rounded-xl">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#E7ECF2] block">
                Terminal
              </span>
              <span className="text-sm font-bold">{booking.flight.terminal || 'T1'}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#E7ECF2] block">
                Boarding Gate
              </span>
              <span className="text-sm font-bold text-[#2F8FE8]">
                {booking.flight.gate || '4B'}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#E7ECF2] block">
                Boarding Closes
              </span>
              <span className="text-sm font-bold">25 min before dep</span>
            </div>
          </div>

          {/* Baggage & Extras */}
          <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2">
              <Luggage className="w-4 h-4 text-slate-500" />
              <span>Baggage: 15kg check-in + 7kg cabin {booking.extras.baggageKg > 0 ? `(+${booking.extras.baggageKg}kg extra)` : ''}</span>
            </div>
            {booking.extras.meal && booking.extras.meal !== 'None' && (
              <span className="text-slate-700 font-medium">Meal: {booking.extras.meal}</span>
            )}
          </div>

          {/* Barcode & Tear-off Simulator */}
          <div className="pt-2 border-t-2 border-dashed border-slate-300 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* SVG Simulated Barcode */}
            <div className="w-full md:w-3/5">
              <svg className="w-full h-12" viewBox="0 0 300 40">
                {Array.from({ length: 60 }).map((_, i) => (
                  <rect
                    key={i}
                    x={i * 5}
                    y="0"
                    width={(i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1)}
                    height="40"
                    fill="#1E293B"
                  />
                ))}
              </svg>
              <div className="text-[9px] font-mono text-center text-slate-400 mt-1">
                E-TKT: 890 2419 8231 09 · ETICKET ISSUED BY MMM AIRWAYS
              </div>
            </div>

            <div className="text-center md:text-right text-[11px] text-slate-500">
              <div className="font-semibold text-slate-700">MMM AIRWAYS REGIONAL</div>
              <div>BEYOND THE SKY</div>
            </div>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 text-center text-[10px] text-slate-500">
          Please present this digital pass or printed copy alongside government photo ID at the boarding gate.
        </div>
      </div>
    </div>
  );
};
