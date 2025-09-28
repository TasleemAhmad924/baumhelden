/* eslint-disable react/no-unescaped-entities */
import { Header } from '@/components/Header';
import { Footerdemo } from '@/components/ui/footer-section';
import { HydrationBoundary } from '@/components/HydrationBoundary';

export default function ImprintPage() {
  return (
    <HydrationBoundary>
      <main className="min-h-screen bg-white">
        <Header />
        <section className="px-4 pt-32 sm:pt-36 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <div className="prose prose-gray max-w-none">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Impressum</h1>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 DDG</h2>
                
                <div className="mb-6">
                  <p className="font-semibold text-gray-900 mb-2">Christian Theunert</p>
                  <p className="text-gray-700">Trappenstraße 12</p>
                  <p className="text-gray-700">23558 Lübeck</p>
                </div>

                <div className="mb-6">
                  <p className="font-semibold text-gray-900 mb-2">Vertreten durch:</p>
                  <p className="text-gray-700">Christian Theunert</p>
                </div>

                <div className="mb-6">
                  <p className="font-semibold text-gray-900 mb-2">Rechtsform:</p>
                  <p className="text-gray-700">Kleingewerbe nach § 19 UStG</p>
                </div>

                <div className="mb-8">
                  <p className="font-semibold text-gray-900 mb-2">Kontakt:</p>
                  <p className="text-gray-700">Telefon: <a href="tel:+4916093490444" className="text-emerald-600 hover:text-emerald-700 transition-colors">0160-93490444</a></p>
                  <p className="text-gray-700">E-Mail: <a href="mailto:info@baumhelden-luebeck.de" className="text-emerald-600 hover:text-emerald-700 transition-colors">info@baumhelden-luebeck.de</a></p>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-4">Haftungsausschluss:</h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Haftung für Inhalte</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Haftung für Links</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Urheberrecht</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Datenschutz</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                  <br /><br />
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                  <br /><br />
                  Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Google Analytics</h3>
                <p className="text-gray-700 leading-relaxed">
                  Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footerdemo />
      </main>
    </HydrationBoundary>
  );
}


