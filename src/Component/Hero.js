import React from 'react'
import img2 from "./Image/Group 77.jpg"

const Hero = () => {
  return (
    <div>
        <section className='hero-conatiner'>
            <img src={img2} alt=""  className='hero-img'/>
            <h1 className='hero-header'>Online Experience</h1>
            <p className='hero-header'>Join unique interactive activities led by one of a kind host without leaving home</p>
        </section>
    </div>
  )
}

export default Hero