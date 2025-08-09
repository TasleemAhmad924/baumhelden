/**
 * Header Component - Placeholder
 * TODO: Implement navigation, logo, mobile menu
 */

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Baumhelden</span>
          </Link>

          {/* Navigation - Placeholder */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-brand-green transition-colors"
            >
              Startseite
            </Link>
            <Link
              href="/leistungen"
              className="text-gray-700 hover:text-brand-green transition-colors"
            >
              Leistungen
            </Link>
            <Link
              href="/ueber-uns"
              className="text-gray-700 hover:text-brand-green transition-colors"
            >
              Über uns
            </Link>
            <Link
              href="/kontakt"
              className="text-gray-700 hover:text-brand-green transition-colors"
            >
              Kontakt
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/kontakt"
              className="bg-brand-green text-white px-4 py-2 rounded-lg hover:bg-brand-green/90 transition-colors"
            >
              Angebot anfragen
            </Link>
          </div>

          {/* Mobile Menu Button - Placeholder */}
          <button className="md:hidden p-2">
            <span className="sr-only">Menü öffnen</span>
            {/* TODO: Add hamburger icon */}
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
        </div>
      </div>

      {/* TODO: Add mobile menu */}
    </header>
  );
}
