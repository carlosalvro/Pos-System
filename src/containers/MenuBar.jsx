import React, {useContext, useState} from 'react';
import {Link, useLocation} from "react-router-dom"
import Toolbar from '../components/ToolBar';
// import Button from "../components/Button"
import ButtonTurn from "../components/ButtonTurn"
import {
  Divider,
  Button
} from '@mui/material';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import PointOfSaleRoundedIcon from '@mui/icons-material/PointOfSaleRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import "../styles/MenuBar.css"
import {AppContext} from "../context/AppContext"
import { ContentPasteOffSharp } from '@mui/icons-material';

const buttons = [
  {
    name: "Inicio",
    icon: <HomeRoundedIcon/>,
    to: "home"
  },
  {
    name: "Cuentas",
    icon: <ReceiptLongRoundedIcon/>,
    to: "cuentas"
  },
  {
    name: "ventas",
    icon: <PointOfSaleRoundedIcon/>,
    to: "ventas"
  },
  {
    name: "Corte de Caja",
    icon: <HomeRoundedIcon/>,
    to: "corte"
  }
]

function MenuBar() {
  const location = useLocation()
  const actualLocation = location.pathname.split("/")[1]
  console.log(actualLocation)
  const {user, userChange} = useContext(AppContext)
  const [activeMenu, setActiveMenu] = useState(actualLocation)

  const handleMenu = (e, to) => {
    setActiveMenu(to)
  }

  return (
    <div className='MenuBar' >      
      <div className='MenuBar-container' 
      >
        <Toolbar height={"20px"} />
        <div className='bar-main'>
          {buttons.map((button) => (
            <Button
              key={button.name}
              LinkComponent={Link}
              to= {`/${button.to}`}
              startIcon={button.icon}
              variant={(activeMenu=== button.to) ? "contained" : "text"}
              onClick={(e) => handleMenu(e,button.to)}
            >
              {button.name}
            </Button>
          ))}
        </div>
        <Divider/>
        <Toolbar height={"30px"} />
        <div className='bar-footer-container'>
          <div className='bar-footer'>
            <ButtonTurn />
            <Button 
              LinkComponent={Link}
              to="/ajustes"
              onClick={(e)=> handleMenu(e, "ajustes")}
              startIcon={<SettingsIcon />}
              variant={(activeMenu=== "ajustes") ? "contained" : "text"}
            >
              Ajustes
            </Button>
            <Button 
              LinkComponent={Link}
              to="/"
              onClick={userChange}
              startIcon={<ExitToAppIcon />}
            >
              Salir
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default MenuBar