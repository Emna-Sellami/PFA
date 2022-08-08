import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

import './NavbarStyles.css'
import {Link} from 'react-scroll'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h1>HOTEL.</h1>
            </div>
            <ul className="nav-menu">
                <Link to='home'smooth={true} duration={500}><li>Home</li></Link>
                <Link to='sections'smooth={true} duration={500}><li>Sections</li></Link>
            </ul>
            <div className="nav-icons">
                <FaFacebook className='icon' style={{ marginRight: '1rem' }}/>
                <FaInstagram className='icon'style={{ marginRight: '1rem' }} />
                <FaTwitter className='icon' style={{ marginRight: '1rem' }}/>
                <FaPinterest className='icon'style={{ marginRight: '1rem' }} />
                <FaYoutube className='icon'/>
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='home'smooth={true} duration={500}><li>Home</li></Link>
                <Link to='sections'smooth={true} duration={500}><li>Sections</li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                   
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar