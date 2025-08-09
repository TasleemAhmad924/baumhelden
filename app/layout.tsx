import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Baumhelden - Professionelle Baumpflege und Baumfällung',
    template: '%s | Baumhelden',
  },
  description:
    'Professionelle Baumpflege, Baumfällung und Wurzelentfernung. Ihre Experten für Baumarbeiten in der Region.',
  keywords: [
    'Baumpflege',
    'Baumfällung',
    'Wurzelentfernung',
    'Baumschnitt',
    'Baumpflege Service',
    'Baumarbeiten',
  ],
  authors: [{ name: 'Baumhelden Team' }],
  creator: 'Baumhelden',
  publisher: 'Baumhelden',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://baumhelden.de'), // TODO: Update with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://baumhelden.de', // TODO: Update with actual domain
    title: 'Baumhelden - Professionelle Baumpflege und Baumfällung',
    description:
      'Professionelle Baumpflege, Baumfällung und Wurzelentfernung. Ihre Experten für Baumarbeiten in der Region.',
    siteName: 'Baumhelden',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Baumhelden - Professionelle Baumpflege',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baumhelden - Professionelle Baumpflege und Baumfällung',
    description:
      'Professionelle Baumpflege, Baumfällung und Wurzelentfernung. Ihre Experten für Baumarbeiten in der Region.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        {/* TODO: Add Header component */}
        <main>{children}</main>
        {/* TODO: Add Footer component */}
      </body>
    </html>
  );
}
