import React, {useContext, useEffect} from 'react';
import Table from "@components/Table"
import useApi from '../../../hooks/useApi';
import FormSubgroups from "@containers/Forms/FormSubgroups";
import {AjustesContext} from "../../../context/AjustesContext";

const columns = [
  {
    field: "subgroupId",
    headerName: "ID",
    width: 50,
  },
  {
    field: 'group',
    headerName: 'Grupo',
    editable: true,
    width: 140,
    valueGetter: (params) => {
        const groupid = params.row.groups.group
        return (groupid)
    }
  },
  {
    field: 'subgroup',
    headerName: 'Subgrupo',
    editable: true,
    width: 150,
  },
]

const CatalogosSubGrupos = () => {
  const {itemsTable, setItemsTable} = useContext(AjustesContext);

  const subgroups = useApi("subgroups"); 
  const groupsObj = useApi("groups");
  const groups = {}
  groupsObj.map(group => (
    groups[group.groupId] = group.group
  ))

  useEffect(() => {
    setItemsTable(subgroups)
  }, [subgroups])

  return (
    <React.Fragment >
      {console.log(itemsTable)}
      <h1>SubGrupos</h1>
      <div className='AjustesCatalogos-subcontent'>
        <Table 
          rows={itemsTable}
          relations={{groups}}
          columns={columns}
          rowId={row => row.subgroupId}
          heigth = {400}
          width = {350}
        />
        <div className='subcontent-form'>
          <FormSubgroups
            groups={groups}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default CatalogosSubGrupos;