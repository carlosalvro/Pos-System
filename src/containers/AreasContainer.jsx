import React, {useEffect, useState, useRef} from 'react'
import useApi from '../hooks/useApi';
import { io } from "socket.io-client";
import axios from "axios";
import "@styles/Home/AreasContainer.css";
import { Button } from '@mui/material';
import NewCard from "@components/Cards/NewCard";
import Card from "@components/Cards/Card";
import NewOrderDialog from './NewOrder';


const API = "http://localhost:3001/api";

const AreasContainer = () => {
  const [activeArea, setActiveArea] = useState("Comedor");
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  

  useEffect(() => {
    const socket = io("ws://localhost:3001");

    socket.on("order-added", (newOrders) => {
      setOrders(newOrders);
    })
  }, [])

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get(`${API}/orders`)
      setOrders(response.data)
    }

    getOrders()
  }, [])

  const areas = useApi("areas");

  const areasRelations = {}
  areas.map(area => {
    areasRelations[area.area] = area.areaId;
  })

  return (
    <React.Fragment>
      <div className='AreasContainer'>
        {areas
          .sort((a,b) => a.areaId > b.areaId ? 1 : -1)
          .map(area=> (
          <Button 
            variant="contained"
            color={(area.area === activeArea) ? "primary" : "deactivate"}
            className='AreasContainer-link' 
            key={area.areaId}
            onClick={(e) => {setActiveArea(e.target.textContent)}}
          >
            {area.area}
          </Button>
        ))}
      </div>
      <div className='AreasContainer-content'>
        <NewCard onClick={handleClickOpen}/>
        {orders
          .filter(order => (order.areaId === areasRelations[activeArea]))
          .map(order => (
          <Card 
            key={order.order}
            name={order.order} 
            printed={Boolean(order.printed)}
          />
        ))}
      </div>
      <NewOrderDialog
        open = {open}
        setOpen = {setOpen}
        activeArea = {activeArea}
        setActiveArea = {setActiveArea}
      />
    </React.Fragment>
  );
}

export default AreasContainer;
