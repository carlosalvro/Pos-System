import React, {useContext, useEffect} from 'react';
import Table from "@components/Table"
import useApi from '../../../hooks/useApi';
import FormRoles from "@containers/Forms/FormRoles"
import {AjustesContext} from "../../../context/AjustesContext";

const columns = [
  { 
    field: 'waiterRoleId', 
    width: 60, 
    headerName: 'ID' 
},
  {
    field: 'waiterRole',
    headerName: 'Role Mesero',
    width: 250,
  },
]

const CatalogosRolesMeseros = () => {
  const {itemsTable, setItemsTable} = useContext(AjustesContext);

  const roles = useApi("waitersRoles");

  useEffect(()=>{
    setItemsTable(roles)
  }, [roles])

  return (
    <React.Fragment>
      <h1>Roles Meseros</h1>
      <div className='AjustesCatalogos-subcontent'>
        <Table
          rows={itemsTable} 
          columns={columns}
          rowId={row => row.waiterRoleId}
          heigth = {400}
          width = {350}
        />
        <div className='subcontent-form'>
          <FormRoles/>
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default CatalogosRolesMeseros;