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