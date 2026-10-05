export interface Flight {
  id: string;
  flightNumber: string;
  fromCode: string;
  toCode: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  aircraft: 'ATR 72-600' | 'Airbus A320 NEO';
  basePrice: number;
  flexPrice: number;
  availableSeats: number;
  stops: number;
  status: 'ON TIME' | 'BOARDING' | 'DELAYED' | 'DEPARTED' | 'ARRIVED';
  gate?: string;
  terminal?: string;
  baggageAllowance: string;
  flightType: 'Morning Commuter' | 'Midday Connector' | 'Evening Express' | 'Twilight Return';
}

export const MOCK_FLIGHTS: Flight[] = [
  // MAA -> COK
  {
    id: 'fl-101',
    flightNumber: 'MMM 101',
    fromCode: 'MAA',
    toCode: 'COK',
    departureTime: '06:30',
    arrivalTime: '07:50',
    duration: '1h 20m',
    aircraft: 'ATR 72-600',
    basePrice: 4299,
    flexPrice: 5499,
    availableSeats: 12,
    stops: 0,
    status: 'ON TIME',
    gate: '4B',
    terminal: 'T1',
    baggageAllowance: '15 kg Check-in + 7 kg Cabin',
    flightType: 'Morning Commuter'
  },
  {
    id: 'fl-102',
    flightNumber: 'MMM 103',
    fromCode: 'MAA',
    toCode: 'COK',
    departureTime: '14:15',
    arrivalTime: '15:35',
    duration: '1h 20m',
    aircraft: 'ATR 72-600',
    basePrice: 3899,
    flexPrice: 5099,
    availableSeats: 22,
    stops: 0,
    status: 'BOARDING',
    gate: '6A',
    terminal: 'T1',
    baggageAllowance: '15 kg Check-in + 7 kg Cabin',
    flightType: 'Midday Connector'
  },
  {
    id: 'fl-103',
    flightNumber: 'MMM 105',
    fromCode: 'MAA',
    toCode: 'COK',
    departureTime: '19:40',
    arrivalTime: '21:00',
    duration: '1h 20m',
    aircraft: 'ATR 72-600',
    basePrice: 4699,
    flexPrice: 5899,
    availableSeats: 6,
    stops: 0,
    status: 'ON TIME',
    gate: '2',
    terminal: 'T1',
    baggageAllowance: '15 kg Check-in + 7 kg Cabin',
    flightType: 'Evening Express'
  },

  // BLR -> COK
  {
    id: 'fl-201',
    flightNumber: 'MMM 201',
    fromCode: 'BLR',
    toCode: 'COK',
    departureTime: '07:15',
    arrivalTime: '08:30',
    duration: '1h 15m',
    aircraft: 'ATR 72-600',
    basePrice: 3799,
    flexPrice: 4999,
    availableSeats: 16,
    stops: 0,
    status: 'DEPARTED',
    gate: '12',
    terminal: 'T2',
    baggageAllowance: '15 kg Check-in + 7 kg Cabin',
    flightType: 'Morning Commuter'
  },
  {
    id: 'fl-202',
    flightNumber: 'MMM 203',
    fromCode: 'BLR',
    toCode: 'COK',
    departureTime: '17:45',
    arrivalTime: '19:00',
    duration: '1h 15m',
    aircraft: 'ATR 72-600',
    basePrice: 4499,
    flexPrice: 5699,
    availableSeats: 9,
    stops: 0,
    status: 'ON TIME',
    gate: '14A',
    terminal: 'T2',
    baggageAllowance: '15 kg Check-in + 7 kg Cabin',
    flightType: 'Evening Express'
  },

  // BLR -> MAA
  {
    id: 'fl-210',
    flightNumber: 'MMM 210',
    fromCode: 'BLR',
    toCode: 'MAA',
    departureTime: '08:00',
    arrivalTime: '09:00',
    duration: '1h 00m',
    aircraft: 'Airbus A320 NEO',
    basePrice: 3299,
    flexPrice: 4499,
    availableSeats: 48,
    stops: 0,
    status: 'ON TIME',
    gate: '8B',
    terminal: 'T1',
    baggageAllowance: '15 kg Check-in + 7 kg Cabin',
    flightType: 'Morning Commuter'
  },
  {
    id: 'fl-211',
    flightNumber: 'MMM 212',
    fromCode: 'BLR',
    toCode: 'MAA',
    departureTime: '18:20',
    arrivalTime: '19:20',
    duration: '1h 00m',
    aircraft: 'Airbus A320 NEO',
    basePrice: 3999,
    flexPrice: 5199,
    availableSeats: 34,
    stops: 0,
    status: 'DELAYED',
    gate: '9',
    terminal: 'T1',
    baggageAllowance: '15 kg Check-in + 7 kg Cabin',
    flightType: 'Evening Express'
  },

  // HYD -> VGA
  {
    id: 'fl-301',
    flightNumber: 'MMM 301',
    fromCode: 'HYD',
    toCode: 'VGA',
    departureTime: '06:50',
    arrivalTime: '07:45',
    duration: '0h 55m',
    aircraft: 'ATR 72-600',
    basePrice: 2899,
    flexPrice: 3899,
    availableSeats: 18,
    stops: 0,
    status: 'ON TIME',
    gate: '11',
    terminal: 'T1',
    baggageAllowance: '15 kg Check-in + 7 kg Cabin',
    flightType: 'Morning Commuter'
  },
  {
    id: 'fl-302',
    flightNumber: 'MMM 303',
    fromCode: 'HYD',
    toCode: 'VGA',
    departureTime: '16:30',
    arrivalTime: '17:25',
    duration: '0h 55m',
    aircraft: 'ATR 72-600',
    basePrice: 3199,
    flexPrice: 4299,
    availableSeats: 11,
    stops: 0,
    status: 'ON TIME',
    gate: '11B',
    terminal: 'T1',
    baggageAllowance: '15 kg Check-in + 7 kg Cabin',
    flightType: 'Midday Connector'
  },

  // BLR -> GOA
  {
    id: 'fl-401',
    flightNumber: 'MMM 401',
    fromCode: 'BLR',
    toCode: 'GOA',
    departureTime: '09:30',
    arrivalTime: '10:45',
    duration: '1h 15m',
    aircraft: 'ATR 72-600',
    basePrice: 4199,
    flexPrice: 5399,
    availableSeats: 8,
    stops: 0,
    status: 'ON TIME',
    gate: '5',
    terminal: 'T2',
    baggageAllowance: '15 kg Check-in + 7 kg Cabin',
    flightType: 'Midday Connector'
  },

  // BLR -> TRV
  {
    id: 'fl-501',
    flightNumber: 'MMM 501',
    fromCode: 'BLR',
    toCode: 'TRV',
    departureTime: '11:15',
    arrivalTime: '12:35',
    duration: '1h 20m',
    aircraft: 'ATR 72-600',
    basePrice: 4499,
    flexPrice: 5799,
    availableSeats: 14,
    stops: 0,
    status: 'ARRIVED',
    gate: '3',
    terminal: 'T2',
    baggageAllowance: '15 kg Check-in + 7 kg Cabin',
    flightType: 'Midday Connector'
  },

  // MAA -> IXM
  {
    id: 'fl-601',
    flightNumber: 'MMM 601',
    fromCode: 'MAA',
    toCode: 'IXM',
    departureTime: '07:10',
    arrivalTime: '08:15',
    duration: '1h 05m',
    aircraft: 'ATR 72-600',
    basePrice: 3299,
    flexPrice: 4399,
    availableSeats: 19,
    stops: 0,
    status: 'ON TIME',
    gate: '2A',
    terminal: 'T1',
    baggageAllowance: '15 kg Check-in + 7 kg Cabin',
    flightType: 'Morning Commuter'
  },

  // MAA -> TCR
  {
    id: 'fl-701',
    flightNumber: 'MMM 701',
    fromCode: 'MAA',
    toCode: 'TCR',
    departureTime: '12:40',
    arrivalTime: '14:05',
    duration: '1h 25m',
    aircraft: 'ATR 72-600',
    basePrice: 3899,
    flexPrice: 4999,
    availableSeats: 15,
    stops: 0,
    status: 'ON TIME',
    gate: '1B',
    terminal: 'T1',
    baggageAllowance: '15 kg Check-in + 7 kg Cabin',
    flightType: 'Midday Connector'
  },

  // HYD -> TIR
  {
    id: 'fl-801',
    flightNumber: 'MMM 801',
    fromCode: 'HYD',
    toCode: 'TIR',
    departureTime: '06:00',
    arrivalTime: '07:10',
    duration: '1h 10m',
    aircraft: 'ATR 72-600',
    basePrice: 3199,
    flexPrice: 4299,
    availableSeats: 5,
    stops: 0,
    status: 'ON TIME',
    gate: '7',
    terminal: 'T1',
    baggageAllowance: '15 kg Check-in + 7 kg Cabin',
    flightType: 'Morning Commuter'
  },

  // BLR -> MYQ
  {
    id: 'fl-901',
    flightNumber: 'MMM 901',
    fromCode: 'BLR',
    toCode: 'MYQ',
    departureTime: '15:20',
    arrivalTime: '16:05',
    duration: '0h 45m',
    aircraft: 'ATR 72-600',
    basePrice: 2499,
    flexPrice: 3399,
    availableSeats: 26,
    stops: 0,
    status: 'ON TIME',
    gate: '15',
    terminal: 'T2',
    baggageAllowance: '15 kg Check-in + 7 kg Cabin',
    flightType: 'Midday Connector'
  },

  // BLR -> HBX
  {
    id: 'fl-920',
    flightNumber: 'MMM 920',
    fromCode: 'BLR',
    toCode: 'HBX',
    departureTime: '10:00',
    arrivalTime: '11:10',
    duration: '1h 10m',
    aircraft: 'ATR 72-600',
    basePrice: 3499,
    flexPrice: 4699,
    availableSeats: 17,
    stops: 0,
    status: 'ON TIME',
    gate: '16',
    terminal: 'T2',
    baggageAllowance: '15 kg Check-in + 7 kg Cabin',
    flightType: 'Midday Connector'
  }
];

