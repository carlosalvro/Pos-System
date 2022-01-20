import React, {useContext, useEffect} from 'react';
import Table from "@components/Table"
import useApi from '../../../hooks/useApi';
import FormProducts from '@containers/Forms/FormProducts';
import {AjustesContext} from "../../../context/AjustesContext";

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const columns = [
  { 
    field: 'productId', 
    width: 50, 
    headerName: 'ID' 
  },
  {
    field: 'category',
    headerName: 'Categoria',
    width: 100,
    valueGetter: (params) => (
      params.row.category.category
    )
  },
  {
    field: 'group',
    headerName: 'Grupo',
    width: 100,
    valueGetter: (params) => {
      try {
        return (params.row.groups.group)
      } catch (error) {
        return null
      }
    }
  },
  {
    field: 'subgroup',
    headerName: 'Subgrupo',
    width: 100,
    valueGetter: (params) => {
      try {
        return (params.row.subgroups.subgroup)
      } catch (error) {
        return null
      }
    }
  },
  { 
    field: 'productName', 
    width: 150, 
    headerName: 'Nombre' 
  },
  { 
    field: 'shortName', 
    width: 100, 
    headerName: 'Nombre Corto' 
  },
  { 
    field: 'printArea', 
    width: 100, 
    headerName: 'Area Impresión' 
  },
  { 
    field: 'price', 
    type: "number",
    width: 80, 
    valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
    headerName: 'Precio' 
  },
  { 
    field: 'openPrice', 
    width: 80, 
    type: 'boolean',
    headerName: 'Abierto' 
  },
  { 
    field: 'plu', 
    width: 100, 
    headerName: 'PLU' 
  },
  { 
    field: 'active', 
    width: 80, 
    type: 'boolean',
    headerName: 'Activo' 
  },
]

const CatalogosProductos = () => {
  const {itemsTable, setItemsTable} = useContext(AjustesContext);

  const products = useApi("products");

  const cats = useApi("categories");
  const categories = {}
  cats.map(cat => (
    categories[cat.categoryId] = cat.category
  ))

  const grupo = useApi("groups");
  const groups = {}
  grupo.map(group => (
    groups[group.groupId] = group.group
  ))

  const subgrupo = useApi("subgroups");
  const subgroups = {}
  subgrupo.map(subgroup => (
    subgroups[subgroup.subgroupId] = subgroup.subgroup
  ))

  useEffect(()=>{
    setItemsTable(products)
  }, [products])


  return (
    <React.Fragment>
      <h1>Productos</h1>
      <div className='AjustesCatalogos-subcontent'>
        <Table
          rows={itemsTable}
          relations={{categories, groups, subgroups}}
          columns={columns}
          rowId={row => row.productId}
          heigth = {400}
          width = {"100%"}
        /> 
        <div className='subcontent-form'>
          <FormProducts
            categories={categories}
            groups={groups}
            subgroups={subgroups}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default CatalogosProductos;