import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import ReactDOM from 'react-dom/client';

import Awrapper from "./Awrapper"
import Home from "./reserve"

const AboutCard = () => {
  return (
    <>
    <Home />
      <Awrapper />
    </>
  )
}

export default AboutCard

