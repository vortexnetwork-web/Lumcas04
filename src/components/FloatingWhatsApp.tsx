import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CONFIG, getWhatsAppLink } from '../config';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMsg = "Hello Lumcas Realtor, I'm visiting your website and would like to ask about available properties and inspection schedules.";

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-end gap-3 pointer-events-auto">
      {/* Teaser Bubble (Dismissible) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-2xl bg-white border border-purple-100 shadow-xl shadow-purple-950/10 text-xs font-semibold text-slate-800 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Questions? Chat with our team</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5 rounded-full"
            aria-label="Dismiss chat prompt"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppLink(defaultMsg)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Lumcas Realtor"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-xl shadow-emerald-950/20 hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/40"
      >
        {/* Subtle Radar Ripple */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-30 group-hover:animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white/20 relative z-10" />

        {/* Unread Alert Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-purple-600 border-2 border-white flex items-center justify-center text-[8px] font-black text-white">
          1
        </span>
      </a>
    </div>
  );
};
