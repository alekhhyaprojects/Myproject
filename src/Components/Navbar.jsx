import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      // Open the link in a new tab
      window.open(selectedValue, '_blank'); 
      setSelectedOption(''); // Reset the dropdown after navigation
    }
  };

  return (
    <nav className="container">
      <img
        src="https://virologyevents.com/wp-content/uploads/2024/07/Virology-removebg-preview.png"
        alt="logo"
        className="logo"
      />

      {/* Second div: Navigation List */}
      <div className="nav-menu">
        <ul className="main-menu">
          <li>
            <Link to="/">HOME</Link>
          </li>
          {/* Dropdown for Upcoming Conference replaced with select */}
          <li className="nav-li">
            <select
              id="upcoming-events"
              className="nav-select"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="" disabled hidden>
                UPCOMING EVENTS
              </option>
              <option value="Virologysummit">Virology Summit Conference- 2024</option>
              <option value="Emerging">Emerging Viral Diseases- 2024</option>
              <option value="Virologyinfectious">Virology Infectious Disease Conference- 2025</option>
              <option value="Vaccine">Vaccine Development Forum Conference- 2025</option>
              <option value="Antiviral">Antiviral Therapy Conference- 2025</option>
              <option value="Viral">Viral Epidemiology Conferences- 2025</option>
            </select>
          </li>
          <li>
            <Link to="/Awards">AWARDS</Link>
          </li>
          <li>
            <Link to="/Speakerguidelines">SPEAKER GUIDELINES</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li>
            <Link to="/Register">
              <h3 className="register">REGISTER NOW</h3>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;