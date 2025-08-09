import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Seite nicht gefunden
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Die angeforderte Seite konnte nicht gefunden werden. Möglicherweise
          wurde sie verschoben oder existiert nicht mehr.
        </p>
        <Link
          href="/"
          className="bg-brand-green text-white px-6 py-3 rounded-lg hover:bg-brand-green/90 transition-colors inline-block"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
