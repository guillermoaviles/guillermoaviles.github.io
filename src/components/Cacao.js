import React, { useEffect } from "react";
import cacaoImage from "../media/cacao-laptop.png";
import metaMaskIcon from "../media/metamask.png";
import nextIcon from "../media/nextjs.svg";
import herokuIcon from "../media/heroku.svg";
import reduxIcon from "../media/redux.svg";
import typeIcon from "../media/type.svg";
import tailwindIcon from "../media/Tailwind_CSS_Logo.svg.png";


export default function Lungo() {
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
          <img className="laptop" src={cacaoImage} alt="laptop" />
        </div>
        <div
          className="SingleProject__title_wrapper"
          style={{
            background:
              "linear-gradient(180deg,transparent 60%,rgba(255, 0, 64, 0.5) 60%,rgba(255, 2, 65, 0.5) 87%,transparent 87%)",
          }}
        >
          <h1>Cacao</h1>
        </div>
        <div className="SingleProject__button__links">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://app-mhw23.vercel.app/"
          >
            <button>Deployed Site</button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/MHW23/app"
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
          <img src={nextIcon} alt="devIcon" title="Next.js" />
          <img src={metaMaskIcon} alt="devIcon" title="MetaMask"/>
          <img src={reduxIcon} alt="devIcon" title="Redux" style={{width: "auto"}}/>
          <img src={typeIcon} alt="devIcon" title="Express.js" />
          <img src={tailwindIcon} alt="devIcon" title="mongoDB" />
        </div>
        <p>
        Cacao is an NFT utility rental marketplace. It allows owners 
        to earn yield on their valued NFTs without the NFT going to 
        the renter. For renters, this means having the ability to 
        benefit from accessing NFT-gated events and experiences such 
        as events, groups, gaming and many more without the need to 
        collateralize the entire worth of the asset.
        </p>
      </div>
    </div>
  );
}
