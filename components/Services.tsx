import { TreePine, Search, Target, Leaf } from 'lucide-react';
import { GlassCard } from './GlassCard';

const services = [
  {
    icon: Leaf,
    title: 'Baumpflege',
    description: 'Erhaltung, Lichtraumprofil und Pflegearbeiten',
  },
  {
    icon: TreePine,
    title: 'Baumfällung',
    description: 'Sicher, effizient mit moderner Technik',
  },
  {
    icon: Search,
    title: 'Baumkontrolle',
    description: 'Standsicherheit, Lebensdauer und Gutachten',
  },
  {
    icon: Target,
    title: 'Wurzelstockentfernung',
    description: 'Schonende Entfernung und Verwertung',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Unsere Leistungen
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <GlassCard key={index} className="p-6 md:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <service.icon className="w-8 h-8 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
