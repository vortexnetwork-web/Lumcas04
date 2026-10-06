import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  ExternalLink, 
  Navigation,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { CONFIG } from '../config';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    estate: 'Galaxy Estate',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone / WhatsApp number';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Format WhatsApp message
    const formattedMsg = `Hello Lumcas Realtor,\n\nName: ${formData.name.trim()}\nPhone: ${formData.phone.trim()}\nEstate/Interest: ${formData.estate}\n\nMessage: ${formData.message.trim() || 'I am interested in this estate and would like further documentation and inspection details.'}`;
    const waUrl = `https://wa.me/${CONFIG.company.whatsappNumber}?text=${encodeURIComponent(formattedMsg)}`;

    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="contact" 
      className="py-20 sm:py-28 bg-white relative overflow-hidden"
      aria-label="Contact and Inquiries"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Large Rounded 24px Card */}
        <div className="rounded-[28px] bg-slate-50 border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-14">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column: Contact Details, Socials, & Map */}
            <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#8B1FD1] block mb-2">
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Speak Directly With Our Property Advisors
                </h2>
                <p className="mt-3 text-base text-slate-600 leading-relaxed">
                  Have inquiries about plot availability, survey charting, or ready-to-build estates? Contact us via call or instant WhatsApp.
                </p>

                {/* Direct Contact Channels */}
                <div className="mt-8 space-y-4">
                  {/* Phone & WhatsApp */}
                  <a
                    href={`tel:${CONFIG.company.phoneRaw}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-50 group-hover:bg-[#8B1FD1] flex items-center justify-center transition-colors">
                      <Phone className="w-5 h-5 text-[#8B1FD1] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Direct Phone & WhatsApp</div>
                      <div className="text-base font-bold text-slate-900 group-hover:text-[#8B1FD1] transition-colors">
                        {CONFIG.company.phoneDisplay}
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${CONFIG.company.email}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-50 group-hover:bg-[#8B1FD1] flex items-center justify-center transition-colors">
                      <Mail className="w-5 h-5 text-[#8B1FD1] group-hover:text-white transition-colors" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs text-slate-500 font-medium">Official Email Address</div>
                      <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#8B1FD1] transition-colors truncate">
                        {CONFIG.company.email}
                      </div>
                    </div>
                  </a>
                </div>

                {/* Social Media Connections */}
                <div className="mt-8">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    Follow Our Updates & Site Videos
                  </div>
                  <div className="flex items-center gap-3">
                    {/* Facebook */}
                    <a
                      href={CONFIG.company.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all shadow-sm"
                      aria-label="Facebook Page"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href={CONFIG.company.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-white hover:bg-[#E4405F] hover:border-[#E4405F] transition-all shadow-sm"
                      aria-label="Instagram Profile"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>

                    {/* TikTok */}
                    <a
                      href={CONFIG.company.socials.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-white hover:bg-black hover:border-black transition-all shadow-sm"
                      aria-label="TikTok Account"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.86-4.52v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.86-.06z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed & "Get Directions" */}
              <div className="pt-6">
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-48 sm:h-56 w-full">
                    {/* Interactive Google Maps iframe */}
                    <iframe
                      title="Lumcas Realtor Location Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.20524458312!2d3.4735500858548846!3d6.467499719875416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf705c7540cb7%3A0x6b19a3b610c4f828!2sLekki%20-%20Epe%20Expy%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    />
                  </div>

                  {/* Directions Footer Bar */}
                  <div className="p-4 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <MapPin className="w-4 h-4 text-[#8B1FD1]" />
                      <span>Lekki-Epe Expressway Corridor</span>
                    </div>

                    <a
                      href={CONFIG.company.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#8B1FD1] to-[#5B1A9E] shadow-sm hover:opacity-95 transition-all"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct WhatsApp Enquiry Form */}
            <div className="lg:col-span-6">
              <div className="rounded-[24px] bg-white p-6 sm:p-8 border border-slate-200/90 shadow-md">
                
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Instant WhatsApp Enquiry
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    Fill out your details below. Your inquiry will be formatted and opened directly in WhatsApp with a verified Lumcas agent.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Chief Adebayo Okafor"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.name 
                          ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                          : 'border-slate-200 focus:border-purple-500 focus:ring-purple-200 bg-slate-50/50 focus:bg-white'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number (WhatsApp Active) *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 0803 123 4567 or +234..."
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone 
                          ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                          : 'border-slate-200 focus:border-purple-500 focus:ring-purple-200 bg-slate-50/50 focus:bg-white'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Preferred Property Select */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Estate of Interest
                    </label>
                    <select
                      value={formData.estate}
                      onChange={(e) => setFormData({ ...formData, estate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm text-slate-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                    >
                      {CONFIG.properties.map((prop) => (
                        <option key={prop.id} value={prop.name}>
                          {prop.name} ({prop.price})
                        </option>
                      ))}
                      <option value="Farmland / Agricultural Investment">
                        Farmland / Agro Investment
                      </option>
                      <option value="General Real Estate Advisory">
                        General Real Estate Advisory
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Specific Questions or Inspection Date
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your preferred inspection date, budget, or title verification request..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#8B1FD1] to-[#5B1A9E] shadow-lg shadow-purple-600/30 hover:shadow-purple-600/45 hover:scale-[1.01] active:scale-[0.99] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                    >
                      <MessageCircle className="w-5 h-5 fill-white/20" />
                      <span>Send Enquiry on WhatsApp</span>
                    </button>
                  </div>

                  {submitted && (
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>WhatsApp opened with your prefilled details! If it didn't open automatically, please check popup settings.</span>
                    </div>
                  )}

                  <div className="text-center text-[11px] text-slate-400">
                    Direct confidential contact. We never share your phone number with 3rd-party marketers.
                  </div>
                </form>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
