import React from 'react';

interface AircraftGraphicProps {
  className?: string;
  aircraft?: 'atr-72-600' | 'a320-neo';
  animated?: boolean;
}

export const Atr72Graphic: React.FC<{ className?: string; animated?: boolean }> = ({
  className = '',
  animated = true
}) => {
  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <svg
        viewBox="0 0 800 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="atr-fuselage" x1="100" y1="140" x2="680" y2="170" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.6" stopColor="#F1F5F9" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="atr-belly" x1="200" y1="170" x2="600" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B132B" />
            <stop offset="0.8" stopColor="#1E293B" />
          </linearGradient>
          <linearGradient id="atr-red-stripe" x1="120" y1="160" x2="720" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BE123C" />
            <stop offset="0.5" stopColor="#E11D48" />
            <stop offset="1" stopColor="#FB7185" />
          </linearGradient>
          <linearGradient id="gold-accent" x1="200" y1="166" x2="600" y2="166" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B" />
            <stop offset="1" stopColor="#FBBF24" />
          </linearGradient>
          <linearGradient id="blade-sweep" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="rgba(255,255,255,0.7)" />
            <stop offset="0.8" stopColor="rgba(245,158,11,0.9)" />
            <stop offset="1" stopColor="rgba(225,29,72,0.9)" />
          </linearGradient>
          <filter id="prop-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Atmosphere & Jet Stream trails */}
        <path
          d="M40 180 C180 175, 400 178, 760 178"
          stroke="rgba(56,189,248,0.15)"
          strokeWidth="1.5"
          strokeDasharray="8 6"
        />
        <path
          d="M60 210 C220 205, 450 208, 780 208"
          stroke="rgba(225,29,72,0.15)"
          strokeWidth="1"
          strokeDasharray="12 8"
        />

        {/* High Wing (ATR signature) */}
        <polygon
          points="310,130 520,118 500,134 320,136"
          fill="#334155"
        />
        {/* Opposite Wing tip */}
        <polygon
          points="360,118 470,110 460,116 370,122"
          fill="#1E293B"
          opacity="0.8"
        />

        {/* Left Engine Nacelle & Turboprop */}
        <rect
          x="370"
          y="126"
          width="70"
          height="22"
          rx="5"
          fill="#1E293B"
          stroke="#475569"
          strokeWidth="1.5"
        />
        <path
          d="M366 137 L356 137"
          stroke="#94A3B8"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Spinner */}
        <path
          d="M356 132 C352 134, 350 137, 350 137 C350 137, 352 140, 356 142 Z"
          fill="#E11D48"
        />
        {/* Animated Propeller Disk Blur */}
        <ellipse
          cx="354"
          cy="137"
          rx="6"
          ry="55"
          fill="url(#blade-sweep)"
          opacity="0.45"
          filter="url(#prop-blur)"
          className={animated ? 'animate-pulse' : ''}
        />
        <line
          x1="354"
          y1="85"
          x2="354"
          y2="189"
          stroke="#F8FAFC"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Right Engine Nacelle (far side perspective) */}
        <rect
          x="460"
          y="114"
          width="50"
          height="16"
          rx="4"
          fill="#0F172A"
          opacity="0.7"
        />

        {/* Main Fuselage */}
        {/* Nose Cone to Tail */}
        <path
          d="M130 168 C150 156, 190 148, 260 148 L620 148 C660 148, 700 154, 730 162 C736 164, 738 168, 730 170 C690 178, 640 184, 580 186 L250 186 C180 186, 145 178, 130 168 Z"
          fill="url(#atr-fuselage)"
          stroke="#CBD5E1"
          strokeWidth="1.5"
        />

        {/* Deep Navy Aerodynamic Lower Belly */}
        <path
          d="M150 174 C210 182, 320 186, 580 186 C630 185, 680 179, 720 171 C680 176, 620 182, 570 183 L240 183 C180 183, 155 178, 150 174 Z"
          fill="url(#atr-belly)"
        />

        {/* Dynamic MMM Brand Crimson Speedline */}
        <path
          d="M160 168 C220 164, 380 164, 580 164 C640 164, 690 167, 726 169 L728 172 C685 170, 630 167, 570 167 C370 167, 210 167, 160 171 Z"
          fill="url(#atr-red-stripe)"
        />
        {/* Gold Pinstripe */}
        <path
          d="M180 172 L700 172 L700 173.5 L180 173.5 Z"
          fill="url(#gold-accent)"
          opacity="0.9"
        />

        {/* Signature T-Tail Empennage */}
        <polygon
          points="660,150 720,70 755,70 735,162"
          fill="#0B132B"
          stroke="#1E293B"
          strokeWidth="1"
        />
        {/* T-Tail Horizontal Stabilizer */}
        <polygon
          points="690,70 760,66 775,72 710,75"
          fill="#BE123C"
        />
        {/* MMM Tail Fin Emblem */}
        <g transform="translate(710, 85) scale(0.35)">
          <circle cx="50" cy="50" r="34" fill="#0B132B" stroke="#E11D48" strokeWidth="3" />
          <path d="M30 64L40 38L48 54L56 38L64 54L72 38L80 64" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Cockpit Windshield Mask (Black Racoon Eyemask) */}
        <path
          d="M136 164 C140 160, 150 157, 162 157 L168 165 L144 167 Z"
          fill="#0B132B"
          stroke="#475569"
          strokeWidth="1"
        />
        <path
          d="M142 163 L148 159 L154 159 L152 165 Z"
          fill="#38BDF8"
          opacity="0.8"
        />
        <path
          d="M156 159 L162 159 L164 165 L158 165 Z"
          fill="#38BDF8"
          opacity="0.8"
        />

        {/* Passenger Windows (72 seats regional layout) */}
        <g fill="#0F172A">
          {[
            210, 224, 238, 252, 266, 280, 294, 308, 322, 336, 
            430, 444, 458, 472, 486, 500, 514, 528, 542, 556, 570, 584, 598
          ].map((x, i) => (
            <rect
              key={i}
              x={x}
              y="157"
              width="6.5"
              height="8"
              rx="2.5"
              fill="#1E293B"
              stroke="#94A3B8"
              strokeWidth="0.6"
            />
          ))}
        </g>

        {/* Passenger Entry Door */}
        <rect
          x="185"
          y="154"
          width="12"
          height="26"
          rx="2"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1"
        />
        <circle cx="189" cy="168" r="1" fill="#475569" />

        {/* Rear Cargo / Baggage Door */}
        <rect
          x="620"
          y="155"
          width="14"
          height="24"
          rx="2"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1"
        />

        {/* MMM AIRWAYS Titles on Fuselage */}
        <text
          x="215"
          y="153"
          fill="#0F172A"
          fontFamily="sans-serif"
          fontWeight="800"
          fontSize="11"
          letterSpacing="2"
        >
          MMM <tspan fill="#BE123C">AIRWAYS</tspan>
        </text>
        <text
          x="216"
          y="178"
          fill="#475569"
          fontFamily="sans-serif"
          fontWeight="600"
          fontSize="5"
          letterSpacing="1.5"
        >
          CONNECTING SOUTH INDIA
        </text>

        {/* Registration mark */}
        <text
          x="590"
          y="153"
          fill="#64748B"
          fontFamily="monospace"
          fontWeight="700"
          fontSize="6"
        >
          VT-MMA
        </text>

        {/* Landing Gear Assembly (in-flight retracted subtle pods) */}
        <ellipse cx="440" cy="186" rx="16" ry="4" fill="#334155" />
      </svg>
    </div>
  );
};

