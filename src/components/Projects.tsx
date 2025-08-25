export default function Projects() {
  const projects = [
    {
      title: 'Food Commerce',
      description: 'Aplicação web simulando uma plataforma de delivery food.',
      image: '🍔',
      codeUrl: '#projects',
      demoUrl: '#projects'
    },
    {
      title: 'Chá Rifa Online',
      description: 'Aplicação web de rifa online com backend em PHP.',
      image: '🎫',
      codeUrl: 'https://github.com/lanjosdev/cha-rifa',
      demoUrl: 'https://cha-rifa.vercel.app/'
    },
    {
      title: 'Sampling Fanta Halloween',
      description: 'Site desenvolvido em ação publicitária da Fanta.',
      image: '🎃',
      codeUrl: 'https://github.com/lanjosdev/beta-fanta',
      demoUrl: 'https://beta-fanta.vercel.app/'
    },
    {
      title: 'Landing Page Banco Neon',
      description: 'Representação da landing page do banco Neon.',
      image: '💳',
      codeUrl: 'https://github.com/lanjosdev/lp-neon',
      demoUrl: 'https://lanjosdev.github.io/lp-neon/'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Meus Projetos
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Preview do Projeto */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                
                {/* Overlay no hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
                    >
                      Código
                    </a>
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Descrição do Projeto */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Actions - visíveis sempre em mobile */}
                <div className="flex gap-3 md:hidden">
                  <a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    Código
                  </a>
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Demonstração
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Link para mais projetos */}
        <div className="text-center">
          <a 
            href="https://github.com/lanjosdev?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Veja outros projetos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
