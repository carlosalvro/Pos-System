import React, {useRef, useContext} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import useApi from '../hooks/useApi';
import axios from "axios";
import "@styles/Home/NewOrder.css";
import { AppContext } from '../context/AppContext';
import errorMessage from '../hooks/useAlertError';

const API = "http://localhost:3001/api";


const NewOrder = (props) => {
  const {setOpenAlert} = useContext(AppContext);
  const {open, setOpen, activeArea, setActiveArea } = props; 
  const areas = useApi("areas");
  const waiters = useApi("waiters");
  const clients = useApi("clients");

  const handleClose = () => {
    setOpen(false);
  };

  const areasRelations = {}
  areas.map(area => {
    areasRelations[area.area] = area.areaId;
  })

  const waitersRelations = {};
  waiters.map(waiter => {
    waitersRelations[waiter.waiter] = waiter.waiterId
  })

  const clientsRelations = {};
  clients.map(client => {
    clientsRelations[client.client] = client.clientId
  })

  const form = useRef(null);
  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const data = {
      order: formData.get("order").toUpperCase(),
      diner: parseInt(formData.get("diner")),
      waiterId: waitersRelations[formData.get("waiter")],
      areaId: areasRelations[formData.get("area")],
      clientId: clientsRelations[formData.get("client")],
    }
    axios.post(`${API}/orders`, data)
      .then(response => {
        setOpen(false)
        console.log(response)
      })
      .catch(error => {
        console.log(error.response)
        setOpenAlert(errorMessage(error.response));
      })
  }

  return (
    <div className='NewOrder'>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nueva Orden</DialogTitle>
        <form className="NewOrder-form" ref={form}>
          <TextField
            autoFocus
            margin="dense"
            name="order"
            label="Cuenta"
            type="text"
            inputProps={{ 
              style: { textTransform: "uppercase" } ,
              autoComplete: "off"
            }}
            
          />
          <TextField
            margin="dense"
            name="diner"
            defaultValue={1}
            label="Personas"
            type="number"
          />
          <Autocomplete
            name="waiter"
            options={waiters}
            defaultValue={waiters[0]}
            getOptionLabel={(option) => option.waiter}
            renderInput={(params) => <TextField {...params} label="Mesero" name='waiter' />}
            autoHighlight={true}
            inputProps={{ style: { textTransform: "uppercase" } }}
          />
          <Autocomplete
            name="area"
            options={Object.keys(areasRelations)}
            value={activeArea}
            onChange={(e, newValue) => {setActiveArea(newValue)}}
            renderInput={(params) => <TextField {...params} label="Area" name='area'/>}
            autoHighlight={true}
          />
          <Autocomplete
            className="NewOrder-client"
            options={clients}
            getOptionLabel={(option) => option.client}
            renderInput={(params) => <TextField {...params} label="Cliente" name='client' />}
            autoHighlight={true}
            inputProps={{ style: { textTransform: "uppercase" } }}
          />
        </form>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSubmit}>Abrir</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NewOrder;