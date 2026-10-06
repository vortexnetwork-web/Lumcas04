import React from 'react';
import { ShieldCheck, Award, Users2, CheckCircle2, ArrowRight } from 'lucide-react';
import { CONFIG, getWhatsAppLink } from '../config';
import { AnimatedCounter } from './AnimatedCounter';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 sm:py-28 bg-white relative overflow-hidden"
      aria-label="About Lumcas Realtor"
    >
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Statement & Story */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#8B1FD1] mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>About Lumcas Realtor</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
              Pioneering Transparency, Security, and Wealth Creation in Nigerian Real Estate.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">Lumcas Realtor and Properties Limited</strong> was founded with an uncompromising promise: to protect buyers and diaspora investors from disputed land, family encumbrances, and hidden developer charges.
              </p>
              <p>
                From prime growth corridors along the Lekki-Epe expressway to serene suburban master-plans, every property in our portfolio undergoes rigorous legal due diligence, survey charting, and structural site readiness before entering the market.
              </p>
            </div>

            {/* Key Value Commitments */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#8B1FD1] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">100% Legal Fortification</h4>
                  <p className="text-xs text-slate-600 mt-1">Direct verification with state land registries and physical surveyor pegs.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 flex items-start gap-3">
                <Users2 className="w-5 h-5 text-[#8B1FD1] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Diaspora-Friendly Flow</h4>
                  <p className="text-xs text-slate-600 mt-1">Live video inspections, digital documentation, and trusted family delegations.</p>
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <div className="mt-8">
              <a
                href={getWhatsAppLink("Hello Lumcas Realtor, I would like to schedule a free physical or video property inspection.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#8B1FD1] hover:text-[#5B1A9E] group"
              >
                <span>Schedule a Free Physical Site Inspection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Glass Card of 3 Animated Stats */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] p-8 sm:p-10 bg-gradient-to-br from-purple-900 via-[#5B1A9E] to-[#250742] text-white shadow-2xl shadow-purple-900/30 overflow-hidden border border-purple-400/20">
              
              {/* Radial Highlight */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#8B1FD1]/50 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-400/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-purple-200 block mb-1">
                    Our Track Record
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">
                    Built on Proven Results
                  </h3>
                </div>

                <div className="space-y-6 divide-y divide-white/10">
                  {CONFIG.aboutStats.map((stat, idx) => (
                    <div key={idx} className={idx > 0 ? "pt-6" : ""}>
                      <div className="text-4xl sm:text-5xl font-black text-white tracking-tight flex items-baseline gap-1">
                        <AnimatedCounter 
                          target={stat.target} 
                          suffix={stat.suffix} 
                          className="bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent"
                        />
                      </div>
                      <p className="mt-1 text-sm font-medium text-purple-200/90">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Assurance */}
                <div className="pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-purple-200/80">
                  <CheckCircle2 className="w-4 h-4 text-purple-300 shrink-0" />
                  <span>Licensed under Corporate Affairs Commission & Nigerian Property Laws.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
