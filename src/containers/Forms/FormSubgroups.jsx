import React, {useContext, useState, useEffect, useRef} from 'react';
import Select from "@components/Select"
import {TextField} from "@components/TextField"
import NewDelete from "@components/NewDelete"
import { AjustesContext } from '../../context/AjustesContext'; 

const dataDefault = {
  subgroupId: "",
  subgroup: "",
  groupId: "",
}

const FormSubgroups = (props) => {
  const {groups} = props
  const { selectedItemData, disabledForm } = useContext(AjustesContext);
  const [data, setData] = useState(dataDefault)

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return;
    }

    setData({
      subgroupId: selectedItemData.subgroupId,
      subgroup: selectedItemData.subgroup,
      groupId: selectedItemData.groupId
    })

  }, [selectedItemData])

  const formTemplate = (formData) => {
    const id = parseInt(formData.get("id"))
    if (id) {
      const data = {
        subgroupId: id,
        subgroup: formData.get("subgroup").toUpperCase(),
        groupId: parseInt(formData.get("group"))
      }
      return data;
    } else {
      const data = {
        subgroup: formData.get("subgroup").toUpperCase(),
        groupId: parseInt(formData.get("group"))
      }
      return data;
    }
  }

  const idToRelation = (rta, relations) => {
    rta["groups"] = {group: relations.groups[rta.groupId]}
    return rta
  }

  return (
    <NewDelete 
      id={data.subgroupId} 
      rowId = {data => data.subgroupId}
      catalog = {"subgroups"}
      relationFunc = {idToRelation}
      relations = {{groups}}
      defaultData={dataDefault}
      formTemplate={formTemplate}
    >
      <TextField 
        disabled={disabledForm}
        label="Id"
        name= "id"
        type="number"
        InputLabelProps={{ shrink: true }} 
        value={ data.subgroupId } 
        onChange={(e) => {
          setData({...data, subgroupId: e.target.value})
        }}
        helperText="Si no tienes no llenarlo"
      />
      <Select
        disabled={disabledForm}
        label={"Grupos"}
        name={"group"}
        options={groups}
        value={ data.groupId } 
        onChange={(e) => {
          setData({...data, groupId: e.target.value})
        }}
      />
      <TextField 
        disabled={disabledForm}
        label="Subgrupo" 
        name="subgroup"
        InputLabelProps={{ shrink: true }} 
        type="text"
        value={ data.subgroup } 
        onChange={(e) => {
          setData({...data, subgroup: e.target.value})
        }}
      />
    </NewDelete>
  );
}

export default FormSubgroups;