import React from "react";
import "../styles/Navbar.scss";
import { HashLink } from "react-router-hash-link";
import logo from "../media/ga-logo-transparent.svg"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import ArticleIcon from '@mui/icons-material/Article';
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
            <HomeIcon fontSize="large"></HomeIcon>
            Home
          </HashLink>
          <HashLink smooth to="/#About">
            <PersonIcon fontSize="large"></PersonIcon>
            About
          </HashLink>
          <HashLink smooth to="/#Projects">
            <FolderIcon fontSize="large"></FolderIcon>
            Projects
          </HashLink>
          <HashLink smooth to="/resume/#Resume">
            <ArticleIcon fontSize="large"></ArticleIcon>
            Resume
          </HashLink>
        </div>
      </div>
      )
};

export default Navbar;