export function getFlightsBetween(fromCode: string, toCode: string): Flight[] {
  const direct = MOCK_FLIGHTS.filter(
    (f) => f.fromCode === fromCode && f.toCode === toCode
  );
  if (direct.length > 0) return direct;

  // Fallback: If no direct seeded route, dynamically generate 2 realistic scheduled flights for this pair
  // so the user can test searching ANY airport combination!
  return [
    {
      id: `fl-dyn-1-${fromCode}-${toCode}`,
      flightNumber: `MMM ${Math.floor(100 + Math.random() * 800)}`,
      fromCode,
      toCode,
      departureTime: '08:45',
      arrivalTime: '10:15',
      duration: '1h 30m',
      aircraft: 'ATR 72-600',
      basePrice: 4150,
      flexPrice: 5350,
      availableSeats: 15,
      stops: 0,
      status: 'ON TIME',
      gate: '3B',
      terminal: 'T1',
      baggageAllowance: '15 kg Check-in + 7 kg Cabin',
      flightType: 'Morning Commuter'
    },
    {
      id: `fl-dyn-2-${fromCode}-${toCode}`,
      flightNumber: `MMM ${Math.floor(200 + Math.random() * 700)}`,
      fromCode,
      toCode,
      departureTime: '17:20',
      arrivalTime: '18:50',
      duration: '1h 30m',
      aircraft: 'ATR 72-600',
      basePrice: 4790,
      flexPrice: 5990,
      availableSeats: 8,
      stops: 0,
      status: 'ON TIME',
      gate: '5A',
      terminal: 'T1',
      baggageAllowance: '15 kg Check-in + 7 kg Cabin',
      flightType: 'Evening Express'
    }
  ];
}
