import React from 'react';
import Re from './Re';
import Navbar from "../Navbar/Navbar";
function Review() {
  return (
    
    <div>
        <Navbar/>
      <section className='container'>

        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Re />
      </section>
    </div>
  );
}

export default Review;