import React from "react";
import web from "../src/images/Penguins.jpg";
import { NavLink } from "react-router-dom";
import Common from './Common';

const Home = () => {
   return (
       <>
          <Common 
              name='Grow Your Business woth' 
              imgsrc={web}  
              visit="/services" 
              btname="Get Started"
          />
       </>
   );
};

export default Home;