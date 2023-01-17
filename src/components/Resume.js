import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import resumeSrc from "../media/resume.pdf";
import resumeImg from "../media/resume.png";
import "../styles/Resume.scss";


function Resume () {
  
  return (
    <div className="Resume" id="Resume">
      <div className="Resume__pdf-container">
        <img className="resume-pdf" src={resumeImg}>
        </img>
      </div>
      <a className="Resume__download" download href={resumeSrc}>
        <button>Download</button>
      </a>
    </div>
  );
}

export default Resume;