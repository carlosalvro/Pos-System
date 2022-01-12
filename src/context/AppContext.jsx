import React from 'react';
import useChangeTurn from "../hooks/useChangeTurn";
import useUserValidation from '../hooks/useUserValidation';
const AppContext = React.createContext();

function AppProvider(props) {
  const [user, userChange] = useUserValidation();
  const [turn ,changeTurn] = useChangeTurn();

  return (
    <AppContext.Provider value={{
      user,
      userChange,
      turn,
      changeTurn,
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export {AppContext, AppProvider}