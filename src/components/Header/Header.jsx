import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo MSP yellow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="justify-between flex pt-5">
        <img src={Logo} alt="" className='w-25 h-20 pl-10' />
        <ul className='flex text-white list-none gap-8 uppercase pr-5 '>
            <Link to= '/' className='p-4 hover:text-[#F7FF58]'>Home </Link>
            <Link to= '/' className='p-4 hover:text-[#F7FF58]'>Facilities</Link>
            <Link to= '/' className='p-4 hover:text-[#F7FF58]'>Messages</Link>
            <Link to= '/contact' className='p-4 hover:text-[#F7FF58]'>Contact</Link>
        </ul>
        
        {/* <div onClick={handleNav}>
          {!nav ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/>}
        </div> */}
        
        {/* mobile menu */}
        {/* <div className={!nav ? ' text-white fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 hidden' : 'fixed left-[-100%]'}>
        <img src={Logo} alt="" className='w-25 h-20 pl-5 pt-5' />
          <ul className='pt-17 uppercase'>
            <li className='p-4 '>Home</li>
            <li className='p-4 '>Facilities</li>
            <li className='p-4 '>About</li>
            <li className='p-4 '>Contact</li>
          </ul>
        </div> */}

    </div>

  )
}

export default Header