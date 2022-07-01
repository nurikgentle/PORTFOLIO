import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Мени Менен</h5>
      <h2>ТААНЫШ</h2>

      <div className='container about__container'>
         <div className='about__me'>
            <div className="about__me-image">
              <img src={ME} alt='ME'/>
            </div>
         </div>

         <div className='about__content'>
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Тажрыйба</h5>
                <small>8 Ай Иштедим</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Кардарлар</h5>
                <small>5 Кардар</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Долбоорлор</h5>
                <small>10+ Бүтүрүлгөн</small>
              </article>
            </div>


            <p>
            Кыскасы, код жазуу, програмалоо, веб-сайттарды жасоо, мобилдик приложенияларды жасоо - мага абдан жагат, жана бул тармакта мен күн сайын өнүгүүдөмүн 😀
            </p>

            <a href='#contact' className='btn btn-primary'>Мени Менен Сүйлөшүү</a>
         </div>
      </div>
    </section>
  )
}

export default About