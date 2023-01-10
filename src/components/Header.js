import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import ArticleIcon from '@mui/icons-material/Article';


const Header = () => {
    return (
        <nav className='App-header'>
          <HomeIcon fontSize="large"/>
          <PersonIcon fontSize="large"/>
          <FolderIcon fontSize="large"/>
          <ArticleIcon fontSize="large"/>
        </nav>
      )
};

export default Header;
