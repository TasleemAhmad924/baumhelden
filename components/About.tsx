

import { Heart, Users, Leaf, Award, Shield, CheckCircle } from "lucide-react";

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  certifications?: string[];
}

export function About() {
  const values: ValueItem[] = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Baumhelden – We feel nature",
      description:
        "Wir sind die Baumhelden – ein junges, dynamisches Team, die ihre Leidenschaft für Bäume in einer besonderen Nebentätigkeit leben. Hauptberuflich sind wir in anderen Bereichen tätig, doch die Arbeit mit der Natur ist für uns mehr als nur ein Ausgleich: Sie ist unsere Herzenssache.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Jung, mutig, engagiert",
      description:
        "Wir bringen stetig neue Erfahrungen mit, wachsen mit jedem Projekt und setzen dabei auf moderne Techniken, Verantwortungsbewusstsein und echtes Teamwork. Gleichzeitig sind wir uns bewusst, dass man in diesem Handwerk nie auslernt. Als junges Team möchten wir unser Wissen stetig festigen, weiter ausbauen und mit jedem Auftrag wachsen – genau wie die Bäume, die wir pflegen.",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "♻️ Nachhaltig & verantwortungsvoll",
      description:
        "Natur ist unser Zuhause. Für uns bedeutet Baumpflege nicht nur Fällung oder Schnitt, sondern auch Verantwortung für Natur und Umwelt. Darum kümmern wir uns um eine fachgerechte und umweltbewusste Entsorgung – sauber, nachhaltig und zuverlässig im regen Austausch mit der unteren Naturschutzbehörde.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "🌳 Unsere Erfahrung",
      description:
        "Im Zuge unserer Leidenschaft für Bäume haben wir im Jahr 2025 die Fa. Baumhelden Lübeck gegründet. Wir sind ein Zwei-Mann-Team, die ihr Handwerk seit mehreren Jahren im Bereich der freiwilligen Feuerwehr und im öffentlichen Dienst festigen konnten. Dabei haben wir es uns zur Aufgabe gemacht, stetig zu wachsen und unsere Fähigkeiten durch Zertifikate bestätigen zu lassen.",
      certifications: [
        "AS-Baum I",
        "AS-Baum II", 
        "SKT-A",
        "FLL (2026)",
        "SKT-B (2027)"
      ]
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Warum wir?",
      description:
        "Weil wir mit echtem Engagement, wachsenden Fachkenntnissen und einer großen Portion Leidenschaft arbeiten. Wir sind jung, motiviert und zuverlässig – und geben jedem Baum die Aufmerksamkeit, die er verdient. Mit uns haben Sie nicht nur einen Dienstleister, sondern echte Baumhelden an Ihrer Seite.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zuverlässigkeit & Service",
      description:
        "Wir stehen für transparente Beratung, faire Preise und termingerechte Ausführung. Bei uns gibt es keine halben Sachen – wir liefern Ergebnisse, auf die Sie sich verlassen können. 👉 Baumhelden – We feel nature",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Unsere Geschichte & Werte
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.slice(0, 3).map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col"
            >
              <div className="text-green-700 mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm text-center flex-grow">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
          {values.slice(3).map((value, index) => (
            <div
              key={index + 3}
              className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col"
            >
              <div className="text-green-700 mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm text-center flex-grow">{value.description}</p>
              {value.certifications && (
                <div className="mt-4 bg-gray-50 rounded-lg shadow-sm p-3">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Unsere Zertifizierungen:</h4>
                  <ul className="space-y-1">
                    {value.certifications.map((cert, certIndex) => (
                      <li key={certIndex} className="text-sm font-semibold text-gray-800 flex items-center">
                        <span className="text-green-600 mr-2">✅</span>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
