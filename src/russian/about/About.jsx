import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Лучше Узнай</h5>
      <h2>Про Меня!</h2>

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
                <h5>Опыт</h5>
                <small>8 Месяцев Работы</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Клиенты</h5>
                <small>5 Клиентов</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Проекты</h5>
                <small>10+ Законченных</small>
              </article>
            </div>


            <p>
            Кодирование, программирование, стилизация, создание веб-сайтов, мобильных приложений - моя страсть, а также профессия. Это то, что я действительно люблю делать и готов расти в этой сфере абсолютно каждый день 😀
            </p>

            <a href='#contact' className='btn btn-primary'>Поговорите Со Мной</a>
         </div>
      </div>
    </section>
  )
}

export default About