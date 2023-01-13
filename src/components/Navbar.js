import React from "react";
import "../styles/Navbar.scss";
import { HashLink } from "react-router-hash-link";
import logo from "../media/ga-logo-transparent.svg"
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  let navigate = useNavigate();

    return (
      <div className="navbar">
        <div className="nav-brand-container">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="brand"
            className="nav-brand-video"
          ></img>
        </div>
        <div className="nav-link-container">
          <HashLink smooth to="/#Landing">
            Home
          </HashLink>
          <HashLink smooth to="/#About">
            About
          </HashLink>
          <HashLink smooth to="/#Projects">
            Projects
          </HashLink>
          <HashLink smooth to="/resume/#Resume">
            Resume
          </HashLink>
        </div>
      </div>
      )
};

export default Navbar;


