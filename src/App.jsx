import React, {useContext} from 'react';
import LoginUser from './pages/LoginUser';
import LoggedLayout from './layouts/LoggedLayout';
import Alert from "./components/Alert"
import { AppContext } from './context/AppContext';
import './styles/App.css'

const App = () => {
  const {user, openAlert, setOpenAlert} = useContext(AppContext);

  return (
    <React.Fragment>
      <Alert
        open={openAlert}
        setOpen={setOpenAlert}
      />
      {!user ? (
        <LoginUser />
      ) : (
        <LoggedLayout />
      )}
    </React.Fragment>
  );
}

export default App;