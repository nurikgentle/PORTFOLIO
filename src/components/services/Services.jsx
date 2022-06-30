import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Can work little bit with Figma</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Also, Have little experience in working with Adope Photoshop</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Anyway, I mostly specialize as a Front-End Developer, not a UI/UX Designer</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>This is basically all what i know about UX/UI Design</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I'm really good at making Responsive Web-Sites</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>So, your Web-Site will look good both in wide devices and small devices</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Also, Can work with Firebase, Sanity Back-end Servers</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Have an experience in working with Next.js</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services