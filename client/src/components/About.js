import React from "react";
import client from "../assets/rating.png";
import owner from "../assets/owner.png";
import './About.css'

export default function About() {
  const data = [
    {
      icon: client,
      title: "Get Best Prices",
      subTitle:
        "Pay through our application and save thousands and get amazing rewards.",
    },
    {
      icon: owner,
      title: "Covid Safe",
      subTitle:
        "We have all the curated hotels that have all the precaution for a covid safe environment.",
    },
  ];
  return (
    <div id="services" style={{padding: '5rem 0', display:' grid' , gap: '1rem'}}>
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

