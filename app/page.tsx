import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { GalleryContact } from '@/components/GalleryContact';
import { Footerdemo } from '@/components/ui/footer-section';
import { HydrationBoundary } from '@/components/HydrationBoundary';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CookieBanner } from '@/components/CookieBanner';

export default function Home() {
  return (
    <HydrationBoundary>
      <main className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <About />
        <GalleryContact />
        <Footerdemo />
        <WhatsAppButton />
        <CookieBanner />
      </main>
    </HydrationBoundary>
  );
}
