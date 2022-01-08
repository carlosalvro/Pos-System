import React from 'react';
import {TextField, FormControl} from "../components/TextField"
import { InputLabel, MenuItem, Select} from '@mui/material';

const SelectNueva = (props) => {
  const {id, label, options, defaultValue=""} = props
  return (
    <FormControl>
      <InputLabel id={id}>{label}</InputLabel>
      <Select 
        labelId={id}
        defaultValue = {defaultValue}
        label={label}
      >
        {options.map(option => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectNueva;