

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Über uns
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Introduction */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Baumhelden - We feel nature
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Wir sind die Baumhelden – ein junges, dynamisches Team, die ihre Leidenschaft für Bäume in einer besonderen Nebentätigkeit leben. Hauptberuflich sind wir in anderen Bereichen tätig, doch die Arbeit mit der Natur ist für uns mehr als nur ein Ausgleich: Sie ist unsere Herzenssache.
            </p>
          </div>

          {/* Team Values */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 md:p-8">
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Jung, mutig, engagiert
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Wir bringen stetig neue Erfahrungen mit, wachsen mit jedem Projekt und setzen dabei auf moderne Techniken, Verantwortungsbewusstsein und echtes Teamwork. Gleichzeitig sind wir uns bewusst, dass man in diesem Handwerk nie auslernt. Als junges Team möchten wir unser Wissen stetig festigen, weiter ausbauen und mit jedem Auftrag wachsen – genau wie die Bäume, die wir pflegen.
            </p>
          </div>

          {/* Sustainability */}
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 md:p-8">
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-2xl mr-3">♻️</span>
              Nachhaltig & verantwortungsvoll
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Natur ist unser Zuhause. Für uns bedeutet Baumpflege nicht nur Fällung oder Schnitt, sondern auch Verantwortung für Natur und Umwelt. Darum kümmern wir uns um eine fachgerechte und umweltbewusste Entsorgung – sauber, nachhaltig und zuverlässig im regen Austausch mit der unteren Naturschutzbehörde.
            </p>
          </div>

          {/* Experience Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8">
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-2xl mr-3">🌳</span>
              Unsere Erfahrung
            </h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Im Zuge unserer Leidenschaft für Bäume haben wir im Jahr 2025 die Fa. Baumhelden Lübeck gegründet. Wir sind ein Zwei-Mann-Team, die ihr Handwerk seit mehreren Jahren im Bereich der freiwilligen Feuerwehr und im öffentlichen Dienst festigen konnten. Dabei haben wir es uns zur Aufgabe gemacht, stetig zu wachsen und unsere Fähigkeiten durch Zertifikate bestätigen zu lassen.
            </p>
            
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
              <h5 className="font-bold text-gray-900 mb-3">Zertifikate:</h5>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  AS-Baum I
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  AS-Baum II
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  SKT-A (Ab 06.02.2026)
                </li>
              </ul>
            </div>
          </div>

          {/* Why Us Section */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 md:p-8">
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Warum wir?
            </h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Weil wir mit echtem Engagement, wachsenden Fachkenntnissen und einer großen Portion Leidenschaft arbeiten. Wir sind jung, motiviert und zuverlässig – und geben jedem Baum die Aufmerksamkeit, die er verdient. Mit uns haben Sie nicht nur einen Dienstleister, sondern echte Baumhelden an Ihrer Seite.
            </p>
            
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
              <h5 className="font-bold text-gray-900 mb-3">Zuverlässigkeit & Service</h5>
              <p className="text-gray-700 leading-relaxed">
                Wir stehen für transparente Beratung, faire Preise und termingerechte Ausführung. Bei uns gibt es keine halben Sachen – wir liefern Ergebnisse, auf die Sie sich verlassen können.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <p className="text-xl md:text-2xl font-bold flex items-center justify-center">
              <span className="text-2xl mr-3">👉</span>
              Baumhelden – We feel nature
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
