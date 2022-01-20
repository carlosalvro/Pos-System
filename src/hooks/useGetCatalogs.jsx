import React, {useState} from 'react';
import { useApiId } from './useApiID';
import useApi from './useApi';

const groupsApi = useApi("groups"); 
const subgroupsApi = useApi("subgroups");

const useGetGroups = (categoryId) => {
  const [groups, setGroups] = useState(groupsApi);

  if (categoryId) {
    const items = useApiId(categoryId, "categories")[0];
    const categoryGroups = items.groups.map(x => x.groupId)
    setGroups()
  }

  return (
    
  );
}

const useGetSubgroups = (subgroupId) => {
  const [subgroups, setSubgroups] = useState(subgroupsApi);



  return (
    
  );
}

export {useGetGroups, useGetSubgroups};