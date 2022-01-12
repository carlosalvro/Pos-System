import React, {useContext} from 'react';
import { 
        Button, 
        MenuItem, 
        InputLabel
      } from '@mui/material';

import {TextField, FormControl} from "../components/TextField"
import "../styles/LoginUser.css"
import { AppContext } from '../context/AppContext';
import Select from "../components/Select"

const LoginUser = () => {
  const {userChange} = useContext(AppContext)

  return (
    <React.Fragment>
      <div className='login-container'>
        <Select
          id={"userId"}
          label={"Usuario"}
          options={["Carlos", "Gabriel"]}
        />
        <TextField label="Contraseña" type="password"></TextField>
        <Button onClick={userChange} color="error" variant="contained">Entrar</Button>
      </div>
    </React.Fragment>
    
  );
}

export default LoginUser;