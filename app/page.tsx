import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { GalleryContact } from '@/components/GalleryContact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-gray-50">
      <Header />
      <Hero />
      <Services />
      <About />
      <GalleryContact />
    </main>
  );
}
