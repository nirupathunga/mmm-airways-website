import React, { useState } from 'react';
import { AIRPORTS, Airport } from '../data/airports';
import { Plane, MapPin, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

interface RouteMapProps {
  onSelectDestination?: (airport: Airport) => void;
  onBookFlight?: (fromCode: string, toCode: string) => void;
}

export const RouteMap: React.FC<RouteMapProps> = ({
  onSelectDestination,
  onBookFlight
}) => {
  const [selectedAirport, setSelectedAirport] = useState<Airport | null>(
    AIRPORTS.find(a => a.code === 'BLR') || AIRPORTS[0]
  );
  const [hoveredAirport, setHoveredAirport] = useState<Airport | null>(null);
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'BLR' | 'MAA' | 'HYD' | 'COASTAL'>('ALL');

  const displayedAirport = hoveredAirport || selectedAirport;

  // Filter airports or routes based on active filter
  const getFilteredConnections = () => {
    if (!displayedAirport) return [];
    return displayedAirport.directConnections.map(targetCode => {
      const targetAirport = AIRPORTS.find(a => a.code === targetCode);
      return {
        from: displayedAirport,
        to: targetAirport
      };
    }).filter(conn => conn.to !== undefined);
  };

  const connections = getFilteredConnections();

  return (
    <div className="relative w-full rounded-2xl bg-[#07182D] border border-[#155FA0]/30 p-6 lg:p-8 overflow-hidden shadow-2xl">
      {/* Decorative Radian Grid Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#155FA0_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D7193F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2F8FE8]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Control Header & Filters */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#155FA0]/30">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D7193F] mb-1">
            <Compass className="w-3.5 h-3.5 animate-spin-slow text-[#2F8FE8]" />
            <span>Interactive Network Radar</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            South India Flight Corridors
          </h3>
          <p className="text-xs md:text-sm text-[#E7ECF2] mt-1">
            Hover or select an airport node to inspect direct regional connections and planned flight times.
          </p>
        </div>

        {/* Segmented Filter Control */}
        <div className="flex items-center gap-1.5 p-1 bg-[#0B2341] border border-[#155FA0]/40 rounded-lg shrink-0 overflow-x-auto max-w-full">
          {[
            { id: 'ALL', label: 'All Corridors' },
            { id: 'BLR', label: 'Bengaluru Hub' },
            { id: 'MAA', label: 'Chennai Hub' },
            { id: 'HYD', label: 'Hyderabad Hub' },
            { id: 'COASTAL', label: 'Coastal & Leisure' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => {
                setActiveFilter(f.id as any);
                if (f.id === 'BLR') setSelectedAirport(AIRPORTS.find(a => a.code === 'BLR') || null);
                if (f.id === 'MAA') setSelectedAirport(AIRPORTS.find(a => a.code === 'MAA') || null);
                if (f.id === 'HYD') setSelectedAirport(AIRPORTS.find(a => a.code === 'HYD') || null);
                if (f.id === 'COASTAL') setSelectedAirport(AIRPORTS.find(a => a.code === 'COK') || null);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-[#D7193F] text-white shadow-sm'
                  : 'text-[#E7ECF2] hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Interactive Map Visual (SVG) */}
        <div className="lg:col-span-8 relative bg-[#07182D]/90 rounded-xl border border-[#155FA0]/30 p-4 md:p-6 shadow-inner aspect-[4/3] md:aspect-[16/11]">
          {/* Subtle South India Peninsular Coastline Guide */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full select-none"
          >
            {/* South India Peninsula Stylized Vector Coastline */}
            <path
              d="M 15,10 
                 Q 18,22 22,25 
                 Q 24,35 25,48 
                 Q 28,60 32,70 
                 Q 36,80 39,88 
                 Q 42,92 46,89 
                 Q 50,85 53,75 
                 Q 60,65 67,58 
                 Q 75,45 80,30 
                 Q 85,20 88,10"
              fill="none"
              stroke="#155FA0"
              strokeWidth="2"
              strokeDasharray="2 3"
              opacity="0.5"
            />

            {/* Coastal Waters Shading */}
            <path
              d="M 15,10 
                 Q 18,22 22,25 
                 Q 24,35 25,48 
                 Q 28,60 32,70 
                 Q 36,80 39,88 
                 Q 42,92 46,89 
                 Q 50,85 53,75 
                 Q 60,65 67,58 
                 Q 75,45 80,30 
                 Q 85,20 88,10 
                 L 100,10 L 100,100 L 0,100 L 0,10 Z"
              fill="#0B2341"
              opacity="0.4"
            />

            {/* Dynamic Animated Flight Route Curves */}
            {connections.map((conn, idx) => {
              if (!conn.from || !conn.to) return null;
              // Curved arc bezier calculation
              const midX = (conn.from.mapX + conn.to.mapX) / 2;
              const midY = (conn.from.mapY + conn.to.mapY) / 2 - 4; // slight arc curvature
              return (
                <g key={`path-${conn.from.code}-${conn.to.code}-${idx}`}>
                  {/* Glowing Base Line */}
                  <path
                    d={`M ${conn.from.mapX},${conn.from.mapY} Q ${midX},${midY} ${conn.to.mapX},${conn.to.mapY}`}
                    fill="none"
                    stroke="#2F8FE8"
                    strokeWidth="1.2"
                    strokeOpacity="0.8"
                    strokeDasharray="3 3"
                  />
                  {/* Animated Radar Pulse Particle traveling along the path */}
                  <circle
                    r="1.2"
                    fill="#F28C28"
                  >
                    <animateMotion
                      path={`M ${conn.from.mapX},${conn.from.mapY} Q ${midX},${midY} ${conn.to.mapX},${conn.to.mapY}`}
                      dur={`${1.8 + (idx % 3) * 0.4}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}

            {/* Airport Nodes */}
            {AIRPORTS.map((airport) => {
              const isSelected = selectedAirport?.code === airport.code;
              const isHovered = hoveredAirport?.code === airport.code;
              const isConnected = displayedAirport?.directConnections.includes(airport.code);
              const isMajor = airport.category === 'Major Hub';

              return (
                <g
                  key={airport.code}
                  className="cursor-pointer transition-transform duration-200"
                  onClick={() => {
                    setSelectedAirport(airport);
                    onSelectDestination?.(airport);
                  }}
                  onMouseEnter={() => setHoveredAirport(airport)}
                  onMouseLeave={() => setHoveredAirport(null)}
                >
                  {/* Outer selection ripple */}
                  {(isSelected || isHovered) && (
                    <circle
                      cx={airport.mapX}
                      cy={airport.mapY}
                      r={isMajor ? '5.5' : '4.5'}
                      fill="none"
                      stroke="#D7193F"
                      strokeWidth="0.8"
                      className="animate-ping"
                      opacity="0.8"
                    />
                  )}

                  {/* Connected Node Glow Ring */}
                  {isConnected && (
                    <circle
                      cx={airport.mapX}
                      cy={airport.mapY}
                      r={isMajor ? '4' : '3.2'}
                      fill="none"
                      stroke="#2F8FE8"
                      strokeWidth="0.8"
                      strokeDasharray="2 1"
                    />
                  )}

                  {/* Central Node Circle */}
                  <circle
                    cx={airport.mapX}
                    cy={airport.mapY}
                    r={isMajor ? '2.8' : '1.9'}
                    fill={
                      isSelected
                        ? '#D7193F'
                        : isConnected
                        ? '#2F8FE8'
                        : isMajor
                        ? '#FFFFFF'
                        : '#E7ECF2'
                    }
                    stroke="#07182D"
                    strokeWidth="0.8"
                  />

                  {/* Airport Code Label */}
                  <text
                    x={airport.mapX}
                    y={airport.mapY - 3.5}
                    textAnchor="middle"
                    fill={isSelected ? '#D7193F' : isConnected ? '#2F8FE8' : '#F5F7FA'}
                    fontSize={isMajor ? '2.8' : '2.3'}
                    fontWeight={isMajor || isSelected ? '700' : '500'}
                    className="select-none tracking-wider font-mono"
                  >
                    {airport.code}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Map legend footer */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-[#E7ECF2] bg-[#07182D]/95 px-3 py-1.5 rounded-lg border border-[#155FA0]/40">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white border border-[#07182D]" />
                <span>Major Metro Hub</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2F8FE8]" />
                <span>Connected Airport</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D7193F]" />
                <span>Selected Origin</span>
              </span>
            </div>
            <span className="hidden sm:inline font-mono text-[#64748B]">
              Planned UDAN/RCS Network
            </span>
          </div>
        </div>

        {/* Selected Destination Detail Side Panel */}
        <div className="lg:col-span-4 bg-[#0B2341] rounded-xl border border-[#155FA0]/40 p-6 flex flex-col justify-between h-full shadow-lg">
          {displayedAirport ? (
            <div>
              <div className="flex items-center justify-between border-b border-[#155FA0]/30 pb-3 mb-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#D7193F] font-bold">
                    {displayedAirport.category}
                  </span>
                  <h4 className="text-xl font-bold text-white mt-0.5">
                    {displayedAirport.city}
                  </h4>
                  <div className="text-xs text-[#E7ECF2]">
                    {displayedAirport.name}
                  </div>
                </div>
                <div className="text-right">
                  <div className="px-3 py-1 bg-[#07182D] border border-[#155FA0]/40 rounded text-base font-mono font-bold text-white">
                    {displayedAirport.code}
                  </div>
                  <span className="text-[10px] text-[#64748B] uppercase mt-0.5 block">
                    {displayedAirport.state}
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#E7ECF2] leading-relaxed mb-4">
                {displayedAirport.description}
              </p>

              <div className="mb-4 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#155FA0]/20 text-[#64748B]">
                  <span>Terminal:</span>
                  <span className="text-white font-medium">{displayedAirport.terminal}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#155FA0]/20 text-[#64748B]">
                  <span>Corridor Highlights:</span>
                  <span className="text-white font-medium">{displayedAirport.popularWith}</span>
                </div>
                <div className="flex justify-between py-1 text-[#64748B]">
                  <span>Direct Planned Links:</span>
                  <span className="text-[#D7193F] font-bold font-mono">
                    {displayedAirport.directConnections.length} destinations
                  </span>
                </div>
              </div>

              {/* Direct Routes Chips */}
              <div className="mb-6">
                <span className="text-[11px] font-semibold text-[#E7ECF2] uppercase tracking-wider block mb-2">
                  Connected Cities:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {displayedAirport.directConnections.map(targetCode => {
                    const target = AIRPORTS.find(a => a.code === targetCode);
                    return (
                      <button
                        key={targetCode}
                        onClick={() => {
                          if (target) {
                            setSelectedAirport(target);
                          }
                        }}
                        className="px-2 py-1 bg-[#07182D] hover:bg-[#155FA0]/40 border border-[#155FA0]/30 rounded text-xs text-[#F5F7FA] font-mono transition-colors flex items-center gap-1 cursor-pointer"
                        title={target?.city}
                      >
                        <span>{targetCode}</span>
                        <span className="text-[10px] text-[#E7ECF2]/80 font-sans">
                          {target?.city}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Route Action */}
              <div className="pt-2 border-t border-[#155FA0]/30">
                <button
                  onClick={() => {
                    const target = displayedAirport.directConnections[0] || 'COK';
                    onBookFlight?.(displayedAirport.code, target);
                  }}
                  className="w-full py-2.5 px-4 bg-[#D7193F] hover:bg-[#E3294E] text-white rounded-lg text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] cursor-pointer"
                >
                  <Plane className="w-3.5 h-3.5" />
                  <span>Search Flights from {displayedAirport.code}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-[#64748B]">
              Select an airport on the radar to view connection data.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
