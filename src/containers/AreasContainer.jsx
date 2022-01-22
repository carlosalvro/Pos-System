import React, {useEffect, useState} from 'react'
import useApi from '../hooks/useApi';
import { Link, Outlet } from 'react-router-dom';
import "@styles/Home/AreasContainer.css";
import { Button } from '@mui/material';
import NewCard from "@components/Cards/NewCard";
import Card from "@components/Cards/Card";

const AreasContainer = () => {
  const [activeArea, setActiveArea] = useState(1);

  const orders = useApi("orders")
  const areasApi = useApi("areas")

  const areas = {}
  areasApi.map(area => {
    areas[area.area] = area.areaId;
  })

  return (
    <React.Fragment>
      <div className='AreasContainer'>
        {areasApi
          .sort((a,b) => a.areaId > b.areaId ? 1 : -1)
          .map(area=> (
          <Button 
            variant="contained"
            color={(area.areaId === activeArea) ? "primary" : "deactivate"}
            className='AreasContainer-link' 
            key={area.areaId}
            onClick={(e) => {setActiveArea(areas[e.target.textContent])}}
          >
            {area.area}
          </Button>
        ))}
      </div>
      <div className='AreasContainer-content'>
        <NewCard className="newButton"/>
        {orders
          .filter(order => (order.areaId === activeArea))
          .map(order => (
          <Card 
            key={order.order}
            name={order.order} 
            printed={Boolean(order.printed)}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default AreasContainer;
