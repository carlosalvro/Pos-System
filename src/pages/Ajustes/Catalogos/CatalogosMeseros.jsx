import React, {useContext, useEffect} from 'react';
import Table from "@components/Table"
import useApi from '../../../hooks/useApi';
import FormWaiters from "@containers/Forms/FormWaiters";
import {AjustesContext} from "../../../context/AjustesContext";

const columns = [
  { 
    field: 'waiterId', 
    width: 50, 
    headerName: 'ID' 
  },
  {
    field: 'waiterRole',
    headerName: 'Rol',
    width: 140,
    valueGetter: (params) => (
      params.row.waiterRoles.waiterRole
    )
  },
  {
    field: 'waiter',
    headerName: 'Mesero',
    width: 150,
  },
];

const CatalogosMeseros = () => {
  const {itemsTable, setItemsTable} = useContext(AjustesContext);

  const waiters = useApi("waiters"); 
  const rols = useApi("waitersRoles")
  const roles = {}
  rols.map(rol => {
    roles[rol.waiterRoleId] = rol.waiterRole
  })

  useEffect(()=>{
    setItemsTable(waiters)
  }, [waiters])

  return (
    <React.Fragment>
      <h1>Meseros</h1>
      <div className='AjustesCatalogos-subcontent'>
        <Table
          rows={itemsTable} 
          relations={{roles}}
          columns={columns}
          rowId={row => row.waiterId}
          heigth = {400}
          width = {300}
        />
        <div className='subcontent-form'>
          <FormWaiters
            roles={roles}
          />
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default CatalogosMeseros;