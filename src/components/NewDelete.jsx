import React from 'react';
import { Button } from '@mui/material';
import "@styles/NewDelete.css"

const NewDelete = () => {
  return (
    <div className='NewDelete'>
      <Button variant="contained" color="success" >Nuevo</Button>
      <Button variant="contained" color="primary" >Editar</Button>
      <Button variant="outlined" color="error"> Eliminar</Button>
    </div>
  );
}

export default NewDelete;