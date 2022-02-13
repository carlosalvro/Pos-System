import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#BD4020",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#EC983B",
      contrastText: "#f1f4f9"
    },
    deactivate: {
      // This is green.A700 as hex.
      main: "#CCBBBB",
      contrastText: "#443734"
    },
    deactivateAlt: {
      main: "#443734",
      contrastText: "#CCBBBB"
    },
    color1: {
      main: "#8EA4D2"
    }, 
    color2: {
      main: "#ACF39D"
    },
    color3: {
      main: "#D7B377"
    },
    color4: {
      main: "#BBC8CA"
    }

  },
});

const StyleContext = (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}

export default StyleContext;