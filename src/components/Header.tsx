import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <Fade>
        <header className="bg-gray-900 py-4 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 relative">
          <Link to="/" className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 animate-pulse bg-clip-text text-transparent mb-4 md:mb-0">
            {language === 'es' ? 'Mi portafolio' : 'My Portfolio'}
          </Link>
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Link
              to="/"
              className="underline-effect text-gray-400 hover:text-white transition-all duration-300 text-xl md:text-2xl"
            >
              {language === 'es' ? 'Principal' : 'Home'}
            </Link>
            <Link
              to="/proyectos"
              className="underline-effect text-gray-400 hover:text-white transition-all duration-300 text-xl md:text-2xl"
            >
              {language === 'es' ? 'Proyectos' : 'Projects'}
            </Link>
            <Link
              to="/curriculum"
              className="underline-effect text-gray-400 hover:text-white transition-all duration-300 text-xl md:text-2xl"
            >
              {language === 'es' ? 'Curriculum' : 'Resume'}
            </Link>
            <Link
              to="/contacto"
              className="underline-effect text-gray-400 hover:text-white transition-all duration-300 text-xl md:text-2xl"
            >
              {language === 'es' ? 'Contacto' : 'Contact'}
            </Link>
          </nav>
          <div className="flex flex-row">
          <p className="text-white mx-3">{language === 'es' ? 'Seleccione Idioma' : 'Select Language'}</p>
            <select value={language} onChange={handleLanguageChange} className="bg-gray-900 text-green-400 hover:text-white transition-all duration-300 text-xl md:text-2xl">
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>
          

        </header>

      </Fade>
    </div>
  );
}