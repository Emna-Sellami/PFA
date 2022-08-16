import React from "react"
import Back from "../common/back/Back"
import OnlineCourses from "./OnlineCourses"
import PriceCard from "../pricing/Pricing"
const CourseHome = () => {
  return (
    <>
      <Back title='Explore Offers' />
      
      <OnlineCourses />
    </>
  )
}

export default CourseHome
