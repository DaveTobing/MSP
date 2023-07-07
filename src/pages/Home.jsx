import React from 'react'
import '../App.css';
import Hero from '../components/Hero/Hero';
import Facillities from '../components/Facillities/Facillities';
import { Reasons } from '../components/Reasons/Reasons';
import Plans from '../components/Plans/Plans';
import Messages from '../components/Messages/Messages';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <Facillities/>
    <Reasons/>
    {/* <Plans/> */}
    <Messages/>
    <Footer/>
  </div>
  )
}

export default Home