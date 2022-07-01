import React from 'react'
import CV from '../../pdf/React Js.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Жакында Эле Окуган Китеп</a>
        <a href='#contact' className='btn btn-primary-class'>Кел Сүйлөшөлү</a> 
    </div>
  )
}

export default CTA