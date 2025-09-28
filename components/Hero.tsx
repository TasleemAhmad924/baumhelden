'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      id="hero"
      className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] max-h-[820px] overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/chainsaw-image-background.jpg"
          alt="Baumpflege Hintergrund"
          fill
          priority
          className="object-cover object-right-center"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </div>

      {/* Hero Card */}
      <div className="relative z-10 h-full flex items-center justify-start">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`
              relative
              w-full
              max-w-md
              sm:max-w-lg
              md:max-w-xl
              lg:max-w-2xl
              xl:max-w-3xl
              transition-all
              duration-1000
              ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{
              background: 'rgba(240, 248, 244, 0.06)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '24px',
              boxShadow: '0 10px 30px rgba(6,20,12,0.12)',
              padding: 'clamp(24px, 5vw, 40px) clamp(20px, 4vw, 32px)'
            }}
          >
            <div 
              className="
                mb-4
                sm:mb-6
                drop-shadow-lg
              "
            >
              <Image
                src="/Original mit Slogan/BH_LSW.svg"
                alt="BAUMHELDEN Logo"
                width={400}
                height={120}
                priority
                className="w-auto h-auto max-w-full"
                style={{
                  height: 'clamp(60px, 12vw, 120px)',
                  filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))'
                }}
              />
            </div>
            
            <p 
              className="
                mb-6
                sm:mb-8
                leading-relaxed
                text-white
              "
              style={{
                fontSize: 'clamp(14px, 2vw, 18px)',
                fontWeight: '400'
              }}
            >
              Wir kümmern uns um Ihre Bäume – sicher, schonend und ästhetisch.
            </p>
            
            <button
              onClick={scrollToContact}
              aria-label="Termin vereinbaren"
              className="
                inline-block
                px-6
                py-3
                sm:px-8
                sm:py-4
                rounded-full
                font-medium
                text-white
                bg-emerald-600
                transition-all
                duration-200
                ease-in-out
                shadow-lg
                hover:shadow-xl
                hover:scale-105
                hover:bg-emerald-700
                active:scale-95
                focus:outline-none
                focus:ring-4
                focus:ring-emerald-500/30
                w-full
                sm:w-auto
                sm:min-w-[180px]
              "
              style={{
                fontSize: 'clamp(14px, 2vw, 16px)'
              }}
            >
              Jetzt Termin vereinbaren
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}