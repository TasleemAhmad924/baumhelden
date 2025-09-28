'use client';

import { useState } from 'react';

type Step = 0 | 1 | 2 | 3 | 4 | 5;

interface ContactFormData {
  access_key: string;
  name: string;
  email: string;
  message: string;
  phone?: string;
  tree_size?: string;
  baum_beigung?: string;
  gebaeude_nahe?: string;
  zuwegung_befahrbar?: string;
  disposal?: string;
}

interface Web3FormsResponse {
  success: boolean;
  [key: string]: unknown;
}

const steps = ['Baumgröße', 'Baumbeigung', 'Gebäude', 'Zuwegung', 'Entsorgung', 'Kontakt'];

export default function TreeContactForm() {
  const [step, setStep] = useState<Step>(0);
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  const [choice, setChoice] = useState({
    tree_size: '',
    baum_beigung: '',
    gebaeude_nahe: '',
    zuwegung_befahrbar: '',
    disposal: '',
  });

  function next() {
    setStep((s) => Math.min(s + 1, 5) as Step);
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0) as Step);
  }
  function select(
    field: 'tree_size' | 'baum_beigung' | 'gebaeude_nahe' | 'zuwegung_befahrbar' | 'disposal',
    value: string
  ) {
    setChoice((c) => ({ ...c, [field]: value }));
    next();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setOk(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value || '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const data: ContactFormData = {
      access_key: '59cb4de0-48c5-4a5d-b358-4a82f4a08ace',
      name,
      email,
      phone,
      message,
      tree_size: choice.tree_size,
      baum_beigung: choice.baum_beigung,
      gebaeude_nahe: choice.gebaeude_nahe,
      zuwegung_befahrbar: choice.zuwegung_befahrbar,
      disposal: choice.disposal,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const result: Web3FormsResponse = await response.json();
      setOk(result.success);
      if (result.success) {
        form.reset();
        setChoice({
          tree_size: '',
          baum_beigung: '',
          gebaeude_nahe: '',
          zuwegung_befahrbar: '',
          disposal: '',
        });
        setStep(0);
      }
    } catch {
      setOk(false);
    } finally {
      setSending(false);
    }
  }

  // kompakte Card, Inhalt zentriert – passt für 2/3 Spalten auf Mobile in einer Linie
  const Card = ({
    children,
    onClick,
    active,
  }: {
    children: React.ReactNode;
    onClick: () => void;
    active?: boolean;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-full flex-col items-center justify-center rounded-xl border p-3 sm:p-4 text-center transition
        ${active ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-400'}`}
    >
      {children}
    </button>
  );

  return (
    <div className="mx-auto w-full md:max-w-xl px-4 sm:px-6 py-6 overflow-x-hidden">
      {/* Stepper (bricht NICHT, bleibt eine Reihe – Balken pro Zelle) */}
      <ol className="mb-6 grid grid-cols-3 sm:grid-cols-6 gap-2 w-full">
        {steps.map((label, i) => (
          <li key={label} className="min-w-0 flex flex-col items-center">
            <div className={`h-1.5 w-full rounded-full ${i <= step ? 'bg-blue-600' : 'bg-gray-200'}`} />
            <p
              className={`mt-2 text-[11px] sm:text-xs leading-4 text-center ${
                i === step ? 'font-semibold' : 'text-gray-500'
              } truncate`}
              title={label}
            >
              {label}
            </p>
          </li>
        ))}
      </ol>

      {/* Step 0: Baumgröße – 3 Optionen in EINER Linie */}
      {step === 0 && (
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Welche Baumgröße soll gefällt werden?</h2>
          <div className="grid grid-cols-3 gap-2">
            <Card onClick={() => select('tree_size', 'Klein')}>
              <div className="text-2xl sm:text-3xl leading-none">🌱</div>
              <div className="mt-1 text-sm sm:text-base font-medium">Klein</div>
            </Card>
            <Card onClick={() => select('tree_size', 'Mittel')}>
              <div className="text-2xl sm:text-3xl leading-none">🌳</div>
              <div className="mt-1 text-sm sm:text-base font-medium">Mittel</div>
            </Card>
            <Card onClick={() => select('tree_size', 'Groß')}>
              <div className="text-2xl sm:text-3xl leading-none">🌲</div>
              <div className="mt-1 text-sm sm:text-base font-medium">Groß</div>
            </Card>
          </div>
          <div className="mt-4">
            <button onClick={next} className="text-sm text-gray-500 underline" disabled={!choice.tree_size}>
              Weiter
            </button>
          </div>
        </div>
      )}

      {/* Step 1: Baumbeigung – 3 Optionen in EINER Linie */}
      {step === 1 && (
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Wie ist die Baumbiegung?</h2>
          <div className="grid grid-cols-3 gap-2">
            <Card onClick={() => select('baum_beigung', 'Nach links geneigt')}>
              <div className="text-2xl sm:text-3xl leading-none">↖️</div>
              <div className="mt-1 text-sm sm:text-base font-medium">Links</div>
            </Card>
            <Card onClick={() => select('baum_beigung', 'Gerade')}>
              <div className="text-2xl sm:text-3xl leading-none">⬆️</div>
              <div className="mt-1 text-sm sm:text-base font-medium">Gerade</div>
            </Card>
            <Card onClick={() => select('baum_beigung', 'Nach rechts geneigt')}>
              <div className="text-2xl sm:text-3xl leading-none">↗️</div>
              <div className="mt-1 text-sm sm:text-base font-medium">Rechts</div>
            </Card>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <button onClick={back} className="w-full sm:w-auto rounded border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              Zurück
            </button>
            <button onClick={next} className="w-full sm:w-auto text-sm text-gray-500 underline" disabled={!choice.baum_beigung}>
              Weiter
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Gebäude-Nähe – 3 Optionen in EINER Linie */}
      {step === 2 && (
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Befinden sich Gebäude in unmittelbarer Nähe?</h2>
          <div className="grid grid-cols-3 gap-2">
            <Card onClick={() => select('gebaeude_nahe', 'Ja, unter 10 Meter')}>Unter 10&nbsp;m</Card>
            <Card onClick={() => select('gebaeude_nahe', 'Ja, über 10 Meter')}>Über 10&nbsp;m</Card>
            <Card onClick={() => select('gebaeude_nahe', 'Nein')}>Nein</Card>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <button onClick={back} className="w-full sm:w-auto rounded border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              Zurück
            </button>
            <button onClick={next} className="w-full sm:w-auto text-sm text-gray-500 underline" disabled={!choice.gebaeude_nahe}>
              Weiter
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Zuwegung – 2 Optionen in EINER Linie */}
      {step === 3 && (
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Ist die Zuwegung zum Baum befahrbar?</h2>
          <div className="grid grid-cols-2 gap-2">
            <Card onClick={() => select('zuwegung_befahrbar', 'Ja')}>Ja</Card>
            <Card onClick={() => select('zuwegung_befahrbar', 'Nein')}>Nein</Card>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <button onClick={back} className="w-full sm:w-auto rounded border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              Zurück
            </button>
            <button onClick={next} className="w-full sm:w-auto text-sm text-gray-500 underline" disabled={!choice.zuwegung_befahrbar}>
              Weiter
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Entsorgung – 2 Optionen in EINER Linie */}
      {step === 4 && (
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Entsorgung und Wurzelbeseitigung</h2>
          <div className="grid grid-cols-2 gap-2">
            <Card onClick={() => select('disposal', 'Selbst übernehmen')}>✅ Selbst</Card>
            <Card onClick={() => select('disposal', 'Bitte übernehmen')}>❌ Übernehmen</Card>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <button onClick={back} className="w-full sm:w-auto rounded border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              Zurück
            </button>
            <button onClick={next} className="w-full sm:w-auto text-sm text-gray-500 underline" disabled={!choice.disposal}>
              Weiter
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Kontakt */}
      {step === 5 && (
        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Kontakt & zusätzliche Angaben</h2>

          <div className="rounded-lg bg-gray-50 p-3 text-sm text-gray-700 break-words">
            <div><span className="font-medium">Baumgröße:</span> {choice.tree_size || '—'}</div>
            <div><span className="font-medium">Baumbeigung:</span> {choice.baum_beigung || '—'}</div>
            <div><span className="font-medium">Gebäude-Nähe:</span> {choice.gebaeude_nahe || '—'}</div>
            <div><span className="font-medium">Zuwegung befahrbar:</span> {choice.zuwegung_befahrbar || '—'}</div>
            <div><span className="font-medium">Entsorgung:</span> {choice.disposal || '—'}</div>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Ihr Name"
              autoComplete="name"
              className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefonnummer</label>
            <input
              type="tel"
              name="phone"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+49 160 1234567"
              className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail *</label>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="email@example.com"
              className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nachricht (weitere Details) *</label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="z. B. Zugang, Wunschtermin…"
              className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          {/* Hidden Felder */}
          <input type="hidden" name="tree_size" value={choice.tree_size} />
          <input type="hidden" name="baum_beigung" value={choice.baum_beigung} />
          <input type="hidden" name="gebaeude_nahe" value={choice.gebaeude_nahe} />
          <input type="hidden" name="zuwegung_befahrbar" value={choice.zuwegung_befahrbar} />
          <input type="hidden" name="disposal" value={choice.disposal} />

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={back}
              className="w-full sm:w-auto rounded border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              Zurück
            </button>
            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-60"
            >
              {sending ? 'Senden…' : 'Formular senden'}
            </button>
          </div>

          {ok === true && <p className="text-sm text-green-700">Vielen Dank! Ihre Anfrage wurde übermittelt.</p>}
          {ok === false && <p className="text-sm text-red-600">Senden fehlgeschlagen. Bitte später erneut versuchen.</p>}
        </form>
      )}
    </div>
  );
}
