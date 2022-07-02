import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/logo.jpg'
import HeaderSocials from './HeaderSocials'
import Language from './Language'
import { useState } from "react";

const Header = () => {

  const [selected, setSelected] = useState("Choose The Language 🌐");


  return (
    <header>
      <Language selected={selected} setSelected={setSelected}/>
      <div className="container header__container">
        <h5>Hello Everyone I'm</h5>
        <h1>Nurik Gentle</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA />
        <HeaderSocials />
       

        <div className="me">
          <img className='miss' src={ME} alt=''/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header