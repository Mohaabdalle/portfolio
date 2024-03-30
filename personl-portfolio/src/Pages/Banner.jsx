import React from 'react'
import i1 from '../i1.jpg'

const Banner = () => {
  return (
    <div id='home' className='Banner-container'>
      <div className='Banner'>
      <img src={i1} alt="" />
        <h1>Web Desing & Development </h1>
        {/* <h3 className='text'>I'M A</h3> */}
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla porro iste repudiandae commodi
             eaque sunt numquam 
            molestias delectus nobis rem nihil vitae corrupti et perspiciatis error, vel fuga! Debitis, quas.
        </p>

        
          

        

        <button className='btn'>Start</button>
        </div>
    </div>
  )

}

export default Banner