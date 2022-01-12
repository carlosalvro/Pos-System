import React from 'react';
import {Link } from "react-router-dom"
import "@styles/ajustes/AjustesDefault.css"

const AjustesDefault = () => {
  return (
    <div className='AjustesDefault'>
      <Link to={"/ajustes/catalogos"}>
        Catalogos
      </Link>
    </div>
    
  );
}

export default AjustesDefault;