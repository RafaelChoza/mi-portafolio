import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verificamos si el clic fue fuera del menú
      if (menuRef.current && !(menuRef.current as HTMLElement).contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Agregamos el listener
    document.addEventListener("mousedown", handleClickOutside);

    // Eliminamos el listener al desmontar el componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="bg-gray-900 py-4 flex items-center justify-between px-4 md:px-8 relative">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 animate-pulse bg-clip-text text-transparent">
          Mi Portafolio
        </h1>
        <button
          className="px-6 md:px-10 text-gray-400 hover:text-white transition-all duration-300 text-xl md:text-2xl relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="px-3 text-lg md:text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse bg-clip-text text-transparent transition-transform duration-300">
            {isMenuOpen ? "✖" : "Menú"}
          </span>
        </button>
        {/* Menú desplegable */}
        <nav
          ref={menuRef}
          className={`absolute top-16 right-4 md:right-8 bg-gray-800 rounded-lg shadow-lg py-2 transition-transform duration-300 ease-out ${
            isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          } origin-top`}
        >
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-all"
              >
                Sobre mí
              </a>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setIsSubMenuOpen(true)}
              onMouseLeave={() => setIsSubMenuOpen(false)}
            >
              <a
                href="#projects"
                className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-all"
              >
                Proyectos
              </a>
              {/* Submenú hacia la izquierda */}
              <ul
                className={`absolute top-0 right-full bg-gray-700 rounded-lg shadow-lg py-2 transition-transform duration-300 ${
                  isSubMenuOpen
                    ? "scale-y-100 opacity-100"
                    : "scale-y-0 opacity-0"
                } origin-top`}
              >
                <li>
                  <a
                    href="#project1"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-600 rounded-md transition-all"
                  >
                    Proyecto 1
                  </a>
                </li>
                <li>
                  <a
                    href="#project2"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-600 rounded-md transition-all"
                  >
                    Proyecto 2
                  </a>
                </li>
                <li>
                  <a
                    href="#project3"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-600 rounded-md transition-all"
                  >
                    Proyecto 3
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-all"
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                href="#CV"
                className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-all"
              >
                CV
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
