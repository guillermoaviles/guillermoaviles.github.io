import React, { useEffect } from "react";
import laptopSrc from "../media/hater.png";
import phoneSrc from "../media/moblieHater.png";
import reactIcon from "../media/react.svg";
import reduxIcon from "../media/redux.svg";
import djangoIcon from "../media/django.svg";
import postgresIcon from "../media/postgres.svg";
import herokuIcon from "../media/heroku.svg";
import pythonIcon from "../media/python.svg";
import netlifyIcon from "../media/netlify.svg";
export default function Hater() {
  useEffect(() => {
    document.body.style.setProperty(
      "--projecthover-color",
      "rgba(255, 0, 64, 0.3)"
    );
  }, []);
  return (
    <div className="SingleProject">
      <div className="SingleProject__top__row">
        <div className="SingleProject__image__container">
          <img className="laptop" src={laptopSrc} alt="laptop" />
          <img className="moblie" src={phoneSrc} alt="phone" />
        </div>
        <div
          className="SingleProject__title_wrapper"
          style={{
            background:
              "linear-gradient(180deg,transparent 60%,rgba(255, 0, 64, 0.5) 60%,rgba(255, 2, 65, 0.5) 87%,transparent 87%)",
          }}
        >
          <h1>Tower Of Hanoi</h1>
        </div>
        <div className="SingleProject__button__links">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://tower-of-hanoi-seven.vercel.app/"
          >
            <button>Deployed Site 🚀</button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/guillermoaviles/Tower-of-Hanoi"
          >
            <button>
              Repository <span>🗄</span>
            </button>
          </a>
        </div>
      </div>
      <div className="SingleProject__bottom_container">
        <h1>Tech Used 🖥</h1>
        <div className="SingleProject__image__array__container">
          <img src={postgresIcon} alt="devIcon" title="PostgreSQL" />

          <img src={djangoIcon} alt="devIcon" title="Django" />
          <img src={pythonIcon} alt="devIcon" title="Python" />
          <img src={reactIcon} alt="devIcon" title="React.js" />
          <img src={reduxIcon} alt="devIcon" title="Redux" />

          <img src={herokuIcon} alt="devIcon" title="Heroku" />
          <img src={netlifyIcon} alt="devIcon" title="netlify" />
        </div>
        <p>
        The objective of the Tower of Hanoi game is to move all 
        of the discs (one at a time) on to the third tower without 
        placing a larger disc on top of a smaller one. Players can 
        only move discs on to an empty tower or on top of a larger 
        disc.
        </p>
      </div>
    </div>
  );
}
