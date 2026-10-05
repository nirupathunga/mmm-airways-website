export interface AviationDivision {
  id: string;
  number: string;
  name: string;
  tagline: string;
  phaseLabel: string;
  status: 'Current Focus' | 'Planned — Phase 2' | 'Planned — Phase 3';
  summary: string;
  description: string;
  capabilities: string[];
  equipmentFocus: string;
  marketNeed: string;
}

export const ECOSYSTEM_DIVISIONS: AviationDivision[] = [
  {
    id: 'scheduled-airline',
    number: '01',
    name: 'Scheduled Airline',
    tagline: 'UDAN / RCS & Regional Passenger Connectivity',
    phaseLabel: 'Phase 1 · Foundation',
    status: 'Current Focus',
    summary: "Regional scheduled connectivity designed around South India's growing aviation network and underserved tier-2/3 economic corridors.",
    description:
      'The cornerstone of MMM Airways. Leveraging the ATR 72-600 and subsequent Airbus A320 NEO aircraft, our scheduled airline division brings predictable, high-frequency, affordable air links to regional centers, cultural pilgrimages, and industrial manufacturing clusters.',
    capabilities: [
      'UDAN / RCS regional scheduled flight operations',
      'Daily commuter schedules between tier-2 cities and metro capitals',
      'Integrated interline connectivity with pan-India hubs',
      'Dedicated digital booking, web check-in, and baggage tracking'
    ],
    equipmentFocus: 'ATR 72-600 (Phase 1) · Airbus A320 NEO (Phase 2)',
    marketNeed: 'Over 60% of South India’s industrial manufacturing districts lack direct commercial flight connectivity to state capitals.'
  },
  {
    id: 'charter-nsop',
    number: '02',
    name: 'Charter & NSOP',
    tagline: 'Private Aviation, Tourism & Medical Evacuation',
    phaseLabel: 'Phase 2 · Scale',
    status: 'Planned — Phase 2',
    summary: 'Flexible on-demand aviation solutions for corporate leadership, luxury experiential tourism, and critical medical evacuation.',
    description:
      'Our Non-Scheduled Operator Permit (NSOP) charter division is structured to deliver bespoke air travel without the constraints of commercial flight timetables. From corporate roadshows across manufacturing belts to emergency medical air ambulances, safety and responsiveness lead every mission.',
    capabilities: [
      'Point-to-point corporate and business aircraft charters',
      'Rapid-response aero-medical air ambulance operations',
      'Bespoke luxury pilgrimage and coastal heritage tourism charter flights',
      'Dedicated concierge, private FBO handling, and priority tarmac boarding'
    ],
    equipmentFocus: 'Turboprop Charters · Light & Mid-size Business Jets',
    marketNeed: 'Rapidly expanding corporate decentralization across Coimbatore, Tiruchirappalli, Hubli, and Vizag creating surging demand for on-demand private air travel.'
  },
  {
    id: 'heli-seaplane',
    number: '03',
    name: 'Helicopter & Seaplane',
    tagline: 'Last-Mile Island, Backwater & Terrain Air Mobility',
    phaseLabel: 'Phase 2 · Scale',
    status: 'Planned — Phase 2',
    summary: 'Next-generation regional mobility for Andaman islands, Kerala backwaters, Western Ghats hill stations, and challenging terrain.',
    description:
      'Bridging destinations where conventional runways cannot be built. By introducing amphibian seaplane routes across Kerala’s inland waterways and twin-engine helicopter corridors across the Western Ghats and Andaman & Nicobar archipelago, we unlock true last-mile aerial connectivity.',
    capabilities: [
      'Amphibious seaplane waterdrome operations across backwaters & reservoirs',
      'Helicopter shuttle links to high-altitude hill stations (Ooty, Munnar, Coorg)',
      'Inter-island passenger and supply connectivity in Andaman & Nicobar',
      'Aerial survey, disaster relief support, and government mobility charters'
    ],
    equipmentFocus: 'Twin-engine Utility Helicopters · 9-19 Seat Amphibious Seaplanes',
    marketNeed: 'Scenic and remote destinations often require 6-10 hours of winding road transit; seaplanes and helicopters reduce travel times to under 35 minutes.'
  },
  {
    id: 'mro',
    number: '04',
    name: 'CAR-145 MRO',
    tagline: 'Line, Base & Component Maintenance Engineering',
    phaseLabel: 'Phase 3 · Ecosystem',
    status: 'Planned — Phase 3',
    summary: 'Building certified maintenance capabilities to support ATR and A320 aircraft, fleet turnaround, and third-party aviation engineering.',
    description:
      'Self-reliance in fleet maintenance is vital for airline punctuality and operating efficiency. MMM Airways is planning a DGCA CAR-145 certified maintenance repair and overhaul (MRO) facility in South India, offering line maintenance, A/C checks, and component overhaul.',
    capabilities: [
      'DGCA CAR-145 compliant line maintenance across base stations',
      'Scheduled C-checks and heavy base maintenance for ATR 72 and A320',
      'Avionics testing, composite structural repair, and battery shop',
      'Third-party airline transit handling and contract maintenance engineering'
    ],
    equipmentFocus: 'Dedicated Multi-Bay Hangar · Ground Support Equipment Fleet',
    marketNeed: 'Most Indian regional operators currently rely on overseas facilities for heavy maintenance checks, inflating turnaround times and foreign currency expenditure.'
  },
  {
    id: 'flight-training',
    number: '05',
    name: 'DGCA Flight Training Academy',
    tagline: 'CPL, Type Ratings & Future Aviation Talent Pipeline',
    phaseLabel: 'Phase 3 · Ecosystem',
    status: 'Planned — Phase 3',
    summary: 'Building a future-ready aviation talent pipeline through planned DGCA-approved flight training and simulator infrastructure.',
    description:
      "India is projected to require thousands of new commercial pilots and licensed aircraft maintenance engineers over the coming decade. MMM Airways' planned Flight Training Academy will cultivate local aviation talent through comprehensive CPL/ATPL cadet programs and type rating partnerships.",
    capabilities: [
      'DGCA Approved Commercial Pilot License (CPL) ab-initio training',
      'ATR 72-600 & Airbus A320 Level-D Full Flight Simulator (FFS) training center',
      'Multi-Crew Cooperation (MCC) and Jet Orientation Courses (JOC)',
      'Direct cadet-to-cockpit pathway for outstanding academy graduates'
    ],
    equipmentFocus: 'Modern Glass-Cockpit Single/Multi-Engine Trainers · Level-D Simulators',
    marketNeed: 'India currently faces severe pilot shortages and cadet backlog, with thousands of students compelled to travel abroad for flight training hours.'
  }
];
