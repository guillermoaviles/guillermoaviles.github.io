import React, { useEffect } from "react";
import crosschainImage from "../media/crosschain-laptop.png";
import reactIcon from "../media/react.svg";
import axelarIcon from "../media/axelarscan.jpeg";
import rechartsIcon from "../media/recharts.png";


export default function CrossChainStats() {
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
          <img className="laptop" src={crosschainImage} alt="laptop" />
        </div>
        <div
          className="SingleProject__title_wrapper"
          style={{
            background:
              "linear-gradient(180deg,transparent 60%,rgba(255, 0, 64, 0.5) 60%,rgba(255, 2, 65, 0.5) 87%,transparent 87%)",
          }}
        >
          <h1>Crosschain Bridge Stats</h1>
        </div>
        <div className="SingleProject__button__links">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://crosschain-bridging-stats.vercel.app/"
          >
            <button>Deployed Site</button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/guillermoaviles/crosschain-bridging-stats"
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
          <img src={axelarIcon} alt="devIcon" title="Axelarscan" />
          <img src={rechartsIcon} alt="devIcon" title="Recharts" />
        </div>
        <p>
         Crosschain Bridge Stats lets users obtain information on
         crypto asset flows between different blockchains. Users 
         can retreive the information by selecting the Source and 
         Destintion chains, the Asset and the time segment. Once 
         the parameters have been set, the app returns three 
         blocks of stats consisting of cumulative number of 
         transfers, volume, a time series graph of transfers and 
         a time series graph of volume for the specified time segment.
        </p>
      </div>
    </div>
  );
}
