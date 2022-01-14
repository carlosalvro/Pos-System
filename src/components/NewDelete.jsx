import React, {useContext, useState, useRef} from 'react';
import { Button } from '@mui/material';
import "@styles/NewDelete.css";
import {AjustesContext} from "../context/AjustesContext";
import { usePostApi } from "../hooks/useApiID";
import axios from "axios";

const API = "http://localhost:3001/api";


const NewDelete = (props) => {
  const {children, id, formTemplate, defaultData, catalog} = props;
  const [mode, setMode] = useState("new");

  const { 
    disabledForm, 
    setDisabledForm, 
    formWithData, 
    setFormWithData, 
    setSelectedItemData,

  } = useContext(AjustesContext);

  function handleClick(e) {
    switch (e) {
      case "new":
        setSelectedItemData(defaultData)
        setFormWithData(false)
        setDisabledForm(false);
        setMode("new")
        console.log("new");
        break
      case "edit":
        setDisabledForm(false);
        setMode("edit")
        console.log(`edit id: ${id}`);
        break
      case "delete":
        console.log(`delete id: ${id}`);
        break
    }
  }

  const form  = useRef(null)

  const handleNewSubmit = async () => {
    const formData = new FormData(form.current)
    const data = formTemplate(formData)
    const rta = await axios.post(`${API}/${catalog}/${id}`, data)
  }
  const handleEditSubmit = () => {
    const formData = new FormData(form.current)
    const data = formTemplate(formData)
  }

  return (
    <React.Fragment>
      <div className='NewDelete'>
        <Button onClick={()=>{handleClick("new")}} variant="contained" color="success" >Nuevo</Button>
        <Button 
          onClick={()=>{handleClick("edit")}}  
          variant="contained" 
          color="secondary" 
          disabled={!formWithData}
        >Editar</Button>
        <Button 
          onClick={()=>{handleClick("delete")}} 
          variant="outlined" 
          color="error"
          disabled={!formWithData || !disabledForm}
        > 
        Eliminar</Button>
      </div>
      <form className='Form' ref={form}>
        {children}
      </form>
      <Button onClick={handleNewSubmit} variant="contained">Enviar</Button>
    </React.Fragment>
  );
}

export default NewDelete;