
import React, {useState} from 'react';
const AjustesContext = React.createContext();

function AjustesProvider(props) {
  const [disabledForm, setDisabledForm] = useState(false);
  const [formWithData, setFormWithData] = useState(false);
  const [selectedItemData, setSelectedItemData] = useState({});
  const [itemsTable, setItemsTable] = useState([]);

  const [groups, setGroups] = useState([]);
  const [subgroups, setSubgroups] = useState([]);

  



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