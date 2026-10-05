import React from 'react';

interface CinematicHeroAircraftProps {
  className?: string;
}

export const CinematicHeroAircraft: React.FC<CinematicHeroAircraftProps> = ({
  className = ''
}) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none ${className}`}>
      {/* Ambient Cloud & Atmospheric Backlight */}
      <div className="absolute top-1/4 right-1/4 w-[420px] h-[260px] bg-gradient-to-br from-[#D7193F]/20 via-[#F28C28]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 right-10 w-[500px] h-[160px] bg-[#2F8FE8]/20 rounded-full blur-[100px] pointer-events-none" />

      {/* SVG Canvas for Cinematic 3/4 Banking Airliner */}
      <svg
        viewBox="0 0 1000 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_35px_50px_rgba(7,24,45,0.85)] transform transition-transform duration-700 ease-out hover:scale-[1.015]"
      >
        <defs>
          {/* Fuselage metallic highlights */}
          <linearGradient id="hero-fuse-top" x1="200" y1="200" x2="820" y2="340" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#F5F7FA" />
            <stop offset="0.75" stopColor="#E7ECF2" />
            <stop offset="1" stopColor="#CBD5E1" />
          </linearGradient>

          {/* Fuselage shadow & midnight belly */}
          <linearGradient id="hero-fuse-belly" x1="260" y1="290" x2="780" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#07182D" />
            <stop offset="0.5" stopColor="#0B2341" />
            <stop offset="1" stopColor="#155FA0" />
          </linearGradient>

          {/* MMM Crimson Speedlines */}
          <linearGradient id="hero-crimson" x1="220" y1="300" x2="900" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D7193F" />
            <stop offset="0.6" stopColor="#E3294E" />
            <stop offset="1" stopColor="#F28C28" />
          </linearGradient>

          {/* Warm Golden Hour Sunset Wing Glow */}
          <linearGradient id="sunset-wing" x1="380" y1="220" x2="780" y2="390" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFBEB" stopOpacity="0.9" />
            <stop offset="0.4" stopColor="#CBD5E1" />
            <stop offset="0.8" stopColor="#64748B" />
            <stop offset="1" stopColor="#0B2341" />
          </linearGradient>

          {/* Engine intake interior gradient */}
          <radialGradient id="engine-intake" cx="50%" cy="50%" r="50%">
            <stop stopColor="#07182D" />
            <stop offset="0.7" stopColor="#0B2341" />
            <stop offset="1" stopColor="#155FA0" />
          </radialGradient>

          {/* Atmospheric Cloud Mist */}
          <linearGradient id="cloud-mist" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="rgba(255,255,255,0)" />
            <stop offset="0.4" stopColor="rgba(56,189,248,0.12)" />
            <stop offset="0.7" stopColor="rgba(244,63,94,0.1)" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="beacon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Ambient High-Altitude Vapor Streams */}
        <path
          d="M 50,420 Q 320,380 940,320"
          stroke="url(#cloud-mist)"
          strokeWidth="4"
          strokeDasharray="20 12"
        />
        <path
          d="M 120,460 Q 420,410 980,360"
          stroke="url(#cloud-mist)"
          strokeWidth="2.5"
          strokeDasharray="14 10"
        />

        {/* Soft Cumulus Horizon Clouds beneath aircraft */}
        <g opacity="0.35">
          <ellipse cx="680" cy="460" rx="160" ry="24" fill="#1E293B" />
          <ellipse cx="820" cy="440" rx="120" ry="20" fill="#334155" opacity="0.4" />
          <ellipse cx="480" cy="480" rx="200" ry="28" fill="#0F172A" />
        </g>

        {/* --- STARBOARD (FAR) WING --- */}
        <polygon
          points="460,250 640,160 620,175 490,265"
          fill="#1E293B"
          stroke="#334155"
          strokeWidth="1.2"
        />
        {/* Far Winglet */}
        <polygon
          points="638,158 644,142 649,144 642,162"
          fill="#E11D48"
        />

        {/* --- MAIN FUSELAGE --- */}
        {/* Aerodynamic Nose to Tail Cone */}
        <path
          d="M 160,290 
             C 185,268 250,248 370,242 
             L 760,242 
             C 830,242 880,260 920,285 
             C 928,290 928,295 918,300 
             C 860,325 790,345 710,350 
             L 340,350 
             C 240,350 185,325 160,290 Z"
          fill="url(#hero-fuse-top)"
          stroke="#CBD5E1"
          strokeWidth="1.8"
        />

        {/* Midnight Navy Lower Fuselage Shading */}
        <path
          d="M 185,305 
             C 260,335 380,350 710,350 
             C 790,350 855,330 916,298 
             C 860,322 795,340 710,342 
             L 330,342 
             C 240,342 195,325 185,305 Z"
          fill="url(#hero-fuse-belly)"
        />

        {/* Signature MMM Crimson Dynamic Speedline along Fuselage */}
        <path
          d="M 195,294 
             C 290,284 520,284 760,284 
             C 840,284 890,292 920,298 
             L 922,305 
             C 885,300 830,292 750,292 
             C 500,292 280,292 195,302 Z"
          fill="url(#hero-crimson)"
        />

        {/* Warm Golden Accent Pinstripe */}
        <path
          d="M 220,305 L 890,305 L 890,308 L 220,308 Z"
          fill="#F59E0B"
          opacity="0.9"
        />

        {/* --- COCKPIT FLIGHT DECK (Signature Modern Airline Eyemask) --- */}
        <path
          d="M 168,284 
             C 178,272 196,266 220,266 
             L 230,280 
             L 182,288 Z"
          fill="#0B132B"
          stroke="#475569"
          strokeWidth="1.5"
        />
        {/* Cockpit Windshield Glass with Cyan Avionics Glint */}
        <polygon points="176,282 188,272 202,272 196,282" fill="#38BDF8" opacity="0.9" />
        <polygon points="206,272 218,272 222,282 208,282" fill="#0284C7" opacity="0.8" />
        <polygon points="222,273 228,273 226,282 223,282" fill="#38BDF8" opacity="0.7" />

        {/* Passenger Cabin Windows (Modern Airline Array) */}
        <g fill="#0F172A">
          {[
            260, 276, 292, 308, 324, 340, 356, 372, 388, 404, 
            420, 436, 540, 556, 572, 588, 604, 620, 636, 652, 
            668, 684, 700, 716, 732, 748, 764, 780, 796
          ].map((x, i) => (
            <rect
              key={i}
              x={x}
              y="272"
              width="8"
              height="11"
              rx="3"
              fill="#1E293B"
              stroke="#94A3B8"
              strokeWidth="0.8"
            />
          ))}
        </g>

        {/* Forward Boarding Door */}
        <rect
          x="236"
          y="265"
          width="16"
          height="40"
          rx="3"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1.4"
        />
        <circle cx="242" cy="285" r="1.5" fill="#475569" />

        {/* Overwing Emergency Exit Doors */}
        <rect x="500" y="268" width="12" height="24" rx="2" fill="none" stroke="#E11D48" strokeWidth="1" />
        <rect x="518" y="268" width="12" height="24" rx="2" fill="none" stroke="#E11D48" strokeWidth="1" />

        {/* Aft Service Door */}
        <rect
          x="820"
          y="265"
          width="16"
          height="40"
          rx="3"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1.4"
        />

        {/* Fuselage Airline Titles: MMM AIRWAYS */}
        <text
          x="270"
          y="262"
          fill="#0F172A"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="18"
          letterSpacing="3"
        >
          MMM <tspan fill="#BE123C">AIRWAYS</tspan>
        </text>
        <text
          x="272"
          y="318"
          fill="#475569"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="7"
          letterSpacing="2.5"
        >
          BEYOND THE SKY · SOUTH INDIA
        </text>

        {/* Aircraft Registration */}
        <text
          x="770"
          y="262"
          fill="#475569"
          fontFamily="monospace"
          fontWeight="700"
          fontSize="9"
        >
          VT-MMA
        </text>

        {/* --- VERTICAL STABILIZER (TAIL FIN) --- */}
        <polygon
          points="780,244 890,90 955,90 910,270"
          fill="#0B132B"
          stroke="#1E293B"
          strokeWidth="1.5"
        />
        {/* Tail Fin Crimson Leading Edge & Cap */}
        <polygon
          points="880,105 890,90 955,90 950,105"
          fill="#E11D48"
        />
        {/* Tail Fin Monogram Emblem */}
        <g transform="translate(885, 120) scale(0.6)">
          <circle cx="50" cy="50" r="36" fill="#0B132B" stroke="#E11D48" strokeWidth="3" />
          <path d="M26 66L38 34L46 54L54 34L62 54L70 34L82 66" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Horizontal Tail Stabilizer */}
        <polygon
          points="870,265 970,248 990,256 905,274"
          fill="#334155"
        />

        {/* --- PORT (NEAR) MAIN WING (Swept Low-Wing Jet Geometry) --- */}
        <polygon
          points="430,320 670,470 610,480 380,345"
          fill="url(#sunset-wing)"
          stroke="#CBD5E1"
          strokeWidth="1.2"
        />
        {/* Sharklet Wingtip (High-Aviation Aero Detail) */}
        <polygon
          points="665,466 678,426 684,428 674,474"
          fill="#E11D48"
        />
        {/* Port Wingtip Red Navigation Strobe */}
        <circle cx="682" cy="425" r="3" fill="#EF4444" filter="url(#beacon-glow)" />
        <circle cx="682" cy="425" r="1.5" fill="#FFFFFF" />

        {/* Flap Track Fairings under the wing */}
        <polygon points="480,380 500,410 494,412 476,382" fill="#334155" />
        <polygon points="540,418 560,446 554,448 536,420" fill="#334155" />

        {/* --- JET ENGINE (High-Bypass Turbofan) --- */}
        <g transform="translate(460, 360)">
          {/* Pylon mounting */}
          <polygon points="20,-20 70,-24 74,0 35,0" fill="#475569" />
          {/* Outer Nacelle */}
          <ellipse
            cx="65"
            cy="20"
            rx="52"
            ry="28"
            fill="#1E293B"
            stroke="#64748B"
            strokeWidth="2"
          />
          {/* Engine Lip Cowl with chrome reflection */}
          <ellipse
            cx="25"
            cy="20"
            rx="14"
            ry="24"
            fill="url(#engine-intake)"
            stroke="#CBD5E1"
            strokeWidth="2"
          />
          {/* Spinner Cone with Red Spiral Accent */}
          <ellipse cx="25" cy="20" rx="4" ry="7" fill="#E11D48" />
          {/* Afterburner / Exhaust Twilight Glow */}
          <path
            d="M 112,14 Q 140,20 112,26"
            stroke="#38BDF8"
            strokeWidth="3"
            opacity="0.75"
            filter="url(#beacon-glow)"
          />
        </g>

        {/* Fuselage Anti-Collision Red Beacon Flash (Top & Bottom) */}
        <circle cx="560" cy="241" r="3.5" fill="#EF4444" filter="url(#beacon-glow)" className="animate-pulse" />
        <circle cx="560" cy="241" r="1.5" fill="#FFFFFF" />
        <circle cx="540" cy="351" r="3.5" fill="#EF4444" filter="url(#beacon-glow)" className="animate-pulse" />
      </svg>
    </div>
  );
};
