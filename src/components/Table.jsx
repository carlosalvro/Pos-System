import React, {useContext} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { AppContext } from '../context/AppContext';



export default function DataGridDemo(props) {
  const {rows, columns, rowId, heigth, width, api} = props;
  const {selectedItem, setSelectedItem} = useContext(AppContext);


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
        selectionModel={selectedItem}
        hideFooterSelectedRowCount
        onSelectionModelChange={(selection) => {
          if (selection.length > 1) {
            const selectionSet = new Set(selectedItem);
            const result = selection.filter((s) => !selectionSet.has(s));

            setSelectedItem(result);
          } else {
            setSelectedItem(selection);
          }
        }}
      />
    </div>
  );
}