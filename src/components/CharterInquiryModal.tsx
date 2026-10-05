import React, { useState } from 'react';
import { X, Plane, CheckCircle, ShieldCheck, Compass, Send } from 'lucide-react';

interface CharterInquiryModalProps {
  onClose: () => void;
  serviceType?: string;
}

export const CharterInquiryModal: React.FC<CharterInquiryModalProps> = ({
  onClose,
  serviceType = 'Private Corporate Charter'
}) => {
  const [selectedService, setSelectedService] = useState(serviceType);
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [origin, setOrigin] = useState('Bengaluru (BLR)');
  const [destination, setDestination] = useState('Kochi (COK)');
  const [passengers, setPassengers] = useState('4-8');
  const [travelDate, setTravelDate] = useState('2026-10-25');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName && email && phone) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#07182D] border border-[#155FA0]/30 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B2341] border-b border-[#155FA0]/30">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#F28C28] font-bold">
              BESPOKE AVIATION
            </span>
            <h3 className="text-lg font-bold text-white">Charter &amp; Air Mobility Desk</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#64748B] hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#F28C28]/15 border-2 border-[#F28C28] flex items-center justify-center mx-auto text-[#F28C28] shadow-xl">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Inquiry Registered</h4>
              <p className="text-xs text-[#E7ECF2] max-w-sm mx-auto leading-relaxed">
                Your flight request for <strong>{selectedService}</strong> has been assigned to our NSOP charter operations concierge. We will furnish an aircraft itinerary and operational feasibility summary.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[#0B2341] hover:bg-[#155FA0] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors border border-[#155FA0]/40 cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                  Flight Service Type
                </label>
                <select
                  value={selectedService}
                  onChange={e => setSelectedService(e.target.value)}
                  className="w-full bg-[#0B2341] border border-[#155FA0]/40 text-white p-3 rounded-xl focus:border-[#2F8FE8] outline-none"
                >
                  <option>Private Corporate Charter (ATR / Executive Jet)</option>
                  <option>Medical Evacuation &amp; Aero-Ambulance</option>
                  <option>Helicopter Regional Shuttle (Hilly / Remote Terrain)</option>
                  <option>Amphibious Seaplane (Backwaters / Island Corridors)</option>
                  <option>VIP Pilgrimage &amp; Leisure Tourism Charter</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                    Origin / Departure Base *
                  </label>
                  <input
                    type="text"
                    value={origin}
                    onChange={e => setOrigin(e.target.value)}
                    className="w-full bg-[#0B2341] border border-[#155FA0]/40 text-white p-3 rounded-xl focus:border-[#2F8FE8] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                    Destination / Target Landing *
                  </label>
                  <input
                    type="text"
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                    className="w-full bg-[#0B2341] border border-[#155FA0]/40 text-white p-3 rounded-xl focus:border-[#2F8FE8] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                    Tentative Travel Date
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={e => setTravelDate(e.target.value)}
                    className="w-full bg-[#0B2341] border border-[#155FA0]/40 text-white p-3 rounded-xl font-mono focus:border-[#2F8FE8] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                    Expected Passenger Count
                  </label>
                  <select
                    value={passengers}
                    onChange={e => setPassengers(e.target.value)}
                    className="w-full bg-[#0B2341] border border-[#155FA0]/40 text-white p-3 rounded-xl focus:border-[#2F8FE8] outline-none"
                  >
                    <option>1 - 4 Passengers</option>
                    <option>4 - 8 Passengers</option>
                    <option>9 - 19 Passengers (Seaplane / Light)</option>
                    <option>20 - 72 Passengers (Group ATR Charter)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full bg-[#0B2341] border border-[#155FA0]/40 text-white p-3 rounded-xl focus:border-[#2F8FE8] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Enterprise Name"
                    value={organization}
                    onChange={e => setOrganization(e.target.value)}
                    className="w-full bg-[#0B2341] border border-[#155FA0]/40 text-white p-3 rounded-xl focus:border-[#2F8FE8] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-[#0B2341] border border-[#155FA0]/40 text-white p-3 rounded-xl focus:border-[#2F8FE8] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                    Direct Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98000 00000"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full bg-[#0B2341] border border-[#155FA0]/40 text-white p-3 rounded-xl focus:border-[#2F8FE8] outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#D7193F] hover:bg-[#E3294E] hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>REQUEST CHARTER FEASIBILITY &amp; QUOTE</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
