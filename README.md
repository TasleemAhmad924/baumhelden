# BAUMHELDEN - Professionelle Baumpflege und Baumfällung

Eine moderne, responsive One-Page-Website für ein Baumfäll-Unternehmen mit glassmorphism Design.

## 🎨 Design-Features

- **Glassmorphism UI**: Frosted glass Effekt mit backdrop-blur
- **iOS 16 Lockscreen Stil**: Große abgerundete Ecken und weiche Schatten
- **Responsive Design**: Mobile-first Ansatz mit TailwindCSS
- **Smooth Scrolling**: Sanfte Navigation zwischen Sektionen
- **Moderne Typografie**: Inter-Schriftart für optimale Lesbarkeit

## 🛠 Technologie-Stack

- **Next.js 15** mit App Router
- **TypeScript** für Typsicherheit
- **TailwindCSS** für Styling
- **Lucide React** für Icons
- **Inter Font** von Google Fonts

## 📁 Projektstruktur

```
baumhelden_new/
├── app/
│   ├── layout.tsx          # Root Layout mit Meta-Tags
│   ├── page.tsx            # Hauptseite
│   └── globals.css         # Globale Styles
├── components/
│   ├── GlassCard.tsx       # Generische Glas-Komponente
│   ├── Header.tsx          # Navigation mit Logo
│   ├── Hero.tsx            # Hero-Sektion mit CTA
│   ├── Services.tsx        # 4 Service-Karten
│   ├── About.tsx           # Über uns + Portrait
│   └── GalleryContact.tsx  # Galerie + Kontakt
└── public/
    ├── logo.svg            # BAUMHELDEN Logo
    ├── chainsaw-bg.svg     # Hintergrundbild
    └── favicon.svg         # Favicon
```

## 🚀 Installation & Entwicklung

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Production Build
npm run build

# Production Server starten
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Sektionen

1. **Header**: Sticky Navigation mit Logo und Menü
2. **Hero**: Großer Titel mit Call-to-Action Button
3. **Services**: 4 Service-Karten (Baumpflege, Baumfällung, etc.)
4. **About**: Über uns Text mit Portrait-Karte
5. **Gallery & Contact**: Map und Kontaktdaten

## 🎨 Design-System

### Farben

- **Primär**: Grün (#22c55e) für Natur-Thematik
- **Sekundär**: Grau (#374151) für Professionalität
- **Glas-Effekt**: Weiß mit 10% Opacity

### Typografie

- **Schriftart**: Inter (Google Fonts)
- **Größen**: Responsive von 16px bis 64px
- **Gewichte**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Komponenten

- **GlassCard**: Wiederverwendbare Glas-Komponente
- **Glassmorphism**: backdrop-blur-xl, bg-white/10, border-white/10
- **Schatten**: Soft shadows für Tiefe

## 📄 Lizenz

Dieses Projekt ist für BAUMHELDEN erstellt.
