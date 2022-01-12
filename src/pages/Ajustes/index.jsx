import React, {useState} from 'react';
import NavigationAjustes from "../../components/NavigationAjustes"
import "@styles/ajustes/Ajustes.css"
import {Outlet} from "react-router-dom";

const Ajustes = () => {

  return (
    <React.Fragment>
      <div className='Ajustes-links'>
        <NavigationAjustes/>
      </div>
      <div className="Ajustes">
        <h1>Ajustes</h1>
      </div>
      <Outlet/>
    </React.Fragment>
  );
}

export default Ajustes;