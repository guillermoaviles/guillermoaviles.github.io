import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import resumeSrc from "../media/resume.pdf";
import "../styles/Resume.scss";

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

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
        <Document className="resume-pdf" file={resumeSrc} options={options}>
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