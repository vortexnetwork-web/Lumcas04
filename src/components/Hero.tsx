import React, { useState } from 'react';
import { ArrowDown, MessageCircle, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { CONFIG, getWhatsAppLink } from '../config';
import { AnimatedCounter } from './AnimatedCounter';

export const Hero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Determine valid video URL
  const videoSrc = 
    CONFIG.VIDEO_URL && CONFIG.VIDEO_URL !== "PASTE_VIDEO_LINK" && !CONFIG.VIDEO_URL.startsWith("PASTE")
      ? CONFIG.VIDEO_URL
      : CONFIG.DEMO_VIDEO_FALLBACK;

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#estates');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const defaultWhatsappMessage = "Hello Lumcas Realtor, I saw your verified estates and I would like to inquire about current property opportunities.";

  return (
    <section 
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#24063B]"
      aria-label="Hero Introduction"
    >
      {/* Background Video Layer with Fallback Poster Color */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#200635]">
        {!videoError && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-40 sm:opacity-50' : 'opacity-0'
            }`}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        {/* Dynamic Architectural Mesh Gradient Background (Active before or alongside video) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#160226] via-[#330852]/80 to-[#5C169C]/40" />

        {/* Ambient Radial Purple Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#8B1FD1]/30 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#5B1A9E]/25 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#120220] to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Content (Left-aligned as requested) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40 md:pt-44 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl text-left">
          
          {/* Floating Glass Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-purple-200 text-xs sm:text-sm font-medium shadow-xl shadow-purple-950/20 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-300" />
            </span>
            <ShieldCheck className="w-4 h-4 text-purple-300" />
            <span className="font-semibold text-white tracking-wide">Trusted Real Estate Partner</span>
          </div>

          {/* Left-Aligned Bold Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
            Your Next Home <br />
            <span className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-purple-100/90 font-normal leading-relaxed mb-8 sm:mb-10 max-w-xl">
            {CONFIG.company.subtext}. Secure high-yield land and luxury homes with 100% verified legal documentation.
          </p>

          {/* Two Pill Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            {/* Primary Action: Explore Properties */}
            <a
              href="#estates"
              onClick={handleExploreClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-slate-950 bg-white hover:bg-purple-50 shadow-lg shadow-purple-950/40 hover:scale-[1.03] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Properties</span>
              <ArrowDown className="w-4 h-4 text-purple-800" />
            </a>

            {/* Secondary Action: WhatsApp Us */}
            <a
              href={getWhatsAppLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#8B1FD1] to-[#5B1A9E] shadow-lg shadow-purple-600/35 hover:shadow-purple-600/50 hover:scale-[1.03] active:scale-[0.98] transition-all border border-purple-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Trust points line */}
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-purple-200/80">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-300" />
              <span>Zero Agency Scams</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-300" />
              <span>Instant Physical Inspection</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-300" />
              <span>Transparent Deed of Assignment</span>
            </span>
          </div>

        </div>
      </div>

      {/* Bottom Frosted-Glass Strip with 3 Quick Stats */}
      <div className="relative z-10 w-full px-4 sm:px-6 pb-6 sm:pb-8 pt-4">
        <div className="max-w-6xl mx-auto rounded-[24px] backdrop-blur-2xl bg-white/10 border border-white/20 p-4 sm:p-6 shadow-2xl shadow-black/40">
          <div className="grid grid-cols-3 divide-x divide-white/15 text-center">
            {CONFIG.heroStats.map((stat, idx) => (
              <div key={idx} className="px-2 sm:px-6 py-2">
                <div className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight flex items-center justify-center">
                  <AnimatedCounter 
                    target={stat.target} 
                    suffix={stat.suffix} 
                    className="bg-gradient-to-br from-white via-purple-50 to-purple-200 bg-clip-text text-transparent"
                  />
                </div>
                <div className="mt-1 text-[11px] sm:text-sm font-medium text-purple-200 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
