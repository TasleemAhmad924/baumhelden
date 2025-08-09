'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Etwas ist schiefgelaufen!
        </h1>
        <p className="text-gray-600 mb-8 max-w-md">
          Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es
          erneut oder kontaktieren Sie uns, wenn das Problem weiterhin besteht.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="bg-brand-green text-white px-6 py-3 rounded-lg hover:bg-brand-green/90 transition-colors"
          >
            Erneut versuchen
          </button>
          <button
            onClick={() => (window.location.href = '/')}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Zur Startseite
          </button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left bg-red-50 border border-red-200 rounded-lg p-4">
            <summary className="cursor-pointer font-medium text-red-800">
              Fehlerdetails (nur in Entwicklungsumgebung sichtbar)
            </summary>
            <pre className="mt-2 text-sm text-red-700 whitespace-pre-wrap">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
