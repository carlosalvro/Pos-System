import React from 'react';
import {Button} from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProductsContainer = () => {
  // const {activeGroup, setActiveGroup} = props
  return (
    <div className='container ProductsContainer'>
      <Button id="atras-products" variant="contained" color="secondary" className='vertical-button'><ArrowBackIcon/> Retroceder</Button>
      <Button id="adelante-products" variant="contained" color="secondary" className='vertical-button'><ArrowForwardIcon/> Avanzar</Button>
      <Button  variant="contained" color="secondary" className='vertical-button'><ArrowForwardIcon/> Avanzar</Button>
    </div>
  );
}

export default ProductsContainer;