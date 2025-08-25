export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Sobre mim
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto */}
          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Sou estudante de Ciência da Computação e atuo profissionalmente como desenvolvedor front-end desde 2023.
            </p>
            
            <p>
              Atualmente, faço parte do time{' '}
              <a 
                href="https://www.bizsys.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium underline transition-colors"
              >
                Bizsys
              </a>
              , onde desenvolvo projetos publicitários para parceiros como JCDecaux e Eletromidia, criando desde landing pages até aplicações web completas.
            </p>
            
            <p>
              Minhas ferramentas de trabalho incluem HTML, Sass, JavaScript/TypeScript, ReactJS, API REST, Styled-Components e Bootstrap. No momento, estou focado em expandir meus conhecimentos em PHP e no desenvolvimento de webAR (realidade aumentada na web), utilizando os frameworks como A-frame e AR.js.
            </p>
            
            <p>
              Para mais detalhes sobre mim e experiências profissionais,{' '}
              <a 
                href="https://lanjosdev.github.io/cv-web/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium underline transition-colors"
              >
                clique aqui
              </a>
              .
            </p>
          </div>

          {/* Imagem */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl shadow-xl flex items-center justify-center">
                {/* Placeholder para a imagem */}
                <div className="w-72 h-72 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              
              {/* Elemento decorativo */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
