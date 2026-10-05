import React, { useState } from 'react';
import { Smartphone, Network, TrendingUp, Compass, ArrowRight, ShieldCheck, Coffee, Armchair, Sparkles, Check } from 'lucide-react';

interface ExperienceSectionProps {
  onBookFlight: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onBookFlight }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const featureTabs = [
    {
      id: 'cabin',
      name: 'Armonia Cabin',
      badge: '2x2 CABIN COMFORT',
      title: 'No Middle Seat. Ever.',
      description:
        'Step aboard the modern Armonia cabin featuring 2x2 seating on our ATR 72-600 fleet. Enjoy wider aisle clearance, ergonomic Italian-crafted leather seating, and expansive overhead bins designed for regional carry-on luggage.',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
      highlights: ['Wider 18-inch seat width', 'Generous 30-inch pitch', 'Quiet propeller dampening technology', 'Zero middle seats throughout']
    },
    {
      id: 'flavours',
      name: 'Regional Flavours',
      badge: 'CULINARY IDENTITY',
      title: 'South Indian Hospitality at 20,000 Feet',
      description:
        'Savor authentic, freshly brewed South Indian filter coffee sourced from Coorg and Chikmagalur estates, paired with savory local treats and wholesome artisanal refreshments crafted for short-haul journeys.',
      imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
      highlights: ['Fresh estate filter coffee', 'Nutritious millet savory snacks', 'Artisanal regional confectioneries', 'Complimentary bottled water']
    },
    {
      id: 'digital',
      name: 'Digital Simplicity',
      badge: 'EFFORTLESS TRANSIT',
      title: 'From Booking to Gate in Moments',
      description:
        'Experience hassle-free travel with intuitive 60-second web check-in, real-time WhatsApp and SMS flight radar notifications, and digital mobile boarding passes compatible with DigiYatra biometric gates.',
      imageUrl: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1000&q=80',
      highlights: ['DigiYatra gate compatibility', 'Live gate & baggage radar status', 'Instant mobile boarding pass', 'Flexible same-day reschedule options']
    },
    {
      id: 'crew',
      name: 'Warm Welcome',
      badge: 'PERSONAL ATTENTION',
      title: 'Grounded in Local Care & Warmth',
      description:
        'Our flight and ground teams are trained to deliver genuine South Indian warmth, multilingual assistance in regional languages (Tamil, Kannada, Malayalam, Telugu, and Hindi), and attentive onboard care.',
      imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1000&q=80',
      highlights: ['Multilingual cabin crews', 'Special medical & senior passenger care', 'Expedited regional baggage delivery', 'Attentive personalized service']
    }
  ];

  const currentTab = featureTabs[activeFeature];

  return (
    <section id="experience" className="py-24 bg-white border-t border-[#E7ECF2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D7193F] font-bold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7193F]" />
            <span>THE PASSENGER STANDARD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2341] tracking-tight leading-tight [text-wrap:balance]">
            Your Journey.<br />
            <span className="text-[#64748B] font-light">Our Priority.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-3 leading-relaxed [text-wrap:balance]">
            From the moment you search for a flight to the moment you step off at your destination, MMM Airways is designed around a simpler, warmer way to travel.
          </p>
        </div>

        {/* Interactive Feature Showcase with Visuals */}
        <div className="bg-[#F5F7FA] border border-[#E7ECF2] rounded-3xl p-6 sm:p-10 shadow-lg mb-16">
          {/* Tab Selector Bar */}
          <div className="flex items-center gap-2 p-1.5 bg-white border border-[#E7ECF2] rounded-2xl overflow-x-auto max-w-full mb-8 shadow-sm">
            {featureTabs.map((tab, idx) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFeature(idx)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeFeature === idx
                    ? 'bg-[#D7193F] text-white shadow-md'
                    : 'text-[#64748B] hover:text-[#0B2341] hover:bg-[#F5F7FA]'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Active Tab Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Descriptive Content */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#155FA0] font-bold block mb-1">
                  {currentTab.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2341] tracking-tight">
                  {currentTab.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {currentTab.description}
              </p>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentTab.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-[#0B2341] bg-white p-3 rounded-xl border border-[#E7ECF2] shadow-sm">
                    <div className="w-5 h-5 rounded-full bg-[#D7193F]/10 flex items-center justify-center text-[#D7193F] shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={onBookFlight}
                  className="px-6 py-3 bg-[#D7193F] hover:bg-[#E3294E] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>EXPERIENCE MMM AIRWAYS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Photographic Window */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl border border-[#E7ECF2] bg-[#07182D]">
                <img
                  src={currentTab.imageUrl}
                  alt={currentTab.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07182D]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#07182D]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                    {currentTab.name}
                  </span>
                  <span className="text-[11px] text-[#E7ECF2] font-mono">
                    Premium Regional Standards
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
