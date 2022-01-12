import React, {useEffect, useState} from 'react'
import useApi from '../hooks/useApi';

const AreasContainer = () => {
  const areas = useApi("areas")
  return (
    <React.Fragment>
      {areas.map(area=> (
        <h1 key={area.area}>{area.area}</h1>
      ))}
    </React.Fragment>
  );
}

export default AreasContainer;
