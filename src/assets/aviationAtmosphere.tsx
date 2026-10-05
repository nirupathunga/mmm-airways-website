import React from 'react';

// Modern Luxury Airline Cabin Interior Visual
export const CabinInteriorGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#030712] border border-slate-800 ${className}`}>
      <svg
        viewBox="0 0 600 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover select-none"
      >
        <defs>
          <linearGradient id="cabin-ceiling" x1="300" y1="0" x2="300" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0F172A" />
            <stop offset="0.6" stopColor="#1E293B" />
            <stop offset="1" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="cabin-led" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#E11D48" stopOpacity="0.9" />
            <stop offset="1" stopColor="#38BDF8" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="window-sky" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="0.7" stopColor="#F59E0B" />
            <stop offset="1" stopColor="#BE123C" />
          </linearGradient>
          <linearGradient id="seat-leather" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E293B" />
            <stop offset="0.7" stopColor="#0F172A" />
            <stop offset="1" stopColor="#0B132B" />
          </linearGradient>
        </defs>

        {/* Fuselage Curvature Ceiling */}
        <path d="M 0,0 L 600,0 L 520,120 L 80,120 Z" fill="url(#cabin-ceiling)" />

        {/* Overhead Ambient LED Mood Lighting Strip */}
        <line x1="80" y1="60" x2="260" y2="90" stroke="url(#cabin-led)" strokeWidth="3" opacity="0.9" />
        <line x1="520" y1="60" x2="340" y2="90" stroke="url(#cabin-led)" strokeWidth="3" opacity="0.9" />

        {/* Overhead Luggage Bins */}
        <polygon points="40,20 250,70 240,110 30,80" fill="#1E293B" stroke="#334155" strokeWidth="1" />
        <polygon points="560,20 350,70 360,110 570,80" fill="#1E293B" stroke="#334155" strokeWidth="1" />

        {/* Windows along left side */}
        <g transform="translate(10, 80)">
          <ellipse cx="25" cy="50" rx="14" ry="24" fill="url(#window-sky)" stroke="#475569" strokeWidth="2" />
          <ellipse cx="65" cy="62" rx="13" ry="22" fill="url(#window-sky)" stroke="#475569" strokeWidth="2" />
          <ellipse cx="105" cy="74" rx="12" ry="20" fill="url(#window-sky)" stroke="#475569" strokeWidth="2" />
          <ellipse cx="145" cy="85" rx="11" ry="18" fill="url(#window-sky)" stroke="#475569" strokeWidth="2" />
        </g>

        {/* Windows along right side */}
        <g transform="translate(420, 80)">
          <ellipse cx="160" cy="50" rx="14" ry="24" fill="url(#window-sky)" stroke="#475569" strokeWidth="2" />
          <ellipse cx="120" cy="62" rx="13" ry="22" fill="url(#window-sky)" stroke="#475569" strokeWidth="2" />
          <ellipse cx="80" cy="74" rx="12" ry="20" fill="url(#window-sky)" stroke="#475569" strokeWidth="2" />
          <ellipse cx="40" cy="85" rx="11" ry="18" fill="url(#window-sky)" stroke="#475569" strokeWidth="2" />
        </g>

        {/* Perspective Central Cabin Aisle */}
        <polygon points="280,140 320,140 370,360 230,360" fill="#0B132B" stroke="#1E293B" strokeWidth="1" />
        {/* Aisle Path Lighting */}
        <line x1="282" y1="140" x2="232" y2="360" stroke="#38BDF8" strokeWidth="1.5" opacity="0.6" strokeDasharray="6 4" />
        <line x1="318" y1="140" x2="368" y2="360" stroke="#38BDF8" strokeWidth="1.5" opacity="0.6" strokeDasharray="6 4" />

        {/* Foreground Left Passenger Seats (Leather Armonia Styling) */}
        <g transform="translate(10, 150)">
          {/* Row 3 */}
          <path d="M 120,20 C 135,10 170,10 185,20 L 195,100 L 110,100 Z" fill="#1E293B" />
          {/* Row 2 */}
          <path d="M 80,45 C 100,30 150,30 170,45 L 185,140 L 65,140 Z" fill="#1E293B" stroke="#334155" strokeWidth="1" />
          {/* Headrest Pillows with Red Stitching Accent */}
          <rect x="100" y="55" width="50" height="28" rx="6" fill="#0F172A" stroke="#BE123C" strokeWidth="1.5" />
          {/* Row 1 Foreground */}
          <path d="M 20,90 C 50,70 120,70 150,90 L 170,210 L 0,210 Z" fill="#0B132B" stroke="#475569" strokeWidth="1.5" />
          <rect x="50" y="110" width="70" height="38" rx="8" fill="#1E293B" stroke="#E11D48" strokeWidth="2" />
        </g>

        {/* Foreground Right Passenger Seats */}
        <g transform="translate(390, 150)">
          {/* Row 3 */}
          <path d="M 30,20 C 45,10 80,10 95,20 L 105,100 L 20,100 Z" fill="#1E293B" />
          {/* Row 2 */}
          <path d="M 30,45 C 50,30 100,30 120,45 L 135,140 L 15,140 Z" fill="#1E293B" stroke="#334155" strokeWidth="1" />
          <rect x="50" y="55" width="50" height="28" rx="6" fill="#0F172A" stroke="#BE123C" strokeWidth="1.5" />
          {/* Row 1 Foreground */}
          <path d="M 40,90 C 70,70 140,70 170,90 L 200,210 L 20,210 Z" fill="#0B132B" stroke="#475569" strokeWidth="1.5" />
          <rect x="70" y="110" width="70" height="38" rx="8" fill="#1E293B" stroke="#E11D48" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
};

