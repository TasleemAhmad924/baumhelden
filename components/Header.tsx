'use client';

import Image from 'next/image';
import { GlassCard } from './GlassCard';

export function Header() {
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
            src="/logo.svg"
            alt="Baumhelden Logo"
            width={140}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-white hover:text-gray-200 transition-colors"
          >
            Startseite
          </button>
          <span className="text-white/50">•</span>
          <button
            onClick={() => scrollToSection('services')}
            className="text-white hover:text-gray-200 transition-colors"
          >
            Unsere Leistungen
          </button>
          <span className="text-white/50">•</span>
          <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-gray-200 transition-colors"
          >
            Über uns
          </button>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </GlassCard>
    </header>
  );
}
