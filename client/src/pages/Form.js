import React , { useState } from 'react';
import { useNavigate } from "react-router";
import "../assets/css/style.css"
export default function Check (){
	const [form, setForm] = useState({
		name: "",
		surname: "",
		email: "",
		phone: "",
		checkin: "",
		checkout: "",
		noofrooms: "",
		adults: "",
		children: "",
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
         
		 await fetch("http://localhost:6000/client/add", {
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
 
         setForm({ name: "", surname: "", email: "", phone: "", checkin: "", checkout: "", noofrooms: "", adults: "", children: "", });
         navigate("/");


	   } 
        return (

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
										    <input className="form-control" 
											       type="text"
												   required
												   id="name"
												   value={form.name}
												   onChange={(e) => updateForm({ name: e.target.value })}></input>
									    </div>
									    <span className="in-out hidden-xs hidden-sm">&#8652;</span>
								    </div>

									<div className="col-md-6">
									    <div className="form-group">
										    <span className="form-label">Surname</span>
										    <input className="form-control"
											       type="text"
												   required
												   id="surname"
												   value={form.surname}
												   onChange={(e) => updateForm({ surname: e.target.value })}></input>
									    </div>
									    <span className="in-out hidden-xs hidden-sm">&#8652;</span>
								    </div>

                                    <div className="col-md-6">
									    <div className="form-group">
										    <span className="form-label">Email</span>
										    <input className="form-control" 
											       type="email" 
												   required
												   id="email"
                                                   value={form.email}
                                                   onChange={(e) => updateForm({ email: e.target.value })}></input>
									    </div>
									    <span className="in-out hidden-xs hidden-sm">&#8652;</span>
								    </div>

                                    <div className="col-md-6">
									    <div className="form-group">
										    <span className="form-label">Phone</span>
										    <input className="form-control" 
											       type="text" 
												   required
												   id="phone"
                                                   value={form.phone}
                                                   onChange={(e) => updateForm({ phone: e.target.value })}></input>
									    </div>
									    <span className="in-out hidden-xs hidden-sm">&#8652;</span>
								    </div>
                                   
								    <div className="col-md-6">
									    <div className="form-group">
										    <span className="form-label">Check In</span>
										    <input className="form-control" 
											       type="date" 
												   required
												   id="checkin"
                                                   value={form.checkin}
                                                   onChange={(e) => updateForm({ checkin: e.target.value })}></input>
									    </div>
									    <span className="in-out hidden-xs hidden-sm">&#8652;</span>
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
										  <label htmlFor="positionIntern" className="form-check-label">	
                                          <input
                                             className="form-check-input"
                                             type="radio"
                                             name="positionOptions"
                                             id="positionIntern"
                                             value="Intern"
                                             checked={form.level === "Intern"}
                                             onChange={(e) => updateForm({ level: e.target.value })}
                                          />
                                          1</label>
                                        </div>

                                        <div className="form-check form-check-inline">
										<label htmlFor="positionJunior" className="form-check-label">	
                                          <input
                                             className="form-check-input"
                                             type="radio"
                                             name="positionOptions"
                                             id="positionJunior"
                                             value="Junior"
                                             checked={form.level === "Junior"}
                                             onChange={(e) => updateForm({ level: e.target.value })}
                                          />
                                          2</label>
                                        </div>

                                        <div className="form-check form-check-inline">
										  <label htmlFor="positionSenior" className="form-check-label">	
                                          <input
                                             className="form-check-input"
                                             type="radio"
                                             name="positionOptions"
                                             id="positionSenior"
                                             value="Senior"
                                             checked={form.level === "Senior"}
                                             onChange={(e) => updateForm({ level: e.target.value })}
                                          />
                                          3</label>
                                        </div>
										
										</div>
										<span class="select-arrow"></span>
									</div>
								</div>



								<div class="col-md-3">
									<div class="form-group">
										<span class="form-label">Adults</span>
										<div>
										
										<div className="form-check form-check-inline">
										  <label htmlFor="positionIntern" className="form-check-label">	
                                          <input
                                             className="form-check-input"
                                             type="radio"
                                             name="positionOptions"
                                             id="positionIntern"
                                             value="Intern"
                                             checked={form.level === "Intern"}
                                             onChange={(e) => updateForm({ level: e.target.value })}
                                          />
                                          1</label>
                                        </div>

                                        <div className="form-check form-check-inline">
										  <label htmlFor="positionJunior" className="form-check-label">	
                                          <input
                                             className="form-check-input"
                                             type="radio"
                                             name="positionOptions"
                                             id="positionJunior"
                                             value="Junior"
                                             checked={form.level === "Junior"}
                                             onChange={(e) => updateForm({ level: e.target.value })}
                                          />
                                          2</label>
                                        </div>

                                        <div className="form-check form-check-inline">
										  <label htmlFor="positionSenior" className="form-check-label">	
                                          <input
                                             className="form-check-input"
                                             type="radio"
                                             name="positionOptions"
                                             id="positionSenior"
                                             value="Senior"
                                             checked={form.level === "Senior"}
                                             onChange={(e) => updateForm({ level: e.target.value })}
                                          />
                                          3</label>
                                        </div>
											
										</div>
										<span class="select-arrow"></span>
									</div>
								</div>

								<div class="col-md-3">
									<div class="form-group">
										<span class="form-label">Children</span>
										<select class="form-control">
											<option>0</option>
											<option>1</option>
											<option>2</option>
										</select>
										<span class="select-arrow"></span>
									</div>
								</div>

								<div class="col-md-3">
                                <div class="form-btn">
										<button class="submit-btn">Check availability</button>
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
