import React, {useContext} from 'react';
import "@styles/ajustes/AjustesCatalogos.css"
import { Link, Outlet } from 'react-router-dom';
import { AjustesContext } from '../../context/AjustesContext';
import Alert from "../../components/Alert"

const AjustesCatalogos = () => {
  const {openAlert, setOpenAlert, setItemsTable} = useContext(AjustesContext);

  const resetItems = () => {
    setItemsTable({})
  }

  return (
    <div className="AjustesCatalogos">
      <Alert
        open={openAlert}
        setOpen={setOpenAlert}
      />
      <div className='AjustesCatalogos-links'>
        <Link 
          to={"/ajustes/catalogos/grupos"}
          onClick={resetItems}
        >
          Grupos
        </Link>
        <Link 
          to={"/ajustes/catalogos/subgrupos"}
          onClick={resetItems}
        >
          Subgrupos
        </Link>
        <Link 
          to={"/ajustes/catalogos/productos"}
          onClick={resetItems}
        >
          Productos
        </Link>
        <hr />
        <Link 
          to={"/ajustes/catalogos/roles-meseros"}
          onClick={resetItems}
        >
          Roles Meseros
        </Link>
        <Link 
          to={"/ajustes/catalogos/meseros"}
          onClick={resetItems}
        >
          Meseros
        </Link>
        <hr />
        <Link 
          to={"/ajustes/catalogos/clientes"}
          onClick={resetItems}
        >
          Clientes
        </Link>
        <hr />
        <Link 
          to={"/ajustes/catalogos/cancelaciones"}
          onClick={resetItems}
        >
          Cancelaciones
        </Link>
      </div>
      <div className='AjustesCatalogos-content'
      
      >
        <Outlet/>
      </div>
    </div>
  );
}

export default AjustesCatalogos;