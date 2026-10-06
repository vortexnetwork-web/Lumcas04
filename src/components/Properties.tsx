import React, { useRef } from 'react';
import { 
  MessageCircle, 
  MapPin, 
  FileCheck, 
  ChevronRight, 
  ChevronLeft, 
  Building, 
  Sparkles,
  ShieldCheck,
  Check
} from 'lucide-react';
import { CONFIG } from '../config';

export const Properties: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 340;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getWhatsAppPropertyLink = (propertyName: string) => {
    const message = `Hello Lumcas Realtor, I'm interested in ${propertyName}. Please share more details.`;
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${CONFIG.company.whatsappNumber}?text=${encoded}`;
  };

  return (
    <section 
      id="estates" 
      className="py-20 sm:py-28 bg-[#FAFAFC] relative overflow-hidden"
      aria-label="Featured Estates"
    >
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#8B1FD1] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Investment Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Featured Estates
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-xl">
              Prime landed developments and secure residential layouts with verified documentation and instant physical inspection.
            </p>
          </div>

          {/* Mobile/Tablet Carousel Controls */}
          <div className="flex items-center gap-2 lg:hidden self-start sm:self-auto">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-purple-700 hover:border-purple-300 shadow-sm active:scale-95 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-purple-700 hover:border-purple-300 shadow-sm active:scale-95 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Estates Container: Carousel on Mobile / 3-Column Grid on Desktop */}
        <div 
          ref={carouselRef}
          className="flex lg:grid lg:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 pt-2 no-scrollbar snap-x snap-mandatory"
        >
          {CONFIG.properties.map((estate, index) => (
            <article
              key={estate.id}
              className="min-w-[85vw] sm:min-w-[360px] lg:min-w-0 snap-center group rounded-[24px] bg-white border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-purple-200 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Media Header */}
              <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-900">
                {estate.image ? (
                  <img
                    src={estate.image}
                    alt={estate.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  /* Gradient Image Placeholder (Easy to swap in config) */
                  <div className={`w-full h-full bg-gradient-to-br ${estate.gradient} relative flex items-center justify-center p-6 overflow-hidden`}>
                    {/* Architectural Mesh Artwork Overlay */}
                    <svg 
                      className="absolute inset-0 w-full h-full opacity-15 stroke-white" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern id={`grid-${estate.id}`} width="28" height="28" patternUnits="userSpaceOnUse">
                          <path d="M 28 0 L 0 0 0 28" fill="none" strokeWidth="0.8" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#grid-${estate.id})`} />
                    </svg>

                    {/* Architectural Icon Graphic Silhouette */}
                    <div className="relative z-10 flex flex-col items-center text-center text-white p-4">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform duration-300">
                        <Building className="w-8 h-8 text-purple-200" />
                      </div>
                      <span className="text-xs uppercase tracking-widest font-semibold text-purple-200/90">
                        Estate No. 0{index + 1}
                      </span>
                      <span className="font-extrabold text-xl text-white tracking-tight mt-0.5">
                        {estate.name}
                      </span>
                    </div>

                    {/* Gradient Inner Rim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                  </div>
                )}

                {/* Available Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-purple-900 shadow-md backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{estate.status}</span>
                  </span>
                </div>

                {/* Price Pill Tag on Media */}
                <div className="absolute bottom-3 left-4 z-20">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-slate-950/80 text-white backdrop-blur-md border border-white/15">
                    {estate.price}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Name and Tagline */}
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#8B1FD1] transition-colors leading-snug">
                    {estate.name}
                  </h3>
                  
                  <p className="mt-1.5 text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {estate.tagline}
                  </p>

                  {/* Meta Details: Location & Title */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#8B1FD1] shrink-0" />
                      <span className="font-medium truncate">{estate.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium truncate">{estate.titleType}</span>
                    </div>
                  </div>

                  {/* Features Mini Checklist */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {estate.features.map((feat, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-50 text-[11px] font-semibold text-[#8B1FD1]"
                      >
                        <Check className="w-3 h-3 text-[#8B1FD1]" />
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Button: Enquire on WhatsApp */}
                <div className="mt-6 pt-2">
                  <a
                    href={getWhatsAppPropertyLink(estate.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#8B1FD1] to-[#5B1A9E] shadow-md shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#8B1FD1]" />
          <span>All estate titles are verified through the State Land Registry and survey charting records.</span>
        </div>
      </div>
    </section>
  );
};
