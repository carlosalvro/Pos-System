import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MenuBar from '../containers/MenuBar';
import Routes from "../routes/Routes";
import StyleContext from "../context/StyleContext";
import "../styles/LoggedLayout.css";


const LoggedLayout = () => {
  return (
    <StyleContext>
      <Router>
        <div className='main'>
          <div className='nav-bar'>
            <MenuBar />
          </div>
          <div className='main-container'>
            <Routes />
          </div>
        </div>
      </Router>
    </StyleContext>
  );
}

export default LoggedLayout;