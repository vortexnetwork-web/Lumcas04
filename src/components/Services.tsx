import React from 'react';
import { 
  Home, 
  Building2, 
  TrendingUp, 
  MapPin, 
  Briefcase, 
  Sprout, 
  Sparkles, 
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';
import { CONFIG, getWhatsAppLink } from '../config';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6 text-[#8B1FD1]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#8B1FD1]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#8B1FD1]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#8B1FD1]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#8B1FD1]" />;
      case 'Sprout':
        return <Sprout className="w-6 h-6 text-[#8B1FD1]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#8B1FD1]" />;
    }
  };

  return (
    <section 
      id="services" 
      className="py-20 sm:py-28 bg-[#FAFAFC] relative overflow-hidden"
      aria-label="Core Services"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#8B1FD1] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Our Core Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            End-to-end real estate and landbanking advisory tailored for homeowners, developers, and discerning investors.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONFIG.services.map((service) => {
            const waLink = getWhatsAppLink(
              `Hello Lumcas Realtor, I would like to consult with your team regarding your ${service.title} services.`
            );

            return (
              <div
                key={service.id}
                className={`${service.span} group rounded-[24px] bg-white p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-purple-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 group-hover:bg-[#8B1FD1] flex items-center justify-center transition-colors duration-300 shadow-sm">
                      <div className="group-hover:brightness-0 group-hover:invert transition-all">
                        {getIcon(service.iconName)}
                      </div>
                    </div>

                    <span className="text-[11px] font-bold tracking-wider uppercase text-purple-700 bg-purple-50/80 px-3 py-1 rounded-full border border-purple-100">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#8B1FD1] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Interactive Action: Inquire on WhatsApp */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 group-hover:text-[#8B1FD1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-lg px-1 py-0.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#8B1FD1]" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#8B1FD1] text-slate-400 group-hover:text-white flex items-center justify-center transition-all group-hover:rotate-45"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
