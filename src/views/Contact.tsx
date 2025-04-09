import React, { useRef, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import Background from '../components/Background';
import { useLanguage } from '../components/LanguageProvider';

export const ContactUs: React.FC = () => {

  const [showModal, setShowModal] = useState(false)
  const [slideIn, setSlideIn] = useState(false);

  const { language } = useLanguage();

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_6ysuaei', 'template_dwdivc8', form.current, {
        publicKey: 'un98RibMIRvOKMhsD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current?.reset()

          setShowModal(true);
          setSlideIn(true); // Hace que el mensaje se deslice dentro

          setTimeout(() => {
            setSlideIn(false); // Hace que el mensaje se deslice fuera
            setTimeout(() => {
              setShowModal(false); // Oculta completamente el mensaje
            }, 500); // Espera a que termine la animación de salida
          }, 3000); // Mantiene el mensaje visible por 3 segundos
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="relative text-white min-h-screen flex flex-col">
      <Background />
      <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center'>
        <label htmlFor="name" className='text-white p-5 text-3xl'>{language === "es" ? "Nombre" : "Name"}</label>
        <input className='bg-white w-1/2 p-5 text-black rounded-3xl' placeholder={language === "es" ? "Tu nombre aquí" : "Your name here"} type="text" name="user_name" id="name" required />

        <label htmlFor="email" className='text-white p-5 text-3xl'>{language === "es" ? "Correo" : "E-mail"}</label>
        <input className='bg-white w-1/2 p-5 text-black rounded-3xl' placeholder={language === "es" ? "Tu correo aquí" : "Your e-mail here"} type="email" name="user_email" id="email" required />

        <label htmlFor="message" className='text-white p-5 text-3xl'>{language === "es" ? "Comentarios" : "Comments"}</label>
        <textarea className='bg-white w-1/2 p-5 text-black rounded-3xl' placeholder={language === "es" ? "Tus comentarios aquí" : "Your comments here"} name="message" id="message" required />

        <input className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 text-white p-5 rounded-md m-5' type="submit" value={language === "es" ? "Enviar" : "Send"} />
      </form>
      <h2 className="text-2xl md:text-3xl font-semibold animate-slide-left text-center">{language === "es" ? "Redes Sociales" : "Social Media"}</h2>
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
      <div
        className={`fixed -right-2 transition-transform duration-500 ${slideIn ? 'translate-x-0' : 'translate-x-full'} ${showModal ? 'opacity-100' : 'opacity-0'}`}
      >
        <h2 className='m-10 p-10 bg-gray-100 border-5 border-red-600 rounded-4xl text-center w-fit text-gray-800 font-bold'>
          {language === "es" ? "Datos enviados con éxito" : "Data sent successfully"}
        </h2>
      </div>

    </div>

  );
};

export default ContactUs;