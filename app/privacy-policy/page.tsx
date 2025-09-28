import { Header } from '@/components/Header';
import { Footerdemo } from '@/components/ui/footer-section';
import { DatenschutzContent } from '@/components/DatenschutzContent';
import { HydrationBoundary } from '@/components/HydrationBoundary';

export default function PrivacyPolicyPage() {
  return (
    <HydrationBoundary>
      <main className="min-h-screen bg-white">
        <Header />
        <section className="px-4 pt-32 sm:pt-36 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <DatenschutzContent />
            </div>
          </div>
        </section>
        <Footerdemo />
      </main>
    </HydrationBoundary>
  );
}


