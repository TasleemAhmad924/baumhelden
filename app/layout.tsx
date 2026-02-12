import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Maintenance } from '@/components/Maintenance';

const inter = Inter({ subsets: ['latin'] });
const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

export const metadata: Metadata = {
  title: 'BAUMHELDEN - Professionelle Baumpflege und Baumfällung',
  description:
    'Wir kümmern uns um Ihre Bäume – sicher, schonend und ästhetisch. Zertifizierte Baumpfleger für Baumpflege, Baumfällung und Wurzelstockentfernung.',
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
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PRN32XGH65"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PRN32XGH65');
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {maintenanceMode ? <Maintenance /> : children}
      </body>
    </html>
  );
}
