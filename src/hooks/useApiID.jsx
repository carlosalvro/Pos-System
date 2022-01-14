import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:3001/api";

const useApiId = (id, catalogo) => {
  const [data, setData] = useState([]);

  useEffect(async ()=>{
    const response = await axios(`${API}/${catalogo}/${id}`);
    setData(response.data);
    console.log(data)
  }, []);


  return data;
};

const usePostApi = (data, id, catalogo) => {
  const [response, setResponse] = useState();

  useEffect(async () => {
    const rta = await axios.post(`${API}/${catalogo}/${id}`, data)
    setResponse(rta)
    console.log(response);
    
  }, []);
  return data;
}

export {useApiId, usePostApi};