import React, {useContext} from 'react';
import "@styles/Home.css"
import AreasContainer from "@containers/AreasContainer"
import { AppContext } from '../../context/AppContext';
import AddProducts from "../../pages/Home/AddProducts";


const Home = () => {
  const {openNewProductPage} = useContext(AppContext);
  return (
    <React.Fragment>
      <div className="Home">
        {openNewProductPage  
          ? <AddProducts setOpenNewProductPage />
          :<AreasContainer setOpenNewProductPage />}
      </div>
    </React.Fragment>
  );
}

export default Home;