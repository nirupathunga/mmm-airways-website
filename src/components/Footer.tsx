import React from 'react';
import { MmmLogo } from '../assets/logo';
import { Plane, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenBooking: () => void;
  onOpenFlightStatus: () => void;
  onOpenManageBooking: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenBooking,
  onOpenFlightStatus,
  onOpenManageBooking,
  onOpenContact
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07182D] border-t border-[#155FA0]/30 text-[#E7ECF2] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <MmmLogo size="md" showTagline={true} />

            <p className="text-[#E7ECF2]/80 text-xs leading-relaxed max-w-sm pt-2">
              MMM Airways is building a regional airline focused on South India, with a larger vision to develop an integrated aviation ecosystem covering scheduled flights, charter, helicopter &amp; seaplane operations, MRO and flight training.
            </p>

            <div className="pt-2 text-[11px] text-[#2F8FE8] font-mono tracking-wider">
              BEYOND THE SKY · CONNECTING SOUTH INDIA
            </div>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-white font-bold block">
              Explore
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="text-[#F5F7FA] hover:text-[#2F8FE8] transition-colors cursor-pointer"
                >
                  Book a Flight
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('destinations')}
                  className="text-[#F5F7FA] hover:text-[#2F8FE8] transition-colors cursor-pointer"
                >
                  Destinations
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('ecosystem')}
                  className="text-[#F5F7FA] hover:text-[#2F8FE8] transition-colors cursor-pointer"
                >
                  Aviation Ecosystem
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('fleet')}
                  className="text-[#F5F7FA] hover:text-[#2F8FE8] transition-colors cursor-pointer"
                >
                  Fleet (ATR &amp; A320)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('experience')}
                  className="text-[#F5F7FA] hover:text-[#2F8FE8] transition-colors cursor-pointer"
                >
                  Passenger Experience
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('cargo')}
                  className="text-[#F5F7FA] hover:text-[#2F8FE8] transition-colors cursor-pointer"
                >
                  Air Cargo Logistics
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('about')}
                  className="text-[#F5F7FA] hover:text-[#2F8FE8] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('careers')}
                  className="text-[#F5F7FA] hover:text-[#2F8FE8] transition-colors cursor-pointer"
                >
                  Careers &amp; Talent
                </button>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-white font-bold block">
              Passenger Support
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={onOpenFlightStatus}
                  className="text-[#F5F7FA] hover:text-[#2F8FE8] transition-colors cursor-pointer"
                >
                  Flight Status Radar
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenManageBooking}
                  className="text-[#F5F7FA] hover:text-[#2F8FE8] transition-colors cursor-pointer"
                >
                  Manage Booking (PNR Lookup)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="text-[#F5F7FA] hover:text-[#2F8FE8] transition-colors cursor-pointer"
                >
                  Contact Customer Desk
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="text-[#F5F7FA] hover:text-[#2F8FE8] transition-colors cursor-pointer"
                >
                  Baggage &amp; Fare Rules
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="text-[#F5F7FA] hover:text-[#2F8FE8] transition-colors cursor-pointer"
                >
                  Charter &amp; NSOP Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Scroll to Top & Regional Badge */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[#0B2341] hover:bg-[#155FA0] border border-[#155FA0]/40 flex items-center justify-center text-[#F5F7FA] hover:text-white transition-colors cursor-pointer shadow-md"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>

            <div className="text-left md:text-right mt-6 md:mt-0 text-[11px] text-[#64748B] space-y-1 font-mono">
              <div>Hub: Bengaluru · Chennai</div>
              <div>UDAN / RCS Network</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#155FA0]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748B]">
          <div>
            © 2026 MMM Airways. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#E7ECF2] cursor-pointer">Terms &amp; Conditions</span>
            <span className="hover:text-[#E7ECF2] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#E7ECF2] cursor-pointer">Cookie Policy</span>
            <span className="hover:text-[#E7ECF2] cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
