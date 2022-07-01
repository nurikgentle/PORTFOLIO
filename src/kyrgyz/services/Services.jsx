import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Мен Эмне Сунуштайм</h5>
      <h2>Сунуштар</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Дизайн</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Figma'да базалык деңгээлде иштей алам</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Жана ошондой эле, Adope Photoshop менен иштөөдө бир аз тажрыйбам бар</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Эмне болсо дагы, мен негизинен Front-End
                 Разработчик катары жакшы иштейм, ал эми UI/UX Designer катары эптеп-септеп</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>UX/UI Design боюнча болгону ушул</p>
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
              <p>Мен өзгөчө адаптивдүү сайттарды жакшы кылам</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Мындайча Айтканда, силердин сайтыңар экраны чоң жана кичинекей девайстарда жакшы көрүнөт</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Жана ошондой эле менде Firebase, Sanity деген Back-End серверлер менен иштөөдөгү тажрыйбам бар</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ошондой эле Next.js менен иштегем</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services