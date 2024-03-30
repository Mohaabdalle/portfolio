import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='contact-continer'>
      <h1>Contact Us</h1>
      <form action="">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Your Email' />
        <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
        <button className='btn'>Send</button>
      </form>

    </div>
  )
}

export default Contact