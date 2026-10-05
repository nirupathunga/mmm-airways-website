export interface BookingRecord {
  pnr: string;
  passenger: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dob?: string;
  };
  flight: {
    flightNumber: string;
    fromCode: string;
    toCode: string;
    date: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    aircraft: string;
    terminal: string;
    gate: string;
  };
  seat: string;
  fareType: 'Standard' | 'Flex';
  extras: {
    baggageKg: number;
    meal: string;
    priorityBoarding: boolean;
  };
  payment: {
    method: 'Card' | 'UPI' | 'Net Banking';
    totalPaid: number;
    paidAt: string;
    maskedCard?: string;
  };
  status: 'CONFIRMED' | 'CHECKED_IN';
}

export const INITIAL_MOCK_BOOKINGS: BookingRecord[] = [
  {
    pnr: 'MM7K4P',
    passenger: {
      firstName: 'Rajesh',
      lastName: 'Kumar',
      email: 'rajesh.kumar@example.com',
      phone: '+91 98401 23456',
      dob: '1988-04-14'
    },
    flight: {
      flightNumber: 'MMM 101',
      fromCode: 'MAA',
      toCode: 'COK',
      date: '2026-10-12',
      departureTime: '06:30',
      arrivalTime: '07:50',
      duration: '1h 20m',
      aircraft: 'ATR 72-600',
      terminal: 'T1',
      gate: '4B'
    },
    seat: '4A',
    fareType: 'Flex',
    extras: {
      baggageKg: 5,
      meal: 'South Indian Breakfast Box',
      priorityBoarding: true
    },
    payment: {
      method: 'Card',
      totalPaid: 6298,
      paidAt: '2026-10-04T10:15:00Z',
      maskedCard: '•••• •••• •••• 4242'
    },
    status: 'CONFIRMED'
  },
  {
    pnr: 'MM2B9R',
    passenger: {
      firstName: 'Priya',
      lastName: 'Nair',
      email: 'priya.nair@example.com',
      phone: '+91 97455 89123',
      dob: '1992-09-21'
    },
    flight: {
      flightNumber: 'MMM 201',
      fromCode: 'BLR',
      toCode: 'COK',
      date: '2026-10-15',
      departureTime: '07:15',
      arrivalTime: '08:30',
      duration: '1h 15m',
      aircraft: 'ATR 72-600',
      terminal: 'T2',
      gate: '12'
    },
    seat: '2C',
    fareType: 'Standard',
    extras: {
      baggageKg: 0,
      meal: 'None',
      priorityBoarding: false
    },
    payment: {
      method: 'UPI',
      totalPaid: 3799,
      paidAt: '2026-10-02T14:40:00Z'
    },
    status: 'CONFIRMED'
  }
];

export function generatePnr(): string {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let result = 'MM';
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
