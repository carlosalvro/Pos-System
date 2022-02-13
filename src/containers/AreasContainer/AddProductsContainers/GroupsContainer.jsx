import React, {useState, useEffect} from 'react';
import {Button} from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const GroupsContainer = (props) => {
  // const [activeGroups, setActiveGroups] = useState([])
  const {availableGroups, activeGroup} = props

  // useEffect(() => {
  //   console.log(groups)
  //   // if (groups) {
  //   //   setActiveGroups( Object.entries(groups[activeCategory]))
  //   // }
  // }, [, activeCategory])

  // console.log(activeGroups)
  
  return (
    <div className='container GroupsContainer'>
      <Button id="atras-groups" variant="contained" color="secondary" className='vertical-button'><ArrowBackIcon/> Retroceder</Button>
      <Button id="adelante-groups" variant="contained" color="secondary" className='vertical-button'><ArrowForwardIcon/> Avanzar</Button>
      {/* {
        (activeGroups) ? null :  activeGroups.map(actGroup => (
          <Button key={actGroup[0]}>{actGroup[1]}</Button>
        ))
      } */}
    </div>
  );
}

export default GroupsContainer;