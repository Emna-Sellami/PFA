import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
    name:"",
    surname: "",
    email: "",
    phone:"",
    checkin: "",
    checkout: "",
    rooms:"",
    adults:"",
    children: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/client/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const client = await response.json();
     if (!client) {
       window.alert(`Client with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(client);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     name: form.name,
     surname: form.surname,
     email: form.email,
     phone: form.phone,
     checkin: form.checkin,
     checkout: form.checkout,
     rooms: form.rooms,
     adults: form.adults,
     children: form.children,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div className='w-75 mx-auto shadow p-5 mt-3' style={{marginTop:'5rem'}}>
     <h3 className='text-center mb-4' style={{marginTop:'5rem'}}>Update Client</h3>
     <form onSubmit={onSubmit} style={{paddingLeft:'12rem',marginBottom:'5rem'}}>
							    <div className="row" >

                    <div className="col-md-6">
									    <div className="form-group">
										    <span className="form-label">Name</span>
										    <input className="form-control radio form-control-lg" 
											       type="text"
												   required
												   id="name"
												   value={form.name}
												   onChange={(e) => updateForm({ name: e.target.value })}/>
									    </div>
									    
								    </div>

									<div className="col-md-6">
									    <div className="form-group">
										    <span className="form-label">Surname</span>
										    <input className="form-control radio form-control-lg"
											      type="text"
												   required
												   id="surname"
												   value={form.surname}
												   onChange={(e) => updateForm({ surname: e.target.value })}/>
									    </div>
									    
								    </div>

                    <div className="col-md-6">
									    <div className="form-group">
										    <span className="form-label">Email</span>
										    <input className="form-control radio form-control-lg" 
											      type="email" 
												   required
												   id="email"
                           value={form.email}
                           onChange={(e) => updateForm({ email: e.target.value })}/>
									    </div>
									    
								    </div>

                    <div className="col-md-6">
									    <div className="form-group">
										    <span className="form-label">Phone</span>
										    <input className="form-control radio form-control-lg" 
											      type="text" 
												   required
												   id="phone"
                           value={form.phone}
                           onChange={(e) => updateForm({ phone: e.target.value })}/>
									    </div>
									    
								    </div>
                                   
								    <div className="col-md-6">
									    <div className="form-group">
										    <span className="form-label">Check In</span>
										    <input className="form-control radio form-control-lg" 
											      type="date" 
												   required
												   id="checkin"
                           value={form.checkin}
                           onChange={(e) => updateForm({ checkin: e.target.value })}/>
									    </div>
									    
								    </div>

								    <div className="col-md-6">
									    <div className="form-group">
										    <span className="form-label">Check out</span>
										    <input className="form-control form-control-lg" 
											      type="date" 
												   required
												   id="checkout"
                           value={form.checkout}
                           onChange={(e) => updateForm({ checkout: e.target.value })}></input>
									    </div>
								    </div>

							    </div>
						    <div class="row">

								<div class="col-md-3">
									<div class="form-group">
										<span class="form-label">No of rooms</span>
										<div>

										<div className="form-check form-check-inline">
										  <label htmlFor="oneroom" className="radio">	
                                          <input
                                             className="form-check-input radio"
                                             type="radio"
                                             name="numberrooms"
                                             id="oneroom"
                                             value="1"
                                             checked={form.rooms === "1"}
                                             onChange={(e) => updateForm({ rooms: e.target.value })}
                                          />
                                          1</label>
                                        </div>

                                        <div className="form-check form-check-inline">
										<label htmlFor="tworooms" className="radio">	
                                          <input
                                             className="form-check-input radio"
                                             type="radio"
                                             name="numberrooms"
                                             id="tworooms"
                                             value="2"
                                             checked={form.rooms === "2"}
                                             onChange={(e) => updateForm({ rooms: e.target.value })}
                                          />
                                          2</label>
                                        </div>

                                        <div className="form-check form-check-inline">
										  <label htmlFor="threerooms" className="radio">	
                                          <input
                                             className="form-check-input radio"
                                             type="radio"
                                             name="numberrooms"
                                             id="threerooms"
                                             value="3"
                                             checked={form.rooms === "3"}
                                             onChange={(e) => updateForm({ rooms: e.target.value })}
                                          />
                                          3</label>
                                        </div>
										
										</div>
										
									</div>
								</div>



								<div class="col-md-3">
									<div class="form-group">
										<span class="form-label">Adults</span>
										<div>
										
										<div className="form-check form-check-inline">
										  <label htmlFor="oneadult" className="radio">	
                                          <input
                                             className="form-check-input radio"
                                             type="radio"
                                             name="numberadults"
                                             id="oneadult"
                                             value="1"
                                             checked={form.adults === "1"}
                                             onChange={(e) => updateForm({ adults: e.target.value })}
                                          />
                                          1</label>
                                        </div>

                                        <div className="form-check form-check-inline">
										  <label htmlFor="twoadults" className="radio">	
                                          <input
                                             className="form-check-input radio"
                                             type="radio"
                                             name="numberadults"
                                             id="twoadults"
                                             value="2"
                                             checked={form.adults === "2"}
                                             onChange={(e) => updateForm({ adults: e.target.value })}
                                          />
                                          2</label>
                                        </div>

                                        <div className="form-check form-check-inline">
										  <label htmlFor="threeadults" className="radio">	
                                          <input
                                             className="form-check-input radio"
                                             type="radio"
                                             name="numberadults"
                                             id="threeadults"
                                             value="3"
                                             checked={form.adults === "3"}
                                             onChange={(e) => updateForm({ adults: e.target.value })}
                                          />
                                          3</label>
                                        </div>
											
										</div>
										
									</div>
								</div>

								<div class="col-md-3">
									<div class="form-group">
										<span class="form-label">Children</span>
										<div>

                    <div className="form-check form-check-inline">
										  <label htmlFor="zerochild" className="radio">	
                                          <input
                                             className="form-check-input radio"
                                             type="radio"
                                             name="numberchildren"
                                             id="zerochild"
                                             value="0"
                                             checked={form.children === "0"}
                                             onChange={(e) => updateForm({ children: e.target.value })}
                                          />
                                          0</label>
                                        </div>

                                        <div className="form-check form-check-inline">
										  <label htmlFor="onechild" className="radio">	
                                          <input
                                             className="form-check-input radio"
                                             type="radio"
                                             name="numberchildren"
                                             id="onechild"
                                             value="1"
                                             checked={form.children === "1"}
                                             onChange={(e) => updateForm({ children: e.target.value })}
                                          />
                                          1</label>
                                        </div>

                                        <div className="form-check form-check-inline">
										  <label htmlFor="twochildren" className="radio">	
                                          <input
                                             className="form-check-input radio"
                                             type="radio"
                                             name="numberchildren"
                                             id="twochildren"
                                             value="2"
                                             checked={form.children === "2"}
                                             onChange={(e) => updateForm({ children: e.target.value })}
                                          />
                                          2</label>
                                        </div>
											
									</div>
                
									</div>
								</div>

								<div className="col-md-3">
                  <div className="form-btn">
                  <input
                    type="submit"
                    value="Update Client"
                    className="btn  btn-block mt-3"
                  />
									</div>
								</div>

							</div>
						</form>
   </div>
 );
}