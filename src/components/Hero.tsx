export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          
          {/* Texto Principal */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              <span className="text-2xl">👋🏽</span> Olá, que bom te ver aqui, me chamo{' '}
              <strong className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Lucas dos Anjos
              </strong>
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <strong className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Desenvolvedor Front-End
              </strong>{' '}
              <span className="text-gray-400">&</span>{' '}
              <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Web Designer
              </strong>
            </h1>

            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Apaixonado por dar vida a ideias através de código, design e experiências marcantes.
              </h2>

              {/* Links Sociais */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/lanjosdev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>Github</span>
                </a>

                <a 
                  href="https://www.linkedin.com/in/lucasdosanjos/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>Linkedin</span>
                </a>

                <a 
                  href="https://lanjosdev.github.io/cv-web/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all"
                >
                  <span>Visualizar CV</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Ilustração/Espaço para imagem */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center">
              <div className="text-8xl">👨‍💻</div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll (Veja mais) */}
        <div className="flex justify-center mt-16">
          <a
            id="about"
            href="#about"
            className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            aria-label="Ir para a seção Sobre mim"
          >
            <span className="text-sm">Veja mais</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors animate-bounce">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
