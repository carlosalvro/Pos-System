import React from 'react';
import Table from "@components/Table"
import useApi from '../../../hooks/useApi';

const columns = [
  { 
    field: 'waiterRoleId', 
    width: 50, 
    headerName: 'ID' 
},
  {
    field: 'waiterRole',
    headerName: 'Role Mesero',
    editable: true,
    width: 250,
  },
]

const CatalogosRolesMeseros = () => {
  const roles = useApi("waitersRoles");

  return (
    <React.Fragment>
      <h1>Roles Meseros</h1>
      <Table
        rows={roles} 
        columns={columns}
        rowId={row => row.waiterRoleId}
        heigth = {400}
        width = {350}
      />
    </React.Fragment>
  );
}

export default CatalogosRolesMeseros;