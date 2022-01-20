import React, {useContext, useState, useEffect, useRef} from 'react';
import {TextField} from "@components/TextField"
import NewDelete from "@components/NewDelete"
import { AjustesContext } from '../../context/AjustesContext'; 
import "@styles/ajustes/FormClients.css"


const dataDefault = {
  clientId: "",
  client: "",
  street: "",
  num: "",
  crossingStreet1: "",
  crossingStreet2: "",
  reference: "",
  phoneNumber: ""
}

const FormClients = () => {
  const { selectedItemData, disabledForm } = useContext(AjustesContext);
  const [data, setData] = useState(dataDefault)

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return;
    }

    setData({
      clientId: selectedItemData.clientId,
      client: selectedItemData.client,
      street: selectedItemData.street,
      num: selectedItemData.num,
      crossingStreet1: selectedItemData.crossingStreet1,
      crossingStreet2: selectedItemData.crossingStreet2,
      reference: selectedItemData.reference,
      phoneNumber: selectedItemData.phoneNumber,
    })

  }, [selectedItemData])

  const formTemplate = (formData) => {
    const id = parseInt(formData.get("id"))
    if (id) {
      const data = {
        clientId: id,
        client: formData.get("client").toUpperCase(),
        street: formData.get("street").toUpperCase(),
        num: formData.get("number").toUpperCase(),
        crossingStreet1: formData.get("cstreet1").toUpperCase(),
        crossingStreet2: formData.get("cstreet2").toUpperCase(),
        reference: formData.get("ref").toUpperCase(),
        phoneNumber: formData.get("phone").toUpperCase(),
      }
      return data;
    } else {
      const data = {
        client: formData.get("client").toUpperCase(),
        street: formData.get("street").toUpperCase(),
        num: formData.get("number").toUpperCase(),
        crossingStreet1: formData.get("cstreet1").toUpperCase(),
        crossingStreet2: formData.get("cstreet2").toUpperCase(),
        reference: formData.get("ref").toUpperCase(),
        phoneNumber: formData.get("phone").toUpperCase(),
      }
      return data;
    }
  }

  return (
    <NewDelete 
      id={data.clientId} 
      rowId = {data => data.clientId}
      catalog = {"clients"}
      defaultData={dataDefault}
      formTemplate={formTemplate}
    >
      <div className='FormClients'>
        <TextField 
          disabled={disabledForm}
          label="Id"
          name= "id"
          className= "id"
          type="number"
          InputLabelProps={{ shrink: true }} 
          value={ data.clientId } 
          onChange={(e) => {
            setData({...data, clientId: e.target.value})
          }}
        />
        <TextField 
          disabled={disabledForm}
          label="Nombre" 
          name="client"
          className="client"
          InputLabelProps={{ shrink: true }} 
          type="text"
          value={ data.client } 
          onChange={(e) => {
            setData({...data, client: e.target.value})
          }}
        />
        <TextField 
          disabled={disabledForm}
          label="Número" 
          name="number"
          className="number"
          InputLabelProps={{ shrink: true }} 
          type="text"
          value={ data.num } 
          onChange={(e) => {
            setData({...data, num: e.target.value})
          }}
        />
        <TextField 
          disabled={disabledForm}
          label="Domicilio" 
          name="street"
          className="street"
          InputLabelProps={{ shrink: true }} 
          type="text"
          value={ data.street } 
          onChange={(e) => {
            setData({...data, street: e.target.value})
          }}
        />
        <TextField 
          disabled={disabledForm}
          label="Cruce 1" 
          name="cstreet1"
          className="cstreet1"
          InputLabelProps={{ shrink: true }} 
          type="text"
          value={ data.crossingStreet1 } 
          onChange={(e) => {
            setData({...data, crossingStreet1: e.target.value})
          }}
        />
        <TextField 
          disabled={disabledForm}
          label="Cruce 2" 
          name="cstreet2"
          className="cstreet2"
          InputLabelProps={{ shrink: true }} 
          type="text"
          value={ data.crossingStreet2 } 
          onChange={(e) => {
            setData({...data, crossingStreet2: e.target.value})
          }}
        />
        <TextField 
          disabled={disabledForm}
          label="Referencia" 
          name="ref"
          className="ref"
          InputLabelProps={{ shrink: true }} 
          type="text"
          value={ data.reference } 
          onChange={(e) => {
            setData({...data, reference: e.target.value})
          }}
        />
        <TextField 
          disabled={disabledForm}
          label="Telefono" 
          name="phone"
          className="phone"
          InputLabelProps={{ shrink: true }} 
          type="text"
          value={ data.phoneNumber } 
          onChange={(e) => {
            setData({...data, phoneNumber: e.target.value})
          }}
        />
      </div>
    </NewDelete>
  );
}

export default FormClients;