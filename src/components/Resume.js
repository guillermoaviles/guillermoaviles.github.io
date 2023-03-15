import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resumeSrc from "../media/Guillermo Aviles - Resume.pdf";
import "../styles/Resume.scss";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume () {
  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent"
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  }
  
  return (
    <div className="Resume" id="Resume">
      <div className="Resume__pdf-container">
        <Document className="resume-pdf" file={resumeSrc}>
          <Page onLoadSuccess={removeTextLayerOffset} pageNumber={1} />
        </Document>
      </div>
      <a className="Resume__download" download href={resumeSrc}>
        <button>Download</button>
      </a>
    </div>
  );
}

export default Resume;