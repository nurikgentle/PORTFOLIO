import React, { useState } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Language from '../../components/header/Language'

const Header = () => {

  const [selected, setSelected] = useState("Тил Тандасан Болот   🌐");

  return (
    <header>
      <Language selected={selected} setSelected={setSelected} />

      <div className="container header__container">
        <h5>Баарына Салам Мен</h5>
        <h1>НУРИК</h1>
        <h5 className='text-light'>Front-End Разработчик</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt=''/>
        </div>

        <a href='#contact' className='scroll__down'>Ылдый Жүргүз</a>
      </div>
    </header>
  )
}

export default Header