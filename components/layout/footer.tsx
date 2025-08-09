/**
 * Footer Component - Placeholder
 * TODO: Implement footer navigation, contact info, social links
 */

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold">Baumhelden</span>
            </div>
            <p className="text-gray-400 mb-4">
              Ihre professionellen Experten für Baumpflege, Baumfällung und
              Wurzelentfernung.
            </p>
            {/* TODO: Add social media links */}
            <div className="text-sm text-gray-500">
              TODO: Social Media Icons
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/leistungen/baumfaellung"
                  className="hover:text-white transition-colors"
                >
                  Baumfällung
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/baumpflege"
                  className="hover:text-white transition-colors"
                >
                  Baumpflege
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/wurzelentfernung"
                  className="hover:text-white transition-colors"
                >
                  Wurzelentfernung
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/notfall"
                  className="hover:text-white transition-colors"
                >
                  Notfallservice
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/ueber-uns"
                  className="hover:text-white transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-white transition-colors"
                >
                  Unser Team
                </Link>
              </li>
              <li>
                <Link
                  href="/referenzen"
                  className="hover:text-white transition-colors"
                >
                  Referenzen
                </Link>
              </li>
              <li>
                <Link
                  href="/karriere"
                  className="hover:text-white transition-colors"
                >
                  Karriere
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-gray-400">
              {/* TODO: Add actual contact information */}
              <p>TODO: Adresse</p>
              <p>TODO: Telefonnummer</p>
              <p>TODO: E-Mail-Adresse</p>
              <p>TODO: Öffnungszeiten</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} Baumhelden. Alle Rechte vorbehalten.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <Link
              href="/datenschutz"
              className="hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link href="/agb" className="hover:text-white transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