export const A320NeoGraphic: React.FC<{ className?: string; animated?: boolean }> = ({
  className = '',
  animated = true
}) => {
  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <svg
        viewBox="0 0 850 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="a320-fuselage" x1="120" y1="130" x2="720" y2="170" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.5" stopColor="#F8FAFC" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="a320-belly" x1="160" y1="170" x2="680" y2="195" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B132B" />
            <stop offset="1" stopColor="#1E293B" />
          </linearGradient>
          <linearGradient id="a320-stripe" x1="140" y1="160" x2="760" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BE123C" />
            <stop offset="0.7" stopColor="#E11D48" />
            <stop offset="1" stopColor="#FB7185" />
          </linearGradient>
          <linearGradient id="engine-glow" x1="400" y1="190" x2="480" y2="190" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="1" stopColor="#0284C7" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* High Altitude Sky Streams */}
        <path
          d="M20 190 C200 185, 450 188, 820 188"
          stroke="rgba(56,189,248,0.2)"
          strokeWidth="1.5"
          strokeDasharray="14 10"
        />

        {/* Low-Wing Swept Aerodynamic Profile */}
        <polygon
          points="360,172 540,240 500,246 330,180"
          fill="#334155"
        />
        {/* Sharklet Wingtip (A320 signature) */}
        <polygon
          points="536,238 544,215 548,217 542,242"
          fill="#E11D48"
        />

        {/* High-Bypass CFM LEAP-1A Turbofan Engine */}
        <ellipse
          cx="420"
          cy="204"
          rx="38"
          ry="19"
          fill="#1E293B"
          stroke="#475569"
          strokeWidth="2"
        />
        <ellipse
          cx="390"
          cy="204"
          rx="10"
          ry="17"
          fill="#0B132B"
          stroke="#94A3B8"
          strokeWidth="1.5"
        />
        {/* Engine Spinner */}
        <path
          d="M390 198 C384 201, 382 204, 382 204 C382 204, 384 207, 390 210 Z"
          fill="#E11D48"
        />
        {/* Engine Pylon */}
        <polygon
          points="390,180 435,178 440,192 410,192"
          fill="#475569"
        />

        {/* Main Sleek A320 NEO Fuselage */}
        <path
          d="M110 162 C135 146, 185 138, 270 138 L650 138 C700 138, 750 148, 785 160 C792 162, 792 165, 785 168 C745 178, 690 186, 620 188 L260 188 C175 188, 125 176, 110 162 Z"
          fill="url(#a320-fuselage)"
          stroke="#CBD5E1"
          strokeWidth="1.5"
        />

        {/* Midnight Navy Lower Belly */}
        <path
          d="M135 170 C190 180, 290 187, 610 187 C670 187, 720 180, 770 169 C720 178, 650 184, 590 185 L250 185 C175 185, 145 178, 135 170 Z"
          fill="url(#a320-belly)"
        />

        {/* Signature MMM Crimson Swoop */}
        <path
          d="M145 164 C220 160, 420 160, 630 160 C700 160, 755 164, 782 166 L784 170 C745 168, 680 164, 610 164 C390 164, 210 164, 145 167 Z"
          fill="url(#a320-stripe)"
        />
        {/* Subtle Gold Accents */}
        <path
          d="M165 168 L760 168 L760 169.5 L165 169.5 Z"
          fill="#F59E0B"
          opacity="0.9"
        />

        {/* Swept Vertical Stabilizer (Fin) */}
        <polygon
          points="670,140 760,45 805,45 775,155"
          fill="#0B132B"
          stroke="#1E293B"
          strokeWidth="1"
        />
        {/* Top of Fin Crimson Accent */}
        <polygon
          points="750,55 760,45 805,45 800,55"
          fill="#E11D48"
        />
        {/* MMM Tail Fin Monogram */}
        <g transform="translate(755, 65) scale(0.38)">
          <circle cx="50" cy="50" r="32" fill="#0B132B" stroke="#E11D48" strokeWidth="3" />
          <path d="M30 64L40 38L48 54L56 38L64 54L72 38L80 64" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Swept Horizontal Stabilizer */}
        <polygon
          points="740,154 810,142 825,148 765,160"
          fill="#334155"
        />

        {/* Cockpit Windshield Mask (Signature A320 Cockpit Black Mask) */}
        <path
          d="M116 158 C122 152, 134 148, 148 148 L154 157 L126 160 Z"
          fill="#0B132B"
          stroke="#475569"
          strokeWidth="1"
        />
        <polygon points="124,156 130,150 136,150 134,157" fill="#38BDF8" opacity="0.9" />
        <polygon points="138,150 144,150 146,156 140,156" fill="#38BDF8" opacity="0.9" />

        {/* High Density Passenger Windows (180 seats) */}
        <g fill="#0F172A">
          {Array.from({ length: 34 }).map((_, i) => {
            const x = 195 + i * 13.5;
            // Overwing emergency exits gap
            if (i === 15 || i === 16) return null;
            return (
              <rect
                key={i}
                x={x}
                y="150"
                width="6"
                height="8.5"
                rx="2"
                fill="#1E293B"
                stroke="#94A3B8"
                strokeWidth="0.5"
              />
            );
          })}
        </g>

        {/* Forward Passenger Boarding Door */}
        <rect
          x="170"
          y="146"
          width="13"
          height="28"
          rx="2"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1"
        />
        <circle cx="174" cy="160" r="1.2" fill="#475569" />

        {/* Overwing Emergency Exit Doors */}
        <rect
          x="395"
          y="148"
          width="10"
          height="16"
          rx="2"
          fill="none"
          stroke="#E11D48"
          strokeWidth="0.8"
        />
        <rect
          x="410"
          y="148"
          width="10"
          height="16"
          rx="2"
          fill="none"
          stroke="#E11D48"
          strokeWidth="0.8"
        />

        {/* Rear Service Door */}
        <rect
          x="660"
          y="146"
          width="13"
          height="28"
          rx="2"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1"
        />

        {/* MMM AIRWAYS Bold Titles on A320 NEO */}
        <text
          x="200"
          y="145"
          fill="#0F172A"
          fontFamily="sans-serif"
          fontWeight="800"
          fontSize="12"
          letterSpacing="2.5"
        >
          MMM <tspan fill="#BE123C">AIRWAYS</tspan>
        </text>
        <text
          x="201"
          y="172"
          fill="#475569"
          fontFamily="sans-serif"
          fontWeight="600"
          fontSize="5.5"
          letterSpacing="2"
        >
          BEYOND THE SKY
        </text>

        {/* Registration */}
        <text
          x="630"
          y="145"
          fill="#64748B"
          fontFamily="monospace"
          fontWeight="700"
          fontSize="6.5"
        >
          VT-MMA320
        </text>
      </svg>
    </div>
  );
};
