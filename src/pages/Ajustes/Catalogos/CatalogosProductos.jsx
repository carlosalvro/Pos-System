import React from 'react';
import Table from "@components/Table"
import useApi from '../../../hooks/useApi';

const API = "http://localhost:3001/api/";

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
    editable: true,
    width: 100,
    valueGetter: (params) => (
      params.row.category.category
    )
  },
  {
    field: 'group',
    headerName: 'Grupo',
    editable: true,
    width: 100,
    valueGetter: (params) => (
      params.row.groups.group
    )
  },
  {
    field: 'subgroup',
    headerName: 'Subgrupo',
    editable: true,
    width: 100,
    valueGetter: (params) => (
      params.row.subgroups.subgroup
    )
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
  const products = useApi("products");
  return (
    <React.Fragment>
      <h1>Productos</h1>
      <Table
        rows={products}
        columns={columns}
        rowId={row => row.productId}
        heigth = {400}
        width = {"100%"}
      />

    </React.Fragment>
  );
}

export default CatalogosProductos;