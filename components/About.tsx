

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Über uns
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ein Team aus zertifizierten Baumpflegern, das Natur und Technik vereint.
            </p>
            <a 
              href="#contact" 
              className="inline-block text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Mehr erfahren
            </a>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="bg-gray-800 rounded-3xl p-4 shadow-xl">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gray-200">
                {/* Placeholder for portrait image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-600 to-green-800">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <p className="font-medium">Max Mustermann</p>
                    <p className="text-sm opacity-80">Baumpfleger</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
