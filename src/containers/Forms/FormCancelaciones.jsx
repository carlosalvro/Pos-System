import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useApiId} from "@hooks/useApiID"
import useApi from '@hooks/useApi';
import axios from "axios";

const dataDefault = {
  categoryId: "",
  groupId: "",
  subgroupId: "",
}

const API = "http://localhost:3001/api";

export default function BasicSelect() {
  const [data, setData] = React.useState(dataDefault);
  const [groupsCategory, setGroupsCategory] = React.useState({});
  const [subgroupsGroup, setSubgroupsGroup] = React.useState({});


  React.useEffect(async () => {
    const rta = await axios(`${API}/categories/${data.categoryId}`)
    const groups = rta.data.groups
    const groupsInCategory = {}
    if (groups) {
      groups.map(x => {
        groupsInCategory[x.groupId] = x.group
      })
      setGroupsCategory(groupsInCategory)
    }
    
    

  }, [data.categoryId])

  React.useEffect(async () => {
    const rta = await axios(`${API}/groups/${data.groupId}`)
    const subgroups = rta.data.subgroups
    const subgroupsInCategory = {}
    if (subgroups) {
      subgroups.map(x => {
        subgroupsInCategory[x.subgroupId] = x.subgroup
      })
      setSubgroupsGroup(subgroupsInCategory)
    }
    
    

  }, [data.groupId])

  const cats = useApi("categories");
  const categories = {}
  cats.map(cat => (
    categories[cat.categoryId] = cat.category
  ))


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.categoryId}
          label="Categoria"
          onChange={(e) => {
            setData({...data, categoryId: e.target.value})
          }}
        >
          {Object.entries(categories).map(item=> (
            <MenuItem key={item[0]} value={item[0]}>{item[1]}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <hr/>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label2">AgeMore</InputLabel>
        <Select
          labelId="demo-simple-select-label2"
          id="demo-simple-select2"
          value={data.groupId}
          label="Age"
          onChange={(e) => {
            setData({...data, groupId: e.target.value})
          }}
        >
          {Object.entries(groupsCategory).map(item=> (
            <MenuItem key={item[0]} value={item[0]}>{item[1]}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <hr/>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label3">Subgroup</InputLabel>
        <Select
          labelId="demo-simple-select-label3"
          id="demo-simple-select3"
          value={data.subgroupId}
          label="Subgroup"
          onChange={(e) => {
            setData({...data, subgroupId: e.target.value})
          }}
        >
          {Object.entries(subgroupsGroup).map(item=> (
            <MenuItem key={item[0]} value={item[0]}>{item[1]}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
