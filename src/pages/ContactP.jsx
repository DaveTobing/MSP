import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import '../App.css';



const ContactP = () => {
  return (
    <div className="App">
    <Navbar/>
    <Contact/>
    <Footer/>
  </div>
  )
}

export default ContactP