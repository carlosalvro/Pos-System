import React, {useContext, useState, useRef} from 'react';
import { Button } from '@mui/material';
import "@styles/NewDelete.css";
import {AjustesContext} from "../context/AjustesContext";
import {AppContext} from "../context/AppContext";
import axios from "axios";

const API = "http://localhost:3001/api";


const NewDelete = (props) => {
  const {children, id, formTemplate, defaultData, catalog, relations, relationFunc, rowId} = props;
  const [mode, setMode] = useState("new");

  const { 
    disabledForm, 
    setDisabledForm, 
    formWithData, 
    setFormWithData, 
    setSelectedItemData,
    setItemsTable,
  } = useContext(AjustesContext);
  const {setOpenAlert} = useContext(AppContext);

  async function handleClick(e) {
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
        try {
          const rta = await axios.delete(`${API}/${catalog}/${id}`);
          setItemsTable(prevState => prevState.filter(x => rowId(x)!==id))
          if (rta.status === 200){
            setOpenAlert({
              position: true,
              severity: "success",
              message: "Eliminado exitosamente"
            })
          }
        } catch (error) {
          console.log(error)
          setOpenAlert({
            position: true,
            severity: "error",
            message: "Error al eliminar item"
          })
        }
        setSelectedItemData(defaultData)
        setFormWithData(false)
        setDisabledForm(false);
        break
    }
  }

  const form  = useRef(null)

  const handleNewSubmit = async () => {
    const formData = new FormData(form.current)
    const data = formTemplate(formData)
    try {
      const rta = await axios.post(`${API}/${catalog}`, data)  
      if (relations) {
        rta.data = relationFunc(rta.data, relations)
      } 
      setItemsTable((oldItems) => [...oldItems, rta.data])
      if (rta.status === 201){
        setOpenAlert({
          position: true,
          severity: "success",
          message: "Añadido exitosamente"
        })
      }
    } catch (error) {
      console.log(error)
      setOpenAlert({
        position: true,
        severity: "error",
        message: "Ha ocurrido un error"
      })
    }
    setSelectedItemData(defaultData)
    setFormWithData(false)
  }
  const handleEditSubmit = async () => {
    const formData = new FormData(form.current)
    const data = formTemplate(formData)
    
    try {
      const rta = await axios.patch(`${API}/${catalog}/${id}`, data)  
      if (relations) {
        rta.data = relationFunc(rta.data, relations)
      }
      setItemsTable((oldItems) => oldItems.map(x => 
        rowId(x) === id ? rta.data : x
        ))
      if (rta.status === 200){
        setOpenAlert({
          position: true,
          severity: "success",
          message: "Editado exitosamente"
        })
      }
    } catch (error) {
      console.log(error)
      setOpenAlert({
        position: true,
        severity: "error",
        message: "Ha ocurrido un error"
      })
    }
    setSelectedItemData(defaultData)
    setFormWithData(false)
    setMode("new")
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
      <Button onClick={(mode === "new") ? handleNewSubmit : handleEditSubmit} variant="contained">Enviar</Button>
    </React.Fragment>
  );
}

export default NewDelete;