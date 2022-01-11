import React from 'react';
import useChangeTurn from "../hooks/useChangeTurn";
import useUserValidation from '../hooks/useUserValidation';
const AppContext = React.createContext();

function AppProvider(props) {
  const [user, userChange] = useUserValidation();
  const [turn ,changeTurn] = useChangeTurn();
  const [selectedItem, setSelectedItem] = React.useState([]);
  const [catalogo, setCatalogo] = React.useState("");

  return (
    <AppContext.Provider value={{
      user,
      userChange,
      turn,
      changeTurn,
      selectedItem,
      setSelectedItem,
      catalogo,
      setCatalogo
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export {AppContext, AppProvider}