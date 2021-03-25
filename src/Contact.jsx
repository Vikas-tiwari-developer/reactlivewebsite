import React, { useState } from "react";

const Contact = () => {
  
  const [data, setData] = useState({
      fullname: "",
      email : "",
      contact  : "",
      message : "",
  });

  const InputEvent = (event) => {
    const {name,value} = event.target;
     
    setData((preVal) => {
        return {
          ...preVal,
          [name] : value,
        }
    })
  };

  const formSubmit = (e) => {
     e.preventDefault();
     alert(
       `My name is ${data.fullname}.My Email is ${data.email}. My Contact No. is ${data.contact}. Message : ${data.message}`
     )
  };

   return (
       <>
         <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
         </div>
         <div className="container contact_div">
            <div className="row">
               <div className="col-md-6 col-10 mx-auto">
                  <form onSubmit={formSubmit}>
                      <div className="form-group">
                         <label>Fullname</label>
                         <input 
                           type="text"
                           name="fullname"  
                           value={data.fullname}                       
                           onChange={InputEvent} 
                           className="form-control"
                           />
                      </div>
                      <div className="form-group">
                         <label>Email</label>
                         <input type="text"
                         name="email"
                         value={data.email}
                         onChange={InputEvent} className="form-control"/>
                      </div>
                      <div className="form-group">
                         <label>Phone</label>
                         <input type="text"
                         name="contact"
                         value={data.contact}
                         onChange={InputEvent} className="form-control"/>
                      </div>
                      <div className="form-group">
                         <label>Mwssage</label>
                         <textarea type="text"
                         name="message"
                         value={data.message} 
                         onChange={InputEvent} rows="4" className="form-control"></textarea>
                      </div>
                      <div className="form-group my-4 text-center">
                         <input type="Submit"
                          className="btn btn-outline-primary" value="Submit" />
                      </div>
                  </form>
               </div>
            </div>
         </div>
       </>
   );
};

export default Contact;