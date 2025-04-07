import { Fade } from "react-awesome-reveal";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div className="relative text-white min-h-screen flex flex-col">
      <Background />
      <Header />
      <Fade>
      <form action="" className="flex flex-col items-center"
      >
        <label
          htmlFor="name"
          className="text-white text-2xl p-3"
        >Nombre</label>
        <input
          className="bg-white text-gray-600 p-3 border-6 border-gray-600 rounded-xl"
          type="text" name="nombre"
          placeholder="Tu nombre aquí"
        />

        <label
          htmlFor="correo"
          className="text-white text-2xl p-3">Correo</label
        >
        <input
          className="bg-white text-gray-600 p-3 border-6 border-gray-600 rounded-xl"
          type="text" name="correo"
          placeholder="Tu correo aquí"
        />

        <label
          htmlFor="comentarios"
          className="text-white text-2xl p-3">Comentarios</label
        >
        <textarea
          className="bg-white text-gray-600 p-3 border-6 border-gray-600 rounded-xl mb-5"
          name="comentarios"
          placeholder="Tus comentarios aquí"
        />
      </form>
      <h2 className="text-2xl md:text-3xl font-semibold animate-slide-left text-center">Redes Sociales</h2>
      <section className="flex flex-row justify-center items-center h-full">
        <a href="https://www.linkedin.com/in/rafaelchoza-fullstackjava" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.svg"
            alt="linkedinLogo"
            className="bg-white mx-10 rounded-2xl m-10 hover:scale-105 transform 
            transition-transform duration-300"
          />
        </a>
        <a href="https://www.github.com/rafaelchoza" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.vectorlogo.zone/logos/github/github-ar21.svg"
            alt="GitHubLogo"
            className="bg-white mx-10 rounded-2xl m-10 hover:scale-105 transform transition-transform
            duration-300"
          />
        </a>
      </section>
      </Fade>
      <Footer />
    </div>

  )
}
