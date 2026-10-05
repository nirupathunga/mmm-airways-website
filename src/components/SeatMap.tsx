import React, { useState } from 'react';
import { Check, ShieldAlert, Sparkles } from 'lucide-react';

interface SeatMapProps {
  aircraft: 'ATR 72-600' | 'Airbus A320 NEO';
  selectedSeat: string;
  onSelectSeat: (seatId: string, seatPrice: number) => void;
}

export const SeatMap: React.FC<SeatMapProps> = ({
  aircraft,
  selectedSeat,
  onSelectSeat
}) => {
  // ATR 72-600: 2x2 layout, rows 1 to 18 (72 seats)
  // Airbus A320: 3x3 layout, rows 1 to 30 (180 seats)
  const isAtr = aircraft === 'ATR 72-600';
  const totalRows = isAtr ? 18 : 30;
  const leftColumns = isAtr ? ['A', 'B'] : ['A', 'B', 'C'];
  const rightColumns = isAtr ? ['C', 'D'] : ['D', 'E', 'F'];

  // Seed realistic occupied seats
  const [occupiedSeats] = useState<Set<string>>(() => {
    const set = new Set<string>();
    const count = isAtr ? 28 : 75;
    for (let i = 0; i < count; i++) {
      const row = Math.floor(Math.random() * totalRows) + 1;
      const allCols = isAtr ? ['A', 'B', 'C', 'D'] : ['A', 'B', 'C', 'D', 'E', 'F'];
      const col = allCols[Math.floor(Math.random() * allCols.length)];
      set.add(`${row}${col}`);
    }
    return set;
  });

  const getSeatPrice = (row: number, _col: string) => {
    if (row <= 2) return 500; // Front Row Extra Legroom
    if (row === (isAtr ? 8 : 12)) return 400; // Emergency Exit
    return 200; // Standard Reserved
  };

  return (
    <div className="bg-[#07182D] border border-[#155FA0]/30 rounded-xl p-5 select-none">
      {/* Legend & Aircraft Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-[#155FA0]/30 text-xs">
        <div>
          <span className="font-bold text-white uppercase tracking-wider block">
            {aircraft} Cabin Plan
          </span>
          <span className="text-[#64748B] text-[11px]">
            {isAtr ? '2 x 2 Regional Leather Seating' : '3 x 3 Modern Cabin Layout'}
          </span>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-[11px] text-[#E7ECF2]">
          <span className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded bg-[#0B2341] border border-[#155FA0]/50" />
            <span>Available</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded bg-[#D7193F] border border-[#D7193F]" />
            <span>Selected</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded bg-[#07182D] border border-[#155FA0]/20 opacity-40" />
            <span>Occupied</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded bg-[#F28C28]/20 border border-[#F28C28]/60" />
            <span>Extra Legroom (+₹500)</span>
          </span>
        </div>
      </div>

      {/* Cockpit Indicator Nose */}
      <div className="max-w-md mx-auto mb-6 flex flex-col items-center">
        <div className="w-24 h-10 border-t-2 border-x-2 border-[#155FA0]/40 rounded-t-full bg-[#0B2341]/60 flex items-center justify-center">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#2F8FE8]">
            COCKPIT
          </span>
        </div>
        <div className="w-full h-1 bg-[#155FA0]/30" />
      </div>

      {/* Seat Rows Scrollable Container */}
      <div className="max-w-md mx-auto max-h-96 overflow-y-auto pr-2 space-y-2 py-2">
        {Array.from({ length: totalRows }).map((_, index) => {
          const rowNumber = index + 1;
          const isFront = rowNumber <= 2;
          const isExit = rowNumber === (isAtr ? 8 : 12);

          return (
            <div
              key={rowNumber}
              className={`flex items-center justify-between p-1 rounded-lg ${
                isExit ? 'bg-[#F28C28]/10 border border-[#F28C28]/30' : ''
              }`}
            >
              {/* Left Column Group */}
              <div className="flex items-center gap-1.5">
                {leftColumns.map(col => {
                  const seatId = `${rowNumber}${col}`;
                  const isOccupied = occupiedSeats.has(seatId);
                  const isSelected = selectedSeat === seatId;
                  const price = getSeatPrice(rowNumber, col);

                  return (
                    <button
                      key={seatId}
                      type="button"
                      disabled={isOccupied}
                      onClick={() => onSelectSeat(seatId, price)}
                      title={`Seat ${seatId} (${isOccupied ? 'Occupied' : `+₹${price}`})`}
                      className={`w-8 h-8 rounded-md flex items-center justify-center text-[10px] font-mono font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#D7193F] text-white shadow-lg ring-2 ring-[#D7193F] scale-105'
                          : isOccupied
                          ? 'bg-[#07182D] text-[#64748B] cursor-not-allowed border border-[#155FA0]/20 opacity-40'
                          : isFront
                          ? 'bg-[#F28C28]/15 hover:bg-[#F28C28]/30 border border-[#F28C28]/50 text-[#F28C28]'
                          : 'bg-[#0B2341] hover:bg-[#155FA0] border border-[#155FA0]/40 text-[#E7ECF2]'
                      }`}
                    >
                      {seatId}
                    </button>
                  );
                })}
              </div>

              {/* Aisle & Row Number */}
              <div className="w-8 text-center text-xs font-mono text-[#64748B] font-semibold">
                {rowNumber}
              </div>

              {/* Right Column Group */}
              <div className="flex items-center gap-1.5">
                {rightColumns.map(col => {
                  const seatId = `${rowNumber}${col}`;
                  const isOccupied = occupiedSeats.has(seatId);
                  const isSelected = selectedSeat === seatId;
                  const price = getSeatPrice(rowNumber, col);

                  return (
                    <button
                      key={seatId}
                      type="button"
                      disabled={isOccupied}
                      onClick={() => onSelectSeat(seatId, price)}
                      title={`Seat ${seatId} (${isOccupied ? 'Occupied' : `+₹${price}`})`}
                      className={`w-8 h-8 rounded-md flex items-center justify-center text-[10px] font-mono font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#D7193F] text-white shadow-lg ring-2 ring-[#D7193F] scale-105'
                          : isOccupied
                          ? 'bg-[#07182D] text-[#64748B] cursor-not-allowed border border-[#155FA0]/20 opacity-40'
                          : isFront
                          ? 'bg-[#F28C28]/15 hover:bg-[#F28C28]/30 border border-[#F28C28]/50 text-[#F28C28]'
                          : 'bg-[#0B2341] hover:bg-[#155FA0] border border-[#155FA0]/40 text-[#E7ECF2]'
                      }`}
                    >
                      {seatId}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Seat Summary Footer */}
      <div className="mt-4 pt-3 border-t border-[#155FA0]/30 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="text-[#64748B]">Chosen Seat:</span>
          {selectedSeat ? (
            <span className="px-2.5 py-1 bg-[#D7193F]/20 border border-[#D7193F]/50 rounded font-mono font-bold text-[#D7193F]">
              {selectedSeat}
            </span>
          ) : (
            <span className="text-[#64748B] italic">None selected (auto-assigned)</span>
          )}
        </div>
        <div className="text-right text-[#64748B] text-[11px]">
          Window / Aisle selection confirmed on checkout
        </div>
      </div>
    </div>
  );
};
