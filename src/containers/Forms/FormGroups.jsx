import React, {useContext, useState, useEffect, useRef} from 'react';
import Select from "@components/Select"
import {TextField} from "@components/TextField"
import NewDelete from "@components/NewDelete"
import { AjustesContext } from '../../context/AjustesContext'; 


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
    const id = parseInt(formData.get("id"))
    if (id) {
      const data = {
        groupId: id,
        group: formData.get("group").toUpperCase(),
        categoryId: parseInt(formData.get("category"))
      }
      return data;
    } else {
      const data = {
        group: formData.get("group").toUpperCase(),
        categoryId: parseInt(formData.get("category"))
      }
      return data;
    }
  }

  const idToRelation = (rta, relations) => {
    rta["category"] = {category: relations.categories[rta.categoryId]}
    return rta
  }

  return (
    <NewDelete 
      id={data.groupId} 
      rowId = {data => data.groupId}
      catalog = {"groups"}
      relationFunc = {idToRelation}
      relations = {{categories}}
      defaultData={dataDefault}
      formTemplate={formTemplate}
    >
      <TextField 
        disabled={disabledForm}
        label="Id"
        name= "id"
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