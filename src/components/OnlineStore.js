import React, { useEffect } from "react";
import dealioImage from "../media/dealio-laptop.png";
import reactIcon from "../media/react.svg";
import nodeIcon from "../media/node.svg";
import herokuIcon from "../media/heroku.svg";
import expressIcon from "../media/express.svg";
import mongoDBIcon from "../media/mongoDB.svg";



export default function OnlineStore() {
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
          <img className="laptop" src={dealioImage} alt="laptop" />
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
            <button>Deployed Site</button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/guillermoaviles/online-store-fe"
          >
            <button>
              Repository
            </button>
          </a>
        </div>
      </div>
      <div className="SingleProject__bottom_container">
        <h1>Tech Used</h1>
        <div className="SingleProject__image__array__container">
          <img src={reactIcon} alt="devIcon" title="React.js" />
          <img src={nodeIcon} alt="devIcon" title="Node.js" />
          <img src={expressIcon} alt="devIcon" title="Express.js" />
          <img src={mongoDBIcon} alt="devIcon" title="mongoDB" />
          <img src={herokuIcon} alt="devIcon" title="Heroku" />
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
