import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle, HelpCircle } from 'lucide-react';

interface ContactModalProps {
  onClose: () => void;
  initialCategory?: 'CUSTOMER SUPPORT' | 'CARGO' | 'PARTNERSHIPS' | 'CAREERS';
}

export const ContactModal: React.FC<ContactModalProps> = ({
  onClose,
  initialCategory = 'CUSTOMER SUPPORT'
}) => {
  const [category, setCategory] = useState<'CUSTOMER SUPPORT' | 'CARGO' | 'PARTNERSHIPS' | 'CAREERS'>(
    initialCategory
  );
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email is required';
    if (!phone.trim() || phone.length < 10) errs.phone = 'Valid phone number is required';
    if (!subject.trim()) errs.subject = 'Subject is required';
    if (!message.trim() || message.length < 10) errs.message = 'Please provide a detailed message (min 10 chars)';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#07182D] border border-[#155FA0]/30 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B2341] border-b border-[#155FA0]/30">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D7193F] font-bold">
              GET IN TOUCH
            </span>
            <h3 className="text-lg font-bold text-white">Let&apos;s Connect</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#64748B] hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400 shadow-xl">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Message Received</h4>
              <p className="text-xs text-[#E7ECF2] max-w-sm mx-auto leading-relaxed">
                Thank you for contacting MMM Airways ({category}). A dedicated aviation desk representative will review your inquiry and follow up shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[#0B2341] hover:bg-[#155FA0] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors border border-[#155FA0]/40 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Category Segmented Buttons */}
              <div>
                <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1.5">
                  Inquiry Department
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-[#0B2341] rounded-xl border border-[#155FA0]/40">
                  {(['CUSTOMER SUPPORT', 'CARGO', 'PARTNERSHIPS', 'CAREERS'] as const).map(cat => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`py-2 px-1 text-[10px] font-bold rounded-lg transition-colors text-center ${
                        category === cat
                          ? 'bg-[#D7193F] text-white shadow-sm'
                          : 'text-[#E7ECF2] hover:text-white'
                      }`}
                    >
                      {cat.replace('CUSTOMER ', '')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className={`w-full bg-[#0B2341] border text-white text-xs p-3 rounded-xl focus:border-[#2F8FE8] outline-none ${
                      errors.fullName ? 'border-[#D7193F]' : 'border-[#155FA0]/40'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[10px] text-[#D7193F] mt-1 block">
                      {errors.fullName}
                    </span>
                  )}
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={`w-full bg-[#0B2341] border text-white text-xs p-3 rounded-xl focus:border-[#2F8FE8] outline-none ${
                      errors.email ? 'border-[#D7193F]' : 'border-[#155FA0]/40'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-[#D7193F] mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Phone & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98400 00000"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className={`w-full bg-[#0B2341] border text-white text-xs p-3 rounded-xl focus:border-[#2F8FE8] outline-none ${
                      errors.phone ? 'border-[#D7193F]' : 'border-[#155FA0]/40'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[10px] text-[#D7193F] mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="How can we assist?"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    className={`w-full bg-[#0B2341] border text-white text-xs p-3 rounded-xl focus:border-[#2F8FE8] outline-none ${
                      errors.subject ? 'border-[#D7193F]' : 'border-[#155FA0]/40'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[10px] text-[#D7193F] mt-1 block">
                      {errors.subject}
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-[11px] font-semibold uppercase text-[#64748B] block mb-1">
                  Message *
                </label>
                <textarea
                  rows={4}
                  placeholder="Provide your specific route, cargo weight, or requirements..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className={`w-full bg-[#0B2341] border text-white text-xs p-3 rounded-xl focus:border-[#2F8FE8] outline-none resize-none ${
                    errors.message ? 'border-[#D7193F]' : 'border-[#155FA0]/40'
                  }`}
                />
                {errors.message && (
                  <span className="text-[10px] text-[#D7193F] mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#D7193F] hover:bg-[#E3294E] hover:shadow-[0_0_20px_rgba(215,25,63,0.4)] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
