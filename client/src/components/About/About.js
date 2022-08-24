import React  from "react";
import client from "../../assets/rating.png";
import owner from "../../assets/owner.png";
import './About.css'
import { Link } from "react-router-dom";

export default function About() {
  return (
  <div name='sections' id="services" >
    <h2 style={{color:'black',textAlign:'center',marginTop:'8px',fontSize:'35px'}}>Sections </h2>
    <div style={{padding: '2rem 0',display:' flex',  gap: '1rem' , paddingBottom:'5rem'}}>
    <div className="service">
    <Link to='/clientspace' style={{ textDecoration:'none',color:'black' ,padding:'1rem'}}>
      <div className="icon">
        <img src={client} alt="" style={{ height:' 2.4rem',marginBottom:'1rem'}} />
      </div>
      <h3 style={{ marginBottom:'1rem'}}>Client Space</h3>
      <p>Discover more the spirit of the hotel to reserve your journey</p>
      </Link>
    </div>
    <div className="service">
    <Link to={`/ownerspace`} style={{ textDecoration:'none',color:'black' ,padding:'1rem'}}>
      <div className="icon">
        <img src={owner} alt="" style={{ height:' 2.4rem'}} />
      </div>
      <h3>Staff Space</h3>
      <p>This space is dedicated for the hotel staff</p>
      </Link>
    </div>
    </div>
      

    </div>
  );
}

