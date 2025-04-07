import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Fade>
      <header className="bg-gray-900 py-4 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 relative">
        <Link to="/" className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 animate-pulse bg-clip-text text-transparent mb-4 md:mb-0">
          Mi Portafolio
        </Link>
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition-all duration-300 text-xl md:text-2xl"
          >
            Principal
          </Link>
          <Link
            to="/proyectos"
            className="text-gray-400 hover:text-white transition-all duration-300 text-xl md:text-2xl"
          >
            Proyectos
          </Link>
          <Link
            to="/curriculum"
            className="text-gray-400 hover:text-white transition-all duration-300 text-xl md:text-2xl"
          >
            Curriculum
          </Link>
          <Link
            to="/contacto"
            className="text-gray-400 hover:text-white transition-all duration-300 text-xl md:text-2xl"
          >
            Contacto
          </Link>
        </nav>
      </header>
      </Fade>
      
    </div>
  );
}