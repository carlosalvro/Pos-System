import React, {useState} from 'react';
import useChangeTurn from "../hooks/useChangeTurn";
import useUserValidation from '../hooks/useUserValidation';
const AppContext = React.createContext();

function AppProvider(props) {
  const [user, userChange] = useUserValidation();
  const [turn ,changeTurn] = useChangeTurn();
  const [openNewProductPage, setOpenNewProductPage] = useState(true)
  const [openAlert, setOpenAlert] = React.useState({
    position: false,
    severity: "success",
    message: "Default Message"
  });

  return (
    <AppContext.Provider value={{
      user,
      userChange,
      turn,
      changeTurn,
      openAlert,
      setOpenAlert,
      openNewProductPage,
      setOpenNewProductPage
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export {AppContext, AppProvider}