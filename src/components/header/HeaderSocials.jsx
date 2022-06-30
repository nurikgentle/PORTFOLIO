import React from 'react'
import {GrInstagram} from 'react-icons/gr'
import {FaGithub} from 'react-icons/fa'
import {BsTelegram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.instagram.com/nurikgentle/'> <GrInstagram /> </a>
        <a href='https://github.com/nurikgentle'> <FaGithub /> </a>
        <a href='https://t.me/nurikgentle'> <BsTelegram /> </a>
    </div>
  )
}

export default HeaderSocials