export const baumheldenSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Baumhelden Lübeck",
  "description": "Professionelle Baumpflege in Lübeck. Hilfe bei Sturmschäden, Baumfällung, Entsorgung und Wurzelentfernung. Nachhaltiger und zuverlässiger Service.",
  "url": "https://baumhelden-luebeck.de",
  "telephone": "+4916093490444",
  "email": "info@baumhelden-luebeck.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Trappenstraße 12",
    "addressLocality": "Lübeck",
    "postalCode": "23558",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "53.8655",
    "longitude": "10.6864"
  },
  "areaServed": {
    "@type": "City",
    "name": "Lübeck"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "53.8655",
      "longitude": "10.6864"
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Baumpflege Dienstleistungen",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hilfe bei Sturmschäden",
          "description": "Notfall-Baumfällung und Aufräumarbeiten nach Sturmschäden"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Baumfällung",
          "description": "Professionelle Baumfällung und Entfernung"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Baumentfernung",
          "description": "Fachgerechte Entsorgung von Baumresten und Abfällen"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wurzelentfernung",
          "description": "Komplette Wurzelentfernung und Stubbenfräsen"
        }
      }
    ]
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "AS-Baum I",
      "description": "Arbeitssicherheit Baum I Zertifizierung"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "AS-Baum II",
      "description": "Arbeitssicherheit Baum II Zertifizierung"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "SKT-A",
      "description": "Seilklettertechnik A Zertifizierung (gültig ab 06.02.2026)"
    }
  ],
  "slogan": "We feel nature",
  "foundingDate": "2024",
  "employee": {
    "@type": "Person",
    "name": "Christian Theunert"
  },
  "priceRange": "$$",
  "paymentAccepted": ["Bargeld", "Überweisung"],
  "currenciesAccepted": "EUR",
  "openingHours": "Mo-Fr 08:00-18:00",
  "sameAs": []
};
