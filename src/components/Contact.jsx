import {React}from 'react'
import {MdEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nwdufnc', 'template_ytjaumm', form.current,'LF8JMG0VMOn5JiKiR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
   
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <div className='contact-1'>
              <MdEmail className='contact_option-icon'/>
              <h4>Email</h4>
              </div>
              <div className='contact-2'>
            <h5>vigneshkamaraj25@gmail.com</h5>
            <a href='mailto:vigneshkamaraj25@gmail.com' className='btn'>Send a message</a>
            </div>
          </article>
          <article className='contact_option'>
          <div className='contact-1'>
              <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            </div>
            <div className='contact-2'>
            <h5>+91 8270716944</h5>
            <a href='https://api.whatsapp.com/send?phone=+918270716944' className='btn'>Send a message</a>
            </div>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <div className='form'>
          <label for="name">Name </label> 
          <input type="text" name="name" placeholder="Your Full Name" required/>
          </div>
          <div className='form'>
          <label for="email">Email</label>
          <input type="email" name="email" placeholder="Your Email"  required/>  
          
          </div>
          <div className='form'>
          <label for="message">Message</label>
          <textarea name="message" placeholder="Your Message"cols="20" rows="7" required></textarea>
          </div>
          <input type="submit" className='btn' value="Send" />
        </form>
      </div>
    </section>
  )
}

export default Contact