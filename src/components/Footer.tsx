import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";
import { useLanguage } from "./LanguageProvider";


export default function Footer() {

  const { language } = useLanguage();

    return (
      <div>
        <Fade>
        <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-6 text-center">
          <div className="mb-4">
            {/* Íconos de redes sociales */}
            <a
              href="https://www.linkedin.com/in/rafaelchoza-fullstackjava"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-gray-400 hover:text-blue-400 transition duration-300 text-2xl"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/rafaelchoza"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-gray-400 hover:text-blue-400 transition duration-300 text-2xl"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            
          </div>
          <p className="text-sm md:text-base text-gray-500 mb-4">
            © 2025 Rafael Choza. {language === 'es' ? 'Todos ls derechos reservados' : 'All rights reserved'}
          </p>
          {/* Botón para volver al inicio */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {language === 'es' ? 'Volver al Inicio' : 'Go Up'}
          </button>
        </footer>
        </Fade>
      </div>
    );
  }
  