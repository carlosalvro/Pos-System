import React, {useContext} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { AppContext } from '../context/AppContext';
import useApiID from '../hooks/useApiID';

const API = "http://localhost:3001/api";


export default function DataGridDemo(props) {
  const {rows, columns, rowId, heigth, width, api} = props;
  const {selectionCatalogo, setSelectionCatalogo} = useContext(AppContext);

  const bringDataFromApi = (result) => {
    setSelectionCatalogo(result);
    const newApi = `${API}/${api}/${result}`;
    console.log(newApi)
    // useApiID(newApi)
  }

  return (
    <div style={{ 
      height: heigth, 
      width: width, 
      minWidth: 350 
      }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={rowId}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        // disableSelectionOnClick
        disableExtendRowFullWidth={true}
        checkboxSelection={true}
        selectionModel={selectionCatalogo}
        hideFooterSelectedRowCount
        onSelectionModelChange={(selection) => {
          if (selection.length > 1) {
            const selectionSet = new Set(selectionCatalogo);
            const result = selection.filter((s) => !selectionSet.has(s));

            bringDataFromApi(result);
          } else {
            setSelectionCatalogo(selection);
          }
        }}
      />
    </div>
  );
}