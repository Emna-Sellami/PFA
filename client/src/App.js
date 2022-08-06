import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app

import Navbar from "./components/Navbar/Navbar";
import Hero from './components/hero/Hero'
import About from "./components/About";
const App = () => {
 return (
   <div>
     <Navbar/>
     <Hero/>
     <About/>
   </div>
 );
};
 
export default App;