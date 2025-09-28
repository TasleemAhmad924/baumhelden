'use client'

import { useRef, useState } from 'react'
import { GlassCard } from './GlassCard'
import TreeContactForm from './forms/contactForm'

export function GalleryContact() {
  const [showForm, setShowForm] = useState(false)
  const formRef = useRef<HTMLDivElement | null>(null)

  function handleClick() {
    setShowForm(true) // Formular einblenden
    // kurz warten, bis es im DOM gerendert ist
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Kontaktanfrage stellen
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto px-4">
            Stellen Sie jetzt Ihre unverbindliche Kontaktanfrage. Wir beraten Sie gerne individuell und melden uns schnellstmöglich bei Ihnen zurück.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <GlassCard className="p-8 md:p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                    Kontakt
                  </h3>

                  <div className="space-y-6">
                    <p className="text-xl font-medium text-gray-900">
                      Christian Theunert
                    </p>
                    <div className="space-y-3">
                      <p className="text-gray-700 text-lg">
                        <span className="font-medium">Telefon:</span> +49 160 93490444
                      </p>
                      <p className="text-gray-700 text-lg">
                        <span className="font-medium">E-Mail:</span>{' '}
                        info@baumhelden-luebeck.de
                      </p>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={handleClick}
                      aria-expanded={showForm}
                      aria-controls="tree-contact-form"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-medium text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      {showForm ? 'Formular schließen' : 'Kontakt aufnehmen'}
                    </button>
                  </div>
                </div>

                {showForm && (
                  <div id="tree-contact-form" ref={formRef} className="mt-8">
                    <TreeContactForm />
                  </div>
                )}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
