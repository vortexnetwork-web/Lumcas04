import React from 'react';
import { CONFIG } from '../config';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section 
      id="why-us"
      className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-br from-[#8B1FD1] via-[#6B18AB] to-[#5B1A9E] text-white"
      aria-label="Why Choose Lumcas Realtor"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-black/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-200 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Lumcas Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Why Choose Us
          </h2>

          <p className="mt-3 text-base sm:text-lg text-purple-100/90 leading-relaxed">
            We eliminate the anxiety of Nigerian real estate investments through transparency, institutional standards, and direct client care.
          </p>
        </div>

        {/* Numbered 01 - 06 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CONFIG.whyChooseUs.map((item) => (
            <div
              key={item.number}
              className="rounded-[24px] backdrop-blur-xl bg-white/10 border border-white/20 p-7 sm:p-8 hover:bg-white/15 hover:border-white/35 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Number Watermark / Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl sm:text-3xl font-black tracking-tight text-purple-300/80 font-mono">
                    {item.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-4 h-4 text-purple-200" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-purple-100/85 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Hairline */}
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-medium text-purple-200/70">
                Guaranteed by Lumcas Limited
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
