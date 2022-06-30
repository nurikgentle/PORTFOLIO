import React from 'react'
import CV from '../../pdf/React Js.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>A Book I've Recently Read</a>
        <a href='#contact' className='btn btn-primary-class'>Let's Talk</a> 
    </div>
  )
}

export default CTA