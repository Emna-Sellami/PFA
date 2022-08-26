import React from "react";

import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <div className="section">
      <div className="container grid-container">
        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A few words <span>about us</span>
            </h2>

            <h4>Let us introduce ourselves</h4>

            <p>
              Contrary to popular belief, TRAVELO is not simply random text.
              It has roots in a piece of{" "}
              <span className="special-word">classical</span> Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words,{" "}
              <span className="special-word">consectetur,</span> from a Lorem
              Ipsum passage
            </p>

            <blockquote>
            Nulla consequat massa quis enim. Doncus ut, imperdiet a.
            </blockquote>

            <p>
              it is important to have a good customer service, a customer service provider. Good fortune needs pain {" "}
              <span className="special-word">Aenean massa.</span> 
             and the mountains will give birth to feathers and great thrusts, and a ridiculous mouse will be born . until the trigger.
            </p>
          </div>
        </div>

        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A PLACE TO REST, <span>TO PARTY</span>
            </h2>

            <h4>We hope to see you soon!</h4>

            <p>
              Lorem ipsum dolor sit amet,{" "}
              <span className="special-word">consectetuer </span>Hotel offers ultimate comfort and luxury. This 4-storied hotel is a beautiful combination of traditional grandeur and modern facilities. The 255 exclusive guest rooms are furnished with a range of modern amenities such as television and internet access. International direct-dial phone and safe are also available in any of these rooms. Wake-up call facility is also available in these rooms. 
              
            </p>

            <blockquote>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </blockquote>

            <p>
             what are you waiting for , you should book and take a place before it is too late. pass your vacation in TRAVELO and it will be the best vacation ever
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
