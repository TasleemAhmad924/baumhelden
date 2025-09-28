'use client';

import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'baumhelden_cookie_consent_v1';

type ConsentValue = 'accepted' | 'declined' | 'customized' | null;

function getStoredConsent(): ConsentValue {
  if (typeof window === 'undefined') return null;
  try {
    const value = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (value === 'accepted' || value === 'declined' || value === 'customized') {
      return value;
    }
    return null;
  } catch {
    return null;
  }
}

function setStoredConsent(value: ConsentValue) {
  if (typeof window === 'undefined') return;
  try {
    if (value) {
      localStorage.setItem(COOKIE_CONSENT_KEY, value);
    } else {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
    }
  } catch {}
}

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentValue>(null);

  useEffect(() => {
    setConsent(getStoredConsent());
  }, []);

  const accept = () => {
    setStoredConsent('accepted');
    setConsent('accepted');
  };
  const decline = () => {
    setStoredConsent('declined');
    setConsent('declined');
  };
  const customize = () => {
    setStoredConsent('customized');
    setConsent('customized');
  };
  const reset = () => {
    setStoredConsent(null);
    setConsent(null);
  };

  return { consent, accept, decline, customize, reset };
}

const ToggleSwitch = ({ checked, onChange, disabled = false }: { checked: boolean; onChange: (checked: boolean) => void; disabled?: boolean }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
        ${checked ? 'bg-emerald-600' : 'bg-gray-200'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      <span
        className={`
          inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out
          ${checked ? 'translate-x-6' : 'translate-x-1'}
        `}
      />
    </button>
  );
};

