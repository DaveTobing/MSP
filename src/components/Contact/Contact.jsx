import React, { useRef } from 'react'
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import {useToast} from "@chakra-ui/react";


const Contact = () => {
  const form = useRef();
  const toast = useToast()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_21tlchf', 
      'template_5relmem', 
      form.current, 
      'sDGuTyXLSW5vXv92f'
      )
      .then((result) => {
          toast({
            title: 'Message Sent Succesfully!',
            status: 'success',
            duration: 4000,
            isClosable: true,
            position: 'top'
          });

      }, (error) => {
          console.log(error.text);

      });

      e.target.reset()
  };

  return (
    <div className='flex-col'>
      <div className='flex map scale-100 md:justify-center pt-5'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15928.329487665482!2d98.709508!3d3.5685193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031314ba64a0a6b%3A0x5fa98bc76021873c!2sMenteng%20Skate%20Park%20Medan!5e0!3m2!1sen!2sid!4v1688700977099!5m2!1sen!2sid" 
        width="800" 
        height="450" 
        style= {{border:0}}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <div className='flex-col md:grid grid-cols-2 text-lg text-white flex p-10 gap-4'>
          {/* Icons left-0 */}
              <div>
                  <div>
                      <FontAwesomeIcon icon={faLocationDot} style={{color: '#FFD369'}}/>
                      <span>
                          <h5>Jl. Raya Medan Tenggara No.277</h5>
                          <p>Binjai, Kec. Medan Denai, Kota Medan, Sumatera Utara 20228</p>
                      </span>
                  </div>
                  <div>
                      <FontAwesomeIcon icon={faPhone} style={{color: '#FFD369'}}/>
                      <span>
                          <h5>+62 82276201775</h5>
                          <p>Monday - Sunday, 10AM-10PM</p>
                      </span>
                  </div>
                  <div>
                      <FontAwesomeIcon icon={faEnvelope} style={{color: '#FFD369'}}/>
                      <span>
                          <h5>mentengskate@gmail.com</h5>
                          <p>Email Us</p>
                      </span>
                  </div>
              </div>
              {/* Form*/}
              <div className='md:flex w-full'>
                      <form ref={form} className='inset-y-0 right-0 md:w-1/2' onSubmit={sendEmail} >
                        <div className='w-full flex flex-col gap-3'>
                              <label className='block mb-1'>Name</label>
                              <input 
                              type="text" 
                              className='md:w-full text-black rounded' 
                              name="user_name" 
                              placeholder="type your name..." 
                              required
                              />

                              <label className='block mb-1'>Email</label>
                              <input 
                              type="email" 
                              className='md:w-full text-black rounded' 
                              name="user_email" 
                              placeholder="type your email..." 
                              required/>

                              <label className='block mb-1'>Message</label>
                              <textarea 
                              name="message" 
                              className='md:w-full text-black rounded' 
                              placeholder="type your message..." 
                              rows={7}
                              required/>

                              <button type="submit" value="Send" className='w-full h-10 font-medium bg-[#393E46] rounded text-[#FFD369] items-center'>Submit</button>
                        </div>

                      </form>
              </div>
      </div>

    </div>
  )
}

export default Contact