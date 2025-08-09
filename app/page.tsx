import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Startseite - Baumhelden',
  description:
    'Willkommen bei Baumhelden - Ihrem professionellen Partner für Baumpflege, Baumfällung und Wurzelentfernung.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Placeholder */}
      <section className="bg-gradient-to-br from-brand-green to-brand-brown text-white section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="heading-primary mb-6">
              Willkommen bei den Baumhelden
            </h1>
            <p className="text-body mb-8 max-w-3xl mx-auto">
              Ihre professionellen Experten für Baumpflege, Baumfällung und
              Wurzelentfernung. Mit jahrelanger Erfahrung und modernster
              Ausrüstung sorgen wir für die Sicherheit und Gesundheit Ihrer
              Bäume.
            </p>
            {/* TODO: Add CTA button component */}
            <div className="bg-white/10 border border-white/20 rounded-lg p-4 inline-block">
              <span className="text-sm">TODO: CTA Button hinzufügen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Placeholder */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Unsere Dienstleistungen</h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Von der professionellen Baumpflege bis zur sicheren Baumfällung -
              wir bieten umfassende Lösungen für alle Ihre Baumarbeiten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards - Placeholders */}
            {[
              'Baumfällung',
              'Baumpflege',
              'Wurzelentfernung',
              'Baumschnitt',
              'Notfallservice',
              'Beratung',
            ].map(service => (
              <div
                key={service}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
              >
                <div className="w-12 h-12 bg-brand-green rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🌳</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600 mb-4">
                  TODO: Beschreibung für {service} hinzufügen
                </p>
                <div className="text-brand-green text-sm font-medium">
                  Mehr erfahren →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Placeholder */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="heading-secondary mb-4">Kontaktieren Sie uns</h2>
            <p className="text-body text-gray-600 mb-8 max-w-2xl mx-auto">
              Haben Sie Fragen oder benötigen Sie ein unverbindliches Angebot?
              Kontaktieren Sie unsere Experten.
            </p>
            {/* TODO: Add contact form or contact information */}
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-8 max-w-md mx-auto">
              <span className="text-sm text-gray-500">
                TODO: Kontaktformular oder Kontaktinformationen hinzufügen
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
