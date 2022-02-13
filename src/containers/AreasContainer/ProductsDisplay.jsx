import React from 'react';
import {Button, TextField, Switch, FormHelperText} from "@mui/material"
import AlarmOffRoundedIcon from '@mui/icons-material/AlarmOffRounded';
import LooksOneRoundedIcon from '@mui/icons-material/LooksOneRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LooksTwoRoundedIcon from '@mui/icons-material/LooksTwoRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import BackspaceRoundedIcon from '@mui/icons-material/BackspaceRounded';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';

const ProductsDisplay = () => {
  return (
    <div className="ProductsDisplay">
      <section className='ProductsDisplay-display'> Acá van los productos</section>
      <section className='ProductsDisplay-buttons'>
        <Button variant="contained" color="secondary" className='vertical-button'><LooksOneRoundedIcon/>1° Tiempo</Button>
        <Button variant="contained" color="secondary" className='vertical-button'><AlarmOffRoundedIcon/></Button>
        <Button variant="contained" color="success" className='vertical-button'><DoneRoundedIcon/></Button>
        <Button variant="contained" color="error" className='vertical-button'><CloseRoundedIcon/></Button>
        <Button variant="contained" color="secondary" className='vertical-button'><LooksTwoRoundedIcon/>2° Tiempo</Button>
        <Button variant="contained" color="error" className='vertical-button'><RemoveCircleRoundedIcon/></Button>
        <Button variant="contained" color="success" className='vertical-button'><AddCircleRoundedIcon/></Button>
        <TextField defaultValue={1} type="number" className="products-cant"/>
        <Button variant="contained" color="secondary" className='vertical-button'><BackspaceRoundedIcon/> Borrar</Button>
        <Button variant="contained" color="secondary" className='vertical-button'><BackspaceRoundedIcon/>Todo</Button>
        <Button variant="contained" color="secondary" className='vertical-button'><HorizontalRuleRoundedIcon/>Separador</Button>
        <div className='print-toggle-container'>
          <Switch checked={true} color="secondary" className='vertical-button'><LocalOfferRoundedIcon/>Descuento</Switch>
          <FormHelperText>Imprimir</FormHelperText>
        </div>
        
      </section>
    </div>
  );
}

export default ProductsDisplay;