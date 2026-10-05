import React from 'react';
import { Airport, AIRPORTS } from '../data/airports';
import { X, Plane, MapPin, Building, Compass, ArrowRight } from 'lucide-react';

interface DestinationModalProps {
  airport: Airport;
  onClose: () => void;
  onBookFlight: (fromCode: string, toCode: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  airport,
  onClose,
  onBookFlight
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#07182D] border border-[#155FA0]/30 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B2341] border-b border-[#155FA0]/30">
          <div className="flex items-center gap-2">
            <span className="text-xl font-mono font-extrabold text-[#D7193F]">
              {airport.code}
            </span>
            <span className="text-sm font-bold text-white">
              · {airport.city}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#64748B] hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Destination Image Banner */}
        {airport.imageUrl && (
          <div className="relative h-48 w-full overflow-hidden bg-[#07182D]">
            <img
              src={airport.imageUrl}
              alt={`${airport.city} (${airport.code}) destination - ${airport.name}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07182D] via-transparent to-black/30" />
            <div className="absolute bottom-3 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#2F8FE8] font-bold block mb-0.5">
                  {airport.state} · {airport.category}
                </span>
                <h3 className="text-2xl font-bold text-white drop-shadow-md">
                  {airport.name}
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 space-y-5">
          {!airport.imageUrl && (
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#2F8FE8] font-bold block mb-1">
                {airport.state} · {airport.category}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {airport.name}
              </h3>
            </div>
          )}

          <p className="text-xs sm:text-sm text-[#E7ECF2] leading-relaxed">
            {airport.description}
          </p>

          <div className="bg-[#0B2341] p-4 rounded-xl border border-[#155FA0]/30 space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-[#155FA0]/20 text-[#64748B]">
              <span>Terminal Operations:</span>
              <span className="text-white font-medium">{airport.terminal}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#155FA0]/20 text-[#64748B]">
              <span>Strategic Corridor:</span>
              <span className="text-white font-medium">{airport.popularWith}</span>
            </div>
            <div className="flex justify-between py-1 text-[#64748B]">
              <span>Planned Direct Corridors:</span>
              <span className="text-[#D7193F] font-mono font-bold">
                {airport.directConnections.length} Routes
              </span>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-semibold uppercase text-[#E7ECF2] block mb-2">
              Direct Flight Corridors:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {airport.directConnections.map(code => {
                const target = AIRPORTS.find(a => a.code === code);
                return (
                  <button
                    key={code}
                    onClick={() => {
                      onBookFlight(airport.code, code);
                      onClose();
                    }}
                    className="px-2.5 py-1 bg-[#0B2341] hover:bg-[#D7193F] hover:text-white border border-[#155FA0]/40 rounded text-xs text-[#E7ECF2] font-mono transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{code}</span>
                    <span className="text-[10px] font-sans text-[#64748B] hover:text-white">
                      ({target?.city})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              const target = airport.directConnections[0] || 'COK';
              onBookFlight(airport.code, target);
              onClose();
            }}
            className="w-full py-3 bg-[#D7193F] hover:bg-[#E3294E] hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <Plane className="w-3.5 h-3.5" />
            <span>SEARCH FLIGHTS FROM {airport.code}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
