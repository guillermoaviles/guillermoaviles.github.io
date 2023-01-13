import "../styles/SingleProject.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Lungo from "./Lungo";
import OnlineStore from "./OnlineStore";
import CrosschainStats from "./CrosschainStats";
import TowerOfHanoi from "./TowerOfHanoi";


export default function SingleProject() {
  let { num } = useParams();
  const [content, setContent] = useState(<h1>Init</h1>);
  useEffect(() => {
    switch (num) {
      case "1":
        setContent(<Lungo />);
        break;
      case "2":
        setContent(<OnlineStore />);
        break;
      case "3":
        setContent(<CrosschainStats />);
        break;
      case "4":
        setContent(<TowerOfHanoi />);
        break;
      default:
        setContent(
          <div className="fullscreen">
            <h1 style={{ maxWidth: "80%" }}>
              Wrong param you entered{" "}
              <span style={{ color: "red" }}>{num}</span> and I only have{" "}
              <span style={{ color: "var(--action-color)" }}>4</span> projects
              displayed on my site. Checkout my github if you want to see more
              😘
            </h1>
          </div>
        );

        break;
    }
  }, [num]);
  return <div className="Single-Project ">{content}</div>;
}
