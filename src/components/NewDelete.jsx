import React, {useContext, useRef} from 'react';
import { Button } from '@mui/material';
import "@styles/NewDelete.css";
import {AjustesContext} from "../context/AjustesContext";

const NewDelete = ({children, id, formTemplate}) => {
  const { disabledForm, setDisabledForm, formWithData, setFormWithData, setSelectedItemData } = useContext(AjustesContext);

  function handleClick(e) {
    switch (e) {
      case "new":
        setSelectedItemData({})
        setFormWithData(false)
        setDisabledForm(false);
        console.log("new");
        break
      case "edit":
        setDisabledForm(false);
        console.log(`edit id: ${id}`);
        break
      case "delete":
        console.log(`delete id: ${id}`);
        break
    }
  }

  const form  = useRef(null)
  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const data = formTemplate(formData)
    console.log(data)
  }

  return (
    <React.Fragment>
      <div className='NewDelete'>
        <Button onClick={()=>{handleClick("new")}} variant="contained" color="success" >Nuevo</Button>
        <Button onClick={()=>{handleClick("edit")}} variant="contained" color="secondary" >Editar</Button>
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
      <Button onClick={handleSubmit} variant="contained">Enviar</Button>
    </React.Fragment>
  );
}

export default NewDelete;