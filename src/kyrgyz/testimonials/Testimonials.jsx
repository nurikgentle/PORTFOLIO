import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Elon Musk.webp'
import AVTR2 from '../../assets/zuck.jpg'
import AVTR3 from '../../assets/bill.jpg'
import AVTR4 from '../../assets/jeff.webp'

// SWIPER
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
// SWIPER CSS
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Илон Маск',
    review: 'Кыскасы ушул бала кыйын Fron-End разработчик ай! 😏'
  },
  {
    avatar: AVTR2,
    name: 'Марк Цукерберг',
    review: 'Чынын айтайын, ушул бала менен иштөөмө мен абдан ыраазымын, кыла турчу нерсени абдан сонун кылып таштады 🙃'
  },
  {
    avatar: AVTR3,
    name: 'Билл Гейтс',
    review: 'Кыскасы, өзүнүн ишин жаман кыйын билет экен, Эркек! 🤩'
  },
  {
    avatar: AVTR4,
    name: 'Джефф Безос',
    review: 'Красавчик , Сөз Жок! 😤'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Клиенттердин Оюу</h5>
      <h2>Менин Клиенттерим 😂</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                  <div className="client__avatar">
                    <img src={avatar} alt='avatar'/>
                  </div>
                  <h5 className='client__name'> {name} </h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials