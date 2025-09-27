"use client"

import * as React from "react"
import { Instagram } from "lucide-react"
import Link from 'next/link'

function Footerdemo() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t bg-emerald-600 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-14 md:h-16 flex items-center justify-center">
                <img src="/Original mit Slogan/BH_LSW.svg" alt="Baumhelden Logo" className="h-14 md:h-16 w-auto" />
              </div>
            </div>
            <p className="text-white/90 mb-4">
              Ihre professionellen Experten für Baumpflege, Baumfällung und
              Wurzelentfernung.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Leistungen</h3>
            <nav className="space-y-2 text-sm">
              <Link
                href="/#leistungen"
                className="block transition-colors hover:text-white"
              >
                Baumfällung
              </Link>
              <Link
                href="/#leistungen"
                className="block transition-colors hover:text-white"
              >
                Baumpflege
              </Link>
              <Link
                href="/#leistungen"
                className="block transition-colors hover:text-white"
              >
                Wurzelentfernung
              </Link>
              <Link
                href="/#leistungen"
                className="block transition-colors hover:text-white"
              >
                Notfallservice
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Kontakt</h3>
            <address className="space-y-2 text-sm not-italic text-white/90">
              <p>Christian Theunert</p>
              <p>Trappenstraße 12</p>
              <p>23558 Lübeck</p>
              <p>
                <a 
                  href="tel:+4916093490444" 
                  className="hover:text-white transition-colors"
                >
                  +49 160 93490444
                </a>
              </p>
              <p>
                <a 
                  href="mailto:info@baumhelden-luebeck.de" 
                  className="hover:text-white transition-colors"
                >
                  info@baumhelden-luebeck.de
                </a>
              </p>
            </address>
            <div className="mt-6">
              <h3 className="mb-4 text-lg font-semibold">Folgen Sie uns</h3>
              <Link
                href="https://www.instagram.com/baumhelden.luebeck/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/40 hover:border-white hover:bg-white/10 transition-colors"
                title="Folgen Sie uns auf Instagram"
              >
                <Instagram className="h-4 w-4 text-white" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/30 pt-8 text-center md:flex-row">
          <p className="text-sm text-white/90">
            © {currentYear} Baumhelden. Alle Rechte vorbehalten.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Datenschutz
            </Link>
            <Link
              href="/imprint"
              className="transition-colors hover:text-white"
            >
              Impressum
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              AGB
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }