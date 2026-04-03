"use client"

import * as React from "react"
import Link from 'next/link'
import Image from 'next/image'

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

function Footerdemo() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t bg-emerald-600 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="order-1 md:order-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-20 md:h-24 lg:h-28 flex items-center justify-center">
                <Image src="/Original mit Slogan/BH_LSW.svg" alt="Baumhelden Logo" width={112} height={112} className="h-20 md:h-24 lg:h-28 w-auto" />
              </div>
            </div>
            <p className="text-white/90 mb-4">
              Ihre professionellen Experten für Baumfällung, Wurzelentfernung sowie Hilfe bei Sturmschäden und akuter Bruchgefahr.
            </p>
          </div>
          
          <div className="order-3 md:order-2">
            <h3 className="mb-4 text-lg font-semibold">Leistungen</h3>
            <nav className="space-y-2 text-sm">
              <Link
                href="/#leistungen"
                className="block transition-colors hover:text-white"
              >
                Hilfe bei Sturmschäden
              </Link>
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
                Entsorgung
              </Link>
              <Link
                href="/#leistungen"
                className="block transition-colors hover:text-white"
              >
                Wurzelentfernung
              </Link>
            </nav>
          </div>

          <div className="order-4 md:order-3">
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
                <InstagramIcon className="h-4 w-4 text-white" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="order-2 md:order-4">
            <h3 className="mb-4 text-lg font-semibold">Unser Standort</h3>
            <div className="w-full h-40 md:h-48 lg:h-52 bg-gray-200 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4705.0723299441115!2d10.659642076962943!3d53.868895435496576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b20ea95e0509f5%3A0xa2c4f2c7ae9fff99!2sTrappenstra%C3%9Fe%2012%2C%2023558%20L%C3%BCbeck!5e0!3m2!1sde!2sde!4v1758484038370!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-xl"
              />
            </div>
            <p className="text-white/90 mt-3 text-sm">
              Trappenstr. 12 - 23558 Lübeck
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/30 pt-8 text-center md:flex-row">
          <p className="text-sm text-white/90">
            © {currentYear} Baumhelden. Alle Rechte vorbehalten.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link
              href="/datenschutz"
              className="transition-colors hover:text-white"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="transition-colors hover:text-white"
            >
              Impressum
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }