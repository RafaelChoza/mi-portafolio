

export default function Projects() {

    const projects = [
        {
          name: "ADMINISTRADOR DE GASTOS E INGRESOS",
          description: "Administrador de gastos e ingresos, calculando el balance. Este proyecto usa Python y Django en el backend, en el frontend usa TailwindCSS.",
          link: "https://rafaelchoza.pythonanywhere.com",
          image: "./src/img/imagen.png"
        },
        { name: "Proyecto 2", description: "Descripción breve del proyecto 2", link: "#", image: "" },
        { name: "Proyecto 3", description: "Descripción breve del proyecto 3", link: "#", image: "" },
      ];

  return (
    <div>
        <section id="projects" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold animate-slide-up">Mis Proyectos</h2>
          <ul className="mt-6 space-y-6">
            {projects.map((project, index) => (
              <li
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-500 ease-out transform hover:scale-105 animate-scale-in"
              >
                <h3 className="text-xl md:text-2xl font-bold">{project.name}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110"
                >
                  <img src={project.image} alt="" />
                  Ver Proyecto
                </a>
              </li>
            ))}
          </ul>
        </section>
    </div>
  )
}
