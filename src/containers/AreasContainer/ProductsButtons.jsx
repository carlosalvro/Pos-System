import React, {useState, useEffect, useRef} from 'react';
import CategoriesContainer from './AddProductsContainers/CategoriesContainer';
import GroupsContainer from './AddProductsContainers/GroupsContainer';
import ProductsContainer from './AddProductsContainers/ProductsContainer';
import CommentsContainer from './AddProductsContainers/CommentsContainer';
import useRelationIDs from '../../hooks/useRelationIDs';
import useApi from '../../hooks/useApi';
import axios from "axios";
import "@styles/Home/ProductsButtons.css"


const ProductsButtons = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [activeGroup, setActiveGroup] = useState(0)
  const [availableGroups, setAvailableGroups] = useState([])
  const [groups, setGroups] = useState([])

  const rta = useApi("groups")
  const groupsRelations = useRelationIDs(rta, x => x.groupId, x => x.group, x=>x.categoryId)

  const firsUpdate = useRef(true);
  useEffect(() => {
    if (firsUpdate.current) {
      firsUpdate.current = false;
      return;
    }
    setGroups(groupsRelations)
    setAvailableGroups(Object.entries(groups[activeCategory]))
  }, [ ,groups])

  console.log(groups)
  console.log(availableGroups)

  return (
    <React.Fragment>
      <CategoriesContainer activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
      <GroupsContainer availableGroups={availableGroups} activeGroup={activeGroup}/>
      <ProductsContainer/>
      <CommentsContainer/>
    </React.Fragment>
  );
}

export default ProductsButtons;