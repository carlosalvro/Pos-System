import React from 'react';
import "@styles/ajustes/AjustesCatalogos.css"
import { Link, Outlet } from 'react-router-dom';

const AjustesCatalogos = () => {
  return (
    <React.Fragment>
      <div className="AjustesCatalogos">
        <div className='AjustesCatalogos-links'>
          <Link to={"/ajustes/catalogos/grupos"}>
            Grupos
          </Link>
          <Link to={"/ajustes/catalogos/subgrupos"}>
            Subgrupos
          </Link>
          <Link to={"/ajustes/catalogos/productos"}>
            Productos
          </Link>
          <hr />
          <Link to={"/ajustes/catalogos/roles-meseros"}>
            Roles Meseros
          </Link>
          <Link to={"/ajustes/catalogos/meseros"}>
            Meseros
          </Link>
          <hr />
          <Link to={"/ajustes/catalogos/clientes"}>
            Clientes
          </Link>
          <hr />
          <Link to={"/ajustes/catalogos/cancelaciones"}>
            Cancelaciones
          </Link>
        </div>
        <div className='AjustesCatalogos-content'>
          <Outlet/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AjustesCatalogos;