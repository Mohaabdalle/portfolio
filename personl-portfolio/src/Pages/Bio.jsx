import React from 'react'
import i1 from '../i1.jpg'
const Bio = () => {
  return (
    <div id='bio' className='bio-container'>
      <h1 className='title'> About me</h1>
      <div className="about-contact">
        <div className="image">
        <img src={i1} alt="" />
          <div className="content">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid nostrum tenetur exercitationem ullam maxime ipsum dignissimos ex culpa? Adipisci culpa eum tempore ab magni necessitatibus consectetur non excepturi itaque.

            </p>
            <a href="" className='read'> Read More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio