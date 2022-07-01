import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Что Я Предлагаю</h5>
      <h2>Услуги</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Дизайн</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Могу Работать На Figma На Базовом Уровне</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Также, Есть Небольшой Опыт Работы На Adope Photoshop</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>В Любом Случае, Я Больше Всего Специализируюсь Как Front-End
                 Разработчик, А Не UI/UX Designer</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>И Это Все, Что Я Могу Сказать Про Свой UX/UI Design</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Веб Разработка</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>У Меня Явная Склонность Делать Адаптивные Сайты</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>То Есть, Ваши Сайты Будут Смотреться Круто Как и в Больших Девайсах, Так и в Маленьких</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Также Есть Опыт Работы С Firebase, Sanity Back-End Серверами</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Также Работал На Next.js</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services