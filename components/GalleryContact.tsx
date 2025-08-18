import { MapPin } from 'lucide-react';
import { GlassCard } from './GlassCard';

export function GalleryContact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Galerie
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Card */}
          <GlassCard className="p-6 md:p-8">
            <div className="space-y-4">
              <div className="w-full h-48 md:h-64 bg-gray-200 rounded-xl overflow-hidden">
                {/* Map placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-2" />
                    <p className="text-gray-600 font-medium">Karte</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 font-medium">
                Musterstraße 12 - 12345 Musterstadt
              </p>
            </div>
          </GlassCard>
          
          {/* Contact Card */}
          <GlassCard className="p-6 md:p-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Kontakt
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    Max Mustermann
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-700">
                    <span className="font-medium">Telefon:</span> 0123 / 4507830
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-700">
                    <span className="font-medium">E-Mail:</span> kontakt@baumhelden.de
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200">
                  Kontakt aufnehmen
                </button>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
