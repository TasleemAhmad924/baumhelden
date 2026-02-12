import Image from 'next/image';

export function Maintenance() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white/90 shadow-sm px-6 py-8 sm:px-8 sm:py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-700">
              Baumhelden
            </p>
          </div>
          <div className="h-10 w-auto">
            <Image
              src="/Original mit Slogan/BH_LSW.svg"
              alt="BAUMHELDEN Logo"
              width={140}
              height={40}
              className="h-10 w-auto opacity-90"
              priority
            />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Wartungsarbeiten
          </h1>
          <p className="text-sm font-medium text-emerald-700">
            Wir bitten um Ihr Verständnis.
          </p>
          <p className="text-sm leading-relaxed text-slate-700">
            Unsere Website wird im Moment kurzzeitig gepflegt und aktualisiert,
            damit wir Ihnen weiterhin eine zuverlässige und hochwertige Nutzung
            bieten können.
          </p>
          <p className="text-sm leading-relaxed text-slate-700">
            In der Regel dauert dies nur kurze Zeit. Bitte versuchen Sie es in
            Kürze erneut.
          </p>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-4">
          <p className="text-xs text-slate-500">
            Vielen Dank für Ihr Vertrauen in BAUMHELDEN.
          </p>
        </div>
      </div>
    </main>
  );
}
