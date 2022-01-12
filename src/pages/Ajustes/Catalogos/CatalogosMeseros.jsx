import React from 'react';
import Table from "@components/Table"
import useApi from '../../../hooks/useApi';

const columns = [
  { 
    field: 'waiterId', 
    width: 50, 
    headerName: 'ID' 
  },
  {
    field: 'waiterRole',
    headerName: 'Rol',
    editable: true,
    width: 100,
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
  
  const waiters = useApi("waiters"); 

  return (
    <React.Fragment>
      <h1>Meseros</h1>
      <Table
        rows={waiters} 
        columns={columns}
        rowId={row => row.waiterId}
        heigth = {400}
        width = {300}
      />
    </React.Fragment>
  );
}

export default CatalogosMeseros;