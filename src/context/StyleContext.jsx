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