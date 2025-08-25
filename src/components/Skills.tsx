export default function Skills() {
  const skills = [
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Sass', icon: '💄' },
    { name: 'ReactJS', icon: '⚛️' },
    { name: 'Styled-components', icon: '💅' },
    { name: 'PHP', icon: '🐘' },
    { name: 'Git', icon: '📋' },
    { name: 'UI Design', icon: '🎯' }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Minhas Habilidades
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        {/* Cards das Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 text-center">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Texto sobre as skills */}
        <div className="max-w-4xl mx-auto space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            Minhas habilidades atuais são em: HTML Semântico, noções de SEO, CSS/Sass (Responsivo e Animações), JavaScript Moderno (ES6), ReactJS, Styled-components, PHP, Git/GitHub e noções de UI Design (criação de layout/interfaces com Figma).
          </p>
          
          <p>
            Com isso, sou capaz de realizar desde a concepção do design de páginas web até a sua codificação, garantindo que sejam responsivas, com boa usabilidade e acessibilidade.
          </p>
        </div>
      </div>
    </section>
  )
}
