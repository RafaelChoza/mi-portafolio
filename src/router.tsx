import { HashRouter, Routes, Route } from "react-router-dom";
import Principal from "./views/Principal";
import Contact from "./views/Contact";
import Curriculum from "./views/Curriculum";
import Projects from "./views/Projects";
import Repo from "./views/Repo";
import Header from './components/Header';
import { LanguageProvider } from './components/LanguageProvider';
import Footer from "./components/Footer";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

const basename = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '';

export default function AppRouter() {
  return (
    <LanguageProvider>
      <HashRouter basename={basename}>
        <Header />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/animation" element={<Repo />} />
        </Routes>
        <ArrowUpCircleIcon 
        className="fixed bottom-5 right-5 w-10 bg-white text-black rounded-4xl opacity-60"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
        <Footer />
      </HashRouter>
    </LanguageProvider>
  );
}