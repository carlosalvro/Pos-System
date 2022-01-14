import React from 'react';
import {TextField, FormControl} from "../components/TextField"
import { InputLabel, MenuItem, Select} from '@mui/material';

const SelectNueva = (props) => {
  const {id, label, options, defaultValue="", disabled, value, name, onChange} = props
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
        onChange={onChange}
      >
        {Object.entries(options).map(item => (
          <MenuItem key={item[1]} value={item[1]}>{item[0]}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectNueva;