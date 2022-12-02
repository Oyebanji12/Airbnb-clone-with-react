import React from 'react'
import img from "./Image/airbnb 1.jpg"

const Navbar = () => {
  return (
    <div>
        <nav>
             <img src={img} alt="" className='img' /> 
        </nav>
    </div>
  )
}

export default Navbar