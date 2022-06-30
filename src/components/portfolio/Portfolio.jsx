import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/chatapp.png'
import IMG2 from '../../assets/calculator.png'
import IMG3 from '../../assets/caps.png'
import IMG4 from '../../assets/social media ui.jpg'
import IMG5 from '../../assets/todo.png'
import IMG6 from '../../assets/crypto.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Real Time Chat-Application',
    github: 'https://github.com/nurikgentle/REACT-NODE-JS-CHAT-APP',
    demo: 'https://kyrgyz.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Calculator In React',
    github: 'https://github.com/nurikgentle/REACT-CALCULATOR',
    demo: 'https://calculator-react-project-1.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Ecommerce Cap Web-Site',
    github: 'https://github.com/nurikgentle/CAP-WEBSITE',
    demo: 'https://cap-project.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'UI of a Simple Social Media',
    github: 'https://github.com/nurikgentle/UI-of-a-Social-Media-React-',
    demo: 'https://social-media-nurik.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Super basic TODO-LIST',
    github: 'https://github.com/nurikgentle/TODO-LIST',
    demo: 'https://nurikgentle.github.io/TODO-LIST/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Real-Time Crypto Analytics',
    github: 'https://github.com/nurikgentle/REAL-TIME-CRYPTO-ANALYTICS',
    demo: 'https://cryptocurrency-analytics.netlify.app/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
       {
        data.map( ({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary'>Live Demo</a>
              </div>
            </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio