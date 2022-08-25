import React from "react"
import "./rectangle.css"
import img1 from "../../assets/sport.png"
import img2 from "../../assets/bell.png"
import img3 from "../../assets/bed.png"
import img4 from"../../assets/CONFERENCE.png"
const Awrapper = () => {
  return (
    <>
      <section class="cards-section sec-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-3 col-sm-6">
                    <div class="cards-inner">
                        <img src={img1} alt="" class="img-fluid" />
                        <h5>Health & Fitness</h5>
                        
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 col-sm-6">
                    <div class="cards-inner">
                        <img src={img2} alt="" class="img-fluid"/>
                        <h5>RESTAURANT</h5>
                        
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 col-sm-6">
                    <div class="cards-inner">
                        <img src={img3} alt="" class="img-fluid"/>
                        <h5>SPACIOUS ROOMS</h5>
                      
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 col-sm-6">
                    <div class="cards-inner">
                        <img src={img4} alt="" class="img-fluid"/>
                        <h5>CONFERENCE ROOM</h5>
                     
                    </div>
                </div>                                                
            </div>
        </div>
    </section> 
    </>
  )
}

export default Awrapper
