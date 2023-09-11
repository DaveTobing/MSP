import React from 'react'
import '../App.css';
import Hero from '../components/Hero/Hero';
import Facillities from '../components/Facillities/Facillities';
import { Reasons } from '../components/Reasons/Reasons';
import Messages from '../components/Messages/Messages';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="App" id= "Home">
    <Navbar/>
    <Hero/>
    <Facillities/>
    <Reasons/>
    <Messages/>
    <Footer/>
  </div>
  )
}

export default Home