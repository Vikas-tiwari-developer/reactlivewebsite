import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/buy-1.jpg';

const Card = (props) => {
   return (
       <>
        <div className="col-md-4 col-10 mx-auto">
            <div className="card">
            <img src={props.imgsrc} className="card-img-top" alt=".."/>
            <div className="card-body">
                <h4 className="card-title font-weight-bold">{props.title}</h4>
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis similique labore veritatis ratione aliquam, totam voluptates quos perspiciatis vitae deleniti quaerat minus 
                    cumque  </p>
                    <NavLink to="" className="btn btn-primary">Go Somewhere</NavLink>
            </div>
            </div>
        </div>
       </>
   );
};

export default Card;