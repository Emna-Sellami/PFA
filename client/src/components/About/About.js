import React  from "react";
import client from "../../assets/rating.png";
import owner from "../../assets/owner.png";
import Modale from "./Modal";
import './About.css'

export default function About() {
  return (
  <div name='sections' id="services" >
    <h2 style={{color:'black',textAlign:'center',marginTop:'8px',fontSize:'35px'}}>Sections </h2>
    <div style={{padding: '2rem 0',display:' flex',  gap: '1rem' , paddingBottom:'5rem'}}>
    <div className="service">
      <div className="icon">
        <img src={client} alt="" style={{ height:' 2.4rem'}} />
      </div>
      <h3>Client Space</h3>
      <p>Discover more the spirit of the hotel to reserve your journey</p>
    </div>
    <div className="service">
      <div className="icon">
        <img src={owner} alt="" style={{ height:' 2.4rem'}} />
      </div>
      <h3>Staff Space</h3>
      <p>This space is dedicated for the hotel staff</p>
      <Modale/>
    </div>
    </div>
      

    </div>
  );
}

