import React from 'react'


import logo from './images/Logo.png'



export const Header = () => {
  return (
    <>
    <div className="Logo">
        <img src={logo} alt="" />
      </div>
      <div className="Header">
        <ul>
          <li><a href="/Home">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/services">SERVICES</a></li>
          <li><a href="/contact ">CONTACT US</a></li>
        </ul>
      </div>
    </>
  )
}
export default Header