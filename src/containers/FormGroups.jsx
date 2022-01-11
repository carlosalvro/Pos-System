import React, {useContext} from 'react';
import Select from "@components/Select"
import {TextField} from "@components/TextField"
import {Button} from "@mui/material"
import NewDelete from "@components/NewDelete"
import { AppContext } from '../context/AppContext'; 
import useApiId from '../hooks/useApiID';



const FormGroups = (props) => {
  const {categories} = props
  const {selectedItem, catalogo } = useContext(AppContext);
  const id = selectedItem[0];

  if (id) {
    const data= useApiId(id, catalogo);
    console.log(data)
    // console.log(data.group)
    // const group = data.group;
    // console.log(group)
    return (
      <React.Fragment>
        <NewDelete/>
        <TextField 
          disabled
          label="Id"
          type="number"
          InputLabelProps={{ shrink: true }} 
          value={id ? id : ""} 
        />
        <Select
          disabled
          id={"userId"}
          label={"Categoria"}
          options={categories}
          value={id}
        />
        <TextField 
          disabled
          label="Grupo" 
          InputLabelProps={{ shrink: true }} 
          type="text"
        />
        <Button variant="contained">Entrar</Button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <NewDelete/>
        <TextField 
          label="Id"
          type="number"
          InputLabelProps={{ shrink: true }} 
          value={id ? id : ""} 
        />
        <Select
          id={"userId"}
          label={"Categoria"}
          options={categories}
          value={id}
        />
        <TextField 
          label="Grupo" 
          InputLabelProps={{ shrink: true }} 
          type="text"
        />
        <Button variant="contained">Entrar</Button>
      </React.Fragment>
    );
  }
}

export default FormGroups;