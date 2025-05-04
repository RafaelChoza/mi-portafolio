import { Fade, Zoom } from "react-awesome-reveal";
import Background from "../components/Background";
import { useLanguage } from "../components/LanguageProvider";


export default function Curriculum() {

    const { language } = useLanguage();

    return (
        <div className="relative text-white min-h-screen flex flex-col">
            <Background />
            <Fade>
            <h2 className="text-2xl md:text-3xl font-semibold animate-slide-left py-5">{language === "es" ? "Curriculum" : 'Resume'}</h2>
            <div className="pdf-viewer-container p-10">
                {/* Mostrar el PDF */}
                <Zoom>
                <embed
                    src="/CV-Full-Stack.pdf"
                    type="application/pdf"
                    className="w-full h-screen bg-white"
                    title="PDF Viewer"
                />
                </Zoom>
                

                {/* Botón para descargar */}
                <a
                    href="/src/resources/CV.pdf"
                    download="CV.pdf"
                    className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    {language === 'es' ? 'Descagar PDF':'Download PDF'}
                </a>
            </div>
            </Fade>
        </div>
    )
}
