import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../assets/Logo MSP yellow.png'




const Footer = () => {
  return (
    <div>
      <div className='flex text-justify text-white justify-center pt-10'>
        <span>
          At Menteng SkatePark, We are passionate about providing an exhilarating and inclusive space for skateboarders of all <br />
          ages and skill levels to express themselves, push their limits, and connect with a vibrant community of fellow skaters.
        </span>
      </div>
      <div className='flex justify-center gap-5 pt-11'>
        <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '2rem', color: '#FFD369' }} />
        <FontAwesomeIcon icon={faYoutube} style={{ fontSize: '2rem', color: '#FFD369'}}/>
        <img src={Logo} alt="" className='w-15 h-10 pb-2'/>
      </div>
    </div>
  )
}

export default Footer