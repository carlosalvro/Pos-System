import React, {useContext, useEffect} from 'react';
import Table from "@components/Table"
import useApi from '../../../hooks/useApi';
import FormGroups from "@containers/Forms/FormGroups";
import {AjustesContext} from "../../../context/AjustesContext";

const columns = [
  { 
    field: 'groupId', 
    width: 90, 
    headerName: 'ID' 
  },
  {
    field: 'categoryId',
    headerName: 'Categoria',
    width: 100,
    valueGetter: (params) => {
        const categoryId = params.row.category.category
        return (categoryId)
    }
  },
  {
    field: 'group',
    headerName: 'Grupo',
    width: 150,
  },
];

const CatalogosGrupos = () => {
  const {itemsTable, setItemsTable} = useContext(AjustesContext);

  const groups = useApi("groups"); 
  const cats = useApi("categories");
  const categories = {}
  cats.map(cat => (
    categories[cat.categoryId] = cat.category
  ))

  useEffect(()=>{
    setItemsTable(groups)
  }, [groups])

  return (
    <React.Fragment >
      <h1>Grupos</h1>
      <div className='AjustesCatalogos-subcontent'>
        <Table 
          rows={itemsTable} 
          relations={{categories}}
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


