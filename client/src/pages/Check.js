import React from 'react';
import "../assets/css/style.css"
import { Link } from "react-router-dom";
class Check extends React.Component{
    render(){
        return (

        	<div id="booking" class="section">
		        <div class="section-center">
			        <div class="container">
				        <div class="row">
					        <div class="booking-form">
						        <div class="form-header">
							        <h1>Make your reservation</h1>
			                    </div>
						    <form>
							    <div class="row">
								    <div class="col-md-6">
									    <div class="form-group">
										    <span class="form-label">Check In</span>
										    <input class="form-control" type="date" required></input>
									    </div>
									    <span class="in-out hidden-xs hidden-sm">&#8652;</span>
								    </div>
								    <div class="col-md-6">
									    <div class="form-group">
										    <span class="form-label">Check out</span>
										    <input class="form-control" type="date" required></input>
									    </div>
								    </div>
							    </div>
							<div class="row">
								<div class="col-md-3">
									<div class="form-group">
										<span class="form-label">No of rooms</span>
										<select class="form-control">
											<option>1</option>
											<option>2</option>
											<option>3</option>
										</select>
										<span class="select-arrow"></span>
									</div>
								</div>
								<div class="col-md-3">
									<div class="form-group">
										<span class="form-label">Adults</span>
										<select class="form-control">
											<option>1</option>
											<option>2</option>
											<option>3</option>
										</select>
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
								<Link to='/Forme' className="form-btn">
									<button class="submit-btn">Check availability</button>
								</Link>
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
}
export default Check;
