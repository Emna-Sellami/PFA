import React from 'react';
import detail from"./../assets/detail.jpg"
import spa from"./../assets/spa.png";
import Room from "./Rooms/Singleroom"
import Button from './Button'

import Rectangle from './rectangle/Rectangle';
import'./Detail.css'
const Detail1 = () => {
  return (
    
    <div className='w-full bg-white py-16 '>
      <Button/>
      <Room/>
      
      <div className='max-w-[1200px] grid md:grid-cols-2' style={{display:"flex" ,height:"600px", margin:"20px",marginLeft:"40px",gap: '3rem'}}>
        <img className='w-[500px] my-4' src={detail} alt='/' />
        <div className='flex flex-col justify-center' style={{textAlign:"center", width:"100%" ,marginTop:"200px"}}>
        <p> __________________________________________________________</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Your Room As You Deserve </h1>
          <p>
            each room redefines the way you experience your journey   
          </p>
          <p>
          Suites full of special amenities designed for a perfect vacation
          </p>
          <p> __________________________________________________________</p>
        </div>
      </div>
      <div className='surf' style={{paddingLeft:"90px", width:"100%" ,paddingTop:"170px", color:"white"}}>
      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Surfing </h1>
         <h4>The surfer space</h4>
          <p>
           A center  for windsurfing and kitesurfing enthusiasts during windy times of the year.
          </p>
          <p>
          The sport, which combines balance, self-confidence and physical endurance,
          </p>
          <p>
             turns into a colorful show in the deep blue waters
          </p>
      </div>
      
      <div className='max-w-[1200px] grid md:grid-cols-2' style={{display:"flex" ,height:"600px", margin:"20px",marginLeft:"40px",gap: '3rem'}}>
        
        <div className='flex flex-col justify-center' style={{textAlign:"center", width:"100%" ,marginTop:"200px"}}>
        <p> __________________________________________________________</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Wellbeing& Retreats </h1>
          <p>
             feel the freshness in your soul
          </p>
          <p>
            it offers a unique Spa service with its own steam room, sauna,
          </p>
          <p>
            jacuzzi, Turkish bath, relaxation areas, massage room.
          </p>
          <p> __________________________________________________________</p>
        </div>
        <img className='w-[500px] my-4' src={spa} alt='/' />
      </div>
      <div>
        <Rectangle/>
      </div>
    </div>
     
    
    
  );
};

export default Detail1;