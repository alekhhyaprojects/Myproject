import React, { useState } from 'react';
import { IoMicSharp } from "react-icons/io5";
import { FaPaperclip } from "react-icons/fa";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import Flag from 'react-world-flags';
import './Infectiousabstract.css';

// Country list for the select dropdown
const countries = [
  { label: "Afghanistan", value: "AF" },
  { label: "Albania", value: "AL" },
  { label: "Algeria", value: "DZ" },
  { label: "Andorra", value: "AD" },
  { label: "Angola", value: "AO" },
  { label: "Argentina", value: "AR" },
  { label: "Armenia", value: "AM" },
  { label: "Australia", value: "AU" },
  { label: "Austria", value: "AT" },
  { label: "Azerbaijan", value: "AZ" },
  { label: "India", value: "IN" },  // Default option
  { label: "Zimbabwe", value: "ZW" },
];

// Custom components for react-select to display flags
const customSingleValue = ({ data }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Flag code={data.value} style={{ width: '20px', marginRight: '10px' }} />  {/* Flag image */}
    {data.label}  {/* Country name */}
  </div>
);

const customOption = (props) => {
  const { data, innerRef, innerProps } = props;
  return (
    <div ref={innerRef} {...innerProps} style={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
      <Flag code={data.value} style={{ width: '20px', marginRight: '10px' }} />  {/* Flag image */}
      {data.label}  {/* Country name */}
    </div>
  );
};

const Infectiousbstract = () => {
  const [phone, setPhone] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({ label: "India", value: "IN" });
  const [selectedSession, setSelectedSession] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [formData, setFormData] = useState({
    fname: '',
    country: '',
    phone: '',
    email: '',
  });
  const [file, setFile] = useState(null); // State for file upload

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setFormData({
      ...formData,
      country: selectedOption.label,
    });
  };

  const handleSelectSessionChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      window.open(selectedValue, '_blank');
      setSelectedSession('');
    }
  };

  const handleSelectTypeChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      window.open(selectedValue, '_blank');
      setSelectedType('');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Store the uploaded file
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    console.log('Uploaded File:', file); // Log the uploaded file
  };

  return (
    <>
      <div className='infectious-abstract-container'>
        <div className='infectious-abstract-text'>
          <h1>Virology Abstract Submission Form</h1>
          <p>Feel free to let me know if there's anything else you need help with!
          </p>
          <div className='infectious-abstract-row'>
            <h2>Abstract Template</h2>
            <button className='infectious-abstract-button'>Download here</button>
          </div>
        </div>
      </div>

      <div className='infectious-abstract-form-row'>
        <div className='infectious-abstract-form-section'>
          <form className='form' onSubmit={handleSubmit}>
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              required
            />

            <label htmlFor="country">Country:</label>
            <Select
              value={selectedCountry}
              options={countries}
              onChange={handleCountryChange}
              components={{ SingleValue: customSingleValue, Option: customOption }}
              placeholder="Select your country"
            />

            <label htmlFor="phone">Phone Number:</label>
            <PhoneInput
              country={'in'}  // Set India as the default country
              value={phone}
              onChange={handlePhoneChange}
              preferredCountries={['af', 'al', 'dz', 'ad', 'ao', 'ar', 'am', 'au', 'at', 'az', 'in', 'zw']}
              enableSearch={true}
              placeholder="Enter phone number"
              inputStyle={{ width: '300px' }}
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


            <label htmlFor="infectious-abstract-session-option">Abstract Session:</label>
            <div className="infectious-abstract-select">
              <select
                id="infectious-abstract-session-option"
                className="select"
                value={selectedSession}
                onChange={handleSelectSessionChange}
              >
                <option value="" disabled hidden>
                  -please choose an option-
                </option>
                <option value="Virologysummit">Viral Ecology and Climate Change</option>
                <option value="Emerging">Viral Diagnostics</option>
                <option value="Virologyinfectious">Viral Vector Development for Gene Therapy</option>
                <option value="Vaccine">Viral Pathogenesis</option>
                <option value="Antiviral">Viral Ecology and Environmental Virology</option>
                <option value="Viral">Viral Genomics</option>
                <option value="ViralImmunology">Viral Immunology and Immune Evasion Mechanisms</option>
                <option value="ViralOncology">Viral Oncology and Cancer Therapies</option>
              </select>
            </div>

            <label htmlFor="infectious-abstract-type-option">Abstract Type:</label>
            <div className="infectious-abstract-select">
              <select
                id="infectious-abstract-type-option"
                className="select"
                value={selectedType}
                onChange={handleSelectTypeChange}
              >
                <option value="" disabled hidden>
                  -please choose an option-
                </option>
                <option value="Keynote">Keynote Presentation</option>
                <option value="Oral">Oral Presentation</option>
                <option value="Poster">Poster Presentation</option>
                <option value="E-poster">E-poster</option>
              </select>
            </div>
            <label htmlFor="file-upload">Upload Abstract File:</label>
            <input
              type="file"
              id="file-upload"
              accept=".pdf,.doc,.docx" // Accept specific file types
              onChange={handleFileChange}
              required
            />

            <button className='infectious-abstract-btn' type="submit">Submit</button>
          </form>
        </div>

        <div className='presentation'>
          <div>
            <h1>Presentation Forum</h1>
          </div>
          <div className='p-row'><IoMicSharp className='p-icon' /> Keynote Forum</div><hr />
          <div className='p-row'><IoMicSharp className='p-icon' /> Mini-Plenary Sessions</div><hr />
          <div className='p-row'><IoMicSharp className='p-icon' /> Distinguished Speakers Forum</div><hr />
          <div className='p-row'><IoMicSharp className='p-icon' /> Student Forum</div><hr />
          <div className='p-row'><IoMicSharp className='p-icon' /> Poster Sessions</div><hr />
          <div className='p-row'><IoMicSharp className='p-icon' /> Young Researchers Forum</div><hr />
          <div className='p-row'><IoMicSharp className='p-icon' /> Educational Workshops</div><hr />
          <div className='p-row'><IoMicSharp className='p-icon' /> Research Workshop</div><hr />
          <div className='p-row'><IoMicSharp className='p-icon' /> Corporate Workshop</div><hr />
          <div className='p-row'><IoMicSharp className='p-icon' /> Highlights Of The Day Sessions</div><hr />
          <div className='p-row'><IoMicSharp className='p-icon' /> Meet The Professor</div><hr />
          <div className='p-row'><IoMicSharp className='p-icon' /> Educational Sessions</div><hr />
          <div className='p-row'><IoMicSharp className='p-icon' /> Training Programs</div><hr />
          <div className='last-p'> 
            <div className='icon-box'>
              <FaPaperclip className='last-icon'/>
            </div> 
            <div className='last-text'>
              <h1>Journal Publications</h1>
              <p>Go to publications page</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infectiousbstract;