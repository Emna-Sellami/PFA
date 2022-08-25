import React from 'react';
import Re from './Re';
import Navbar from "../Navbar/Navbar";
function Review() {
  return (
    
    <main>
        <Navbar/>
      <section className='container'>

        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Re />
      </section>
    </main>
  );
}

export default Review;