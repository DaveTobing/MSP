import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import adidas from '../../assets/adidas.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


export const Reasons = () => {
  return (
    <div className="Reasons pt-10" id = "reasons">
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r uppercase text-[#FFD369] font-bold">
                <span>some reasons</span>
                <div>
                    <span className='stroke-text'>Why Choose Our</span>
                    <span className= 'text-[#FFD369]'> Skatepark?</span>
                </div>

                <div className='details-r '>
                    <div>
                        <FontAwesomeIcon icon={faCheck} style={{fontSize: '2rem', color: '#FFD369'}}/>
                        <span> Our skatepark features a diverse range of obstacles, 
                            including ramps, rails, and more. You'll never get bored and always find new challenges to push your skills.</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCheck} style={{fontSize: '2rem', color: '#FFD369'}}/>
                        <span>We have a team of experienced skate instructors who are passionate about helping skaters of all levels. 
                            Whether you're a beginner or advanced, you can receive expert guidance to improve your skills.</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCheck} style={{fontSize: '2rem', color: '#FFD369'}}/>
                        <span>Our skatepark fosters a friendly and inclusive community of skaters. 
                            You'll meet like-minded individuals, make new friends, and share the love for skateboarding.</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCheck} style={{fontSize: '2rem', color: '#FFD369'}} />
                        <span>Take a break and enjoy delicious snacks, beverages, and refreshing drinks at our on-site café. 
                            It's a great way to refuel and relax during your skate sessions.</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCheck} style={{fontSize: '2rem', color: '#FFD369'}}/>
                        <span>We prioritize the safety of our skaters. Our skatepark is equipped with safety features 
                            and we enforce rules and regulations to ensure a secure and enjoyable skating experience.</span>
                    </div>
                </div>
                <span style={{
                    color: 'grey',
                    fontWeight: 'normal',
                }}>
                    OUR PARTNER
                </span>
                <div className="partners">
                    <img src={adidas} alt="" />
                    <img src={adidas} alt="" />
                    <img src={adidas} alt="" />
                </div>
            </div>
    </div>

  )
}
