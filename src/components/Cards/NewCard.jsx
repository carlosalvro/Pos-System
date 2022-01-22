import React from 'react';
import {Button} from "@mui/material"

const NewCard = (props) => {
  const {color, className} = props
  return (
    <Button
      className={className}
      variant="contained"
      color={color}
    >
      +
    </Button>
  );
}

export default NewCard;