import React, {useContext} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { AjustesContext } from '../context/AjustesContext';


export default function DataGridDemo(props) {
  const {rows, columns, rowId, heigth, width, api, key} = props;
  const {setSelectedItemData, setFormWithData, setDisabledForm } = useContext(AjustesContext);


  return (
    <div style={{ 
      height: heigth, 
      width: width, 
      minWidth: 350 
      }}>
      <DataGrid
        SelectionUnit="FullRow"
        rows={rows}
        columns={columns}
        getRowId={rowId}
        pageSize={5}
        rowsPerPageOptions={[]}
        disableExtendRowFullWidth={true}
        checkboxSelection={false}
        hideFooterSelectedRowCount
        onRowClick={row => {
          setSelectedItemData(row.row)
          setDisabledForm(true)
          setFormWithData(true)
        }}
      />
    </div>
  );
}