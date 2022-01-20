import React from 'react';
import NavigationAjustes from "../../components/NavigationAjustes"
import "@styles/ajustes/Ajustes.css"
import {Outlet} from "react-router-dom";
import { AjustesProvider } from '../../context/AjustesContext';

const Ajustes = () => {

  return (
    <AjustesProvider>
      <div className='Ajustes-links'>
        <NavigationAjustes/>
      </div>
      <div className="Ajustes">
        <h1>Ajustes</h1>
      </div>
      <Outlet/>
    </AjustesProvider>
  );
}

export default Ajustes;