import React, { useState } from "react"
import { Link } from "react-scroll"
import "./NavbarStyles.css"

const Navbar = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
              <Link to='home'smooth={true} duration={500}><li>Home</li></Link>
              <Link to='sections'smooth={true} duration={500}><li>Sections</li></Link>
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
