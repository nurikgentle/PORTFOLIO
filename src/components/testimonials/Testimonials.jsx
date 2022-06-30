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
    name: 'Elon Mask',
    review: 'I bet absolutely every IT-company should consider hiring this guy, cuz he is so underrated Front-End Developer 😏'
  },
  {
    avatar: AVTR2,
    name: 'Mark Zuckerberg',
    review: 'I will be honest, i was lucky to deal with Nurik Gentle. He is so professional at what he does. I suggest every company hire this extraordinary guy 🙃'
  },
  {
    avatar: AVTR3,
    name: 'Bill Gates',
    review: 'Nurik Gentle is truly one of the best Front-End Developers I have ever seen so far. I was so lucky to work with him 🤩'
  },
  {
    avatar: AVTR4,
    name: 'Jeff Bezos',
    review: 'He is bloody dope at Front-End Development, PERIOD! 😤'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>LIST OF MY CLIENTS 😂</h2>

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