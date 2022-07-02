import React from 'react'
import './about.css'
import ME from '../../assets/second.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

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
                <h5>Experience</h5>
                <small>8 months Working</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>Around 5 Worldwide</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </div>


            <p>
              Coding, programming, styling, making Web-Sites, Mobile Applications - are my passion and also profession. This is something that I really love to do and willing to grow in this sphere absolutely everyday 😀
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
         </div>
      </div>
    </section>
  )
}

export default About