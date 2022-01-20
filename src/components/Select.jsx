import React from 'react';
import {TextField, FormControl} from "../components/TextField"
import { InputLabel, MenuItem, Select} from '@mui/material';

const SelectNueva = (props) => {
  const {id, label, options, defaultValue="", disabled, value, name, onChange, className} = props
  return (
    <FormControl className={className}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select 
        labelId={id}
        defaultValue = {defaultValue}
        label={label}
        disabled={disabled}
        value={value}
        name={name}
        onChange={onChange}
      >
        {Object.entries(options).map(item => (
          <MenuItem key={item[0]} value={item[0]}>{item[1]}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectNueva;