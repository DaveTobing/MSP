import React from 'react';
import './Facillities.css';
import { programsData } from '../../data/programsData';

const facillities = () => {
  return (
    <div className="F" id = "f">
        {/* header */}
        <div className="F-header"> 
            <span className='stroke-text'>Explore  </span>
            <span>our</span>
            <span className='stroke-text'>Facillities</span>
        </div>

        <div className="f-category">
            {programsData.map((program, i)=>(
                <div className="category text-2xl">
                    <span key={i}>{program.icon}</span>
                    <span key={i}>{program.heading}</span>
                    <span key={i}>{program.details}</span>
                </div>
            ))}
        </div>
    </div>


  )
}

export default facillities