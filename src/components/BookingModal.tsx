import React, { useState } from 'react';
import { SearchParams } from './FlightSearch';
import { AIRPORTS, Airport } from '../data/airports';
import { Flight, getFlightsBetween } from '../data/flights';
import { SeatMap } from './SeatMap';
import { BoardingPassModal } from './BoardingPassModal';
import { BookingRecord, generatePnr } from '../data/mockBookings';
import { MmmLogo } from '../assets/logo';
import {
  X,
  Plane,
  ArrowRight,
  CheckCircle,
  CreditCard,
  Luggage,
  Coffee,
  Zap,
  ShieldCheck,
  Calendar,
  Clock,
  User,
  Filter,
  ArrowUpDown
} from 'lucide-react';

interface BookingModalProps {
  initialSearch?: SearchParams | null;
  onClose: () => void;
  onBookingCreated?: (booking: BookingRecord) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  initialSearch,
  onClose,
  onBookingCreated
}) => {
  // Step indicator 1 to 7
  const [currentStep, setCurrentStep] = useState<number>(initialSearch ? 2 : 1);

  // Search parameters
  const [fromCode, setFromCode] = useState<string>(initialSearch?.fromAirport.code || 'MAA');
  const [toCode, setToCode] = useState<string>(initialSearch?.toAirport.code || 'COK');
  const [departureDate, setDepartureDate] = useState<string>(initialSearch?.departureDate || '2026-10-12');
  const [passengersCount, setPassengersCount] = useState<number>(initialSearch?.passengers || 1);
  const [fareClassChoice, setFareClassChoice] = useState<'Standard' | 'Flex'>(initialSearch?.cabinClass || 'Standard');

  // Available flights & selected flight
  const flights = getFlightsBetween(fromCode, toCode);
  const [selectedFlight, setSelectedFlight] = useState<Flight>(flights[0]);
  const [filterSort, setFilterSort] = useState<'cheapest' | 'fastest' | 'departure'>('cheapest');

  // Passenger form
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('1994-06-15');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Seat Selection
  const [selectedSeat, setSelectedSeat] = useState<string>('4A');
  const [seatPrice, setSeatPrice] = useState<number>(200);

  // Extras
  const [extraBaggageKg, setExtraBaggageKg] = useState<number>(0);
  const [mealSelection, setMealSelection] = useState<string>('None');
  const [priorityBoarding, setPriorityBoarding] = useState<boolean>(false);

  // Payment
  const [paymentMethod, setPaymentMethod] = useState<'Card' | 'UPI' | 'Net Banking'>('Card');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [cardHolder, setCardHolder] = useState('RAJESH KUMAR');
  const [cardExpiry, setCardExpiry] = useState('11/28');
  const [cardCvv, setCardCvv] = useState('883');
  const [upiId, setUpiId] = useState('rajesh@okhdfcbank');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // Confirmed booking state
  const [confirmedBooking, setConfirmedBooking] = useState<BookingRecord | null>(null);
  const [showBoardingPass, setShowBoardingPass] = useState(false);

  // Price calculations
  const flightBasePrice = fareClassChoice === 'Flex' ? selectedFlight.flexPrice : selectedFlight.basePrice;
  const baggageCost = extraBaggageKg === 5 ? 900 : extraBaggageKg === 10 ? 1700 : extraBaggageKg === 15 ? 2400 : 0;
  const mealCost = mealSelection === 'South Indian Breakfast Box' ? 350 : mealSelection === 'Malabar Coastal Thali' ? 450 : 0;
  const priorityCost = priorityBoarding ? 300 : 0;
  const taxesAndFees = Math.round(flightBasePrice * 0.12);
  const totalAmount = (flightBasePrice + seatPrice + baggageCost + mealCost + priorityCost + taxesAndFees) * passengersCount;

  // Sorting
  const sortedFlights = [...flights].sort((a, b) => {
    if (filterSort === 'cheapest') return a.basePrice - b.basePrice;
    if (filterSort === 'fastest') return a.duration.localeCompare(b.duration);
    return a.departureTime.localeCompare(b.departureTime);
  });

  const validatePassengerForm = () => {
    const errors: Record<string, string> = {};
    if (!firstName.trim()) errors.firstName = 'First name is required';
    if (!lastName.trim()) errors.lastName = 'Last name is required';
    if (!email.trim() || !email.includes('@')) errors.email = 'Valid email is required';
    if (!phone.trim() || phone.length < 10) errors.phone = 'Valid 10-digit phone is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleProcessPayment = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      const newPnr = generatePnr();
      const newBooking: BookingRecord = {
        pnr: newPnr,
        passenger: {
          firstName: firstName || 'Rajesh',
          lastName: lastName || 'Kumar',
          email: email || 'passenger@example.com',
          phone: phone || '+91 98401 23456',
          dob
        },
        flight: {
          flightNumber: selectedFlight.flightNumber,
          fromCode,
          toCode,
          date: departureDate,
          departureTime: selectedFlight.departureTime,
          arrivalTime: selectedFlight.arrivalTime,
          duration: selectedFlight.duration,
          aircraft: selectedFlight.aircraft,
          terminal: selectedFlight.terminal || 'T1',
          gate: selectedFlight.gate || '3A'
        },
        seat: selectedSeat || '4A',
        fareType: fareClassChoice,
        extras: {
          baggageKg: extraBaggageKg,
          meal: mealSelection,
          priorityBoarding
        },
        payment: {
          method: paymentMethod,
          totalPaid: totalAmount,
          paidAt: new Date().toISOString(),
          maskedCard: paymentMethod === 'Card' ? '•••• •••• •••• 4242' : undefined
        },
        status: 'CONFIRMED'
      };

      setConfirmedBooking(newBooking);
      onBookingCreated?.(newBooking);
      setCurrentStep(7);
    }, 1200);
  };

  const stepsList = [
    { num: 1, label: 'Search' },
    { num: 2, label: 'Flight' },
    { num: 3, label: 'Passengers' },
    { num: 4, label: 'Seats' },
    { num: 5, label: 'Extras' },
    { num: 6, label: 'Payment' },
    { num: 7, label: 'Confirmed' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#07182D] border border-[#155FA0]/30 rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B2341] border-b border-[#155FA0]/30 shrink-0">
          <MmmLogo size="sm" showTagline={false} />
          <button
            onClick={onClose}
            className="p-1.5 text-[#64748B] hover:text-white rounded-lg hover:bg-[#155FA0]/30 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Header */}
        <div className="px-6 py-3 bg-[#07182D] border-b border-[#155FA0]/30 shrink-0 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[580px]">
            {stepsList.map(step => (
              <div
                key={step.num}
                className={`flex items-center gap-2 text-xs ${
                  currentStep === step.num
                    ? 'text-[#D7193F] font-bold'
                    : currentStep > step.num
                    ? 'text-emerald-400 font-semibold'
                    : 'text-[#64748B]'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                    currentStep === step.num
                      ? 'bg-[#D7193F] text-white shadow-md'
                      : currentStep > step.num
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                      : 'bg-[#0B2341] text-[#64748B] border border-[#155FA0]/30'
                  }`}
                >
                  {currentStep > step.num ? '✓' : `0${step.num}`}
                </div>
                <span className="uppercase tracking-wider">{step.label}</span>
                {step.num < 7 && <span className="text-[#155FA0]/50 ml-1">/</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable Content Zone */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* STEP 1: Search / Edit Route */}
          {currentStep === 1 && (
            <div className="space-y-6 max-w-xl mx-auto py-4">
              <div className="text-center">
                <span className="text-xs font-mono uppercase text-[#D7193F] tracking-wider font-semibold">
                  Step 01
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Plan Your Regional Journey
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  Select your origin, destination, and travel date across our South India network.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                      Origin Airport
                    </label>
                    <select
                      value={fromCode}
                      onChange={e => setFromCode(e.target.value)}
                      className="w-full bg-[#0B2341] border border-[#155FA0]/40 text-white text-xs p-3 rounded-xl font-medium focus:border-[#2F8FE8] outline-none"
                    >
                      {AIRPORTS.map(a => (
                        <option key={a.code} value={a.code}>
                          {a.code} — {a.city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                      Destination Airport
                    </label>
                    <select
                      value={toCode}
                      onChange={e => setToCode(e.target.value)}
                      className="w-full bg-[#0B2341] border border-[#155FA0]/40 text-white text-xs p-3 rounded-xl font-medium focus:border-[#2F8FE8] outline-none"
                    >
                      {AIRPORTS.filter(a => a.code !== fromCode).map(a => (
                        <option key={a.code} value={a.code}>
                          {a.code} — {a.city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                      Departure Date
                    </label>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={e => setDepartureDate(e.target.value)}
                      className="w-full bg-[#0B2341] border border-[#155FA0]/40 text-white text-xs p-3 rounded-xl font-mono focus:border-[#2F8FE8] outline-none"
                    >
                    </input>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                      Passengers
                    </label>
                    <select
                      value={passengersCount}
                      onChange={e => setPassengersCount(Number(e.target.value))}
                      className="w-full bg-[#0B2341] border border-[#155FA0]/40 text-white text-xs p-3 rounded-xl font-medium focus:border-[#2F8FE8] outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6].map(n => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'Adult' : 'Adults'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="w-full py-3 bg-[#D7193F] hover:bg-[#E3294E] hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg cursor-pointer"
                >
                  Find Available Flights
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Flight Results */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#155FA0]/30 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>{fromCode}</span>
                    <ArrowRight className="w-4 h-4 text-[#D7193F]" />
                    <span>{toCode}</span>
                    <span className="text-xs font-normal text-[#64748B] ml-2">
                      · {departureDate} · {passengersCount} Passenger(s)
                    </span>
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    Demonstration flight schedules. Select a fare to proceed.
                  </p>
                </div>

                {/* Filter and Sorting Options */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#64748B] flex items-center gap-1">
                    <Filter className="w-3.5 h-3.5" />
                    <span>Sort by:</span>
                  </span>
                  <div className="flex bg-[#0B2341] p-1 rounded-lg border border-[#155FA0]/40">
                    <button
                      onClick={() => setFilterSort('cheapest')}
                      className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                        filterSort === 'cheapest' ? 'bg-[#D7193F] text-white font-semibold' : 'text-[#E7ECF2] hover:text-white'
                      }`}
                    >
                      Cheapest
                    </button>
                    <button
                      onClick={() => setFilterSort('fastest')}
                      className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                        filterSort === 'fastest' ? 'bg-[#D7193F] text-white font-semibold' : 'text-[#E7ECF2] hover:text-white'
                      }`}
                    >
                      Fastest
                    </button>
                    <button
                      onClick={() => setFilterSort('departure')}
                      className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                        filterSort === 'departure' ? 'bg-[#D7193F] text-white font-semibold' : 'text-[#E7ECF2] hover:text-white'
                      }`}
                    >
                      Departure
                    </button>
                  </div>
                </div>
              </div>

              {/* Flight Result Cards */}
              <div className="space-y-3">
                {sortedFlights.map(flight => {
                  const isSelected = selectedFlight.id === flight.id;
                  const priceToDisplay = fareClassChoice === 'Flex' ? flight.flexPrice : flight.basePrice;

                  return (
                    <div
                      key={flight.id}
                      onClick={() => setSelectedFlight(flight)}
                      className={`p-5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0B2341] border-[#D7193F] shadow-lg ring-1 ring-[#D7193F]/40'
                          : 'bg-[#07182D] hover:bg-[#0B2341]/80 border-[#155FA0]/30'
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        {/* Flight Number & Equipment */}
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 bg-[#D7193F]/20 border border-[#D7193F]/40 text-[#D7193F] font-mono text-xs font-bold rounded">
                              {flight.flightNumber}
                            </span>
                            <span className="text-xs font-medium text-white">
                              {flight.aircraft}
                            </span>
                            <span className="text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-1.5 py-0.5 rounded">
                              {flight.status}
                            </span>
                          </div>
                          <div className="text-[11px] text-[#64748B]">
                            {flight.flightType} · Non-stop
                          </div>
                        </div>

                        {/* Times & Route */}
                        <div className="flex items-center gap-6">
                          <div className="text-left">
                            <span className="text-2xl font-bold font-mono text-white">
                              {flight.departureTime}
                            </span>
                            <span className="text-xs text-[#64748B] block font-mono">
                              {flight.fromCode}
                            </span>
                          </div>

                          <div className="flex flex-col items-center">
                            <span className="text-[11px] font-mono text-[#2F8FE8]">
                              {flight.duration}
                            </span>
                            <div className="w-20 sm:w-28 h-0.5 bg-[#155FA0]/40 relative my-1">
                              <Plane className="w-3.5 h-3.5 text-[#D7193F] absolute -top-1.5 left-1/2 -translate-x-1/2 rotate-90" />
                            </div>
                            <span className="text-[10px] text-[#64748B]">Direct</span>
                          </div>

                          <div className="text-right">
                            <span className="text-2xl font-bold font-mono text-white">
                              {flight.arrivalTime}
                            </span>
                            <span className="text-xs text-[#64748B] block font-mono">
                              {flight.toCode}
                            </span>
                          </div>
                        </div>

                        {/* Price & Selection Button */}
                        <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-[#155FA0]/30">
                          <div className="text-right">
                            <span className="text-xl font-bold font-mono text-white block">
                              ₹{priceToDisplay.toLocaleString('en-IN')}
                            </span>
                            <span className="text-[10px] text-[#64748B]">
                              per passenger · incl taxes
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={e => {
                              e.stopPropagation();
                              setSelectedFlight(flight);
                              setCurrentStep(3);
                            }}
                            className="px-5 py-2.5 bg-[#D7193F] hover:bg-[#E3294E] hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                          >
                            SELECT
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Passenger Details */}
          {currentStep === 3 && (
            <div className="space-y-6 max-w-xl mx-auto">
              <div className="border-b border-[#155FA0]/30 pb-3">
                <span className="text-xs font-mono uppercase text-[#D7193F] tracking-wider font-semibold">
                  Step 03
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Passenger Information
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  Enter official government identification details for flight manifest.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rajesh"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      className={`w-full bg-[#0B2341] border text-white text-xs p-3 rounded-xl focus:border-[#2F8FE8] outline-none ${
                        formErrors.firstName ? 'border-[#D7193F]' : 'border-[#155FA0]/40'
                      }`}
                    />
                    {formErrors.firstName && (
                      <span className="text-[10px] text-[#D7193F] mt-1 block">
                        {formErrors.firstName}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kumar"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      className={`w-full bg-[#0B2341] border text-white text-xs p-3 rounded-xl focus:border-[#2F8FE8] outline-none ${
                        formErrors.lastName ? 'border-[#D7193F]' : 'border-[#155FA0]/40'
                      }`}
                    />
                    {formErrors.lastName && (
                      <span className="text-[10px] text-[#D7193F] mt-1 block">
                        {formErrors.lastName}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rajesh@example.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className={`w-full bg-[#0B2341] border text-white text-xs p-3 rounded-xl focus:border-[#2F8FE8] outline-none ${
                        formErrors.email ? 'border-[#D7193F]' : 'border-[#155FA0]/40'
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-[10px] text-[#D7193F] mt-1 block">
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9840123456"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className={`w-full bg-[#0B2341] border text-white text-xs p-3 rounded-xl focus:border-[#2F8FE8] outline-none ${
                        formErrors.phone ? 'border-[#D7193F]' : 'border-[#155FA0]/40'
                      }`}
                    />
                    {formErrors.phone && (
                      <span className="text-[10px] text-[#D7193F] mt-1 block">
                        {formErrors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                    className="w-full bg-[#0B2341] border border-[#155FA0]/40 text-white text-xs p-3 rounded-xl font-mono focus:border-[#2F8FE8] outline-none"
                  />
                </div>

                <div className="flex gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="w-1/3 py-3 bg-[#0B2341] hover:bg-[#155FA0] text-[#E7ECF2] border border-[#155FA0]/40 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (validatePassengerForm()) {
                        setCurrentStep(4);
                      }
                    }}
                    className="w-2/3 py-3 bg-[#D7193F] hover:bg-[#E3294E] hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg cursor-pointer"
                  >
                    CONTINUE TO SEATS
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Interactive Cabin Seat Selection */}
          {currentStep === 4 && (
            <div className="space-y-5">
              <div className="border-b border-[#155FA0]/30 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono uppercase text-[#D7193F] tracking-wider font-semibold">
                    Step 04
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">
                    Select Your Cabin Seat
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Aircraft: {selectedFlight.aircraft} · Flight {selectedFlight.flightNumber}
                  </p>
                </div>
                <div className="text-xs bg-[#0B2341] px-3 py-1.5 rounded-lg border border-[#155FA0]/40">
                  <span className="text-[#64748B]">Selected: </span>
                  <span className="font-mono font-bold text-[#D7193F] text-sm">
                    {selectedSeat}
                  </span>
                  <span className="text-[#64748B] ml-1">(+₹{seatPrice})</span>
                </div>
              </div>

              <SeatMap
                aircraft={selectedFlight.aircraft}
                selectedSeat={selectedSeat}
                onSelectSeat={(seatId, price) => {
                  setSelectedSeat(seatId);
                  setSeatPrice(price);
                }}
              />

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="w-1/3 py-3 bg-[#0B2341] hover:bg-[#155FA0] text-[#E7ECF2] border border-[#155FA0]/40 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(5)}
                  className="w-2/3 py-3 bg-[#D7193F] hover:bg-[#E3294E] hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg cursor-pointer"
                >
                  CONFIRM SEAT & PROCEED
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Extras */}
          {currentStep === 5 && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="border-b border-[#155FA0]/30 pb-3">
                <span className="text-xs font-mono uppercase text-[#D7193F] tracking-wider font-semibold">
                  Step 05
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Enhance Your Flight
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  Optional baggage, regional chef meals, and priority travel services.
                </p>
              </div>

              {/* Extra Baggage Block */}
              <div className="bg-[#0B2341] border border-[#155FA0]/30 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Luggage className="w-5 h-5 text-[#2F8FE8]" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Check-in Baggage Upgrade</h4>
                    <span className="text-xs text-[#64748B]">
                      Standard allowance: 15 kg check-in + 7 kg cabin bag included.
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  {[
                    { kg: 0, label: 'Standard 15kg', price: 0 },
                    { kg: 5, label: '+5 kg', price: 900 },
                    { kg: 10, label: '+10 kg', price: 1700 },
                    { kg: 15, label: '+15 kg', price: 2400 },
                  ].map(b => (
                    <button
                      key={b.kg}
                      type="button"
                      onClick={() => setExtraBaggageKg(b.kg)}
                      className={`p-3 rounded-lg border text-center transition-colors cursor-pointer ${
                        extraBaggageKg === b.kg
                          ? 'bg-[#D7193F] border-[#D7193F] text-white font-bold shadow-md'
                          : 'bg-[#07182D] border-[#155FA0]/30 text-[#E7ECF2] hover:text-white hover:border-[#2F8FE8]/50'
                      }`}
                    >
                      <div className="font-semibold">{b.label}</div>
                      <div className="text-[10px] mt-0.5 opacity-80">
                        {b.price === 0 ? 'Free' : `+₹${b.price}`}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Inflight Meal Block */}
              <div className="bg-[#0B2341] border border-[#155FA0]/30 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Coffee className="w-5 h-5 text-[#F28C28]" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Inflight Meal Selection</h4>
                    <span className="text-xs text-[#64748B]">
                      Freshly prepared regional South Indian culinary options.
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'None', label: 'No Meal Added', price: 0 },
                    { id: 'South Indian Breakfast Box', label: 'S. Indian Breakfast Box (Idli/Vada/Upma)', price: 350 },
                    { id: 'Malabar Coastal Thali', label: 'Malabar Coastal Thali', price: 450 },
                  ].map(m => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMealSelection(m.id)}
                      className={`p-3 rounded-lg border text-left transition-colors flex flex-col justify-between cursor-pointer ${
                        mealSelection === m.id
                          ? 'bg-[#F28C28]/20 border-[#F28C28] text-white font-bold shadow-md'
                          : 'bg-[#07182D] border-[#155FA0]/30 text-[#E7ECF2] hover:text-white hover:border-[#2F8FE8]/50'
                      }`}
                    >
                      <div className="text-xs leading-snug">{m.label}</div>
                      <div className="text-[11px] text-[#F28C28] mt-2 font-mono">
                        {m.price === 0 ? 'Included' : `+₹${m.price}`}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Priority Boarding */}
              <div className="bg-[#0B2341] border border-[#155FA0]/30 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#2F8FE8]" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Priority Express Boarding</h4>
                    <span className="text-xs text-[#64748B]">
                      Dedicated priority queue at the gate and fast-track boarding (+₹300).
                    </span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={priorityBoarding}
                  onChange={e => setPriorityBoarding(e.target.checked)}
                  className="w-5 h-5 accent-[#D7193F] rounded cursor-pointer"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="w-1/3 py-3 bg-[#0B2341] hover:bg-[#155FA0] text-[#E7ECF2] border border-[#155FA0]/40 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(6)}
                  className="w-2/3 py-3 bg-[#D7193F] hover:bg-[#E3294E] hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg cursor-pointer"
                >
                  CONTINUE TO PAYMENT
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: Simulated Payment */}
          {currentStep === 6 && (
            <div className="space-y-6 max-w-xl mx-auto">
              <div className="border-b border-[#155FA0]/30 pb-3">
                <span className="text-xs font-mono uppercase text-[#D7193F] tracking-wider font-semibold">
                  Step 06
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Secure Checkout
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  Simulated airline transaction. No real payment will be charged.
                </p>
              </div>

              {/* Order Breakdown Box */}
              <div className="bg-[#0B2341] border border-[#155FA0]/30 rounded-xl p-4 space-y-2 text-xs">
                <div className="flex justify-between text-[#E7ECF2]">
                  <span>Flight Fare ({selectedFlight.flightNumber} · {fromCode} → {toCode}):</span>
                  <span className="font-mono">₹{flightBasePrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-[#E7ECF2]">
                  <span>Selected Seat ({selectedSeat}):</span>
                  <span className="font-mono">₹{seatPrice}</span>
                </div>
                {baggageCost > 0 && (
                  <div className="flex justify-between text-[#E7ECF2]">
                    <span>Extra Baggage (+{extraBaggageKg} kg):</span>
                    <span className="font-mono">₹{baggageCost}</span>
                  </div>
                )}
                {mealCost > 0 && (
                  <div className="flex justify-between text-[#E7ECF2]">
                    <span>Inflight Meal ({mealSelection}):</span>
                    <span className="font-mono">₹{mealCost}</span>
                  </div>
                )}
                {priorityCost > 0 && (
                  <div className="flex justify-between text-[#E7ECF2]">
                    <span>Priority Boarding:</span>
                    <span className="font-mono">₹{priorityCost}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#64748B] pt-1 border-t border-[#155FA0]/20">
                  <span>Aviation Taxes & RCS Fees:</span>
                  <span className="font-mono">₹{taxesAndFees}</span>
                </div>
                <div className="flex justify-between text-white font-bold text-sm pt-2 border-t border-[#155FA0]/20">
                  <span>Total Amount Due:</span>
                  <span className="font-mono text-[#D7193F] text-lg">
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <label className="text-[11px] font-semibold uppercase text-[#64748B] block">
                  Select Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Card', 'UPI', 'Net Banking'] as const).map(method => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setPaymentMethod(method)}
                      className={`p-3 rounded-lg border text-xs font-semibold text-center transition-colors cursor-pointer ${
                        paymentMethod === method
                          ? 'bg-[#D7193F] border-[#D7193F] text-white shadow-md'
                          : 'bg-[#0B2341] border-[#155FA0]/40 text-[#E7ECF2] hover:text-white'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>

                {/* Card Fields */}
                {paymentMethod === 'Card' && (
                  <div className="bg-[#0B2341] border border-[#155FA0]/30 rounded-xl p-4 space-y-3 text-xs">
                    <div>
                      <label className="text-[10px] uppercase text-[#64748B] block mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={e => setCardNumber(e.target.value)}
                        className="w-full bg-[#07182D] border border-[#155FA0]/40 text-white text-xs p-2.5 rounded-lg font-mono focus:border-[#2F8FE8] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase text-[#64748B] block mb-1">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        value={cardHolder}
                        onChange={e => setCardHolder(e.target.value)}
                        className="w-full bg-[#07182D] border border-[#155FA0]/40 text-white text-xs p-2.5 rounded-lg focus:border-[#2F8FE8] outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] uppercase text-[#64748B] block mb-1">
                          Expiry MM/YY
                        </label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={e => setCardExpiry(e.target.value)}
                          className="w-full bg-[#07182D] border border-[#155FA0]/40 text-white text-xs p-2.5 rounded-lg font-mono focus:border-[#2F8FE8] outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase text-[#64748B] block mb-1">
                          CVV
                        </label>
                        <input
                          type="password"
                          value={cardCvv}
                          onChange={e => setCardCvv(e.target.value)}
                          className="w-full bg-[#07182D] border border-[#155FA0]/40 text-white text-xs p-2.5 rounded-lg font-mono focus:border-[#2F8FE8] outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* UPI Fields */}
                {paymentMethod === 'UPI' && (
                  <div className="bg-[#0B2341] border border-[#155FA0]/30 rounded-xl p-4 space-y-2 text-xs">
                    <label className="text-[10px] uppercase text-[#64748B] block mb-1">
                      Virtual Payment Address (UPI ID)
                    </label>
                    <input
                      type="text"
                      value={upiId}
                      onChange={e => setUpiId(e.target.value)}
                      placeholder="username@upi"
                      className="w-full bg-[#07182D] border border-[#155FA0]/40 text-white text-xs p-2.5 rounded-lg font-mono focus:border-[#2F8FE8] outline-none"
                    />
                    <span className="text-[10px] text-[#64748B] block">
                      A simulation collect request will be approved instantly.
                    </span>
                  </div>
                )}

                {/* Net Banking */}
                {paymentMethod === 'Net Banking' && (
                  <div className="bg-[#0B2341] border border-[#155FA0]/30 rounded-xl p-4 text-xs">
                    <label className="text-[10px] uppercase text-[#64748B] block mb-2">
                      Select Bank
                    </label>
                    <select className="w-full bg-[#07182D] border border-[#155FA0]/40 text-white text-xs p-2.5 rounded-lg focus:border-[#2F8FE8] outline-none">
                      <option>HDFC Bank</option>
                      <option>ICICI Bank</option>
                      <option>State Bank of India</option>
                      <option>Axis Bank</option>
                      <option>Kotak Mahindra Bank</option>
                    </select>
                  </div>
                )}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  disabled={isProcessingPayment}
                  onClick={() => setCurrentStep(5)}
                  className="w-1/3 py-3 bg-[#0B2341] hover:bg-[#155FA0] text-[#E7ECF2] border border-[#155FA0]/40 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50 cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={isProcessingPayment}
                  onClick={handleProcessPayment}
                  className="w-2/3 py-3 bg-[#D7193F] hover:bg-[#E3294E] hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isProcessingPayment ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>AUTHORIZING TRANSACTION...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      <span>PAY ₹{totalAmount.toLocaleString('en-IN')} &amp; CONFIRM</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 7: Confirmation */}
          {currentStep === 7 && confirmedBooking && (
            <div className="space-y-6 text-center max-w-xl mx-auto py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-950/40">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider font-semibold">
                  BOOKING CONFIRMED
                </span>
                <h3 className="text-3xl font-bold text-white mt-1">
                  Your Journey Is Ready
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  A confirmation e-ticket has been generated with your booking reference.
                </p>
              </div>

              {/* PNR Banner */}
              <div className="bg-[#0B2341] border-2 border-dashed border-[#D7193F]/60 rounded-2xl p-5">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#64748B] block mb-1">
                  BOOKING REFERENCE (PNR)
                </span>
                <span className="text-4xl font-mono font-extrabold text-[#D7193F] tracking-widest block">
                  {confirmedBooking.pnr}
                </span>
                <span className="text-[11px] text-[#64748B] mt-2 block">
                  Save this code to check in, view flight status, or manage your booking.
                </span>
              </div>

              {/* Itinerary Quick Summary */}
              <div className="bg-[#0B2341] border border-[#155FA0]/30 rounded-xl p-4 text-xs space-y-2 text-left">
                <div className="flex justify-between py-1 border-b border-[#155FA0]/20">
                  <span className="text-[#64748B]">Passenger:</span>
                  <span className="text-white font-medium">
                    {confirmedBooking.passenger.firstName} {confirmedBooking.passenger.lastName}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#155FA0]/20">
                  <span className="text-[#64748B]">Flight &amp; Route:</span>
                  <span className="text-white font-medium">
                    {confirmedBooking.flight.flightNumber} ({confirmedBooking.flight.fromCode} → {confirmedBooking.flight.toCode})
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#155FA0]/20">
                  <span className="text-[#64748B]">Date &amp; Departure:</span>
                  <span className="text-white font-medium">
                    {confirmedBooking.flight.date} · {confirmedBooking.flight.departureTime}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#155FA0]/20">
                  <span className="text-[#64748B]">Confirmed Seat:</span>
                  <span className="text-[#D7193F] font-mono font-bold">
                    {confirmedBooking.seat}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#64748B]">Total Paid:</span>
                  <span className="text-emerald-400 font-mono font-bold">
                    ₹{confirmedBooking.payment.totalPaid.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowBoardingPass(true)}
                  className="flex-1 py-3 bg-[#D7193F] hover:bg-[#E3294E] hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg cursor-pointer"
                >
                  VIEW &amp; DOWNLOAD E-TICKET
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 bg-[#0B2341] hover:bg-[#155FA0] text-[#E7ECF2] border border-[#155FA0]/40 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  RETURN TO HOME
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Boarding Pass Popover Modal */}
      {showBoardingPass && confirmedBooking && (
        <BoardingPassModal
          booking={confirmedBooking}
          onClose={() => setShowBoardingPass(false)}
        />
      )}
    </div>
  );
};
