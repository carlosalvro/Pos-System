import React, {useEffect, useState} from 'react'
import useApi from '../hooks/useApi';
import { Link, Outlet } from 'react-router-dom';
import "@styles/Home/AreasContainer.css";
import { Button } from '@mui/material';

const AreasContainer = () => {
  const [activeArea, setActiveArea] = useState("COMEDOR");

  const areas = useApi("areas")
  return (
    <React.Fragment>
      <div className='AreasContainer'>
        {areas
          .sort((a,b) => a.areaId > b.areaId ? 1 : -1)
          .map(area=> (
          <Button 
            variant="contained"
            color= "deactivate"
            className='AreasContainer-link' 
            to={`/home/${area.area.toLowerCase()}`}
            key={area.areaId}
            onClick={(e) => {setActiveArea(e.target.innerText)}}
          >
            {area.area}
          </Button>
        ))}
      </div>
      <h1>{activeArea}</h1>
    </React.Fragment>
  );
}

export default AreasContainer;
