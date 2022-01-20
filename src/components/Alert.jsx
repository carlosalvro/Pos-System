import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NewAlert = (props) => {
  const {open, setOpen} = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpen(false);
  };

  return (
    <Snackbar 
      open={open.position} 
      autoHideDuration={6000} 
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom", 
        horizontal: "right" 
      }}
    >
      <Alert onClose={handleClose} severity={open.severity} sx={{ width: '100%' }}>
        {open.message}
      </Alert>
    </Snackbar> 
  );
}

export default NewAlert;