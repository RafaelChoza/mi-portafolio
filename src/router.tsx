import { HashRouter, Routes, Route } from "react-router-dom";
import Principal from "./views/Principal";
import Contact from "./views/Contact";
import Curriculum from "./views/Curriculum";
import Projects from "./views/Projects";
import Repo from "./views/Repo";

const basename = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '';

export default function AppRouter() {
  return (
    <HashRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/animation" element={<Repo />} />
      </Routes>
    </HashRouter>
  );
}