export const CookieBanner = () => {
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const [showAnalyticsDetails, setShowAnalyticsDetails] = useState(false);
  const { consent, accept, decline, customize } = useCookieConsent();

  if (consent) return null;

  const handleAccept = () => {
    accept();
  };

  const handleDecline = () => {
    decline();
  };

  const handleManagePreferences = () => {
    setShowPreferences(true);
  };

  const handleSavePreferences = () => {
    customize();
    setShowPreferences(false);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:p-6 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <div className="hidden md:flex items-center gap-3">
              <Cookie className="w-6 h-6 text-gray-700" />
              <span className="text-lg font-semibold text-gray-900">Cookie-Hinweis</span>
            </div>
            
            <div className="flex-1">
              <p className="text-sm md:text-base text-gray-700 mb-2">
                Wir verwenden Cookies und ähnliche Technologien auf unserer Website und verarbeiten personenbezogene Daten von dir (z. B. IP-Adresse), um die Nutzung unserer Website zu analysieren und zu verbessern.
              </p>
              <div className="flex gap-4 text-sm">
                <a
                  href="https://baumhelden-luebeck.de/datenschutz"
                  className="text-emerald-600 hover:text-emerald-700 underline transition-colors duration-200"
                >
                  Datenschutz
                </a>
                <a
                  href="https://baumhelden-luebeck.de/impressum"
                  className="text-emerald-600 hover:text-emerald-700 underline transition-colors duration-200"
                >
                  Impressum
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleManagePreferences}
                className="px-4 py-2 text-sm font-medium text-emerald-600 bg-white border border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
              >
                Einstellungen verwalten
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm font-medium text-emerald-600 bg-white border border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
              >
                Alle ablehnen
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors duration-200"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPreferences && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Privatsphäre-Einstellungen
            </h2>
            
            <p className="text-gray-700 mb-6">
              Wir verwenden Cookies und ähnliche Technologien auf unserer Website und verarbeiten personenbezogene Daten von dir (z. B. IP-Adresse), um die Nutzung unserer Website zu analysieren und zu verbessern. Die Datenverarbeitung kann auch erst in Folge gesetzter Cookies stattfinden. Wir teilen diese Daten mit Dritten, die wir in den Privatsphäre-Einstellungen benennen.
            </p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Verwendete Dienste:</h3>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Google Analytics</h4>
                    <p className="text-sm text-gray-600">
                      Google LLC, USA – Zur Analyse des Nutzerverhaltens auf unserer Website
                    </p>
                  </div>
                  <div className="ml-4">
                    <ToggleSwitch
                      checked={preferences.analytics}
                      onChange={(checked) => setPreferences({...preferences, analytics: checked})}
                    />
                  </div>
                </div>
                
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Google Tag Manager</h4>
                    <p className="text-sm text-gray-600">
                      Google LLC, USA – Zur Verwaltung von Website-Tags
                    </p>
                  </div>
                  <div className="ml-4">
                    <ToggleSwitch
                      checked={preferences.marketing}
                      onChange={(checked) => setPreferences({...preferences, marketing: checked})}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Google Consent Mode</h3>
              <p className="text-gray-700 mb-4">
                Wir nutzen den Google Consent Mode, um sicherzustellen, dass Google-Dienste nur mit deiner Zustimmung Daten verarbeiten.
              </p>
              <p className="text-gray-700 mb-4">
                Der Google Consent Mode ist ein Standard für die Einholung von Einwilligungen zur Verarbeitung personenbezogener Daten und zum Setzen von Cookies durch teilnehmende Partner. Es besteht die Möglichkeit Einwilligungen zur Datenverarbeitung für definierte Zwecke zu erteilen, sodass auf dieser Website eingesetzte Google-Services und die mit Google Tag integrierten Tags von Drittanbietern Daten nur im gewünschen Maße verarbeiten können.
              </p>
              <p className="text-gray-700 mb-4">
                Wenn du nicht einwilligst, erhältst du ein Service, der für dich weniger personalisiert ist. Die wichtigsten Leistungen bleiben jedoch dieselben und es gibt keine fehlenden Features, die nicht unbedingt deine Einwilligung erfordern.
              </p>
              <p className="text-gray-700 mb-4">
                Unabhängig davon besteht im Abschnitt &quot;Nicht standardisierte Datenverarbeitung&quot; die Möglichkeit, in den Einsatz von Services einzuwilligen oder das Recht auf Widerspruch gegen berechtigte Interessen auszuüben. Einzelheiten zur spezifischen Datenverarbeitung sind in dem benannten Abschnitt zu finden.
              </p>
              <p className="text-gray-700">
                Weitere Informationen zur Verarbeitung personenbezogener Daten durch Google und Partner findest du hier.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Datenverarbeitung</h3>
              <p className="text-gray-700 mb-4">
                Die Datenverarbeitung kann mit deiner Einwilligung oder auf Basis eines berechtigten Interesses erfolgen, dem du in den Privatsphäre-Einstellungen widersprechen kannst. Die Datenverarbeitung kann auch erst in Folge gesetzter Cookies stattfinden. Wir teilen diese Daten mit Dritten, die wir in den Privatsphäre-Einstellungen benennen.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Drittland-Übermittlungen</h3>
              <p className="text-gray-700 mb-4">
                Einige der von uns verwendeten Dienste übermitteln personenbezogene Daten in Drittländer außerhalb des Europäischen Wirtschaftsraums (EWR). Die Kommission der Europäischen Union hat für einige Drittländer ein Angemessenheitsbeschluss erlassen. In anderen Fällen erfolgt die Übermittlung auf Grundlage von Standardvertragsklauseln oder anderen geeigneten Garantien.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Cookie-Einstellungen</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Essenzielle Services</h4>
                    <p className="text-sm text-gray-600">
                      Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                    </p>
                  </div>
                  <div className="ml-4">
                    <ToggleSwitch
                      checked={preferences.necessary}
                      onChange={() => {}}
                      disabled={true}
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Statistik-Services</h4>
                    <p className="text-sm text-gray-600">
                      Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                    </p>
                  </div>
                  <div className="ml-4">
                    <ToggleSwitch
                      checked={preferences.analytics}
                      onChange={(checked) => setPreferences({...preferences, analytics: checked})}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <button
                onClick={() => setShowAnalyticsDetails(!showAnalyticsDetails)}
                className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
              >
                <span>Details zu Google Analytics</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${showAnalyticsDetails ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showAnalyticsDetails && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Google Analytics ist ein Webanalysedienst von Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (&quot;Google&quot;). Google Analytics verwendet sogenannte &quot;Cookies&quot;, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Website, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
                  </p>
                </div>
              )}
            </div>

            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <p className="text-sm text-emerald-800">
                <strong>Du bist unter 16 Jahre alt?</strong> Dann kannst du nicht in optionale Services einwilligen. Bitte bitte deine Eltern oder Erziehungsberechtigten, diese Einwilligung mit dir zu treffen.
              </p>
            </div>
            
            <div className="flex gap-3 justify-end">
              <button
                className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                onClick={() => setShowPreferences(false)}
              >
                Abbrechen
              </button>
              <button
                className="px-6 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                onClick={handleSavePreferences}
              >
                Einstellungen speichern
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};