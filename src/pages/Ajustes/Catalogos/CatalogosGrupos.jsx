import React, {useContext} from 'react';
import { AppContext } from '../../../context/AppContext';
import Table from "@components/Table"
import useApi from '../../../hooks/useApi';
import Select from "@components/Select"
import {TextField, FormControl} from "@components/TextField"
import {Button} from "@mui/material"
import NewDelete from "@components/NewDelete"

const API = "http://localhost:3001/api";

const columns = [
  { field: 'groupId', width: 50, headerName: 'ID' },
  {
    field: 'category',
    headerName: 'Categoria',
    editable: true,
    width: 100,
    valueGetter: (params) => (
      params.row.category.category
    )
  },
  {
    field: 'group',
    headerName: 'Grupo',
    editable: true,
    width: 150,
  },
];

const CatalogosGrupos = () => {
  const {selectionCatalogo} = useContext(AppContext);

  const groups = useApi(`${API}/groups`); 
  const cats = useApi(`${API}/categories`)
  const categories = []
  cats.map(cat => (
    categories.push(cat.category)
  ))

  return (
    <React.Fragment >
      <h1>Grupos</h1>
      <div className='AjustesCatalogos-subcontent'>
        <Table 
          rows={groups} 
          api="groups"
          columns={columns}
          rowId={row => row.groupId}
          heigth = {400}
          width = {300}
        />
        <div className='subcontent-form'>
          <NewDelete/>
          <TextField label="Id" type="number"></TextField>
            <Select
              id={"userId"}
              label={"Categoria"}
              options={categories}
            />
            <TextField label="Grupo" type="text"></TextField>
            <Button  color="error" variant="contained">Entrar</Button>
        </div>
      </div>
      
    </React.Fragment>
  );
}
export default CatalogosGrupos;


