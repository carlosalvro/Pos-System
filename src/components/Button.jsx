import React from 'react';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "@styles/ItemIconElement.css"



const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#BD4020",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#EC983B",
    },
  },
});


const PersonalButton = (props) => {

  const onClickPreventDefault = (event) => {
    event.preventDefault();
    props.onClick()
  }

  return (
    <ThemeProvider theme={theme}>
      <Button  
              LinkComponent={props.LinkComponent}
              to={props.to}
              variant={`${props.selected ? "contained": props.variant}`} 
              color={props.color}
              startIcon={props.children}
              onClick={onClickPreventDefault}
      >
        {props.text}
      </Button>
      </ThemeProvider>
  );  
}

export default PersonalButton;