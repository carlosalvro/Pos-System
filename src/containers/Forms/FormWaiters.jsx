import React, {useContext, useState, useEffect, useRef} from 'react';
import Select from "@components/Select"
import {TextField} from "@components/TextField"
import NewDelete from "@components/NewDelete"
import { AjustesContext } from '../../context/AjustesContext'; 

const dataDefault = {
  waiterId: "",
  waiter: "",
  waiterRoleId: "",
  password: "",
}

const FormWaiters = (props) => {
  const {roles} = props
  const { selectedItemData, disabledForm } = useContext(AjustesContext);
  const [data, setData] = useState(dataDefault)

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return;
    }

    setData({
      waiterId: selectedItemData.waiterId,
      waiter: selectedItemData.waiter,
      waiterRoleId: selectedItemData.waiterRoleId,
      password: selectedItemData.password
    })

  }, [selectedItemData])

  const formTemplate = (formData) => {
    const id = parseInt(formData.get("id"))
    if (id) {
      const data = {
        waiterId: id,
        waiter: formData.get("waiter").toUpperCase(),
        waiterRoleId: parseInt(formData.get("role")),
        password: parseInt(formData.get("password"))
      }
      return data;
    } else {
      const data = {
        waiter: formData.get("waiter").toUpperCase(),
        waiterRoleId: parseInt(formData.get("role")),
        password: parseInt(formData.get("password"))
      }
      return data;
    }
  }

  const idToRelation = (rta, relations) => {
    rta["waiterRoles"] = {waiterRole: relations.roles[rta.waiterRoleId]}
    return rta
  }

  return (
    <NewDelete 
      id={data.waiterId} 
      rowId = {data => data.waiterId}
      catalog = {"waiters"}
      relationFunc = {idToRelation}
      relations = {{roles}}
      defaultData={dataDefault}
      formTemplate={formTemplate}
    >
      <TextField 
        disabled={disabledForm}
        label="Id"
        name= "id"
        type="number"
        InputLabelProps={{ shrink: true }} 
        value={ data.waiterId } 
        onChange={(e) => {
          setData({...data, waiterId: e.target.value})
        }}
        helperText="Si no tienes no llenarlo"
      />
      <Select
        disabled={disabledForm}
        label={"Rol"}
        name={"role"}
        options={roles}
        value={ data.waiterRoleId } 
        onChange={(e) => {
          setData({...data, waiterRoleId: e.target.value})
        }}
      />
      <TextField 
        disabled={disabledForm}
        label="Nombre" 
        name="waiter"
        InputLabelProps={{ shrink: true }} 
        type="text"
        value={ data.waiter } 
        onChange={(e) => {
          setData({...data, waiter: e.target.value})
        }}
      />
      <TextField 
        disabled={disabledForm}
        label="Contraseña" 
        name="password"
        InputLabelProps={{ shrink: true }} 
        type="password"
        value={ data.password } 
        onChange={(e) => {
          setData({...data, password: e.target.value})
        }}
        helperText="Solo números"
      />
    </NewDelete>
  );
}

export default FormWaiters;