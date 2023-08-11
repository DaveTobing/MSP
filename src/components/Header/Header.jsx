import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo MSP yellow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { toggleBoolean } from '../store';


function Header() {
  const sharedBoolean = useSelector((state) => state.shared.sharedBoolean);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleBoolean());
  };

  const handleNavItemClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:flex justify-between flex pt-5 h-24 mx-auto">
        <img src={Logo} alt="" className='hide-logo md:w-25 h-20 pl-10'/> 
        <ul className='hidden md:flex text-white list-none gap-8 uppercase pr-5 '>
            <Link to= '/' className='p-4 hover:text-[#FFD369]' onClick={() => handleNavItemClick('Home')}>Home </Link>
            <Link to= '/' className='p-4 hover:text-[#FFD369]' onClick={() => handleNavItemClick('f')}>Facilities</Link>
            <Link to= '/' className='p-4 hover:text-[#FFD369]' onClick={() => handleNavItemClick('m')}>Messages</Link>
            <Link to= '/contact' className='p-4 hover:text-[#FFD369]'>Contact</Link>
        </ul>

        {/* <div >
          <FontAwesomeIcon icon={faXmark} style={{ fontSize: '2rem', color: '#FFD369' }} />
        </div> */}
        
        <div onClick={handleToggle} className='md:hidden'>
          {!sharedBoolean ? <FontAwesomeIcon icon={faXmark} style={{ fontSize: '2rem', color: '#FFD369' }} /> :  <FontAwesomeIcon icon={faBars} style={{ fontSize: '2rem', color: '#FFD369' }} /> }
        </div>
        
        {/* mobile menu */}
        <div className={!sharedBoolean ? 'text-white fixed left-0 top-0 w-[60%] h-full bg-[#1E1E24] ease-in-out duration-500' : 'fixed left-[-100%]' }>
        <img src={Logo} alt="" className='w-25 h-20 pl-5 pt-5' />
          <ul className='pt-17 uppercase'>
            <li className='p-8 hover:text-[#FFD369]'><Link to= '/'  onClick={() => handleNavItemClick('Home')}>Home </Link></li>
            <li className='p-8 hover:text-[#FFD369]'><Link to= '/'  onClick={() => handleNavItemClick('f')}>Facilities</Link></li>
            <li className='p-8 hover:text-[#FFD369]'><Link to= '/'  onClick={() => handleNavItemClick('m')}>Messages</Link></li>
            <li className='p-8 hover:text-[#FFD369]'><Link to= '/contact' >Contact</Link></li>
          </ul>
        </div>
    </div>

  )
}

export default Header