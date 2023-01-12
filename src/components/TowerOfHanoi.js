import React, { useEffect } from "react";
import hanoiImage from "../media/hanoi-laptop.png";
import javascriptIcon from "../media/javascript.svg";
import htmlIcon from "../media/html.svg";
import cssIcon from "../media/css.svg";


export default function TowerOfHanoi() {
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
          <img className="laptop" src={hanoiImage} alt="laptop" />
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
          <img src={htmlIcon} alt="devIcon" title="HTML" />
          <img src={cssIcon} alt="devIcon" title="CSS" />
          <img src={javascriptIcon} alt="devIcon" title="Javascript" />
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
