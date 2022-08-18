import React from 'react';
import detail from"./../assets/detail.jpg"

const Detail1 = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1200px] grid md:grid-cols-2' style={{display:"flex" ,height:"600px", margin:"15px"}}>
        <img className='w-[500px] my-4' src={detail} alt='/' />
        <div className='flex flex-col justify-center' style={{textAlign:"center"}}>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Choose Your Room </h1>
          <p>
            each room redefines the way you experience your journey   
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail1;