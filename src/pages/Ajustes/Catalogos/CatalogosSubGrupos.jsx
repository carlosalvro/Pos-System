import React from 'react';
import Table from "@components/Table"
import useApi from '../../../hooks/useApi';

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
    width: 100,
    valueGetter: (params) => (
      params.row.groups.group
    )
  },
  {
    field: 'subgroup',
    headerName: 'Subgrupo',
    editable: true,
    width: 150,
  },
]

const CatalogosSubGrupos = () => {

  const subgroups = useApi("subgroups"); 

  return (
    <React.Fragment >
      <h1>SubGrupos</h1>
      <Table 
        rows={subgroups}
        columns={columns}
        rowId = {row => row.subgroupId}
        heigth = {400}
        width = {350}
      />
    </React.Fragment>
  );
}

export default CatalogosSubGrupos;