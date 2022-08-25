import React from 'react'
import { Link } from "react-router-dom";

const Button = () => {
return (
    <div class = "book">
    <form class = "book-form">
        <div class = "form-item">
            <label for = "checkin-date">Check In Date: </label>
            <input type = "date" id = "chekin-date"/>
        </div>
        <div class = "form-item">
            <label for = "checkout-date">Check Out Date: </label>
            <input type = "date" id = "chekout-date"/>
        </div>
        <div class = "form-item">
            <label for = "adult">Adults: </label>
            <input type = "number" min = "1" value = "1" id = "adult"/>
        </div>
        <div class = "form-item">
            <label for = "children">Children: </label>
            <input type = "number" min = "1" value = "1" id = "children"/>
        </div>
        <div class = "form-item">
            <label for = "rooms">Rooms: </label>
            <input type = "number" min = "1" value = "1" id = "rooms"/>
        </div>
        <Link to='/Forme' className="form-item">
        <input type = "submit" class = "btn" value = "Book Now"/>
      </Link>
    </form>
</div>

)
}
export default Button