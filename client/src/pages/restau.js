import React from "react";
import HeroImage from "../components/HeroImage/HeroImage";
import bgImage from "../assets/coffee.jpg";
import MenuOfTheDay from "../components/MenuOfTheDay/MenuOfTheDay";
import Breakfast from '../components/Breakfast/Breakfast'
import LunchTime from "../components/LunchTime/LunchTime";
import CoffeeSelection from '../components/CoffeeSelection/CoffeeSelection'
import Beverages from '../components/Beverages/Beverages'

class Restau extends React.Component {
    render(){
        return (
            <div>
              <HeroImage
                bgImage={bgImage}
                heading={["Our ", <span>Menu</span>]}
                text="Everything we have to offer at one glance"
              />
              <MenuOfTheDay />
              <Breakfast />
              <LunchTime />
              <CoffeeSelection />
              <Beverages />
            </div>
          );

    }};

export default Restau;
