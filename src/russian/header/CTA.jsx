import React from 'react'
import CV from '../../pdf/React Js.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Книга, Через Которую Я Прокачался</a>
        <a href='#contact' className='btn btn-primary-class'>Поговорите Со Мной!</a> 
    </div>
  )
}

export default CTA