import React from 'react';
import {TextField, FormControl} from "../components/TextField"
import { InputLabel, MenuItem, Select} from '@mui/material';

const SelectNueva = (props) => {
  const {id, label, options, defaultValue="", disabled, value, name} = props
  return (
    <FormControl>
      <InputLabel id={id}>{label}</InputLabel>
      <Select 
        labelId={id}
        defaultValue = {defaultValue}
        label={label}
        disabled={disabled}
        value={value}
        name={name}
      >
        {options.map(option => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectNueva;