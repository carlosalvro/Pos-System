import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/Home'
import NotFound from '../pages/NotFound';
import Cuentas from '../pages/Cuentas';
import Ventas from '../pages/Ventas';
import Corte from '../pages/Corte';
import Ajustes from '../pages/Ajustes';
import AjustesDefault from '../pages/Ajustes/AjustesDefault';
import AjustesCatalogos from '../pages/Ajustes/AjustesCatalogos';
import CatalogosGrupos from '../pages/Ajustes/Catalogos/CatalogosGrupos'; 
import CatalogosSubGrupos from '../pages/Ajustes/Catalogos/CatalogosSubGrupos'; 
import CatalogosRolesMeseros from '../pages/Ajustes/Catalogos/CatalogosRolesMeseros'; 
import CatalogosMeseros from '../pages/Ajustes/Catalogos/CatalogosMeseros'; 
import CatalogosClientes from '../pages/Ajustes/Catalogos/CatalogosClientes'; 
import CatalogosProductos from '../pages/Ajustes/Catalogos/CatalogosProductos'; 
import CatalogosCancelaciones from '../pages/Ajustes/Catalogos/CatalogosCancelaciones'; 
import Comedor from "../pages/Home/Comedor"
import Llevar from "../pages/Home/Llevar"
import Domicilio from "../pages/Home/Domicilio"
import Apps from "../pages/Home/Apps"

import '../styles/App.css'

const App = (props) => {
  const {user} = props;

  return (
    <Routes>
      <Route exact path="/home" element={<Home/>}>
        <Route exact path="comedor" element={<Comedor/>}/>
        <Route exact path="llevar" element={<Llevar/>}/>
        <Route exact path="apps" element={<Apps/>}/>
        <Route exact path="domicilio" element={<Domicilio/>}/>
      </Route>
      <Route exact path="/cuentas" element={<Cuentas/>}/>
      <Route exact path="/ventas" element={<Ventas/>}/>
      <Route exact path="/corte" element={<Corte/>}/>
      <Route exact path="/ajustes" element={<Ajustes/>}>
        <Route exact path="" element={<AjustesDefault/>}/>
        <Route exact path="catalogos" element={<AjustesCatalogos/>}>
          <Route exact path="grupos" element={<CatalogosGrupos/>}/>
          <Route exact path="subgrupos" element={<CatalogosSubGrupos/>}/>
          <Route exact path="productos" element={<CatalogosProductos/>}/>
          <Route exact path="roles-meseros" element={<CatalogosRolesMeseros/>}/>
          <Route exact path="meseros" element={<CatalogosMeseros/>}/>
          <Route exact path="clientes" element={<CatalogosClientes/>}/>
          <Route exact path="cancelaciones" element={<CatalogosCancelaciones/>}/>
        </Route>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;