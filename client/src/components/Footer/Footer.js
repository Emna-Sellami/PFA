import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import {Link} from 'react-scroll'

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>HOTEL.</h3>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li><span>Copyright &copy; 2021 Travelo. All rights reserved</span></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer