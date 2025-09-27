

import { Users, Leaf, Award, Heart, Shield } from "lucide-react";

export function About() {
  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Jung, mutig, engagiert",
      description:
        "Wir bringen stetig neue Erfahrungen mit, wachsen mit jedem Projekt und setzen auf moderne Techniken, Verantwortungsbewusstsein und Teamwork.",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Nachhaltig & verantwortungsvoll",
      description:
        "Für uns bedeutet Baumpflege auch Verantwortung für Natur und Umwelt. Fachgerechte Entsorgung, nachhaltig und im Austausch mit der Naturschutzbehörde.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Unsere Erfahrung",
      description:
        "Gründung 2025 in Lübeck. Zwei-Mann-Team mit Erfahrung bei der freiwilligen Feuerwehr und öffentlichem Dienst. Zertifikate: AS-Baum I, AS-Baum II, SKT-A (ab 2026).",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Warum wir?",
      description:
        "Weil wir jung, motiviert und zuverlässig sind. Mit uns haben Sie echte Baumhelden an Ihrer Seite.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zuverlässigkeit & Service",
      description:
        "Transparente Beratung, faire Preise, termingerechte Ausführung.",
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
              className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-green-700 mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm text-center">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8">
          {values.slice(3).map((value, index) => (
            <div
              key={index + 3}
              className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-green-700 mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
