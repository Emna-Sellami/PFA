import React from "react"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='LUXURY HIGHLIGHTS' title='Welcom to LUXURY LIFE' />

          <div className='coursesCard'>
            <div className='grid2'>
              {coursesCard.slice(0, 3).map((val) => (
                <div className='items'>
                  <div className='content flex'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='price'>
                  <h2>{val.coursesName}</h2>
                    <p>
                     {val.discreption} 
                    </p>
                  </div>
                  <button className='outline-btn'>Reserve Now !</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HAbout
