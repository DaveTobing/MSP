import React, { useState } from 'react'
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <div className='flex justify-center pt-5'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15928.329487665482!2d98.709508!3d3.5685193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031314ba64a0a6b%3A0x5fa98bc76021873c!2sMenteng%20Skate%20Park%20Medan!5e0!3m2!1sen!2sid!4v1688700977099!5m2!1sen!2sid" 
        width="800" 
        height="450" 
        style= {{border:0}}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <div>
          {/* Icons*/}
              <div className=' pt-10 pl-10 text-lg text-white'>
                  <div >
                      <FontAwesomeIcon icon={faHome} style={{color: '#F7FF58'}}/>
                      <span>
                          <h5>Jl. Raya Medan Tenggara No.277</h5>
                          <p>Binjai, Kec. Medan Denai, Kota Medan, Sumatera Utara 20228</p>
                      </span>
                  </div>
                  <div>
                      <FontAwesomeIcon icon={faPhone} style={{color: '#F7FF58'}}/>
                      <span>
                          <h5>+62 82276201775</h5>
                          <p>Monday - Sunday, 10AM-10PM</p>
                      </span>
                  </div>
                  <div>
                      <FontAwesomeIcon icon={faEnvelope} style={{color: '#F7FF58'}}/>
                      <span>
                          <h5>mentengskate@gmail.com</h5>
                          <p>Email Us</p>
                      </span>
                  </div>
              </div>
            {/* Form*/}
            <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
      </div>

    </div>



  )
}

export default Contact