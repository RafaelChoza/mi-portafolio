import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Background from '../components/Background';
import { useLanguage } from '../components/LanguageProvider';

export const ContactUs: React.FC = () => {

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
    </div>

  );
};

export default ContactUs;