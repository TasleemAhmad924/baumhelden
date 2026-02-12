import Head from 'next/head';
import { baumheldenSchema } from '@/lib/schema';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export default function SEOHead({
  title = 'Baumhelden Lübeck - Baumpflege & Hilfe bei Sturmschäden',
  description = 'Professionelle Baumpflege in Lübeck. Hilfe bei Sturmschäden, Baumfällung, Entsorgung & Wurzelentfernung. Nachhaltiger Service von zertifizierten Experten.',
  canonical = 'https://baumhelden-luebeck.de',
}: SEOHeadProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Baumpflege Lübeck, Baumfällung Lübeck, Wurzelentfernung Lübeck, Hilfe bei Sturmschäden Lübeck, nachhaltige Baumpflege, Baumhelden, Baumentfernung Lübeck, Stubbenfräsen Lübeck, Notfall Baumpflege Lübeck"
      />
      <meta name="author" content="Baumhelden Lübeck" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="de" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Geo Tags */}
      <meta name="geo.region" content="DE-SH" />
      <meta name="geo.placename" content="Lübeck" />
      <meta name="geo.position" content="53.8655;10.6864" />
      <meta name="ICBM" content="53.8655, 10.6864" />

      {/* Local Business Tags */}
      <meta
        name="business:contact_data:street_address"
        content="Trappenstraße 12"
      />
      <meta name="business:contact_data:locality" content="Lübeck" />
      <meta name="business:contact_data:postal_code" content="23558" />
      <meta name="business:contact_data:country_name" content="Deutschland" />
      <meta
        name="business:contact_data:phone_number"
        content="+4916093490444"
      />
      <meta
        name="business:contact_data:email"
        content="info@baumhelden-luebeck.de"
      />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(baumheldenSchema),
        }}
      />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#059669" />
      <meta name="msapplication-TileColor" content="#059669" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
