import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BookingModal } from './components/BookingModal';
import { FlightStatusModal } from './components/FlightStatusModal';
import { ManageBookingModal } from './components/ManageBookingModal';
import { ContactModal } from './components/ContactModal';
import { CharterInquiryModal } from './components/CharterInquiryModal';
import { DestinationModal } from './components/DestinationModal';
import { SearchParams } from './components/FlightSearch';
import { Airport, AIRPORTS } from './data/airports';
import { BookingRecord, INITIAL_MOCK_BOOKINGS } from './data/mockBookings';

export default function App() {
  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialSearch, setBookingInitialSearch] = useState<SearchParams | null>(null);
  const [isFlightStatusOpen, setIsFlightStatusOpen] = useState(false);
  const [flightStatusFlightNumber, setFlightStatusFlightNumber] = useState('MMM 101');
  const [isManageBookingOpen, setIsManageBookingOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactCategory, setContactCategory] = useState<'CUSTOMER SUPPORT' | 'CARGO' | 'PARTNERSHIPS' | 'CAREERS'>('CUSTOMER SUPPORT');
  const [isCharterOpen, setIsCharterOpen] = useState(false);
  const [charterServiceType, setCharterServiceType] = useState('Private Corporate Charter');
  const [selectedAirportDetail, setSelectedAirportDetail] = useState<Airport | null>(null);

  // Active user bookings (seeded + dynamically created during session)
  const [userBookings, setUserBookings] = useState<BookingRecord[]>(INITIAL_MOCK_BOOKINGS);

  // Navigation handlers
  const handleOpenBooking = () => {
    setBookingInitialSearch(null);
    setIsBookingOpen(true);
  };

  const handleSearchFlights = (params: SearchParams) => {
    setBookingInitialSearch(params);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithRoute = (fromCode: string, toCode: string) => {
    const fromAirport = AIRPORTS.find(a => a.code === fromCode) || AIRPORTS[0];
    const toAirport = AIRPORTS.find(a => a.code === toCode) || AIRPORTS[3];
    setBookingInitialSearch({
      tripType: 'oneWay',
      fromAirport,
      toAirport,
      departureDate: '2026-10-12',
      returnDate: '2026-10-18',
      passengers: 1,
      cabinClass: 'Standard'
    });
    setIsBookingOpen(true);
  };

  const handleBookingCreated = (newBooking: BookingRecord) => {
    setUserBookings(prev => [newBooking, ...prev]);
  };

  const handleOpenContact = (category: 'CUSTOMER SUPPORT' | 'CARGO' | 'PARTNERSHIPS' | 'CAREERS' = 'CUSTOMER SUPPORT') => {
    setContactCategory(category);
    setIsContactOpen(true);
  };

  const handleOpenCharter = (service: string = 'Private Corporate Charter') => {
    setCharterServiceType(service);
    setIsCharterOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07182D] text-[#0B2341] flex flex-col font-sans selection:bg-[#D7193F] selection:text-white">
      {/* Global Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenFlightStatus={() => setIsFlightStatusOpen(true)}
        onOpenManageBooking={() => setIsManageBookingOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Primary Homepage Content (all 12 required sections) */}
      <div className="flex-1">
        <HomePage
          onSearchFlights={handleSearchFlights}
          onOpenBookingWithRoute={handleOpenBookingWithRoute}
          onOpenBooking={handleOpenBooking}
          onOpenCharter={handleOpenCharter}
          onOpenContact={handleOpenContact}
          onSelectAirportDetail={airport => setSelectedAirportDetail(airport)}
        />
      </div>

      {/* Global Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenBooking={handleOpenBooking}
        onOpenFlightStatus={() => setIsFlightStatusOpen(true)}
        onOpenManageBooking={() => setIsManageBookingOpen(true)}
        onOpenContact={() => handleOpenContact('CUSTOMER SUPPORT')}
      />

      {/* Interactive Modals */}
      {isBookingOpen && (
        <BookingModal
          initialSearch={bookingInitialSearch}
          onClose={() => setIsBookingOpen(false)}
          onBookingCreated={handleBookingCreated}
        />
      )}

      {isFlightStatusOpen && (
        <FlightStatusModal
          initialFlightNumber={flightStatusFlightNumber}
          onClose={() => setIsFlightStatusOpen(false)}
        />
      )}

      {isManageBookingOpen && (
        <ManageBookingModal
          userBookings={userBookings}
          onClose={() => setIsManageBookingOpen(false)}
        />
      )}

      {isContactOpen && (
        <ContactModal
          initialCategory={contactCategory}
          onClose={() => setIsContactOpen(false)}
        />
      )}

      {isCharterOpen && (
        <CharterInquiryModal
          serviceType={charterServiceType}
          onClose={() => setIsCharterOpen(false)}
        />
      )}

      {selectedAirportDetail && (
        <DestinationModal
          airport={selectedAirportDetail}
          onClose={() => setSelectedAirportDetail(null)}
          onBookFlight={handleOpenBookingWithRoute}
        />
      )}
    </div>
  );
}
