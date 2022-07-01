import React from 'react'
import './footer.css'
import { FaTelegram } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { GrTwitter } from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Итак, Это Был Я - НУРИК 😀</a>

      <ul className='permalinks'>
        <li><a href='#'>Главное</a></li>
        <li><a href='#about'>Об Этом Парне</a></li>
        <li><a href='#experience'>Его Опыт</a></li>
        <li><a href='#services'>Услуги</a></li>
        <li><a href='#portfolio'>Портфолио</a></li>
        <li><a href='#testimonials'>Отзывы</a></li>
        <li><a href='#contact'>Контакты</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://telegram.com'> <FaTelegram /> </a>
        <a href='https://instagram.com'> <RiInstagramFill /> </a>
        <a href='https://twitter.com'> <GrTwitter /> </a>
      </div>

      <div className='footer__copyright'>
        <small>Все Права Защищены</small>
      </div>
    </footer>
  )
}

export default Footer