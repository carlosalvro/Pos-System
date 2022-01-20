import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const NewSwitch = (props) => {
  const {label, value, name, checked, onChange, color, className} = props
  return (
    <FormControlLabel 
      className={className}
      control={
      <Switch 
        checked={checked} 
        value={value}
        name={name}
        onChange={onChange}
        color={color}
      />
    } label={label} />
  );
}

export default NewSwitch;