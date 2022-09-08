import React, { useState } from 'react';
import { useNavigate } from "react-router";
import "./contact.css"
import Navbar from "./Navbar/Navbar";

function Contact() {
    const [form, setForm] = useState({
          name: "",
          lastname: "",
          email: "",
          phone: "",
          msg: ""
        });
        const navigate = useNavigate();
  
        // These methods will update the state properties.
        function updateForm(value) {
           return setForm((prev) => {
              return { ...prev, ...value };
           });
         }
  
         // This function will handle the submission.
         async function onSubmit(e) {
           e.preventDefault();
          
           // When a post request is sent to the create url, we'll add a new record to the database.
           const newPerson = { ...form };
           
           await fetch("http://localhost:5000/contact/add", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(newPerson),
           })
           .catch(error => {
              window.alert(error);
              return;
           });
   
           setForm({ name: "", lastname: "", email: "", phone: "", msg: "" });
           navigate("/");
  
  
         }
      return(
        <div>
        <Navbar/>
    <div className="container contact">
    <form onSubmit={onSubmit}>

        <div className="row" >
            <div className="col-md-8 col-12 mx-auto" >
                <div className="card shadow-lg border-0 p-4">
                    <h1 className="text-center bg-dark text-white display-4 d-inline-block">Contact us</h1>
                    <div className="form-group mb-5">
                        <div className="roww">
                            <div className="col-md-6 col-12 mx-auto my-2">
                                <input 
                                type="text" 
                                id="name"
                                className="form-control-lg" 
                                value={form.name}
                                placeholder="First Name" 
                                onChange={(e) => updateForm({ name: e.target.value })}
                                required />
                            </div>
                            <div className="col-md-6 col-12 mx-auto my-2">
                            <input 
                                type="text" 
                                id="lastname"
                                className="form-control-lg" 
                                value={form.lastname}
                                placeholder="Last Name" 
                                onChange={(e) => updateForm({ lastname: e.target.value })}
                                required />                          
                              </div>
                        </div>
                        <div className="roww">
                            <div className="col-md-6 col-12 mx-auto my-2">
                                 <input 
                                type="email" 
                                id="email"
                                className="form-control-lg" 
                                value={form.email}
                                placeholder="Email" 
                                onChange={(e) => updateForm({ email: e.target.value })}
                                required />                            </div>
                            <div className="col-md-6 col-12 mx-auto my-2">
                            <input 
                                type="text" 
                                id="phone"
                                className="form-control-lg" 
                                value={form.phone}
                                placeholder="Phone" 
                                onChange={(e) => updateForm({ phone: e.target.value })}
                                required />                             </div>
                        </div>
                        </div>
                        <div>
                        <div className="col-11">
                            <textarea 
                            className="form-control"
                             row="20" 
                             id="msg"
                             value={form.msg}
                             onChange={(e)=> updateForm({msg: e.target.value})}
                             placeholder="Your message" 
                             required>
                             </textarea>
                        </div>
                    </div>
                    <div className="mt-5 col-md-6 col-12 mx-auto">
                    <input
                    className="btn btn-outline-dark btn-lg btn-block"
                    type="submit"
                    value="Contact"
                  />
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
    </div>
      );
    }
    
    export default Contact;




