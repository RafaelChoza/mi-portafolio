import { Fade } from "react-awesome-reveal";


export default function Intro() {
    return (
        <div>
            <Fade>
            <h2 className="text-2xl md:text-3xl font-semibold animate-slide-left py-5">Acerca de mi</h2>
            <p className="text-6xl p-10 text-justify">Me llamo 
                <strong className="text-amber-400"> Rafael Choza</strong>, radico en la ciudad de Mérida
                Yucatán México. He trabajado en
                diversos proyectos que abarcan desde el diseño de interfaces de usuario hasta la
                implementación de servicios backend. Me apasiona crear soluciones eficientes y de alta
                calidad que mejoren la experiencia del usuario y optimicen los procesos empresariales.
                Siempre estoy en busca de nuevos desafíos y oportunidades para aprender y crecer
                profesionalmente.</p>
            <section className="p-10">
                <h2 className="text-2xl md:text-3xl font-semibold animate-slide-left py-5">Mis habilidades blandas son las siguientes:</h2>
                <div className="flex flex-row">
                <ul className="text-2xl">
                    <li><strong className="text-amber-400">Comunicación efectiva:</strong> Capaz de transmitir ideas y soluciones de manera clara y concisa.</li>
                    <li><strong className="text-amber-400">Trabajo en equipo:</strong> Disfruto colaborando con otros desarrolladores y profesionales para alcanzar objetivos comunes.</li>
                    <li><strong className="text-amber-400">Resolución de problemas:</strong> Enfrento los desafíos con una mentalidad analítica y creativa.</li>
                    <li><strong className="text-amber-400">Adaptabilidad:</strong> Me adapto rápidamente a nuevas tecnologías y metodologías de trabajo.</li>
                    <li><strong className="text-amber-400">Gestión del tiempo:</strong> Organizo y priorizo tareas para cumplir con los plazos establecidos.</li>
                </ul>
                <img className="w-1/3 rounded-3xl border-4 border-amber-500" src="/img/fondo.jpg" alt="" />
                </div>
                
            </section>
            </Fade>
        </div>
    )
}
