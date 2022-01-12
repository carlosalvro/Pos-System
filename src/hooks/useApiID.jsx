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

export default useApiId;