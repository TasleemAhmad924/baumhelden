'use client';

import { GlassCard } from './GlassCard';

export function Hero() {
  const scrollToContact = () => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/60 to-gray-900/80" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/chainsaw-bg.svg")',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-xl">
        <GlassCard className="p-8 md:p-12 max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            BAUMHELDEN
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Wir kümmern uns um Ihre Bäume – sicher, schonend und ästhetisch.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-medium transition-colors duration-200 shadow-lg"
          >
            Jetzt Termin vereinbaren
          </button>
        </GlassCard>
      </div>
    </section>
  );
}
