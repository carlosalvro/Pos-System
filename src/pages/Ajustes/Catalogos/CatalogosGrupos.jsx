import React from 'react';
import Table from "@components/Table"
import useApi from '../../../hooks/useApi';
import FormGroups from "@containers/FormGroups"

const columns = [
  { field: 'groupId', width: 90, headerName: 'ID' },
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
    width: 150,
  },
];

const CatalogosGrupos = () => {
  const groups = useApi("groups"); 
  const cats = useApi("categories");
  const categories = {}
  cats.map(cat => (
    categories[cat.category] = cat.categoryId
  ))

  return (
    <React.Fragment >
      <h1>Grupos</h1>
      <div className='AjustesCatalogos-subcontent'>
        <Table 
          rows={groups} 
          api="groups"
          columns={columns}
          rowId={row => row.groupId}
          heigth = {400}
          width = {350}
        />
        <div className='subcontent-form'>
          <FormGroups
            categories={categories}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
export default CatalogosGrupos;


