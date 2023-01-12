import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import lungoImage from "../media/lungo-laptop.png";
import dealioImage from "../media/dealio-laptop.png";
import crosschainImage from "../media/crosschain-laptop.png";
import hanoiImage from "../media/hanoi-laptop.png";
import "../styles/Projects.scss";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { useNavigate } from "react-router-dom";
export default function Projects() {
  let navigate = useNavigate();
  const [xStiffness, setxStiffness] = useState(15);
  const [buttonText, setButtonText] = useState("Exaggerate Animation 🥵");
  //helper functions for the animation
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 35, // the denominator is repsonible for the 'stiffness'
    (x - window.innerWidth / 2) / xStiffness, //in this case since the button is at the button i dont want the animation to as annoying
    1.07,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const AnimationDefaults = {
    xys: [0, 0, 1],
    config: { mass: 15, tension: 200, friction: 50 },
  };
  const [styling, setStyling] = useSpring(() => ({
    xys: AnimationDefaults.xys,
    config: AnimationDefaults.config,
  }));
  
  let handleExaggeration = () => {
    if (xStiffness !== 1) {
      setxStiffness(1);
      setButtonText("Return to Normal 😵‍💫");
    } else {
      setxStiffness(15);

      setButtonText("Exaggerate Animation 🥵");
    }
  };
  return ( 
    <div className="Project" id="Projects">
      <h1 className="Project__title">My Projects 🎨</h1>
      <button
        style={{ backgroundColor: "rgba(68, 60, 254, 0.1)" }}
        className="virtual-card__button exaggerate-button"
        onClick={handleExaggeration}
      >
        {buttonText}
      </button>
      <div className="Project__virtual__container">
        <animated.div
          className="virtual-card"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setStyling.start({ xys: calc(x, y) })
          }
          onMouseLeave={() => setStyling.start({ xys: [0, 0, 1] })}
          style={{
            transform: styling.xys.to(trans),
            "borderColor": "rgb(132, 76, 247)",
          }}
        >
          <h1
            className="virtual-card__title"
            style={{
              background:
                "linear-gradient(180deg, transparent 70%,rgb(132, 76, 247,0.7) 70%,rgb(132, 76, 247,0.7) 87%,transparent 87%)",
            }}
          >
            Lungo
          </h1>
          <h3>Web3</h3>
          <img src={lungoImage} alt="Lungo" />
          <button
            onClick={() => {
              navigate("/project/1");
            }}
            style={{ backgroundColor: "rgb(132, 76, 247)" }}
            className="virtual-card__button"
            variant="outlined"
          >
            Learn More
            <ReadMoreIcon
              className="learn-more-icon"
              fontSize="inherit"
            ></ReadMoreIcon>
          </button>
        </animated.div>
        <animated.div
          className="virtual-card"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setStyling.start({ xys: calc(x, y) })
          }
          onMouseLeave={() => setStyling.start({ xys: [0, 0, 1] })}
          style={{
            transform: styling.xys.to(trans),
            "borderColor": "rgba(255, 196, 0, 0.5)",
          }}
        >
          <h1
            className="virtual-card__title"
            style={{
              background:
                "linear-gradient(180deg, transparent 70%,rgba(255, 196, 0, 0.5) 70%,rgba(255, 196, 0, 0.5) 87%,transparent 87%)",
            }}
          >
            Dealio Online Store
          </h1>
          <h3>E-Commerce</h3>
          <img src={dealioImage} alt="Dealio" />
          <button
            onClick={() => {
              navigate("/project/2");
            }}
            style={{ backgroundColor: "rgba(255, 196, 0, 0.5)" }}
            className="virtual-card__button"
            variant="outlined"
          >
            Learn More
            <ReadMoreIcon
              className="learn-more-icon"
              fontSize="inherit"
            ></ReadMoreIcon>
          </button>
        </animated.div>
        <animated.div
          className="virtual-card"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setStyling.start({ xys: calc(x, y) })
          }
          onMouseLeave={() => setStyling.start({ xys: [0, 0, 1] })}
          style={{
            transform: styling.xys.to(trans),
            "borderColor": "rgba(235, 66, 108, 0.5)",
          }}
        >
          <h1
            className="virtual-card__title"
            style={{
              background:
                "linear-gradient(180deg, transparent 70%,rgba(235, 66, 108, 0.5) 70%,rgba(235, 66, 108, 0.5) 87%,transparent 87%)",
            }}
          >
            Crosschain Stats
          </h1>
          <h3>Data</h3>
          <img src={crosschainImage} alt="Hater" />
          <button
            onClick={() => {
              navigate("/project/3");
            }}
            style={{ backgroundColor: "rgba(235, 66, 108, 0.25)" }}
            className="virtual-card__button"
            variant="outlined"
          >
            Learn More
            <ReadMoreIcon
              className="learn-more-icon"
              fontSize="inherit"
            ></ReadMoreIcon>
          </button>
        </animated.div>
        <animated.div
          className="virtual-card"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setStyling.start({ xys: calc(x, y) })
          }
          onMouseLeave={() => setStyling.start({ xys: [0, 0, 1] })}
          style={{
            transform: styling.xys.to(trans),
            "borderColor": "rgba(142, 66, 235,0.5",
          }}
        >
          <h1
            className="virtual-card__title"
            style={{
              background:
                "linear-gradient(180deg, transparent 70%,rgba(142, 66, 235,0.5) 70%,rgba(142, 66, 235,0.5) 87%,transparent 87%)",
            }}
          >
            Tower Of Hanoi
          </h1>
          <h3>Games</h3>
          <img src={hanoiImage} alt="Cosmos" />
          <button
            style={{ backgroundColor: "rgba(142, 66, 235,0.25" }}
            onClick={() => {
              navigate("/project/4");
            }}
            className="virtual-card__button"
            variant="outlined"
          >
            Learn More
            <ReadMoreIcon
              className="learn-more-icon"
              fontSize="inherit"
            ></ReadMoreIcon>
          </button>
        </animated.div>
      </div>
    </div>
  );
}
