import React from 'react';
import detail from"./../assets/detail.jpg"
import Rectangle from './rectangle/Rectangle';

const Detail1 = () => {
  return (
    <div className='w-full bg-white py-16 '>
        <div>
            <Rectangle/>
        </div>
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
    </div>
  );
};

export default Detail1;