'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GlassCard } from './GlassCard';

export function Header() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY < 10);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase = 'transition-colors';
  const linkColor = atTop ? 'text-white hover:text-gray-200' : 'text-gray-900 hover:text-gray-700';
  const dotColor = atTop ? 'text-white/50' : 'text-gray-400';
  const mobileColor = atTop ? 'text-white' : 'text-gray-900';

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-screen-xl px-4">
      <GlassCard className="flex items-center justify-between px-6 h-14">
        <div className="flex items-center">
          <Image
            src="/Bildzeichen/BH_BW.svg"
            alt="Baumhelden Logo"
            width={140}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('hero')} className={`${linkBase} ${linkColor}`}>
            Startseite
          </button>
          <span className={dotColor}>•</span>
          <button onClick={() => scrollToSection('services')} className={`${linkBase} ${linkColor}`}>
            Unsere Leistungen
          </button>
          <span className={dotColor}>•</span>
          <button onClick={() => scrollToSection('about')} className={`${linkBase} ${linkColor}`}>
            Über uns
          </button>
        </nav>

        {/* Mobile menu button */}
        <button className={`md:hidden ${mobileColor} transition-colors`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </GlassCard>
    </header>
  );
}
