import React, {useContext, useState, useEffect, useRef} from 'react';
import Select from "@components/Select"
import {TextField} from "@components/TextField"
import NewDelete from "@components/NewDelete"
import { AjustesContext } from '../context/AjustesContext'; 


const dataDefault = {
  groupId: "",
  group: "",
  categoryId: "",
}


const FormGroups = (props) => {
  const {categories} = props
  const { selectedItemData, disabledForm } = useContext(AjustesContext);
  const [data, setData] = useState(dataDefault)


  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return;
    }

    setData({
      groupId: selectedItemData.groupId,
      group: selectedItemData.group,
      categoryId: selectedItemData.categoryId
    })

  }, [selectedItemData])

  const formTemplate = (formData) => {
    const data = {
      group: formData.get("group"),
      categoryId: formData.get("category")
    }
    return data;
  }

  return (
    <NewDelete 
      id={data.groupId} 
      catalog = {"groups"}
      defaultData={dataDefault}
      formTemplate={formTemplate}
    >
      <TextField 
        disabled={disabledForm}
        label="Id"
        type="number"
        InputLabelProps={{ shrink: true }} 
        value={ data.groupId } 
        onChange={(e) => {
          setData({...data, groupId: e.target.value})
        }}
        helperText="Si no tienes no llenarlo"
      />
      <Select
        disabled={disabledForm}
        id={"userId"}
        label={"Categoria"}
        name={"category"}
        options={categories}
        value={ data.categoryId } 
        onChange={(e) => {
          setData({...data, categoryId: e.target.value})
        }}
      />
      <TextField 
        disabled={disabledForm}
        label="Grupo" 
        name="group"
        InputLabelProps={{ shrink: true }} 
        type="text"
        value={ data.group } 
        onChange={(e) => {
          setData({...data, group: e.target.value})
        }}
      />
    </NewDelete>
  );
}

export default FormGroups;