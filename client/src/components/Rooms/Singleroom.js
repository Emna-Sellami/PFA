import React from 'react'
import { Link } from "react-router-dom";
import "./room.css";
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"

const Room= () => {
return (
    
    <section class = "rooms sec-widthh" id = "rooms">
   
    <div class = "rooms-container">
        <article class = "room">
            <div class = "room-image">
                <img src = {img1} alt = "room image"/>
            </div>
            <div class = "room-text">
                <h3>Luxury Rooms</h3>
                <ul>
                    <li>
                        <i class = "fas fa-arrow-alt-circle-right"></i>
                        Lorem ipsum dolor sit amet.
                    </li>
                    <li>
                        <i class = "fas fa-arrow-alt-circle-right"></i>
                        Lorem ipsum dolor sit amet.
                    </li>
                    <li>
                        <i class = "fas fa-arrow-alt-circle-right"></i>
                        Lorem ipsum dolor sit amet.
                    </li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem repellendus maxime ullam tempore architecto provident unde expedita quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas. Unde corporis qui iusto vitae. Aut nesciunt id iste, cum esse commodi nemo?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis quasi officiis cumque, fugiat nostrum sunt, tempora animi dicta laborum beatae ratione doloremque. Delectus odio sit eius labore, atque quo?</p>
                <p class = "rate">
                    <span>$99.00 /</span> Per Night
                </p>
                <Link to='/Forme'>
                    <button type = "button" class = "btnn">book now</button>
                </Link>
                
            </div>
        </article>
        
        <article class = "room">
            <div class = "room-image">
                <img src = {img2} alt = "room image"/>
            </div>
            <div class = "room-text">
                <h3>Luxury Rooms</h3>
                <ul>
                    <li>
                        <i class = "fas fa-arrow-alt-circle-right"></i>
                        Lorem ipsum dolor sit amet.
                    </li>
                    <li>
                        <i class = "fas fa-arrow-alt-circle-right"></i>
                        Lorem ipsum dolor sit amet.
                    </li>
                    <li>
                        <i class = "fas fa-arrow-alt-circle-right"></i>
                        Lorem ipsum dolor sit amet.
                    </li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem repellendus maxime ullam tempore architecto provident unde expedita quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas. Unde corporis qui iusto vitae. Aut nesciunt id iste, cum esse commodi nemo?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis quasi officiis cumque, fugiat nostrum sunt, tempora animi dicta laborum beatae ratione doloremque. Delectus odio sit eius labore, atque quo?</p>
                <p class = "rate">
                    <span>$99.00 /</span> Per Night
                </p>
                <Link to='/Forme'>
                <button type = "button" class = "btnn">book now</button>
                </Link>
            </div>
        </article>
       
        <article class = "room">
            <div class = "room-image">
                <img src = {img3} alt = "room image"/>
            </div>
            <div class = "room-text">
                <h3>Luxury Rooms</h3>
                <ul>
                    <li>
                        <i class = "fas fa-arrow-alt-circle-right"></i>
                        Lorem ipsum dolor sit amet.
                    </li>
                    <li>
                        <i class = "fas fa-arrow-alt-circle-right"></i>
                        Lorem ipsum dolor sit amet.
                    </li>
                    <li>
                        <i class = "fas fa-arrow-alt-circle-right"></i>
                        Lorem ipsum dolor sit amet.
                    </li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem repellendus maxime ullam tempore architecto provident unde expedita quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas. Unde corporis qui iusto vitae. Aut nesciunt id iste, cum esse commodi nemo?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis quasi officiis cumque, fugiat nostrum sunt, tempora animi dicta laborum beatae ratione doloremque. Delectus odio sit eius labore, atque quo?</p>
                <p class = "rate">
                    <span>$99.00 /</span> Per Night
                </p>
                <Link to='/Forme'>
                <button type = "button" class = "btnn">book now</button>
                </Link>
            </div>
        </article>
    </div>
</section>
)
}
export default Room