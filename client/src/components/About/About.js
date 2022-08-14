import React from "react";
import client from "../../assets/rating.png";
import owner from "../../assets/owner.png";
import './About.css'

export default function About() {
  const handleClick =(x) => {
    console.log(x)
  }
  const data = [
    {
      icon: client,
      title: "Client Space",
      subTitle:
        "Discover more the spirit of the hotel to reserve your journey ",
      button:"More",
    },
    {
      icon: owner,
      title: "Owner Space",
      subTitle:
        "This space is dedicated for the hotel staff",
      button:"more",
    },
  ];
  return (
    <div name='sections' id="services" style={{padding: '5rem 0', display:' flex' , gap: '1rem'}}>
      {data.map((service, index) => {
        return (
          <div className="service" key={index}>
            <div className="icon">
              <img src={service.icon} alt="" style={{ height:' 2.4rem'}}/>
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
            <button onClick={() => {handleClick(service.title) }}>More</button>
          </div>
        );
      })}
    </div>
  );
}

