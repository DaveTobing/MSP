import React from 'react'
import '../App.css';
import Hero from '../components/Hero/Hero';
import Facillities from '../components/Facillities/Facillities';
import { Reasons } from '../components/Reasons/Reasons';
import Messages from '../components/Messages/Messages';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="App" id= "Home">
    <Header/>
    <Hero/>
    <Facillities/>
    <Reasons/>
    <Messages/>
    <Footer/>
  </div>
  )
}

export default Home