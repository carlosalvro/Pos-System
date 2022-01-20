import React, {useContext, useState, useEffect, useRef} from 'react';
import {TextField} from "@components/TextField"
import NewDelete from "@components/NewDelete"
import { AjustesContext } from '../../context/AjustesContext'; 


const dataDefault = {
  waiterRoleId: "",
  waiterRole: "",
}

const FormRoles = () => {
  const { selectedItemData, disabledForm } = useContext(AjustesContext);
  const [data, setData] = useState(dataDefault)

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return;
    }

    setData({
      waiterRole: selectedItemData.waiterRole,
      waiterRoleId: selectedItemData.waiterRoleId,
    })

  }, [selectedItemData])

  const formTemplate = (formData) => {
    const id = parseInt(formData.get("id"))
    if (id) {
      const data = {
        waiterRoleId: id,
        waiterRole: formData.get("role").toUpperCase(),
      }
      return data;
    } else {
      const data = {
        waiterRole: formData.get("role").toUpperCase(),
      }
      return data;
    }
  }

  return (
    <NewDelete
      id={data.waiterRoleId}
      rowId= {data => data.waiterRoleId}
      catalog={"waitersRoles"}
      defaultData={dataDefault}
      formTemplate={formTemplate}
    >
      <TextField 
        disabled={disabledForm}
        label="Id"
        name= "id"
        type="number"
        InputLabelProps={{ shrink: true }} 
        value={ data.waiterRoleId } 
        onChange={(e) => {
          setData({...data, waiterRoleId: e.target.value})
        }}
        helperText="Si no tienes no llenarlo"
      />
      <TextField 
        disabled={disabledForm}
        label="Rol"
        name= "role"
        type="text"
        InputLabelProps={{ shrink: true }} 
        value={ data.waiterRole } 
        onChange={(e) => {
          setData({...data, waiterRole: e.target.value})
        }}
      />
    </NewDelete>
  );
}

export default FormRoles;