import React, { useState, useEffect } from 'react';
import { MmmLogo } from '../assets/logo';
import { Menu, X, Plane, Search, Clock, UserCheck, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenFlightStatus: () => void;
  onOpenManageBooking: () => void;
  activeSection?: string;
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenFlightStatus,
  onOpenManageBooking,
  activeSection = 'home',
  onNavigateSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'flights', label: 'Flights' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'fleet', label: 'Fleet' },
    { id: 'experience', label: 'Experience' },
    { id: 'cargo', label: 'Cargo' },
    { id: 'about', label: 'About' },
    { id: 'careers', label: 'Careers' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigateSection?.(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07182D]/95 backdrop-blur-md border-b border-[#155FA0]/30 py-3 shadow-xl'
          : 'bg-gradient-to-b from-[#07182D]/95 via-[#07182D]/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: MMM AIRWAYS Logo */}
          <div
            onClick={() => handleLinkClick('home')}
            className="cursor-pointer shrink-0 transition-transform duration-200 hover:scale-[1.02] flex items-center"
            title="MMM Airways - Home"
          >
            <MmmLogo size="sm" />
          </div>

          {/* Zone 2: Navigation Links (single-line, hover underlines) */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold tracking-wide text-[#F5F7FA]">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors whitespace-nowrap py-1 relative ${
                  activeSection === link.id ? 'text-[#D7193F] font-bold' : 'text-[#F5F7FA] hover:text-[#2F8FE8]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D7193F] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Actions (Flight Status, Manage Booking, Book Flight) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenFlightStatus}
              className="px-3 py-1.5 text-xs font-medium text-[#F5F7FA] hover:text-white rounded-lg hover:bg-[#0B2341] transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Clock className="w-3.5 h-3.5 text-[#2F8FE8]" />
              <span>Flight Status</span>
            </button>

            <button
              type="button"
              onClick={onOpenManageBooking}
              className="px-3 py-1.5 text-xs font-medium text-[#F5F7FA] hover:text-white rounded-lg hover:bg-[#0B2341] transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#2F8FE8]" />
              <span>Manage Booking</span>
            </button>

            <button
              type="button"
              onClick={onOpenBooking}
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#D7193F] hover:bg-[#E3294E] hover:shadow-[0_0_20px_rgba(215,25,63,0.45)] rounded-lg shadow-md transition-all hover:scale-[1.02] flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Plane className="w-3.5 h-3.5" />
              <span>BOOK A FLIGHT</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D7193F] rounded-lg sm:hidden"
            >
              BOOK
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F7FA] hover:text-white rounded-lg hover:bg-[#0B2341] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#07182D]/98 border-b border-[#155FA0]/30 px-6 py-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-slate-700/60">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFlightStatus();
              }}
              className="py-2.5 px-3 bg-[#0B2341] border border-[#155FA0]/40 text-xs font-medium text-[#F5F7FA] rounded-lg flex items-center justify-center gap-1.5"
            >
              <Clock className="w-3.5 h-3.5 text-[#2F8FE8]" />
              <span>Flight Status</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenManageBooking();
              }}
              className="py-2.5 px-3 bg-[#0B2341] border border-[#155FA0]/40 text-xs font-medium text-[#F5F7FA] rounded-lg flex items-center justify-center gap-1.5"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#2F8FE8]" />
              <span>Manage Booking</span>
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left py-2 px-3 text-sm font-semibold text-[#F5F7FA] hover:text-white hover:bg-[#0B2341] rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#2F8FE8]" />
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-700/60">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#D7193F] hover:bg-[#E3294E] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              <Plane className="w-4 h-4" />
              <span>BOOK A FLIGHT</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
