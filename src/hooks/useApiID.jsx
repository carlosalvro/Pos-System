import { useEffect, useState } from "react";
import axios from "axios";

const useApiId = (API) => {
  const [data, setData] = useState([]);

  useEffect(async ()=>{
    const response = await axios(API);
    setData(response.data);
    console.log(data)
  }, []);


  return data;
};

export default useApiId;