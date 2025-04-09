import { useState, useEffect } from "react";

function App() {
  const [scrollOffset, setScrollOffset] = useState(0);

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
          backgroundImage: `url('./src/img/fondo.jpg')`,
          backgroundPosition: `center ${scrollOffset * 0.5}px`, // El efecto parallax dinámico
        }}
      ></div>

      {/* Contenido principal */}

      
    </div>
  );
}

export default App;
