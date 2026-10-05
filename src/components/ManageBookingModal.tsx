import React, { useState } from 'react';
import { BookingRecord, INITIAL_MOCK_BOOKINGS } from '../data/mockBookings';
import { BoardingPassModal } from './BoardingPassModal';
import { SeatMap } from './SeatMap';
import { Search, X, CheckCircle, Plane, AlertCircle, Edit3, Download, Luggage } from 'lucide-react';

interface ManageBookingModalProps {
  onClose: () => void;
  userBookings?: BookingRecord[];
}

export const ManageBookingModal: React.FC<ManageBookingModalProps> = ({
  onClose,
  userBookings = []
}) => {
  const [pnrInput, setPnrInput] = useState('MM7K4P');
  const [lastNameInput, setLastNameInput] = useState('Kumar');
  const [foundBooking, setFoundBooking] = useState<BookingRecord | null>(INITIAL_MOCK_BOOKINGS[0]);
  const [hasSearched, setHasSearched] = useState(true);
  const [isEditingSeat, setIsEditingSeat] = useState(false);
  const [tempSeat, setTempSeat] = useState(foundBooking?.seat || '4A');
  const [showBoardingPass, setShowBoardingPass] = useState(false);

  // Combine user created bookings with seeded mock bookings
  const allBookings = [...userBookings, ...INITIAL_MOCK_BOOKINGS];

  const handleRetrieve = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const cleanedPnr = pnrInput.trim().toUpperCase();
    const cleanedLast = lastNameInput.trim().toLowerCase();

    const booking = allBookings.find(
      b =>
        b.pnr.toUpperCase() === cleanedPnr &&
        b.passenger.lastName.toLowerCase() === cleanedLast
    );

    setFoundBooking(booking || null);
    if (booking) {
      setTempSeat(booking.seat);
      setIsEditingSeat(false);
    }
  };

  const handleConfirmSeatChange = () => {
    if (foundBooking) {
      foundBooking.seat = tempSeat;
      setIsEditingSeat(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#07182D] border border-[#155FA0]/30 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B2341] border-b border-[#155FA0]/30">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D7193F] font-bold">
              PASSENGER PORTAL
            </span>
            <h3 className="text-lg font-bold text-white">Manage Your Journey</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#64748B] hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Retrieval Form */}
        <div className="p-6 border-b border-[#155FA0]/30 bg-[#0B2341]">
          <form onSubmit={handleRetrieve} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                  Booking Reference (PNR) *
                </label>
                <input
                  type="text"
                  placeholder="e.g. MM7K4P"
                  value={pnrInput}
                  onChange={e => setPnrInput(e.target.value)}
                  className="w-full bg-[#07182D] border border-[#155FA0]/40 text-white text-xs p-3 rounded-xl font-mono uppercase focus:border-[#2F8FE8] outline-none"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                  Passenger Last Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kumar"
                  value={lastNameInput}
                  onChange={e => setLastNameInput(e.target.value)}
                  className="w-full bg-[#07182D] border border-[#155FA0]/40 text-white text-xs p-3 rounded-xl focus:border-[#2F8FE8] outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-1">
              <div className="text-[11px] text-[#64748B] flex items-center gap-1.5">
                <span>Demo PNRs:</span>
                <button
                  type="button"
                  onClick={() => {
                    setPnrInput('MM7K4P');
                    setLastNameInput('Kumar');
                  }}
                  className="text-[#D7193F] font-mono hover:underline cursor-pointer"
                >
                  MM7K4P (Kumar)
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => {
                    setPnrInput('MM2B9R');
                    setLastNameInput('Nair');
                  }}
                  className="text-[#D7193F] font-mono hover:underline cursor-pointer"
                >
                  MM2B9R (Nair)
                </button>
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 bg-[#D7193F] hover:bg-[#E3294E] hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                RETRIEVE BOOKING
              </button>
            </div>
          </form>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {foundBooking ? (
            <div className="space-y-6">
              {/* Flight Status Banner */}
              <div className="flex items-center justify-between border-b border-[#155FA0]/30 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-mono font-extrabold text-white">
                      {foundBooking.pnr}
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded text-[10px] font-bold">
                      {foundBooking.status}
                    </span>
                  </div>
                  <span className="text-xs text-[#E7ECF2] mt-0.5 block">
                    Passenger: {foundBooking.passenger.firstName} {foundBooking.passenger.lastName} · {foundBooking.fareType} Fare
                  </span>
                </div>

                <button
                  onClick={() => setShowBoardingPass(true)}
                  className="px-3.5 py-2 bg-[#0B2341] hover:bg-[#155FA0] text-[#D7193F] hover:text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors border border-[#155FA0]/40 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download E-Ticket</span>
                </button>
              </div>

              {/* Itinerary Card */}
              <div className="bg-[#0B2341] border border-[#155FA0]/30 rounded-xl p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-extrabold font-mono text-white">
                      {foundBooking.flight.fromCode}
                    </span>
                    <span className="text-xs text-[#64748B] block">
                      Depart: {foundBooking.flight.departureTime}
                    </span>
                  </div>

                  <div className="flex flex-col items-center px-4">
                    <span className="text-[11px] font-mono text-[#2F8FE8]">
                      {foundBooking.flight.flightNumber}
                    </span>
                    <div className="w-24 h-0.5 bg-[#155FA0]/40 relative my-1">
                      <Plane className="w-3.5 h-3.5 text-[#D7193F] absolute -top-1.5 left-1/2 -translate-x-1/2 rotate-90" />
                    </div>
                    <span className="text-[10px] text-[#64748B]">
                      {foundBooking.flight.aircraft}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-3xl font-extrabold font-mono text-white">
                      {foundBooking.flight.toCode}
                    </span>
                    <span className="text-xs text-[#64748B] block">
                      Arrive: {foundBooking.flight.arrivalTime}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#155FA0]/20 flex items-center justify-between text-xs text-[#64748B]">
                  <span>Travel Date: <strong className="text-white font-mono">{foundBooking.flight.date}</strong></span>
                  <span>Terminal: <strong className="text-white">{foundBooking.flight.terminal || 'T1'}</strong></span>
                  <span>Gate: <strong className="text-[#D7193F] font-bold">{foundBooking.flight.gate || '4B'}</strong></span>
                </div>
              </div>

              {/* Seat & Services Management */}
              <div className="bg-[#0B2341] p-4 rounded-xl border border-[#155FA0]/30 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D7193F]/15 border border-[#D7193F]/40 flex items-center justify-center text-[#D7193F] font-mono font-bold">
                      {foundBooking.seat}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Assigned Cabin Seat</h4>
                      <span className="text-[11px] text-[#64748B]">
                        Window / Aisle allocated for {foundBooking.passenger.firstName}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsEditingSeat(!isEditingSeat)}
                    className="px-3 py-1.5 bg-[#07182D] hover:bg-[#155FA0] text-xs font-medium text-white rounded-lg flex items-center gap-1.5 transition-colors border border-[#155FA0]/40 cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>{isEditingSeat ? 'Close Map' : 'Change Seat'}</span>
                  </button>
                </div>

                {/* Inline Seat Map Changer */}
                {isEditingSeat && (
                  <div className="pt-3 border-t border-[#155FA0]/20">
                    <SeatMap
                      aircraft={foundBooking.flight.aircraft as any || 'ATR 72-600'}
                      selectedSeat={tempSeat}
                      onSelectSeat={(seat) => setTempSeat(seat)}
                    />
                    <div className="mt-3 flex justify-end gap-2">
                      <button
                        onClick={() => setIsEditingSeat(false)}
                        className="px-3 py-1.5 bg-[#07182D] text-[#64748B] hover:text-white rounded text-xs cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleConfirmSeatChange}
                        className="px-4 py-1.5 bg-[#D7193F] hover:bg-[#E3294E] text-white rounded text-xs font-bold uppercase tracking-wider cursor-pointer"
                      >
                        Save New Seat {tempSeat}
                      </button>
                    </div>
                  </div>
                )}

                {/* Baggage & In-flight Extras */}
                <div className="pt-2 border-t border-[#155FA0]/20 flex items-center justify-between text-xs text-[#64748B]">
                  <span className="flex items-center gap-1.5">
                    <Luggage className="w-3.5 h-3.5 text-[#2F8FE8]" />
                    <span>Baggage: 15kg + {foundBooking.extras.baggageKg}kg extra</span>
                  </span>
                  <span>Meal: <strong className="text-white">{foundBooking.extras.meal || 'Standard'}</strong></span>
                </div>
              </div>
            </div>
          ) : hasSearched ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#D7193F]/10 border border-[#D7193F]/30 flex items-center justify-center mx-auto text-[#D7193F]">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">BOOKING NOT FOUND</h4>
              <p className="text-xs text-[#64748B] max-w-sm mx-auto">
                Check your booking reference (PNR) and passenger last name. You can test with <strong>MM7K4P</strong> and last name <strong>Kumar</strong>.
              </p>
            </div>
          ) : null}
        </div>
      </div>

      {/* Boarding Pass Popover */}
      {showBoardingPass && foundBooking && (
        <BoardingPassModal
          booking={foundBooking}
          onClose={() => setShowBoardingPass(false)}
        />
      )}
    </div>
  );
};
