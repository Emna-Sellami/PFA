import React from 'react'
import './HeroStyles.css'

import background from '../../assets/pool.png'

function Hero() {
    return (
        <div className='hero'>
            <div className="overlay"></div>
            <div className="content">
                <h1>First Class Travel</h1>
                <h2>Top 1% Locations Worldwide</h2>
            </div>
        </div>
    )
}

export default Hero