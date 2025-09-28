'use client';

import { useState } from 'react';

type Step = 0 | 1 | 2 | 3 | 4 | 5;

interface ContactFormData {
  access_key: string;
  name: string;
  email: string;
  message: string;
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

const steps = [
  'Baumgröße',
  'Baumbeigung',
  'Gebäude',
  'Zuwegung',
  'Entsorgung',
  'Kontakt',
];

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
    setStep(s => Math.min(s + 1, 5) as Step);
  }

  function back() {
    setStep(s => Math.max(s - 1, 0) as Step);
  }

  function select(
    field:
      | 'tree_size'
      | 'baum_beigung'
      | 'gebaeude_nahe'
      | 'zuwegung_befahrbar'
      | 'disposal',
    value: string
  ) {
    setChoice(c => ({ ...c, [field]: value }));
    next();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setOk(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)
      .value;

    const data: ContactFormData = {
      access_key: '59cb4de0-48c5-4a5d-b358-4a82f4a08ace',
      name,
      email,
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
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
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
      className={`rounded-xl border p-4 text-left transition ${
        active
          ? 'border-blue-600 bg-blue-50'
          : 'border-gray-200 hover:border-gray-400'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="mx-auto max-w-xl p-6">
      {/* Stepper */}
      <ol className="mb-6 flex items-center gap-2">
        {steps.map((label, i) => (
          <li key={label} className="flex-1">
            <div
              className={`h-2 rounded ${i <= step ? 'bg-blue-600' : 'bg-gray-200'}`}
            />
            <p
              className={`mt-2 text-xs ${i === step ? 'font-semibold' : 'text-gray-500'}`}
            >
              {label}
            </p>
          </li>
        ))}
      </ol>

      {/* Step 0: Baumgröße */}
      {step === 0 && (
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">
            Welche Baumgröße soll gefällt werden?
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <Card onClick={() => select('tree_size', 'Klein')}>
              <div className="text-3xl">🌱</div>
              <div className="mt-1 font-medium">Klein</div>
            </Card>
            <Card onClick={() => select('tree_size', 'Mittel')}>
              <div className="text-3xl">🌳</div>
              <div className="mt-1 font-medium">Mittel</div>
            </Card>
            <Card onClick={() => select('tree_size', 'Groß')}>
              <div className="text-3xl">🌲</div>
              <div className="mt-1 font-medium">Groß</div>
            </Card>
          </div>
          <div className="mt-4">
            <button
              onClick={next}
              className="text-sm text-gray-500 underline"
              disabled={!choice.tree_size}
            >
              Weiter
            </button>
          </div>
        </div>
      )}

      {/* Step 1: Baumbeigung */}
      {step === 1 && (
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">
            Wie ist die Baumbiegung?
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <Card onClick={() => select('baum_beigung', 'Nach links geneigt')}>
              <div className="text-3xl">↖️</div>
              <div className="mt-1 font-medium">Nach links geneigt</div>
            </Card>
            <Card onClick={() => select('baum_beigung', 'Gerade')}>
              <div className="text-3xl">⬆️</div>
              <div className="mt-1 font-medium">Gerade</div>
            </Card>
            <Card onClick={() => select('baum_beigung', 'Nach rechts geneigt')}>
              <div className="text-3xl">↗️</div>
              <div className="mt-1 font-medium">Nach rechts geneigt</div>
            </Card>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button onClick={back} className="text-sm text-gray-500 underline">
              Zurück
            </button>
            <button
              onClick={next}
              className="text-sm text-gray-500 underline"
              disabled={!choice.baum_beigung}
            >
              Weiter
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Gebäude-Nähe */}
      {step === 2 && (
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">
            Befinden sich Gebäude in unmittelbarer Nähe?
          </h2>
          <div className="grid gap-3">
            <Card onClick={() => select('gebaeude_nahe', 'Ja, unter 10 Meter')}>
              Ja, unter 10&nbsp;Meter Entfernung
            </Card>
            <Card onClick={() => select('gebaeude_nahe', 'Ja, über 10 Meter')}>
              Ja, über 10&nbsp;Meter Entfernung
            </Card>
            <Card onClick={() => select('gebaeude_nahe', 'Nein')}>Nein</Card>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button onClick={back} className="text-sm text-gray-500 underline">
              Zurück
            </button>
            <button
              onClick={next}
              className="text-sm text-gray-500 underline"
              disabled={!choice.gebaeude_nahe}
            >
              Weiter
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Zuwegung */}
      {step === 3 && (
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">
            Ist die Zuwegung zum Baum befahrbar?
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Card onClick={() => select('zuwegung_befahrbar', 'Ja')}>Ja</Card>
            <Card onClick={() => select('zuwegung_befahrbar', 'Nein')}>
              Nein
            </Card>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button onClick={back} className="text-sm text-gray-500 underline">
              Zurück
            </button>
            <button
              onClick={next}
              className="text-sm text-gray-500 underline"
              disabled={!choice.zuwegung_befahrbar}
            >
              Weiter
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Entsorgung */}
      {step === 4 && (
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">
            Entsorgung und Wurzelbeseitigung
          </h2>
          <div className="grid gap-3">
            <Card onClick={() => select('disposal', 'Selbst übernehmen')}>
              ✅ Ich übernehme das selbst
            </Card>
            <Card onClick={() => select('disposal', 'Bitte übernehmen')}>
              ❌ Bitte übernehmen
            </Card>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button onClick={back} className="text-sm text-gray-500 underline">
              Zurück
            </button>
            <button
              onClick={next}
              className="text-sm text-gray-500 underline"
              disabled={!choice.disposal}
            >
              Weiter
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Kontakt */}
      {step === 5 && (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl bg-white p-5 shadow-sm"
        >
          <h2 className="text-lg font-semibold">
            Kontakt & zusätzliche Angaben
          </h2>

          {/* Zusammenfassung */}
          <div className="rounded-lg bg-gray-50 p-3 text-sm text-gray-700">
            <div>
              <span className="font-medium">Baumgröße:</span>{' '}
              {choice.tree_size || '—'}
            </div>
            <div>
              <span className="font-medium">Baumbeigung:</span>{' '}
              {choice.baum_beigung || '—'}
            </div>
            <div>
              <span className="font-medium">Gebäude-Nähe:</span>{' '}
              {choice.gebaeude_nahe || '—'}
            </div>
            <div>
              <span className="font-medium">Zuwegung befahrbar:</span>{' '}
              {choice.zuwegung_befahrbar || '—'}
            </div>
            <div>
              <span className="font-medium">Entsorgung:</span>{' '}
              {choice.disposal || '—'}
            </div>
          </div>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Ihr Name"
              className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 
                   focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          {/* Telefonnummer */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Telefonnummer
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+49 123 4567890"
              className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 
                   focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          {/* E-Mail */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-Mail *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="email@example.com"
              className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 
                   focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          {/* Nachricht */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Nachricht (weitere Details) *
            </label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="z. B. Zugang, Wunschtermin…"
              className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 
                   focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          {/* Hidden Fallback-Felder */}
          <input type="hidden" name="tree_size" value={choice.tree_size} />
          <input
            type="hidden"
            name="baum_beigung"
            value={choice.baum_beigung}
          />
          <input
            type="hidden"
            name="gebaeude_nahe"
            value={choice.gebaeude_nahe}
          />
          <input
            type="hidden"
            name="zuwegung_befahrbar"
            value={choice.zuwegung_befahrbar}
          />
          <input type="hidden" name="disposal" value={choice.disposal} />

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={back}
              className="rounded border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              Zurück
            </button>
            <button
              type="submit"
              disabled={sending}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-60"
            >
              {sending ? 'Senden…' : 'Formular senden'}
            </button>
          </div>

          {ok === true && (
            <p className="text-sm text-green-700">
              Vielen Dank! Ihre Anfrage wurde übermittelt.
            </p>
          )}
          {ok === false && (
            <p className="text-sm text-red-600">
              Senden fehlgeschlagen. Bitte später erneut versuchen.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
