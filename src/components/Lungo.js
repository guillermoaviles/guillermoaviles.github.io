import React, { useEffect } from "react";
import lungoImage from "../media/lungo-laptop.png";
import metaMaskIcon from "../media/metamask.png";
import nextIcon from "../media/nextjs.svg";
import herokuIcon from "../media/heroku.svg";
import moralisIcon from "../media/moralis.png";
import expressIcon from "../media/express.svg";
import mongoDBIcon from "../media/mongoDB.svg";


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
          <img className="laptop" src={lungoImage} alt="laptop" />
        </div>
        <div
          className="SingleProject__title_wrapper"
          style={{
            background:
              "linear-gradient(180deg,transparent 60%,rgba(255, 0, 64, 0.5) 60%,rgba(255, 2, 65, 0.5) 87%,transparent 87%)",
          }}
        >
          <h1>Lungo</h1>
        </div>
        <div className="SingleProject__button__links">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://lungo.vercel.app/"
          >
            <button>Deployed Site</button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/guillermoaviles/lungo-frontend"
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
          <img src={moralisIcon} alt="devIcon" title="Moralis" style={{width: "auto"}}/>
          <img src={expressIcon} alt="devIcon" title="Express.js" />
          <img src={mongoDBIcon} alt="devIcon" title="mongoDB" />
          <img src={herokuIcon} alt="devIcon" title="Heroku" />
        </div>
        <p>
        Lungo allows users to sign in with their MetaMask wallet 
        and display their NFT collections, view NFT details and 
        attributes, as well as links to marketplaces. Users are 
        also able to create a list of wallets they'd like to 
        track in order to keep up with what other NFT investors 
        are doing. After adding a tracked wallet, users are able 
        to see the NFTs owned by that address and track changes 
        in their portfolio.
        </p>
      </div>
    </div>
  );
}
