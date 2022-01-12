import React, {useContext, useEffect, useRef} from 'react';
import Select from "@components/Select"
import {TextField} from "@components/TextField"
import {Button} from "@mui/material"
import NewDelete from "@components/NewDelete"
import { AjustesContext } from '../context/AjustesContext'; 
// import useApiId from '../hooks/useApiID';



const FormGroups = (props) => {
  const {categories} = props
  const { 
    selectedItemData, 
    setSelectedItemData,
    disabledForm, 
    setDisabledForm ,
    formWithData,
    setFormWithData,
  } = useContext(AjustesContext);
  var data;

  if (Object.keys(selectedItemData).length !== 0) {
    data = {
      id: selectedItemData.groupId,
      group: selectedItemData.group,
      category: selectedItemData.category.category
    }
  } else {
    data = {
      id: "",
      group: "",
      category: "",
    }
  }

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return;
    }
    setFormWithData(true)
    setDisabledForm(true)
  }, [selectedItemData])

  useEffect(() => {
    if (!formWithData) {
      console.log("Quitando data")
    }

  })

  // const handleSubmit = () => {
  //   const formData = new FormData(form.current)

  // }
  const formTemplate = (formData) => {
    const data = {
      groupId: formData.get("id"),
      group: formData.get("group"),
      categoryId: formData.get("category")
    }
    return data;
  }
  const clear = () => {

  }

  return (
    <NewDelete 
      id={formWithData ? data.id : ""} 
      formTemplate={formTemplate}
    >
      <TextField 
        disabled={disabledForm}
        label="Id"
        name="id"
        type="number"
        InputLabelProps={{ shrink: true }} 
        value={formWithData ? data.id : clear} 
      />
      <Select
        disabled={disabledForm}
        id={"userId"}
        label={"Categoria"}
        name={"category"}
        options={categories}
        value={formWithData ? data.category : undefined} 
      />
      <TextField 
        disabled={disabledForm}
        label="Grupo" 
        name="group"
        InputLabelProps={{ shrink: true }} 
        type="text"
        value={formWithData ? data.group : undefined} 
      />
    </NewDelete>
  );
}

export default FormGroups;