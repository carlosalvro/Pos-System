import React from 'react';
import {Button} from "@mui/material"

const NewCard = (props) => {
  const {color, onClick} = props
  return (
    <Button
      className="newButton"
      onClick={onClick}
      variant="contained"
      color={color}
    >
      +
    </Button>
  );
}

export default NewCard;