"use client";

import { useState } from "react";
import { GlassCard } from "./GlassCard";
import TreeContactForm from "./forms/contactForm";

export function GalleryContact() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Galerie
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Card */}
          <GlassCard className="p-6 md:p-8">
            <div className="space-y-4">
              <div className="w-full h-48 md:h-64 bg-gray-200 rounded-xl overflow-hidden">
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
              <p className="text-gray-700 font-medium">
                Trappenstr. 12 - 23558 Lübeck
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
                <p className="text-lg font-medium text-gray-900">
                  Christian Theunert
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Telefon:</span> 0123 / 4507830
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">E-Mail:</span>{" "}
                  kontakt@baumhelden.de
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setShowForm((v) => !v)}
                  aria-expanded={showForm}
                  aria-controls="tree-contact-form"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200"
                >
                  {showForm ? "Formular schließen" : "Kontakt aufnehmen"}
                </button>
              </div>

              {showForm && (
                <div id="tree-contact-form" className="mt-6">
                  <TreeContactForm />
                </div>
              )}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
