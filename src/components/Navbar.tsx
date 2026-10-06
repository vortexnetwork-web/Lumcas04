import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { CONFIG, getWhatsAppLink } from '../config';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Featured Estates', href: '#estates' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const defaultWhatsappMessage = "Hello Lumcas Realtor, I would like to make an enquiry regarding your verified estates in Nigeria.";

  return (
    <>
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none">
        <nav 
          aria-label="Main Navigation"
          className={`pointer-events-auto mx-auto max-w-6xl rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 ${
            scrolled 
              ? 'bg-white/90 backdrop-blur-xl border border-purple-100/80 shadow-lg shadow-purple-950/10' 
              : 'bg-white/75 backdrop-blur-lg border border-white/40 shadow-md shadow-black/5'
          }`}
        >
          {/* Brand Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2 group rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
            aria-label="Lumcas Realtor Homepage"
          >
            <Logo className="h-8 sm:h-9" variant="color" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-[#8B1FD1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-md px-1 py-0.5"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={getWhatsAppLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B1FD1] to-[#5B1A9E] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-md shadow-purple-600/20 hover:shadow-lg hover:shadow-purple-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-in Menu Drawer */}
      <div 
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Slide-in panel */}
        <div 
          className={`absolute top-0 right-0 bottom-0 w-[82%] max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-6 pt-16">
            <div className="pb-4 border-b border-slate-100">
              <Logo className="h-9" variant="color" />
              <p className="text-xs text-slate-500 mt-2 font-medium">
                Verified Estates & Safe Land Investments
              </p>
            </div>

            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="flex items-center justify-between text-left py-2.5 px-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-purple-50 hover:text-[#8B1FD1] transition-all"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-4">
            <a
              href={getWhatsAppLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#8B1FD1] to-[#5B1A9E] text-white py-3 rounded-full text-sm font-semibold shadow-md shadow-purple-600/30 hover:opacity-95"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Chat on WhatsApp</span>
            </a>
            <div className="text-center text-xs text-slate-400">
              Direct Hotline: <span className="font-semibold text-slate-700">{CONFIG.company.phoneDisplay}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
