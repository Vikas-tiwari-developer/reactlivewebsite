import React from "react";
import web from "../src/images/Penguins.jpg";
import { NavLink } from "react-router-dom";

const Common = (props) => {
   return (
       <>
        <section id="header" className="mt-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                     <h1> {props.name}
                         <span> Vk digital academy</span>
                         </h1>
                     <h2>Solving a Real life problem</h2>
                     <div className="pt-3">
                       <NavLink to={props.visit} className="btn_get_started">{props.btname}</NavLink>
                     </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 main_img">
                     <img src={props.imgsrc}  className="img-fluid animated" alt="Header Image"/>
                  </div>
              </div>
            </div>
            </div>
          </div>
        </section>
       </>
   );
};

export default Common;