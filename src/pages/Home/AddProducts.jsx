import React from 'react';
import {TextField} from "@mui/material"
import "@styles/Home/AddProducts.css"
import ProductsDisplay from '../../containers/AreasContainer/ProductsDisplay';
import ProductsButtons from '../../containers/AreasContainer/ProductsButtons';

const AddProducts = () => {
  return (
    <div className='AddProducts'>
      <section className='AddProducts-left'>
        <h1 className='table-name'>A1</h1>
        <ProductsDisplay/>
        <div className='left-side-footer'>
          <TextField/>
          <h2>$0.00</h2>
        </div>
      </section>
      <section className='AddProducts-right'>
        <ProductsButtons/>
      </section>
    </div>
  );
}

export default AddProducts;