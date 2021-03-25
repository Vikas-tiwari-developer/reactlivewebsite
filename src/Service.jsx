import React from "react";
// import web from '../src/images/buy-1.jpg';
import Servedata from './Servedata';
import  Card from './Card';

const Service = () => {
   return (
       <>
         <div className="my-5">
            <h2 className="text-center">Our Services</h2>
         </div>
         <div className="container-fluid mb-4">
          <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-4">
                    {
                      Servedata.map((val,index) => {
                          return <Card 
                                Key={index}
                                imgsrc={val.imgsrc}
                                title={val.title}
                            />  
                      })
                    } 
                </div>
            </div>
          </div>
        </div>
       </>
   );
};

export default Service;