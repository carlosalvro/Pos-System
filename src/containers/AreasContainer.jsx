import React, {useEffect, useState} from 'react'
import useApi from '../hooks/useApi';
const API = "http://localhost:3001/api/areas"

const AreasContainer = () => {
  const areas = useApi(API)
  return (
    <React.Fragment>
      {areas.map(area=> (
        <h1 key={area.area}>{area.area}</h1>
      ))}
    </React.Fragment>
  );
}

export default AreasContainer;
