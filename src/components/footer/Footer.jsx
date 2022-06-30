import React from 'react'
import './footer.css'
import { FaTelegram } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { GrTwitter } from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>So, this was Nurik 😀</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Reviews</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://telegram.com'> <FaTelegram /> </a>
        <a href='https://instagram.com'> <RiInstagramFill /> </a>
        <a href='https://twitter.com'> <GrTwitter /> </a>
      </div>

      <div className='footer__copyright'>
        <small>All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer