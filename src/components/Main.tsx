

export default function () {

    const projects = [
      {
        name: "ADMINISTRADOR DE GASTOS E INGRESOS",
        description: "Administrador de gastos e ingresos, calculando el balance. Este proyecto usa Python y Django en el backend, en el frontend usa TailwindCSS.",
        link: "https://rafaelchoza.pythonanywhere.com",
      },
      { name: "Proyecto 2", description: "Descripción breve del proyecto 2", link: "#" },
      { name: "Proyecto 3", description: "Descripción breve del proyecto 3", link: "#" },
    ];
    
  return (
    <div>
        <main className="flex-grow max-w-full px-4 sm:px-6 md:px-8 lg:max-w-5xl mx-auto py-8">
        <section id="about" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold animate-slide-left py-5">Lenguajes y herramientas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-gray-100 rounded-xl p-4 shadow-lg">
          <img src="https://www.vectorlogo.zone/logos/java/java-ar21.svg"/>
            <img src="https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg"/>
            <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg"/>
            <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21~old.svg"/>
            <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"/>
            <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg"/>
            <img src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg"/>
            <img src="https://www.vectorlogo.zone/logos/python/python-ar21.svg"/>
            <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg"/>
            <img src="https://www.vectorlogo.zone/logos/github/github-ar21.svg"/>
            <img src="https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg"/>
            <img src="https://www.vectorlogo.zone/logos/docker/docker-ar21.svg"/>
            <img src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21.svg"/>
            <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg"/>
            <img src="https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg"/>
            <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"/>
            <img src="https://www.vectorlogo.zone/logos/apache_maven/apache_maven-ar21.svg"/>
            <img src="https://www.vectorlogo.zone/logos/gradle/gradle-ar21.svg"/>
            <img src="https://www.vectorlogo.zone/logos/springio/springio-ar21.svg"/>
            <img src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg"/>
          </div>
        </section>

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
                  Ver Proyecto
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold animate-slide-left">Contacto</h2>
          <p className="mt-4">
            Para más información, envíame un correo a:{" "}
            <a href="mailto:email@ejemplo.com" className="text-blue-500 hover:underline">
              email@ejemplo.com
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}
