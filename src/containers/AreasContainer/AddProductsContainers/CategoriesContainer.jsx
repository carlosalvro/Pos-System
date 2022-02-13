import React from 'react';
import {Button} from "@mui/material"

const CategoriesContainer = (props) => {
  const {activeCategory, setActiveCategory} = props
  const categories = ["Todos", "Comida", "Bebida", "Otros", "Repetir Producto"]
  return (
    <div className='CategoriesContainer'>
      {categories.map((category, indx) => {
        if (indx !== activeCategory) {
          var color = "secondary"
        }
        return (
          <Button   
            key={indx}
            value={indx}
            color={color}   
            variant="contained" 
            onClick={(e) => {
              setActiveCategory(parseInt(e.target.value))
            }}
          >
              {category}
          </Button>)
      })}
    </div>
  );
}

export default CategoriesContainer;