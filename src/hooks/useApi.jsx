import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:3001/api";

const useApi = (endpoint) => {
  const [data, setData] = useState([]);

  useEffect(async ()=>{
    const response = await axios(`${API}/${endpoint}`);
    setData(response.data);
  }, []);

  return data;
};

export default useApi;