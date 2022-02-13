import React, {useContext, useRef} from 'react';
import {Button} from '@mui/material';

import {TextField } from "../components/TextField";
import "../styles/LoginUser.css";
import { AppContext } from '../context/AppContext';
import Select from "../components/Select";
import useApi from "../hooks/useApi";
import axios from "axios";
import errorMessage from '../hooks/useAlertError';

const API = "http://localhost:3001/api";

const LoginUser = () => {
  const {userChange, setOpenAlert} = useContext(AppContext)
  const usersApi = useApi("users");
  const users = {}
  usersApi.map(user => {
    users[user.userId] = user.user
  })

  const form  = useRef(null);
  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const data = {
      id: parseInt(formData.get("user")),
      password: formData.get("password")
    }
    axios.post(`${API}/auth/login`, data)
      .then(response => {
        userChange(true);
      })
      .catch(error => {
        console.log(error.response)
        setOpenAlert({
          position: true,
          severity: "error",
          message: "Usuario o contraseña incorrectos" 
        })
      })
  }

  return (
    <React.Fragment>
      <form className='login-container' ref={form}>
        <Select
          name="user"
          id={"userId"}
          label={"Usuario"}
          options={users}
        />
        <TextField name="password" label="Contraseña" type="password"></TextField>
        <Button onClick={handleSubmit} color="error" variant="contained">Entrar</Button>
      </form>
    </React.Fragment>
    
  );
}

export default LoginUser;