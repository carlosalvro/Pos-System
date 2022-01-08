import React, {useContext} from 'react';
import LoginUser from './pages/LoginUser';
import LoggedLayout from './layouts/LoggedLayout';
import { AppContext } from './context/AppContext';
import './styles/App.css'

const App = () => {
  const {user} = useContext(AppContext);

  return (
    <React.Fragment>
      {!user ? (
        <LoginUser />
      ) : (
        <LoggedLayout />
      )}
    </React.Fragment>
  );
}

export default App;