import React from "react";
 
// We import all the components we need in our app

import Navbar from "./components/Navbar/Navbar";
import Hero from './components/hero/Hero'
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
const Accueil = () => {
 return (
   <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Footer/>
   </div>
 );
};
 
export default Accueil;