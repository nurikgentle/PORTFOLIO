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
    review: 'Смело заявляю, что абсолютно каждая IT-компания должна подумать о найме этого парня, потому что он настолько недооценен как Front-End Разработчик 😏'
  },
  {
    avatar: AVTR2,
    name: 'Марк Цукерберг',
    review: 'Скажу честно, мне повезло иметь дело с Нуриком. Он настолько профессионален в том, что он делает. Я предлагаю каждой компании нанять этого экстраординарного парня 🙃'
  },
  {
    avatar: AVTR3,
    name: 'Билл Гейтс',
    review: 'Нурик — действительно один из лучших разработчиков, которых я когда-либо видел. Мне так повезло работать с ним 🤩'
  },
  {
    avatar: AVTR4,
    name: 'Джефф Безос',
    review: 'Он чертовски хорош в Front-End Разработке, ТОЧКА! 😤'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Отзывы Клиентов</h5>
      <h2>Список Моих Клиентов 😂</h2>

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