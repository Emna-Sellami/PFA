import React from "react";
import client from "../../assets/rating.png";
import owner from "../../assets/owner.png";
import './About.css'

export default function About() {
  const data = [
    {
      icon: client,
      title: "Client Space",
      subTitle:
        "Discover more the spirit of the hotel to reserve your journey ",
    },
    {
      icon: owner,
      title: "Owner Space",
      subTitle:
        "This space is dedicated for the hotel staff",
    },
  ];
  return (
    <div name='sections' id="services" style={{padding: '5rem 0', display:' flex' , gap: '1rem'}}>
      {data.map((service, index) => {
        return (
          <div className="service" key={index}>
            <div className="icon">
              <img src={service.icon} alt="" style={{ height:' 2.4rem'}} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </div>
  );
}

