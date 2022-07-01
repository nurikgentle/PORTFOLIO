import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hqin3vp', 'template_ziusl1i', form.current, 'F9zE3QCBEqsCRlSiI')
     
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Связаться Со Мной</h5>
      <h2>Напишите Мне</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/> 
            <h4>Email</h4>
            <h5> nurikgentle@gmail.com </h5>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY&bcc=nurikgentle@gmail.com">Отправить Сообщение</a>
          </article>

          <article className='contact__option'>
            <AiFillInstagram className='contact__option-icon'/> 
            <h4>Instagram</h4>
            <h5>@nurikgentle</h5>
            <a href='https://instagram.com/nurikgentle'>Отправить Сообщение</a>
          </article>

          <article className='contact__option'>
            <BsTelegram className='contact__option-icon'/> 
            <h4>Telegram</h4>
            <h5>@nurikgentle</h5>
            <a href='https://t.me/nurikgentle'>Отправить Сообщение</a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Ваше Имя' required />
          <input type='email' name='email' placeholder='Ваш Email' required />
          <textarea name='' rows="7" placeholder='Ваше Сообщение' required></textarea>
          <button type='submit' className='btn btn-primary'>Отправить Сообщение</button>
        </form>
      </div>
    </section>
  )
}

export default Contact