// Night Airport Tarmac & Runway Environment Visual
export const AirportEnvironmentGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#02050C] border border-slate-800 ${className}`}>
      <svg
        viewBox="0 0 600 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover select-none"
      >
        <defs>
          <linearGradient id="tarmac-sky" x1="300" y1="0" x2="300" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#030712" />
            <stop offset="0.6" stopColor="#0B132B" />
            <stop offset="0.9" stopColor="#1E293B" />
            <stop offset="1" stopColor="#E11D48" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="runway-pavement" x1="0" y1="200" x2="0" y2="360" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0A0F1D" />
            <stop offset="0.6" stopColor="#060913" />
            <stop offset="1" stopColor="#03060E" />
          </linearGradient>
        </defs>

        {/* Twilight Sky Horizon */}
        <rect x="0" y="0" width="600" height="200" fill="url(#tarmac-sky)" />

        {/* Distant South Indian Coastline & Coconut Palms Silhouette */}
        <path
          d="M 0,200 Q 150,195 300,198 Q 450,194 600,200 L 600,210 L 0,210 Z"
          fill="#060B14"
        />
        {/* Palm tree silhouettes */}
        <g fill="#040810">
          <path d="M 60,200 L 62,175 Q 50,165 40,170 Q 55,160 62,172 Q 70,160 80,168 Z" />
          <path d="M 75,200 L 76,180 Q 68,170 60,175 Q 72,166 77,178 Q 85,168 92,174 Z" />
          <path d="M 520,200 L 522,172 Q 510,160 500,166 Q 515,158 522,170 Q 532,158 542,164 Z" />
        </g>

        {/* Distant Terminal Building Silhouette with Warm Amber Windows */}
        <rect x="180" y="165" width="240" height="35" rx="3" fill="#0B132B" stroke="#1E293B" strokeWidth="1" />
        <rect x="260" y="145" width="80" height="20" rx="2" fill="#0F172A" />
        {/* Air Traffic Control Tower */}
        <polygon points="290,145 310,145 306,90 294,90" fill="#0B132B" />
        <polygon points="286,90 314,90 318,75 282,75" fill="#1E293B" stroke="#E11D48" strokeWidth="1" />
        <circle cx="300" cy="74" r="2" fill="#EF4444" className="animate-pulse" />

        {/* Airport Terminal Glow Windows */}
        <g fill="#FDE68A" opacity="0.8">
          {Array.from({ length: 16 }).map((_, i) => (
            <rect key={i} x={195 + i * 13} y="178" width="7" height="4" rx="1" />
          ))}
        </g>

        {/* Ground Tarmac Pavement */}
        <rect x="0" y="200" width="600" height="160" fill="url(#runway-pavement)" />

        {/* Perspective Runway Centerline */}
        <polygon points="296,200 304,200 318,360 282,360" fill="#1E293B" />
        <g stroke="#FDE047" strokeWidth="3" strokeDasharray="14 10">
          <line x1="300" y1="200" x2="300" y2="360" />
        </g>

        {/* Runway Approach Lights (Green Threshold & Amber Edge Lights) */}
        <g fill="#10B981">
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={`grn-${i}`} cx={260 + i * 12} cy="202" r="1.8" />
          ))}
        </g>

        {/* Blue Taxiway Edge Lighting */}
        <g fill="#38BDF8">
          <circle cx="210" cy="230" r="2" />
          <circle cx="160" cy="270" r="2.5" />
          <circle cx="100" cy="320" r="3" />
          <circle cx="390" cy="230" r="2" />
          <circle cx="440" cy="270" r="2.5" />
          <circle cx="500" cy="320" r="3" />
        </g>

        {/* Aircraft Parked at Jetbridge Silhouette in Distance */}
        <g transform="translate(110, 168) scale(0.45)">
          <path d="M 0,40 L 90,40 L 130,20 L 140,20 L 135,40 L 180,40 L 180,48 L 0,48 Z" fill="#FFFFFF" opacity="0.9" />
          <polygon points="135,40 170,10 185,10 175,40" fill="#BE123C" />
          <polygon points="60,45 100,65 90,68 50,48" fill="#334155" />
        </g>
      </svg>
    </div>
  );
};
