import React, { useState } from 'react'
import './Messages.css'
import { testimonialsData } from '../../data/testimonialsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight , faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { color } from 'framer-motion'

const Messages = () => {
    const [selected, setSelected] = useState(0);
    const Length = testimonialsData.length


  return (
    <div className="messages">
        <div className="left-m pl-10 pt-5">
            <span>Messages</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <span>
            {testimonialsData[selected].review}
            </span>
            <span>
                <span style={{color: '#FFD369'}}>
                    {testimonialsData[selected].name}
                </span>{" "}
                -{testimonialsData[selected].status}
            </span>
        </div>

        <div className="right-m pt-5">
            <div>
            </div>
            <div>
            </div>
            <img src={testimonialsData[selected].image} alt="" />
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