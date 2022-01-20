import React, {useContext, useState, useEffect, useRef} from 'react';
import Select from "@components/Select"
import {TextField} from "@components/TextField"
import NewDelete from "@components/NewDelete"
import { AjustesContext } from '../../context/AjustesContext'; 
import axios from "axios";
import InputAdornment from '@mui/material/InputAdornment';
import Switch from "@components/Switch"
import "@styles/ajustes/FormProducts.css"

const API = "http://localhost:3001/api";

const dataDefault = {
  productId: "",
  categoryId: "",
  groupId: "",
  subgroupId: "",
  productName: "",
  shortName: "",
  price: "",
  openPrice: 0,
  printArea: "",
  active: 1,
}

const FormProducts = (props) => {
  const {categories, groups, subgroups } = props
  const { selectedItemData, disabledForm} = useContext(AjustesContext);
  const [data, setData] = useState(dataDefault)
  const [groupsCategory, setGroupsCategory] = useState([]);
  const [subgroupsGroup, setSubgroupsGroup] = useState([]);

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return;
    }

    setData({
      productId: selectedItemData.productId,
      categoryId: selectedItemData.categoryId,
      groupId: selectedItemData.groupId,
      subgroupId: selectedItemData.subgroupId,
      productName: selectedItemData.productName,
      shortName: selectedItemData.shortName,
      price: selectedItemData.price,
      openPrice: selectedItemData.openPrice,
      printArea: selectedItemData.printArea,
      active: selectedItemData.active,
    })
  }, [selectedItemData])

  useEffect(async () => {
    const rta = await axios(`${API}/categories/${data.categoryId}`)
    const groups = rta.data.groups
    const groupsInCategory = {}
    if (groups) {
      groups.map(x => {
        groupsInCategory[x.groupId] = x.group
      })
      setGroupsCategory(groupsInCategory)
      setSubgroupsGroup([])
    }
  }, [data.categoryId])

  React.useEffect(async () => {
    const rta = await axios(`${API}/groups/${data.groupId}`)
    const subgroups = rta.data.subgroups
    const subgroupsInCategory = {}
    if (subgroups) {
      subgroups.map(x => {
        subgroupsInCategory[x.subgroupId] = x.subgroup
      })
      setSubgroupsGroup(subgroupsInCategory)
    }
    
    

  }, [data.groupId])

  const formTemplate = (formData) => {
    const id = parseInt(formData.get("id"))
    if (id) {
      const data = {
        productId: id,
        categoryId: parseInt(formData.get("category")),
        groupId: parseInt(formData.get("group")),
        subgroupId: parseInt(formData.get("subgroup")),
        productName: formData.get("product").toUpperCase(),
        shortName: formData.get("shortName").toUpperCase(),
        price: parseFloat(formData.get("price")),
        openPrice: formData.get("openPrice") ? 1 : 0,
        // printArea: formData.get("printArea").toUpperCase(),
        active: formData.get("active") ? 1 : 0,
      }
      return data;
    } else {
      const data = {
        categoryId: parseInt(formData.get("category")),
        groupId: parseInt(formData.get("group")),
        subgroupId: parseInt(formData.get("subgroup")),
        productName: formData.get("product").toUpperCase(),
        shortName: formData.get("shortName").toUpperCase(),
        price: parseFloat(formData.get("price")),
        openPrice: formData.get("openPrice") ? 1 : 0,
        // printArea: formData.get("printArea").toUpperCase(),
        active: formData.get("active") ? 1 : 0,
      }
      return data;
    }
  }

  const idToRelation = (rta, relations) => {
    rta["category"] = {category: relations.categories[rta.categoryId]}
    rta["groups"] = {group: relations.groups[rta.groupId]}
    rta["subgroups"] = {subgroup: relations.subgroups[rta.subgroupId]}
    return rta
  }

  return (
    <NewDelete 
      id={data.productId} 
      rowId = {data => data.productId}
      catalog = {"products"}
      relationFunc = {idToRelation}
      relations = {{categories, groups, subgroups}}
      defaultData={dataDefault}
      formTemplate={formTemplate}
    >
      <div className='FormProducts'>
        <TextField 
          disabled={disabledForm}
          label="Id"
          name= "id"
          className= "id"
          type="number"
          InputLabelProps={{ shrink: true }} 
          value={ data.productId } 
          onChange={(e) => {
            setData({...data, productId: e.target.value})
          }}
        />
        <Select
          disabled={disabledForm}
          label={"Categoria"}
          name="category"
          className="category"
          options={categories}
          value={ data.categoryId } 
          onChange={(e) => {
            const id = e.target.value
            setData({...data, categoryId: id})
            
          }}
        />
        <Select
          disabled={disabledForm}
          label={"Grupo"}
          name="group"
          className="group"
          options={groupsCategory}
          value={ data.groupId } 
          onChange={(e) => {
            setData({...data, groupId: e.target.value})
          }}
        />
        <Select
          disabled={disabledForm}
          label={"Subgrupo"}
          name="subgroup"
          className="subgroup"
          options={subgroupsGroup}
          value={ data.subgroupId } 
          onChange={(e) => {
            setData({...data, subgroupId: e.target.value})
          }}
        />
        <TextField 
          disabled={disabledForm}
          label="Nombre" 
          name="product"
          className="product"
          InputLabelProps={{ shrink: true }} 
          type="text"
          value={ data.productName } 
          onChange={(e) => {
            setData({...data, productName: e.target.value})
          }}
        />
        <TextField 
          disabled={disabledForm}
          label="Precio" 
          name="price"
          className="price"
          InputLabelProps={{ shrink: true }} 
          type="number"
          step="0.01"
          value={ data.price } 
          onChange={(e) => {
            setData({...data, price: e.target.value})
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField 
          disabled={disabledForm}
          label="Nombre Corto" 
          name="shortName"
          className="shortName"
          InputLabelProps={{ shrink: true }} 
          type="text"
          value={ data.shortName } 
          onChange={(e) => {
            setData({...data, shortName: e.target.value})
          }}
        />
        <Switch
          checked={Boolean(data.openPrice)}
          label="Precio Abierto"
          value = {data.openPrice}
          name="openPrice"
          className="openPrice"
          onChange={(e) => {
            const check = e.target.checked
            setData({...data, openPrice: check ? 1 : 0})
          }}
          color="secondary"
        />
        <Switch
          checked={Boolean(data.active)}
          label="Activo"
          value = {data.active}
          name="active"
          className="active"
          onChange={(e) => {
            const check = e.target.checked
            setData({...data, active: check ? 1 : 0})
          }}
          color="secondary"
        />
        {/* <Select
          disabled={disabledForm}
          label={"Subgrupo"}
          name={"subgroup"}
          options={subgroupsGroup}
          value={ data.subgroupId } 
          onChange={(e) => {
            setData({...data, subgroupId: e.target.value})
          }}
        /> */}
      </div>
    </NewDelete>
  );
}

export default FormProducts;