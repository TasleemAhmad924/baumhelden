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
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(6,35,28,0.28) 0%, rgba(6,35,28,0.08) 55%, rgba(6,35,28,0.0) 100%)'
          }}
        />
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
            <h1 
              className="
                font-bold
                uppercase
                leading-[0.95]
                mb-4
                sm:mb-6
                text-[#233834]
                tracking-wide
              "
              style={{
                fontSize: 'clamp(28px, 6vw, 64px)',
                fontWeight: '800'
              }}
            >
              BAUMHELDEN
            </h1>
            
            <p 
              className="
                mb-6
                sm:mb-8
                leading-relaxed
                text-[rgba(20,40,36,0.92)]
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
                transition-all
                duration-200
                ease-in-out
                shadow-lg
                hover:shadow-xl
                hover:scale-105
                active:scale-95
                focus:outline-none
                focus:ring-4
                focus:ring-green-500/30
                w-full
                sm:w-auto
                sm:min-w-[180px]
              "
              style={{
                background: '#154237',
                fontSize: 'clamp(14px, 2vw, 16px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#123b33';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#154237';
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