import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'

import Video from '../../assets/maldivesVideo.mp4'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>First Class Travel</h1>
                <h2>Top 1% Locations Worldwide</h2>
            </div>
            <h2 style={{color:'black',textAlign:'center',marginTop:'8px',fontSize:'35px'}}>Sections </h2>
        </div>
    )
}

export default Hero