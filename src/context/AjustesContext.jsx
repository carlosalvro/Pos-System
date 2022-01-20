
import React, {useState} from 'react';
const AjustesContext = React.createContext();

function AjustesProvider(props) {
  const [disabledForm, setDisabledForm] = useState(false);
  const [formWithData, setFormWithData] = useState(false);
  const [selectedItemData, setSelectedItemData] = useState({});
  const [itemsTable, setItemsTable] = useState([]);

  const [groups, setGroups] = useState([]);
  const [subgroups, setSubgroups] = useState([]);

  const [openAlert, setOpenAlert] = React.useState({
    position: false,
    severity: "success",
    message: "Default Message"
  });



  return (
    <AjustesContext.Provider
      value={{
        disabledForm,
        setDisabledForm,
        formWithData,
        setFormWithData,
        selectedItemData,
        setSelectedItemData,
        itemsTable,
        setItemsTable,
        openAlert, 
        setOpenAlert,
        groups,
        setGroups,
        subgroups,
        setSubgroups,
      }}
    >
      {props.children}
    </AjustesContext.Provider>
  )
}

export {AjustesContext, AjustesProvider}