import React, {useContext, useEffect} from 'react';
import Table from "@components/Table"
import useApi from '../../../hooks/useApi';
import FormClients from "@containers/Forms/FormClients";
import {AjustesContext} from "../../../context/AjustesContext";

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
  const {itemsTable, setItemsTable} = useContext(AjustesContext);

  const clients = useApi("clients");

  useEffect(()=>{
    setItemsTable(clients)
  }, [clients])

  return (
    <React.Fragment>
      <h1>Clientes</h1>
      <div className='AjustesCatalogos-subcontent'>
        <Table
          rows={itemsTable}
          columns={columns}
          rowId={row => row.clientId}
          heigth = {400}
          width = {"100%"}
        />
        <div className='subcontent-form'>
          <FormClients/>
        </div>
      </div>
    </React.Fragment>

  );
}

export default CatalogosClientes;