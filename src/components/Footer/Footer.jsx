import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../assets/Logo MSP yellow.png'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex text-white justify-center pt-10 text-center footer'>
        <span>
          At Menteng SkatePark, We are passionate about providing an exhilarating and inclusive space for skateboarders of all <br />
          ages and skill levels to express themselves, push their limits, and connect with a vibrant community of fellow skaters.
        </span>
      </div>
      <div className='flex justify-center gap-7 pt-11'>
        <Link to="https://instagram.com/mentengskatepark" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '2rem', color: '#FFD369' }} />
        </Link>

        <img src={Logo} alt="" className='w-17 h-10 pb-2'/>

        <Link to="https://youtube.com/@mentengskatepark7138" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} style={{ fontSize: '2rem', color: '#FFD369'}}/>
        </Link>
        
      </div>
    </div>
  )
}

export default Footer