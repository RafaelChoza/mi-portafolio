import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
      <div>
        <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-6 text-center">
          <div className="mb-4">
            {/* Íconos de redes sociales */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-gray-400 hover:text-blue-400 transition duration-300 text-2xl"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-gray-400 hover:text-white transition duration-300 text-2xl"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-gray-400 hover:text-blue-400 transition duration-300 text-2xl"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-gray-400 hover:text-blue-400 transition duration-300 text-2xl"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <p className="text-sm md:text-base text-gray-500 mb-4">
            © 2025 Rafael Choza. Todos los derechos reservados.
          </p>
          {/* Botón para volver al inicio */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Volver al inicio
          </button>
        </footer>
      </div>
    );
  }
  