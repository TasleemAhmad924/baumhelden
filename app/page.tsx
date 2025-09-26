import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { GalleryContact } from '@/components/GalleryContact';
import { Footer } from '@/components/ui/demo';
import { HydrationBoundary } from '@/components/HydrationBoundary';

export default function Home() {
  return (
    <HydrationBoundary>
      <main className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <About />
        <GalleryContact />
        <Footer />
      </main>
    </HydrationBoundary>
  );
}
