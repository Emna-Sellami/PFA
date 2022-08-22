import React , { useState } from 'react';
import { useNavigate } from "react-router";
import "./assets/css/style.css"

function Forme() {
  const [form, setForm] = useState({
		name: "",
		surname: "",
		email: "",
		phone: "",
		checkin: "",
		checkout: "",
		rooms: "",
		adults: "",
		children: ""
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
         
		 await fetch("http://localhost:5000/client/add", {
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
 
         setForm({ name: "", surname: "", email: "", phone: "", checkin: "", checkout: "", rooms: "", adults: "", children: "" });
         navigate("/");


	   }
    return(
      <div id="booking" className="section">
		        <div className="section-center">
			        <div className="container">
				        <div className="row">
					        <div className="booking-form">
						        <div className="form-header">
							        <h1>Make your reservation</h1>
			                    </div>
						    <form onSubmit={onSubmit}>
							    <div className="row">

                                    <div className="col-md-6">
									    <div className="form-group">
										    <span className="form-label">Name</span>
										    <input className="form-control radio" 
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
										    <input className="form-control radio"
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
										    <input className="form-control radio" 
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
										    <input className="form-control radio" 
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
										    <input className="form-control radio" 
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
										    <input className="form-control" 
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
                    value="Check availability"
                    className="submit-btn"
                  />
									</div>
								</div>

							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

    );
  }
  
  export default Forme;