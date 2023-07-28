import React from 'react'
import './Hero.css'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'



const hero = () => {
  return (
   <div className="hero h-screen">
        <div className="left-h">

            {/* the best ad */}
            <div className="best-skate">
                <span className='text-xs md:text-lg'>
                <Typewriter
                    words={['The Best SkatePark in town']}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
                </span>

            </div>


            {/* Hero Heading*/}
            <div className="hero-text">
                <div>
                    <span  className='stroke-text'>Come </span>
                    <span  className= 'text-[#FFD369]'>Skate</span>
                </div>
                <div>
                    <span>With Us</span>
                </div>
            </div>

            {/* hero Buttons*/}
            <div className='hero-buttons'>
                <Link to= '/contact'>
                    <buttons className="btn bg-[#393E46] rounded" >Visit Us</buttons>
                </Link>
            </div>
        </div>
   </div>
  )
}

export default hero