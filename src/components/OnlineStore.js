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
          <h1>Dealio Online Store</h1>
        </div>
        <div className="SingleProject__button__links">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://online-store-pt8ruqtva-guillermoaviles.vercel.app/"
          >
            <button>Deployed Site 🚀</button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/guillermoaviles/online-store-fe"
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
        The online store app would be the place where the users 
        can freely buy any available items on the sites, sell an 
        item by creating a new post, add a review/comment to an 
        existing item. The app give the users the freedom to buy 
        and sell without paying any fees or restrictions.
        </p>
      </div>
    </div>
  );
}
