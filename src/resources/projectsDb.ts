const projects = [
  {
    name: 'Sistema Integral FullStack para la Gestión de ordenes de mantenimiento',
    description: 'Desarrollé una solución empresarial integral con ReactJS, TailwindCSS y TypeScript en el frontend, incorporando dependencias como Toastify y jwt_code. En el backend, implementé Java SpringBoot con Spring Security, autenticación basada en JWT y MySQL como base de datos.El sistema permite gestionar órdenes de mantenimiento, con funcionalidades adaptadas según el rol de cada usuario. Además, incluye opciones para la creación de usuarios, recuperación y cambio de contraseñas mediante diversos endpoints en el backend. Todo esto con el propósito de contar con una base de datos estructurada que facilite la consulta de información.',
    link: 'https://github.com/RafaelChoza/mantenimiento',
    image: '/mantenimiento.jpg'
  },
  {
    name: 'Sistema Integral FullStack para la Gestión de un Taller de Maquinados',
    description: 'Desarrollé una solución empresarial completa utilizando ReactJS, TailwindCSS y TypeScript en el frontend, junto con Java SpringBoot y MySQL en el backend. El sistema permite administrar órdenes de trabajo, clientes, inventarios y generar reportes productivos, optimizando la operación de talleres de manufactura. Enfocado en usabilidad, eficiencia y escalabilidad.',
    link: 'http://54.226.26.248/',
    image: '/toolRoom.jpg'
  },
  {
    name: 'Aplicación Web de Búsqueda y Filtrado de Películas con API REST',
    description: 'Creé una plataforma interactiva basada en HTML, CSS y JavaScript que consume una API pública para mostrar películas. Implementé filtros por nombre y categoría, enfocándome en la experiencia de usuario y el manejo eficiente de datos dinámicos en el navegador.',
    link: 'https://rafaelchoza.github.io/temaze-API-project/',
    image: '/peliculones.jpg'
  },
  {
    name: 'Consultor de Criptomonedas en Tiempo Real',
    description: 'Desarrollé una SPA (Single Page Application) moderna en ReactJS, utilizando TailwindCSS, TypeScript y Zustand para gestionar el estado global. La app consume una API externa para mostrar cotizaciones actualizadas de criptomonedas, aplicando buenas prácticas de rendimiento y usabilidad.',
    link: 'https://deft-melomakarona-e59a7b.netlify.app/',
    image: '/cripto.jpg'
  },
  {
    name: 'Aplicación Web para Consulta de Clima en Tiempo Real',
    description: 'Aplicación responsive creada con ReactJS, TailwindCSS y TypeScript que permite consultar el pronóstico del clima por ciudad, consumiendo una API meteorológica. Incorporé manejo de errores, feedback visual y optimización móvil para ofrecer una experiencia fluida.',
    link: 'https://darling-pie-4eaa7e.netlify.app/',
    image: '/clima.jpg'
  },
  {
    name: 'Sistema de Administración de Pacientes Veterinarios',
    description: 'Sistema desarrollado en ReactJS con TailwindCSS, TypeScript y React Hook Form para gestionar pacientes, consultas y tratamientos en una veterinaria. Aplicación orientada a optimizar el control clínico y administrativo de los pacientes, con enfoque en buenas prácticas de validación de formularios.',
    link: 'https://elaborate-sprinkles-3449ff.netlify.app/',
    image: '/veterinaria.jpg'
  },
  {
    name: 'Contador Inteligente de Calorías Consumidas y Quemadas',
    description: 'Aplicación diseñada con ReactJS, TypeScript y TailwindCSS que permite al usuario registrar alimentos ingeridos y actividades físicas, mostrando automáticamente el balance calórico diario. Proyecto que refuerza la lógica de estados complejos y cálculos en tiempo real.',
    link: 'https://coruscating-mandazi-a8e899.netlify.app/',
    image: '/calorias.jpg'
  },
  {
    name: 'Administrador de Presupuesto Personal (ReactJS avanzado)',
    description: 'Herramienta de control financiero personal desarrollada en ReactJS, TypeScript y TailwindCSS. Permite establecer un presupuesto, registrar gastos y monitorear en tiempo real la salud financiera, reforzando conceptos de componentes reutilizables y gestión avanzada del estado.',
    link: 'https://harmonious-mermaid-2caa99.netlify.app/',
    image: '/gastosReact.jpg'
  },
  {
    name: 'Administrador de Presupuesto Personal (Vanilla JavaScript)',
    description: 'Aplicación desarrollada únicamente con HTML, CSS y JavaScript puro, que permite establecer un presupuesto y llevar el registro de gastos. Proyecto enfocado en el fortalecimiento de la lógica de programación estructurada y la manipulación del DOM de manera manual.',
    link: 'https://rafaelchoza.github.io/Budget-administrator-Javascript/',
    image: '/gastosJavascript.jpg'
  },
  {
    name: 'Tienda Virtual de Guitarras de Alta Gama',
    description: 'Proyecto e-commerce en ReactJS, TailwindCSS y TypeScript que simula una tienda especializada en guitarras. Incluye navegación por categorías, carrito de compras y validaciones. Me enfoqué en la optimización de rutas, componentes y la experiencia de usuario responsiva.',
    link: 'https://66bd55c9196ce933c05b2800--spiffy-capybara-7c0d6b.netlify.app/',
    image: '/guitarStore.jpg'
  },
  {
    name: 'E-commerce de Artículos Deportivos (HTML, CSS y JavaScript)',
    description: 'Simulación de tienda online de artículos deportivos utilizando solo tecnologías base: HTML, CSS y JavaScript. Proyecto enfocado en estructuración de componentes visuales, maquetado responsivo y gestión básica de carrito de compras con almacenamiento local.',
    link: 'https://rafaelchoza.github.io/ecommerce-project-EBAC/',
    image: '/sportStore.jpg'
  },
  {
    name: 'Aplicación de Control de Balance de Dinero (ReactJS)',
    description: 'Aplicación desarrollada con ReactJS, TypeScript y TailwindCSS para registrar movimientos financieros (ingresos y egresos) y calcular automáticamente el balance disponible. Proyecto que enfatiza la separación de lógica de negocio y componentes UI claros.',
    link: 'https://spontaneous-capybara-9a320a.netlify.app/',
    image: '/gastosBalance.jpg'
  },
  {
    name: 'Sistema Financiero de Registro de Dinero (Python y Django)',
    description: 'Desarrollé una aplicación backend/frontend utilizando Django, Python y TailwindCSS que permite gestionar movimientos de dinero, con creación y lectura de registros en base de datos. Refuerza el diseño de modelos ORM y la integración de plantillas dinámicas.',
    link: 'https://rafaelchoza.pythonanywhere.com/',
    image: '/gastosBalancePython.jpg'
  },
  {
    name: 'Buscador Inteligente de Recetas de Bebidas por Ingredientes',
    description: 'Aplicación en ReactJS que permite encontrar recetas de bebidas ingresando uno o más ingredientes, utilizando TailwindCSS, Zustand para la gestión de estados complejos, Zod para validaciones y React-Router-Dom para navegación entre vistas. Enfocada en la búsqueda eficiente y experiencia de usuario agradable.',
    link: 'https://gorgeous-sprite-70a302.netlify.app/',
    image: '/bebidas.jpg'
  }
];

export default projects;
