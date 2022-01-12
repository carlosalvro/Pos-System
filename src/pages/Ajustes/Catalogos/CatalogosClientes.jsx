import React from 'react';
import Table from "@components/Table"
import useApi from '../../../hooks/useApi';
import TableAlter from '../../../components/TableAlter';

const API = "http://localhost:3001/api/";

const columns = [
  {
    field: 'clientId', 
    width: 50, 
    headerName: 'ID' 
  },
  { 
    field: 'client', 
    width: 150, 
    headerName: 'Nombre' 
  },
  { 
    field: 'street', 
    width: 150, 
    headerName: 'Calle' 
  },
  { 
    field: 'num', 
    width: 100, 
    type: "number",
    headerName: 'Numero' 
  },
  { 
    field: 'crossingStreet1', 
    width: 100, 
    headerName: 'Cruce 1' 
  },
  { 
    field: 'crossingStreet2', 
    width: 100, 
    headerName: 'Cruce 2' 
  },
  { 
    field: 'reference', 
    width: 150, 
    headerName: 'Referencia' 
  },
  { 
    field: 'phoneNumber', 
    width: 120, 
    headerName: 'Telefono' 
  },
]

const CatalogosClientes = () => {

  const clients = useApi("clients");
  return (
    <React.Fragment>
      <h1>Clientes</h1>
      <Table
        rows={clients}
        columns={columns}
        rowId={row => row.clientId}
        heigth = {400}
        width = {"100%"}
      />
      {/* <TableAlter/> */}
    </React.Fragment>

  );
}

export default CatalogosClientes;