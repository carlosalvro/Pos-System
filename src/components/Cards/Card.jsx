import React from 'react';
import {Button} from "@mui/material"

const Card = (props) => {
  const {name, onClick, printed} = props;
  return (
    <div
      className="Card"
      variant="contained"
      color="secondary"
      onClick={onClick}
    >
      <p>{name}</p>
      <span className={(printed) ? 'printed' : 'unprinted'}>
        {(printed) ? 'Impresa' : null}
      </span>
    </div>
  );
}

export default Card;