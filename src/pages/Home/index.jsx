import React from 'react';
import "@styles/Home.css"
import AreasContainer from "@containers/AreasContainer"

const Home = () => {
  return (
    <React.Fragment>
      <div className="Home">
        <AreasContainer/>
      </div>
    </React.Fragment>
  );
}

export default Home;