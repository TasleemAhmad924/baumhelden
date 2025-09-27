'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GlassCard } from './GlassCard';

export function Header() {
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  useEffect(() => {
    if (isHomepage) {
      const onScroll = () => {
        setAtTop(window.scrollY < 10);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    } else {
      setAtTop(false);
    }
  }, [isHomepage]);

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

  const handleHomepageNavigation = (sectionId: string) => {
    if (isHomepage) {
      scrollToSection(sectionId);
    } else {
      window.location.href = `/#${sectionId}`;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-screen-xl px-4">
      <GlassCard className="flex items-center justify-between px-6 h-14">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={atTop ? '/Bildzeichen/BH_BW.svg' : '/Bildzeichen/BH_BB.svg'}
              alt="Baumhelden Logo"
              width={140}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => handleHomepageNavigation('hero')} className={`relative group ${linkBase} ${linkColor}`}>
            <span>Startseite</span>
            <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-current transition-transform duration-200 ease-out group-hover:scale-x-100" />
          </button>
          <span className={dotColor}>•</span>
          <button onClick={() => handleHomepageNavigation('leistungen')} className={`relative group ${linkBase} ${linkColor}`}>
            <span>Unsere Leistungen</span>
            <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-current transition-transform duration-200 ease-out group-hover:scale-x-100" />
          </button>
          <span className={dotColor}>•</span>
          <button onClick={() => handleHomepageNavigation('about')} className={`relative group ${linkBase} ${linkColor}`}>
            <span>Über uns</span>
            <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-current transition-transform duration-200 ease-out group-hover:scale-x-100" />
          </button>
        </nav>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Menü öffnen"
          className={`md:hidden ${mobileColor} transition-colors`}
        >
          <span className="relative block w-6 h-6">
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 bg-current transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}
            />
            <span
              className={`absolute left-0 bottom-1.5 h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
            />
          </span>
        </button>
      </GlassCard>
      <div className="md:hidden mt-2">
        <GlassCard
          className={`px-6 py-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'opacity-100 translate-y-0 scale-100 max-h-96 py-4' : 'opacity-0 -translate-y-2 scale-[0.98] max-h-0 pointer-events-none'}`}
          aria-hidden={!menuOpen}
        >
          <div className="flex flex-col space-y-4">
            <button onClick={() => { handleHomepageNavigation('hero'); setMenuOpen(false); }} className={`${linkBase} ${mobileColor} active:opacity-70`}>
              Startseite
            </button>
            <button onClick={() => { handleHomepageNavigation('leistungen'); setMenuOpen(false); }} className={`${linkBase} ${mobileColor} active:opacity-70`}>
              Unsere Leistungen
            </button>
            <button onClick={() => { handleHomepageNavigation('about'); setMenuOpen(false); }} className={`${linkBase} ${mobileColor} active:opacity-70`}>
              Über uns
            </button>
          </div>
        </GlassCard>
      </div>
    </header>
  );
}
