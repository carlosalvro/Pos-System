import React, {useContext} from 'react';
import {Button} from '@mui/material';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import {AppContext} from "@context/AppContext";

const ButtonTurn = () => {
  const {turn, changeTurn} = useContext(AppContext)

  var color;
  var icon;
  if (turn) {
    color = "success"
    icon = <LockOpenRoundedIcon />

  } else {
    color = "error"
    icon = <LockRoundedIcon />
  }

  return (
    <Button 
      variant="outlined" 
      color={color} 
      startIcon={icon}
      onClick={changeTurn}
    >
      {(turn) ? "Abrir" : "Cerrar"} Turno 
    </Button>
);
}

export default ButtonTurn;