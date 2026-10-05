export interface AircraftSpec {
  id: string;
  name: string;
  category: string;
  tagline: string;
  seats: number;
  rangeKm: number;
  cruiseSpeedKmh: number;
  cabinConfiguration: string;
  engines: string;
  wingspanM: number;
  lengthM: number;
  altitudeM: number;
  role: string;
  description: string;
  keyFeatures: string[];
  plannedDeployment: string;
}

export const FLEET_DATA: AircraftSpec[] = [
  {
    id: 'atr-72-600',
    name: 'ATR 72-600',
    category: 'Regional Turboprop',
    tagline: 'THE REGIONAL WORKHORSE',
    seats: 72,
    rangeKm: 1528,
    cruiseSpeedKmh: 510,
    cabinConfiguration: '2 x 2 Leather Seating',
    engines: 'Pratt & Whitney Canada PW127M',
    wingspanM: 27.05,
    lengthM: 27.17,
    altitudeM: 7600,
    role: 'Primary Regional & UDAN / RCS Network',
    description:
      'Designed specifically for short-to-medium regional connectivity, the ATR 72-600 forms the bedrock of the MMM Airways fleet. With its short-runway capability, outstanding fuel burn economy, and quiet glass-cockpit avionics, it connects tier-2 and tier-3 South Indian hubs directly to major metros.',
    keyFeatures: [
      '72 ergonomic slimline leather seats with generous 30-inch pitch',
      'Short-runway takeoff and landing capability for regional airstrips',
      'Up to 45% lower fuel consumption per trip than comparable regional jets',
      'Spacious Armonia cabin architecture with expanded LED-lit overhead bins',
      'State-of-the-art glass cockpit with five 6x8-inch LCD screens'
    ],
    plannedDeployment: 'Phase 1 Launch: Connecting tier-2/3 cities across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh & Telangana'
  },
  {
    id: 'a320-neo',
    name: 'Airbus A320 NEO',
    category: 'Narrow-Body Jet',
    tagline: 'THE NEXT CHAPTER',
    seats: 180,
    rangeKm: 6300,
    cruiseSpeedKmh: 833,
    cabinConfiguration: '3 x 3 Modern Cabin Layout',
    engines: 'CFM LEAP-1A / PW1100G-JM',
    wingspanM: 35.80,
    lengthM: 37.57,
    altitudeM: 11900,
    role: 'High-Density Metro & Trunk Network Expansion',
    description:
      'As MMM Airways scales its presence across India, the Airbus A320 NEO will power our high-capacity trunk routes. With whisper-quiet cabin acoustics, Sharklet aerodynamic efficiency, and extended transcontinental range, it establishes seamless connections between South Indian hubs and national commercial metropolises.',
    keyFeatures: [
      '180 passenger capacity in single-class comfort with USB charging points',
      '20% reduction in fuel burn and CO₂ emissions via Sharklet aerodynamics',
      '50% noise reduction footprint over previous-generation narrow-bodies',
      'Extended 6,300 km range bridging South India to pan-Indian trunk routes',
      'Airspace by Airbus cabin lighting with customizable circadian rhythm profiles'
    ],
    plannedDeployment: 'Phase 2 Scale: Trunk routes connecting Bengaluru, Chennai, and Hyderabad to Mumbai, Delhi, and Pune'
  }
];

export interface GrowthMilestone {
  year: string;
  label: string;
  atrCount: number;
  a320Count: number;
  airports: string;
  focus: string;
  phase: 'Phase 1: Foundation' | 'Phase 2: Scale' | 'Phase 3: National Platform';
}

export const GROWTH_TIMELINE: GrowthMilestone[] = [
  {
    year: '2027',
    label: 'Initial Network Launch',
    atrCount: 5,
    a320Count: 0,
    airports: '17 airports',
    focus: 'Regional South India UDAN / RCS routes bridging Tamil Nadu, Karnataka, Kerala, and Andhra Pradesh.',
    phase: 'Phase 1: Foundation'
  },
  {
    year: '2028',
    label: 'Network Densification',
    atrCount: 8,
    a320Count: 0,
    airports: '30+ airports',
    focus: 'Expanded frequencies on high-demand regional commuter pairs and opening coastal leisure corridors.',
    phase: 'Phase 1: Foundation'
  },
  {
    year: '2029',
    label: 'Jet Introduction',
    atrCount: 12,
    a320Count: 3,
    airports: '45+ airports',
    focus: 'Introduction of Airbus A320 NEO narrow-bodies for trunk routes connecting South India to Western metros.',
    phase: 'Phase 2: Scale'
  },
  {
    year: '2030',
    label: 'Pan-Indian Reach',
    atrCount: 18,
    a320Count: 6,
    airports: '60+ airports',
    focus: 'National route footprint, integrated cargo belly network, and expanded corporate charter division.',
    phase: 'Phase 2: Scale'
  },
  {
    year: '2031',
    label: 'Integrated Aviation Nexus',
    atrCount: 25,
    a320Count: 10,
    airports: '80+ airports',
    focus: 'Full integrated aviation platform: Scheduled airline, Charter/NSOP, MRO facility, and Flight Training Academy.',
    phase: 'Phase 3: National Platform'
  }
];
