'use client';

import { Header } from '@/components/Header';
import { GlassCard } from '@/components/GlassCard';
import { HydrationBoundary } from '@/components/HydrationBoundary';

export default function ImprintPage() {
  return (
    <HydrationBoundary>
      <main className="min-h-screen bg-white">
        <Header />
        <section className="px-4 pt-28 pb-16">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
            <GlassCard className="p-6 md:p-8">
              <div className="prose prose-gray max-w-none">
                <p>
                  Hier steht Platzhaltertext für das Impressum. Inhalte werden später ergänzt.
                </p>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>
    </HydrationBoundary>
  );
}


