import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { useLanguage } from "../components/LanguageProvider";

function App() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY); // Captura el desplazamiento vertical del scroll
    };

    window.addEventListener("scroll", handleScroll); // Escucha el evento de scroll

    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpia el evento al desmontar
    };
  }, []);

  return (
    <div className="relative text-white min-h-screen flex flex-col">
      {/* Imagen de fondo con efecto dinámico */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url('/fondo.jpg')`,
          backgroundPosition: `center ${scrollOffset * 0.5}px`, // El efecto parallax dinámico
        }}
      ></div>

      {/* Contenido principal */}

      <Fade>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold animate-slide-left py-5">{language === 'es' ? 'Acerca de mi' : 'About me'}</h2>
          <p className="text-xl p-10 text-justify sm:text-6xl">{language === 'es' ? 'Mi nombre es' : 'My name is'}
            <strong className="text-amber-400"> Rafael Choza</strong>{language === 'es' ?
              ' radico en la ciudad de Mérida Yucatán México. He trabajado en diversos proyectos que abarcan desde el diseño de interfaces de usuario hasta la implementación de servicios backend. Me apasiona crear soluciones eficientes y de alta calidad que mejoren la experiencia del usuario y optimicen los procesos empresariales. Siempre estoy en busca de nuevos desafíos y oportunidades para aprender y crecer profesionalmente.'
              :
              ' I live in the city of Mérida, Yucatán, Mexico. I have worked on various projects ranging from user interface design to backend service implementation. I am passionate about creating efficient and high-quality solutions that enhance user experience and optimize business processes. I am always looking for new challenges and opportunities to learn and grow professionally.'}
          </p>
          <section className="p-10">
            <h2 className="text-2xl md:text-3xl font-semibold animate-slide-left py-5">{language === 'es' ? 'Mis habilidades blandas son' : 'My soft skills are:'}</h2>
            <div className="flex flex-col md:flex-row">
              <ul className="text-2xl">
                <li><strong className="text-amber-400">{language === 'es' ? 'Comunicación efectiva:' : 'Effective communication:'}</strong> {language === 'es' ? 'Capaz de transmitir ideas y soluciones de manera clara y concisa.' : 'Able to convey ideas and solutions clearly and concisely.'}</li>
                <li><strong className="text-amber-400">{language === 'es' ? 'Trabajo en equipo:' : 'Teamwork:'}</strong> {language === 'es' ? 'Disfruto colaborando con otros desarrolladores y profesionales para alcanzar objetivos comunes.' : 'I enjoy collaborating with other developers and professionals to achieve common goals.'}</li>
                <li><strong className="text-amber-400">{language === 'es' ? 'Resolución de problemas:' : 'Problem-solving:'}</strong> {language === 'es' ? 'Enfrento los desafíos con una mentalidad analítica y creativa.' : 'I approach challenges with an analytical and creative mindset.'}</li>
                <li><strong className="text-amber-400">{language === 'es' ? 'Adaptabilidad:' : 'Adaptability:'}</strong> {language === 'es' ? 'Me adapto rápidamente a nuevas tecnologías y metodologías de trabajo.' : 'I quickly adapt to new technologies and work methodologies.'}</li>
                <li><strong className="text-amber-400">{language === 'es' ? 'Gestión del tiempo:' : 'Time management:'}</strong> {language === 'es' ? 'Organizo y priorizo tareas para cumplir con los plazos establecidos.' : 'I organize and prioritize tasks to meet established deadlines.'}</li>
              </ul>
              <img className="rounded-3xl border-4 border-amber-500" src="/yo.jpg" alt="" />
            </div>
          </section>
          <section id="about" className="mb-12 px-10">
            <h2 className="text-2xl md:text-3xl font-semibold animate-slide-left py-5">{language === 'es' ? 'Lenguajes y herramientas' : 'Languages and tools'}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-gray-100 rounded-xl p-4 shadow-lg">
              <img src="https://www.vectorlogo.zone/logos/java/java-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21~old.svg" />
              <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/python/python-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/github/github-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg" />
              <img src="https://www.vectorlogo.zone/logos/docker/docker-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg" />
              <img src="https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/apache_maven/apache_maven-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/gradle/gradle-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/springio/springio-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/netlify/netlify-ar21.svg" />
              <img src="https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-ar21.svg" />
            </div>
          </section>
        </div>
        
      </Fade>
    </div>
  );
}

export default App;