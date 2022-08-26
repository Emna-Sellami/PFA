import React from "react";
import HeroImage from "../components/HeroImage/HeroImage";
import bgImage from "../assets/im3.jpg";
import Navbar  from "../components/Navbar/Navbar";
import AboutInfo from '../components/AboutInfo/AboutInfo'
import OurData from '../components/OurData/OurData'
import Gallery from '../components/Gallery/Gallery'

class About extends React.Component{
    render(){

        return (


            <div >
              <Navbar />  
              <HeroImage bgImage={bgImage}
                heading={["about us ", <span className="ampersand"> & </span>, " photo gallery"]}
                text="Take a look at the place, the people and the food…"
              />
              <AboutInfo />
              <OurData />
              <Gallery />
            </div>
          );
    
}}
export default About ;