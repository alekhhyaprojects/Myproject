import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Footer.css';

const Footer = () => {
  const [showEvents, setShowEvents] = useState(false);

  const toggleEvents = () => {
    setShowEvents(!showEvents); 
  };

  return (
    <div className='footer-page'>
    <div className='footer-container'>
      {/* Footer Right Section */}
      <div className='footer-right-container'>
        <img 
          src="https://virologyevents.com/wp-content/uploads/2024/07/Virology-removebg-preview.png" 
          alt="Virology Events Logo" 
          className='footer-logo-container'
        />        
        <p className='footer-description-container'>
          An ecosystem that brings scholars, researchers, and the scientific community together to share knowledge on scientific progress that benefits humanity and our existence itself.
        </p>
      </div>

      {/* Footer Center Section */}
      <div className='footer-center-container'>
        <h3 className='footerhead-container'>USEFUL LINKS</h3>
        <p><Link to="/">Home</Link></p>
        
        {/* Clickable link to toggle event list */}
        <p onClick={toggleEvents} style={{ cursor: 'pointer' }}>
          Upcoming Events
        </p>
        
        {/* Dropdown list for upcoming events */}
        {showEvents && (
          <div className='events-dropdown'>
           <p><Link to="/Virologysummit">Virology Summit Conference- 2024</Link></p>
            <p><Link to="/Emerging">Emerging Viral Diseases Conference- 2024</Link></p>
            <p><Link to="/Virologyinfectious">Virology Infectious Disease Conference- 2025</Link></p>
            <p><Link to="/">Vaccine Development Forum Conference- 2025</Link></p>
            <p><Link to="/">Antiviral Therapy Conference- 2025</Link></p>
            <p><Link to="/">Viral Epidemiology Conference- 2025</Link></p>
          </div>
        )}

        <p><Link to="/Awards">Awards</Link></p>
        <p><Link to="/Speakerguidelines">Speaker Guidelines</Link></p>
        <p><Link to="/Contact">Contact Us</Link></p>
      </div>

      {/* Footer Left Section */}
      <div className='footer-left-container'>
        <h3>CONTACT INFO</h3>
        <p>+1 630 768 1199</p>
        <p>ariana@stripeconferences.com</p>
        <p>16192 Coastal Highway, Lewes, Delaware, USA 19958</p>
      </div>
    </div>

    <div className='policy'>
      <div className='policy-row'>
      <p><Link to="/Privacy">Privacy Policy</Link></p>
      <p><Link to="/Terms">Terms and Conditions</Link></p>
      <p><Link to="/Cancellation">Cancellation Policy</Link></p>
      </div>
      <div className='policy-copyright'>
      <p>Copyright 2024 © virology events(Stripe Conferences)</p>
      </div>
    </div>

    </div>
  );
};

export default Footer;