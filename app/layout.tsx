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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Remove browser extension attributes that cause hydration mismatches
              (function() {
                const observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes') {
                      const target = mutation.target;
                      if (target.nodeType === 1) { // Element node
                        // Remove common browser extension attributes
                        const attributesToRemove = [
                          'bis_skin_checked',
                          'data-bis',
                          'data-bitdefender',
                          'data-avast',
                          'data-kaspersky',
                          'data-norton'
                        ];
                        attributesToRemove.forEach(attr => {
                          if (target.hasAttribute(attr)) {
                            target.removeAttribute(attr);
                          }
                        });
                      }
                    }
                  });
                });
                
                // Start observing when DOM is ready
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', function() {
                    observer.observe(document.body, {
                      attributes: true,
                      subtree: true,
                      attributeFilter: ['bis_skin_checked', 'data-bis', 'data-bitdefender', 'data-avast', 'data-kaspersky', 'data-norton']
                    });
                  });
                } else {
                  observer.observe(document.body, {
                    attributes: true,
                    subtree: true,
                    attributeFilter: ['bis_skin_checked', 'data-bis', 'data-bitdefender', 'data-avast', 'data-kaspersky', 'data-norton']
                  });
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
