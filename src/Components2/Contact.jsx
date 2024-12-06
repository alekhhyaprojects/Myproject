import React, { useState } from 'react';
import './Contact.css'
import { FaMicrophone } from "react-icons/fa6";
import { PiGraduationCapFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const Contact = () => {

  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send formData to a server
    console.log('Form Submitted:', formData);
  };

  return (
    <>
    <div className='contact-container'>
        <div className='contact-text'>
          <h2 className='contact-head2'>Get In Touch</h2>
          <p className='contact-para'>
            To learn more about our conferences and events, please get in touch with us. 
            Join our extensive network of scientists, professional experts, and research scholars to stay informed and connected.
          </p> 
        </div>
      <div className='contact-boxes'>

          <div className='contact-box'>
            <FaMicrophone className='contact-icon' />
            <h2 className='contact-headingbox'>Address</h2>
            <p className='contact-paragraphbox'>
              16192 Coastal Highway Lewes, Delaware, USA 19958
            </p>
           </div>
    
          <div className='contact-box'>
            <PiGraduationCapFill className='contact-icon' />
            <h2 className='contact-headingbox'>Phone number</h2>
            <p className='contact-paragraphbox'>
              +1 630 768 1199
            </p>
          </div>
    
          <div className='contact-box'>
            <MdEmail className='contact-icon' />
            <h2 className='contact-headingbox'>E-mail address</h2>
            <p className='contact-paragraphbox'>
              support@stripeconferences.com
            </p>
        </div>
      </div>
 </div>

 <div className='contact-form-row'>
      {/* Form Section */}
      <div className='contact-form-section'>
        <form className='form' onSubmit={handleSubmit}>
          <h1>CONTACT US</h1>
          <label htmlFor="fname">First Name:</label>
          <input 
            type="text" 
            id="fname" 
            name="fname" 
            value={formData.fname}
            onChange={handleChange} 
            required 
          />
          <label htmlFor="email">Your Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange} 
            required 
          />
          <label htmlFor="message">Your Message: (optional)</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            value={formData.message}
            onChange={handleChange} 
          />
          <button className='btn' type="submit">Submit</button>
        </form>
      </div>

      {/* Map Section */}
      <div className='contact-map'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5527949283564!2d78.32674347331772!3d17.3852392028706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95eda0afde1b%3A0x3ceeb127b9f59a87!2sKokapet%20Terminal!5e0!3m2!1sen!2sin!4v1727760886974!5m2!1sen!2sin" 
          title="Location map"
          width="570" 
          height="400" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>

 </>
  )
}

export default Contact
