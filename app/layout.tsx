import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BAUMHELDEN - Professionelle Baumpflege und Baumfällung',
  description: 'Wir kümmern uns um Ihre Bäume – sicher, schonend und ästhetisch. Zertifizierte Baumpfleger für Baumpflege, Baumfällung und Wurzelstockentfernung.',
  keywords: 'Baumpflege, Baumfällung, Wurzelstockentfernung, Baumkontrolle, Baumpfleger',
  authors: [{ name: 'BAUMHELDEN' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
