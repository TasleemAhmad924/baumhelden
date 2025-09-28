'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Baumfällung',
    short_description: 'Sicher, effizient mit moderner Technik',
    full_description: 'Bei der Baumfällung setzen wir auf höchste Sicherheitsstandards und moderne Technik. Ob Einzelbäume oder komplexe Fällungen in beengten Verhältnissen - wir planen jeden Einsatz sorgfältig und führen ihn mit professionellem Equipment durch. Dabei achten wir besonders auf den Schutz von Gebäuden, Leitungen und der Umgebung.',
    image: '/Baumfällen.jpg',
    icon: '🪓'
  },
  {
    id: 2,
    title: 'Hilfe bei Sturmschäden und akuter Bruchgefahr',
    short_description: 'Schnelle Unterstützung bei Sturmschäden und Gefahrensituationen',
    full_description: 'Bei Sturmschäden und akuter Bruchgefahr ist schnelle Hilfe gefragt. Unser erfahrenes Team beurteilt die Situation professionell und reagiert zeitnah auf Notfälle. Wir sichern gefährliche Bereiche ab, entfernen umgestürzte Bäume und führen Notfallfällungen durch. Dabei setzen wir modernste Technik ein und arbeiten nach höchsten Sicherheitsstandards.',
    image: '/Sturmschaeden_New.jpeg',
    icon: '🌪️'
  },
  {
    id: 3,
    title: 'Wurzelentfernung',
    short_description: 'Schonende Entfernung und Verwertung',
    full_description: 'Die professionelle Wurzelentfernung erfordert spezielle Techniken und Equipment. Wir entfernen Wurzelstöcke schonend und umweltverträglich, ohne den umliegenden Boden zu schädigen. Das gewonnene Holz wird nachhaltig verwertet oder als Brennholz aufbereitet. Dabei berücksichtigen wir alle örtlichen Gegebenheiten und Vorschriften.',
    image: '/Wurzelentfernung.jpg',
    icon: '🌱'
  },
  {
    id: 4,
    title: 'Entsorgung des Schnittguts und Stammholz',
    short_description: 'Fachgerechte Entsorgung von Schnittgut und Stammholz',
    full_description: 'Nach Baumfällungen und Schnittarbeiten übernehmen wir die fachgerechte Entsorgung von Schnittgut und Stammholz. Wir transportieren das Material ab und führen es der nachhaltigen Verwertung zu. Dabei arbeiten wir mit regionalen Partnern zusammen und sorgen für eine umweltfreundliche Entsorgung. Das Holz wird als Brennholz aufbereitet oder für andere Zwecke weiterverwendet.',
    image: '/baum_entsorgung.jpg',
    icon: '🪓'
  }
];

export function Services() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (cardId: number) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section id="leistungen" className="pt-32 pb-20 px-4 bg-white sm:pt-36">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Unsere Leistungen
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => {
            const isExpanded = expandedCard === service.id;
            
            return (
              <div
                key={service.id}
                className="relative group cursor-pointer"
                onClick={() => toggleCard(service.id)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Fixed Header Section - Image with Overlay Content */}
                  <div className="relative h-80 md:h-96 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    
                    {/* Dark Overlay for Text Readability - Extends fully to bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Plus Button - Fixed Position */}
                    <button
                      className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white/30 z-10 shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCard(service.id);
                      }}
                    >
                      <Plus className={`w-4 h-4 text-white transition-transform duration-300 ${
                        isExpanded ? 'rotate-45' : 'rotate-0'
                      }`} />
                    </button>

                    {/* Fixed Content Overlay - Always stays in same position */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 leading-tight">{service.title}</h3>
                      
                      {/* Short Description - Always visible */}
                      <p className="text-white/80 text-sm">
                        {service.short_description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Expandable Content Area - Only this slides down */}
                  <div className={`bg-green-700 transition-all duration-500 ease-in-out overflow-hidden ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="p-6 pt-4 text-white">
                      <p className="text-white leading-relaxed text-sm">
                        {service.full_description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}