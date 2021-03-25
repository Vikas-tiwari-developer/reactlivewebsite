import React from "react";
import web from "../src/images/user-2.png";
import { NavLink } from "react-router-dom";
import Common from './Common';

const About = () => {
   return (
       <>
          <Common 
              name='Welcome to Vk Digital Academy' 
              imgsrc={web}  
              visit="/contact" 
              btname="Contact Now"
           />
       </>
   );
};

export default About;