
import React, {useState} from 'react';
const AjustesContext = React.createContext();

function AjustesProvider(props) {
  const [disabledForm, setDisabledForm] = useState(false);
  const [formWithData, setFormWithData] = useState(false);
  const [selectedItemData, setSelectedItemData] = useState({});
  const [updateTable, setUpdateTable] = useState(new Date());

  const changeFormWithData = () => {
    setFormWithData(!formWithData);
  }

  const changeDisabled = () => {
    setDisabledForm(!disabledForm);
  }

  return (
    <AjustesContext.Provider
      value={{
        disabledForm,
        setDisabledForm,
        formWithData,
        setFormWithData,
        selectedItemData,
        setSelectedItemData,
        updateTable,
        setUpdateTable,
      }}
    >
      {props.children}
    </AjustesContext.Provider>
  )
}

export {AjustesContext, AjustesProvider}