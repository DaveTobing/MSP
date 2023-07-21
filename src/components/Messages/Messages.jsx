import React, { useState } from 'react'
import './Messages.css'
import { testimonialsData } from '../../data/testimonialsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight , faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const Messages = () => {
    const transition = {type: "spring", duration: 3};

    const [selected, setSelected] = useState(0);
    const Length = testimonialsData.length


  return (
    <div className="messages">
        <div className="left-m">
            <span>Messages</span>
            <span className='stroke-text message'>What they</span>
            <span className='message'>say about us</span>
            <motion.span
            key = {selected}
            initial = {{opacity: 0, x: -100}}
            animate = {{opacity:1, x:0}}
            exit= {{opacity:0, x:100}}
            transition={transition}>
            {testimonialsData[selected].review}
            </motion.span>
            <span>
                <span style={{color: '#FFD369'}}>
                    {testimonialsData[selected].name}
                </span>{" "}
                -{testimonialsData[selected].status}
            </span>
        </div>

        <div className="right-m">
            <motion.div                
                initial = {{opacity: 0, x: -100}}
                transition = {{...transition, duration:2}}
                whileInView = {{opacity:1, x:0}}
            >           
            </motion.div>
            <motion.div
                initial = {{opacity: 0, x:  100}}
                transition = {{...transition, duration:2}}
                whileInView = {{opacity:1, x:0}}
            >
            </motion.div>
            <motion.img 
            key = {selected}
            initial = {{opacity: 0, x: 100}}
            animate = {{opacity:1, x:0}}
            exit= {{opacity:0, x:-100}}
            transition={transition}

            src={testimonialsData[selected].image} alt=""/>
            <div className="arrows" >
                <FontAwesomeIcon icon={faArrowLeft} style = {{color: '#FFD369', fontSize: '2.5rem'}} onClick= {
                    ()=>{
                    selected === 0 ? 
                    setSelected(Length - 1) :
                    setSelected((prev) => prev - 1 );
                }} />
                <FontAwesomeIcon icon={faArrowRight}  style = {{color: '#FFD369', fontSize: '2.5rem'}} onClick={
                    () =>{
                    selected === Length-1 ?
                    setSelected(0) :
                    setSelected((prev) => prev + 1)
                 }}  /> 
            </div>
        </div>
    </div>
  )
}

export default Messages