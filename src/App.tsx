import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Properties } from './components/Properties';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-purple-200 selection:text-purple-900">
      {/* Floating Pill Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Full-screen Hero with Video & Quick Stats */}
        <Hero />

        {/* 7 Featured Estates (Carousel on mobile, 3-col on desktop) */}
        <Properties />

        {/* Split Layout About Story with 3 Animated Stats */}
        <About />

        {/* Bento-Grid Core Services */}
        <Services />

        {/* Purple Gradient Why Choose Us (01-06) */}
        <WhyChooseUs />

        {/* Rounded Contact Card, Maps Embed & Form */}
        <Contact />
      </main>

      {/* Deep Purple Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
