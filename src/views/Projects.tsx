import { Fade } from "react-awesome-reveal";
import Background from "../components/Background";
import projectsDb from "../resources/projectsDb"
import projectsEnglish from "../resources/ProjectsDbEnglish";
import { useLanguage } from "../components/LanguageProvider";
import { useState } from "react";

export default function Projects() {

  const { language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="relative text-white min-h-screen flex flex-col">
      <Background/>
      <section id="projects" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold animate-slide-up">{language === 'es' ? 'Mis Proyectos' : 'My Projects'}</h2>
          <ul className="mt-6 space-y-6 flex flex-col items-center">
            <Fade>
            {language === 'es' ? (
                // Código a ejecutar si la condición se cumple
                projectsDb.map((project, index) => (
                  <li
                    key={index}
                    className="bg-gray-800 w-7/8 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-500 ease-out transform hover:scale-105 animate-scale-in"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <h3 className="text-xl md:text-2xl font-bold">{project.name}</h3>
                    <p className="text-gray-400 mt-2">{project.description}</p>
                    <img className={`border-4 ${hoveredIndex === index ? 'animated-border' : 'border-amber-400'}`} src={project.image} alt="" />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110"
                    >
                      Ver Proyecto
                    </a>
                  </li>
                ))
            ) : (
                // Código a ejecutar si la condición no se cumple
                projectsEnglish.map((project, index) => (
                  <li
                    key={index}
                    className="bg-gray-800 w-7/8 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-500 ease-out transform hover:scale-105 animate-scale-in"
                  >
                    <h3 className="text-xl md:text-2xl font-bold">{project.name}</h3>
                    <p className="text-gray-400 mt-2">{project.description}</p>
                    <img className="border-4 border-amber-400" src={project.image} alt="" />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110"
                    >
                      {language === 'es' ? 'Ver Proyecto' : 'See Project'}
                    </a>
                  </li>
                ))
            )}
            </Fade>
          </ul>
        </section>
    </div>
  )
}
