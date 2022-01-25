import React, {useContext} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MenuBar from '../containers/MenuBar';
import Routes from "../routes/Routes";
import StyleContext from "../context/StyleContext";
import {AppContext} from "../context/AppContext";
import Alert from "../components/Alert"
import "../styles/LoggedLayout.css";


const LoggedLayout = () => {
  const {openAlert, setOpenAlert} = useContext(AppContext);
  return (
    <StyleContext>
      <Router>
        <Alert
          open={openAlert}
          setOpen={setOpenAlert}
        />
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