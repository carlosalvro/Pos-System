import React from 'react';
import "@styles/Home.css"
import {useLocation} from "react-router-dom"
import AreasContainer from "../containers/AreasContainer"

const Home = () => {
  const location = useLocation()
  return (
    <React.Fragment>
      <div className="Home">
        <h1>Inicio</h1>
        <AreasContainer/>
      </div>
    </React.Fragment>
  );
}

export default Home;