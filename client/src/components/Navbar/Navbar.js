import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./NavbarStyles.css"

const Navbar = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='home'smooth={true} duration={500}>Home</Link>
            </li>
            <li>
              <Link  to='sections'smooth={true} duration={500}>Sections</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'><h1>Travelo</h1>
            <span>Your Best Hotel</span></div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Navbar
