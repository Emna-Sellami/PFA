import React from "react"
import "./rectangle.css"
import img1 from "../../assets/sport.png"
import img2 from "../../assets/bell.png"
import img3 from "../../assets/bed.png"
import img4 from"../../assets/CONFERENCE.png"
const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
        <div className='container'style={{ marginTop:"40px" }}>
              <div className='box '>
              
              <div  style={{ display:"flex" ,gap:"2rem" ,color:"white"}}>
                <div className='img'>
                  <img src={img1} alt='' />
                </div>
                <div className='text'>
                  <h1> Health & Fitness</h1>
                </div>
              </div>

              <div style={{ display:"flex" ,gap:"1rem" ,color:"white"}}>
                <div className='img'>
                  <img src={img2} alt='' />
                </div>
                <div className='text'>
                  <h1>RESTAURANT</h1>
                </div>
              </div>

              <div  style={{ display:"flex" ,gap:"1rem",color:"white"}}>
                <div className='img'>
                  <img style={{marginLeft:"35px" }} src= {img3} alt='' />
                </div>
                <div className='text'>
                  <h1>SPACIOUS ROOMS</h1>
                </div>
              </div>  

              <div  style={{ display:"flex" ,gap:"1rem",color:"white"}}>
                <div className='img'>
                  <img src={img4} alt='' />
                </div>
                <div className='text'>
                  <h1>CONFERENCE ROOM</h1>
                </div>
              </div>

              </div>
        
        </div>
      </section>
    </>
  )
}

export default Awrapper
