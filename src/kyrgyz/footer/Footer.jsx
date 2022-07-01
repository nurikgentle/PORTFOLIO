import React from 'react'
import './footer.css'
import { FaTelegram } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { GrTwitter } from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Силер Менен Болду - НУРИК 😀</a>

      <ul className='permalinks'>
        <li><a href='#'>Негизги</a></li>
        <li><a href='#about'>Бала Жөнүндө</a></li>
        <li><a href='#experience'>Тажрыйбасы</a></li>
        <li><a href='#services'>Сунуштары</a></li>
        <li><a href='#portfolio'>Портфолио</a></li>
        <li><a href='#testimonials'>Клиентттер</a></li>
        <li><a href='#contact'>Байланышуу</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://telegram.com'> <FaTelegram /> </a>
        <a href='https://instagram.com'> <RiInstagramFill /> </a>
        <a href='https://twitter.com'> <GrTwitter /> </a>
      </div>

      <div className='footer__copyright'>
        <small>Бүт Укуктар Корголгон</small>
      </div>
    </footer>
  )
}

export default Footer