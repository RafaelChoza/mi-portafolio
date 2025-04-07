import { Fade } from "react-awesome-reveal";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Curriculum() {
    return (
        <div className="relative text-white min-h-screen flex flex-col">
            <Header />
            <Background />
            <Fade>
            <h2 className="text-2xl md:text-3xl font-semibold animate-slide-left py-5">Mi Curriculum</h2>
            <div className="pdf-viewer-container p-10">
                {/* Mostrar el PDF */}
                <embed
                    src="/src/resources/CV.pdf"
                    type="application/pdf"
                    className="w-full h-96"
                    title="PDF Viewer"
                />

                {/* Botón para descargar */}
                <a
                    href="/src/resources/CV.pdf"
                    download="CV.pdf"
                    className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Descargar PDF
                </a>
            </div>
            </Fade>
            <Footer />
        </div>
    )
}
