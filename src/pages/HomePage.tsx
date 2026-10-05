import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { FlightSearch, SearchParams } from '../components/FlightSearch';
import { Introduction } from '../components/Introduction';
import { RouteMap } from '../components/RouteMap';
import { DestinationExplorer } from '../components/DestinationExplorer';
import { MoreThanAirline } from '../components/MoreThanAirline';
import { FleetSection } from '../components/FleetSection';
import { GrowthVision } from '../components/GrowthVision';
import { RouteExplorer } from '../components/RouteExplorer';
import { ExperienceSection } from '../components/ExperienceSection';
import { CargoSection } from '../components/CargoSection';
import { AboutSection } from '../components/AboutSection';
import { CareersSection } from '../components/CareersSection';
import { FinalCta } from '../components/FinalCta';
import { Airport, AIRPORTS } from '../data/airports';

interface HomePageProps {
  onSearchFlights: (params: SearchParams) => void;
  onOpenBookingWithRoute: (fromCode: string, toCode: string) => void;
  onOpenBooking: () => void;
  onOpenCharter: (service?: string) => void;
  onOpenContact: (category?: 'CUSTOMER SUPPORT' | 'CARGO' | 'PARTNERSHIPS' | 'CAREERS') => void;
  onSelectAirportDetail: (airport: Airport) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSearchFlights,
  onOpenBookingWithRoute,
  onOpenBooking,
  onOpenCharter,
  onOpenContact,
  onSelectAirportDetail
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full overflow-hidden">
      {/* 01: CINEMATIC HERO */}
      <Hero
        onBookFlight={onOpenBooking}
        onExploreDestinations={() => scrollTo('destinations')}
      />

      {/* 02: HERO FLIGHT SEARCH INTERFACE */}
      <section id="flights" className="relative -mt-16 sm:-mt-24 px-4 sm:px-6 lg:px-8 z-30">
        <FlightSearch onSearch={onSearchFlights} />
      </section>

      {/* 03: INTRODUCTION (CLOSER CITIES. BIGGER POSSIBILITIES.) */}
      <Introduction
        onDiscoverMore={() => scrollTo('about')}
        onExploreEcosystem={() => scrollTo('ecosystem')}
      />

      {/* 04: NETWORK SECTION (SOUTH INDIA, CONNECTED.) */}
      <section id="network" className="py-24 bg-gradient-to-b from-[#07182D] to-[#0B2341] border-t border-[#155FA0]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D7193F] font-bold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7193F]" />
              <span>REGIONAL ROUTE RADAR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              South India, Connected.
            </h2>
            <p className="text-sm sm:text-base text-[#E7ECF2] mt-3 leading-relaxed [text-wrap:balance]">
              From bustling metropolitan hubs to emerging regional destinations, our network is designed to bring more of South India within reach.
            </p>
          </div>

          <RouteMap
            onSelectDestination={onSelectAirportDetail}
            onBookFlight={onOpenBookingWithRoute}
          />
        </div>
      </section>

      {/* 05: DESTINATIONS EXPLORER (WHERE WILL YOU GO NEXT?) */}
      <DestinationExplorer
        onSelectAirport={onSelectAirportDetail}
        onBookTo={destCode => onOpenBookingWithRoute('BLR', destCode)}
      />

      {/* 06: MORE THAN AN AIRLINE (OUR AVIATION ECOSYSTEM) */}
      <MoreThanAirline
        onExploreFlights={onOpenBooking}
        onExploreCharter={() => onOpenCharter('Private Corporate Charter')}
        onExploreDivision={divId => {
          if (divId === 'charter-nsop' || divId === 'heli-seaplane') {
            onOpenCharter();
          } else {
            onOpenContact('PARTNERSHIPS');
          }
        }}
      />

      {/* 07: FLEET (BUILT FOR THE JOURNEY.) */}
      <FleetSection onBookFlight={onOpenBooking} />

      {/* 08: GROWTH VISION (FROM REGIONAL CONNECTIONS TO A NATIONAL NETWORK.) */}
      <GrowthVision />

      {/* 09: ROUTE EXPLORER (FIND YOUR CONNECTION.) */}
      <RouteExplorer onBookRoute={onOpenBookingWithRoute} />

      {/* 10: EXPERIENCE (YOUR JOURNEY. OUR PRIORITY.) */}
      <ExperienceSection onBookFlight={onOpenBooking} />

      {/* 11: CARGO (MORE THAN PASSENGERS. MOVING WHAT MATTERS.) */}
      <CargoSection onContactCargo={() => onOpenContact('CARGO')} />

      {/* ABOUT & CORPORATE PURPOSE */}
      <AboutSection
        onExploreEcosystem={() => scrollTo('ecosystem')}
        onExploreFleet={() => scrollTo('fleet')}
      />

      {/* CAREERS (BUILD THE FUTURE OF FLIGHT) */}
      <CareersSection />

      {/* 12: FINAL HOMEPAGE CTA (WHERE WILL YOU FLY NEXT?) */}
      <FinalCta
        onBookFlight={onOpenBooking}
        onExploreDestinations={() => scrollTo('destinations')}
      />
    </main>
  );
};
