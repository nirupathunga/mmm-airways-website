import React, { useState } from 'react';
import { Users, Briefcase, Mail, Send, CheckCircle, Sparkles, ShieldCheck } from 'lucide-react';

export const CareersSection: React.FC = () => {
  const [showTalentForm, setShowTalentForm] = useState(false);
  const [talentName, setTalentName] = useState('');
  const [talentEmail, setTalentEmail] = useState('');
  const [talentDiscipline, setTalentDiscipline] = useState('Flight Operations (Cockpit)');
  const [experienceYears, setExperienceYears] = useState('3-5 Years');
  const [talentSubmitted, setTalentSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (talentName && talentEmail) {
      setTalentSubmitted(true);
    }
  };

  return (
    <section id="careers" className="py-24 bg-[#F5F7FA] border-t border-[#E7ECF2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D7193F] font-bold mb-2">
            <Users className="w-3.5 h-3.5 text-[#2F8FE8]" />
            <span>TALENT &amp; CULTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2341] tracking-tight leading-tight [text-wrap:balance]">
            Build the Future of Flight.
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-3 leading-relaxed [text-wrap:balance]">
            MMM Airways is building an aviation team for the journey ahead. From flight operations and engineering to airport operations, technology and corporate functions, our growth will be powered by people who believe in connecting India better.
          </p>
        </div>

        {/* Stated Policy Notice: No Current Openings */}
        <div className="bg-white border border-[#E7ECF2] rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xl ring-1 ring-black/5 relative">
          <div className="w-14 h-14 rounded-2xl bg-[#F5F7FA] border border-[#E7ECF2] flex items-center justify-center mx-auto mb-6 text-[#D7193F] shadow-sm">
            <Briefcase className="w-7 h-7" />
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-[#D7193F] font-bold block mb-2">
            CURRENT VACANCIES
          </span>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2341] mb-3">
            NO CURRENT OPENINGS
          </h3>

          <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto leading-relaxed mb-8">
            Check back soon for opportunities with MMM Airways. In the meantime, you may register your interest with our aviation talent pool for upcoming ATR/A320 flight crews and engineering inductions.
          </p>

          <button
            type="button"
            onClick={() => setShowTalentForm(!showTalentForm)}
            className="px-8 py-3.5 bg-[#D7193F] hover:bg-[#E3294E] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] cursor-pointer"
          >
            {showTalentForm ? 'CLOSE TALENT FORM' : 'JOIN OUR JOURNEY'}
          </button>

          {/* Collapsible Talent Form */}
          {showTalentForm && (
            <div className="mt-10 pt-8 border-t border-[#E7ECF2] text-left">
              {talentSubmitted ? (
                <div className="p-6 bg-[#F5F7FA] rounded-2xl border border-[#E7ECF2] text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#0B2341]">Talent Profile Recorded</h4>
                  <p className="text-xs text-[#64748B] max-w-sm mx-auto">
                    Thank you. We have saved your interest for <strong>{talentDiscipline}</strong>. Our flight crew recruitment office will notify you during the next hiring cycle.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-sm font-bold text-[#0B2341] mb-2">
                    Express Interest in MMM Airways Aviation Team
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] uppercase text-[#64748B] block mb-1 font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Captain / Eng. Name"
                        value={talentName}
                        onChange={e => setTalentName(e.target.value)}
                        className="w-full bg-[#F5F7FA] border border-[#E7ECF2] text-[#0B2341] text-xs p-3 rounded-xl focus:border-[#2F8FE8] focus:bg-white outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase text-[#64748B] block mb-1 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="pilot@domain.com"
                        value={talentEmail}
                        onChange={e => setTalentEmail(e.target.value)}
                        className="w-full bg-[#F5F7FA] border border-[#E7ECF2] text-[#0B2341] text-xs p-3 rounded-xl focus:border-[#2F8FE8] focus:bg-white outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] uppercase text-[#64748B] block mb-1 font-semibold">
                        Discipline / Role
                      </label>
                      <select
                        value={talentDiscipline}
                        onChange={e => setTalentDiscipline(e.target.value)}
                        className="w-full bg-[#F5F7FA] border border-[#E7ECF2] text-[#0B2341] text-xs p-3 rounded-xl focus:border-[#2F8FE8] focus:bg-white outline-none transition-colors cursor-pointer"
                      >
                        <option>Flight Operations (Captain / First Officer)</option>
                        <option>Cabin Crew &amp; In-Flight Services</option>
                        <option>AME / Maintenance Engineering (CAR-145)</option>
                        <option>Flight Dispatch &amp; OCC</option>
                        <option>Airport Station Operations &amp; Ground Handling</option>
                        <option>Aviation Commercial &amp; Revenue Management</option>
                        <option>Flight Training Academy Instructor</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase text-[#64748B] block mb-1 font-semibold">
                        Total Industry Experience
                      </label>
                      <select
                        value={experienceYears}
                        onChange={e => setExperienceYears(e.target.value)}
                        className="w-full bg-[#F5F7FA] border border-[#E7ECF2] text-[#0B2341] text-xs p-3 rounded-xl focus:border-[#2F8FE8] focus:bg-white outline-none transition-colors cursor-pointer"
                      >
                        <option>Fresh Cadet / CPL Holder</option>
                        <option>1 - 3 Years</option>
                        <option>3 - 5 Years</option>
                        <option>5 - 10 Years</option>
                        <option>10+ Years (Commander / Senior AME)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0B2341] hover:bg-[#155FA0] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>SUBMIT EXPRESSION OF INTEREST</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
