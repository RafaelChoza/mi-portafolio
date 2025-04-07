import React from "react";

interface PdfViewerProps {
  pdfUrl: string; // La URL del archivo PDF
  downloadFileName: string; // Nombre del archivo al descargar
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl, downloadFileName }) => {
  return (
    <div className="pdf-viewer-container p-10">
      {/* Mostrar el PDF */}
      <embed
        src={pdfUrl}
        type="application/pdf"
        className="w-full h-96"
        title="PDF Viewer"
      />

      {/* Botón para descargar */}
      <a
        href={pdfUrl}
        download={downloadFileName}
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Descargar PDF
      </a>
    </div>
  );
};

export default PdfViewer;
