import React, {useState} from 'react'
import './Vaccine.css'
import { TiTick } from "react-icons/ti";
import { FaMicrophone } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Vaccine = () => {
  const [selectedSection, setSelectedSection] = useState(null);

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
    <div>
       <div className='vaccine-background-container'>
        <div className='vaccine-v-text'>
        <p>July 7-8, 2025 | Zurich, Switzerland</p>
        <h3>International Conference on</h3>
        <h1>Virology and Infectious Disease- 2025</h1>
        <p>Theme: “Innovations in Viral Surveillance and Therapeutics: Bridging the Gap Between
        Discovery and Global Health Impact</p>
        </div>
        <div className='vaccine-summitbuttons'>
          <button><Link to="/Vaccineabstract">SUMMIT ABSTRACT</Link></button>
          <button><Link to="/Register">GO TO REGISTRATION</Link></button>
          <button>DOWNLOAD BROCHURE</button>
          <button>TENTATIVE PROGRAM</button>
        </div>
      </div>
</div>

<h1 className='vaccine-h'>Innovation-Driven Research</h1>


<div className="vaccine-infosection">
      {/* Section row with onClick functions */}
      <div className="vaccine-info-section-row">
        <p onClick={() => setSelectedSection("general-info")}>
          General Info
        </p>
        <p onClick={() => setSelectedSection("about-us")}>
          About Us
        </p>
        <p onClick={() => setSelectedSection("important-dates")}>
          Important Dates
        </p>
      </div>

      <div className="vaccine-info-section">
        {/* General Info Section */}
        {selectedSection === "general-info" && (
          <p className="p">
          Virology Conferences 2025 welcomes you to participate in the International Conference on Virology and Infectious Disease- 2025<br />
          International Emerging Viral Diseases Conference 2024, is an annual meeting organized to be a platform for researchers, engineers, academicians, and industrial experts from all over the world to present their research results and development activities in VIROLOGY.<br />
          With a rich program featuring keynote addresses from distinguished leaders in virology, engaging panel discussions, interactive workshops, and dynamic poster sessions, Virology 2024 offers a platform for robust scientific exchange and collaboration.<br />
          We would like to strongly encourage you to submit your abstracts and register ton attend in order to share your achievements in the fields of Virology.<br />
          We cordially invite the scientific community to participate in what promises to be a memorable meeting in November 2024 in Rome, ITALY.
          </p>
        )}

        {/* About Us Section */}
        {selectedSection === "about-us" && (
          <p className='p'>
            International Conference on Virology and Infectious Disease is organized by a dedicated team with a global reach, focused on advancing the field of virology for the benefit of the scientific community. As seasoned organizers of scientific meetings, we excel in building community networks and executing high-quality conferences<br /><br />
            
            Our expert team is proficient in conceptualizing, planning, and executing events in the field of virology. What sets us apart from our peers is our commitment to:<br /><br />
          <ul>
            <li>Building Networks: We foster broad collaboration and the sharing of knowledge across the global virology community.</li>
            <li>Enhancing Event Standards: We continuously strive to elevate the standards of our events to benefit the scientific community.</li>
            <li>Being a Trusted Source: We are recognized as a reliable source for organizing meetings in the field of virology.</li>
            <li>Supporting Young Researchers: We provide ample opportunities for young researchers to learn, grow, and collaborate with peers and experts.</li>
          </ul>
            We believe in the core values of trust, network building, integrity, and partnership. Join us at the International Virology Conference 2024 in Rome on November 25-26, and be part of a transformative event that promises to advance your knowledge, expand your network, and enrich your professional journey.
         </p>
        )}

        {/* Important Dates Section */}
        {selectedSection === "important-dates" && (
          <p className="p">
            Abstract Submission Deadline: May 15, 2025
            <br />
            Earlybird Registration Deadline: March 22, 2025
            <br />
            Standard Registration Deadline: May 25, 2025
            <br />
            Onspot Registration:  July 7, 2025  
            <br />
            Conference Dates:July 7-8, 2025
          </p>
        )}
      </div>
    </div>

    <div className="vaccine-scientific-sessions-container">
      <h1>Scientific Sessions/Topics</h1>
      <p>Please provide a concise overview of your proposed talk, presentation, symposium, or workshop that aligns with your session interest, including key themes and objectives.</p>  
      
      {/* Grid layout for topics */}
      <div className="vaccine-topics-grid">
        {/* Left Column */}
        <div className="vaccine-topics-column">
          <div className="vaccine-topic-item">
            <TiTick className="tick-icon" />
            <p>Emerging Viral Pathogens</p>
          </div>
          <div className="vaccine-topic-item">
            <TiTick className="tick-icon" />
            <p>Infectious Diseases</p>
          </div>
          <div className="vaccine-topic-item">
            <TiTick className="tick-icon" />
            <p>Genetic Changes in Viruses</p>
          </div>
          <div className="vaccine-topic-item">
            <TiTick className="tick-icon" />
            <p>Genomic and Molecular Approaches in Virology</p>
          </div>
          <div className="vaccine-topic-item">
            <TiTick className="tick-icon" />
            <p>Fungal Infectious Diseases</p>
          </div> <div className="vaccine-topic-item">
            <TiTick className="tick-icon" />
            <p>Blood Infectious Diseases</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="vaccine-topics-column">
          <div className="vaccine-topic-item">
            <TiTick className="tick-icon" />
            <p>Vaccines and Vaccination</p>
          </div>
          <div className="vaccine-topic-item">
            <TiTick className="tick-icon" />
            <p>STD and HIV Infection</p>
          </div>
          <div className="vaccine-topic-item">
            <TiTick className="tick-icon" />
            <p>Vaccine Development and Immunization Strategies</p>
          </div>
          <div className="vaccine-topic-item">
            <TiTick className="tick-icon" />
            <p>Viral Pathogenesis</p>
          </div>
          <div className="vaccine-topic-item">
            <TiTick className="tick-icon" />
            <p>Malaria</p>
          </div>
          <div className="vaccine-topic-item">
            <TiTick className="tick-icon" />
            <p>Dengue</p>
          </div>
        </div>
      </div>
      <button className='vaccine-scientificbutton'><Link to="/Vaccinescientific">view all scientific sessions</Link></button>
</div>


<div>
  <div className='registrationtext'>
  <h3>Related Conferences</h3>
  <p>    
  Emerging Pathogen Forum | Infectious Disease Trends |Viral Outbreak Research |
  Global Epidemic Conference | Virus Discovery Summit | Infection Dynamics Conference |
  Viral Threats Conference | Emerging Health Risks | Epidemic Preparedness | Viral Pathogenesis Research |
  Public Health and Infectious Diseases | Emerging Infectious Conference | Global Health Conference
  </p>
  </div>
  <h1 className='vaccine-h'>REGISTRATION</h1>
  <div className='vaccine-registration-boxes'>

    <div className='vaccine-registrationbox'>
      <div className='vaccine-inner-box'>
        <FaMicrophone className='boxicons' />
        <h4>Speaker</h4>
        <p>Early Bird Registration</p>
        <h3>$745</h3>
      </div>
      <button className='button'>Register now</button>
    </div>

  
    <div className='vaccine-registrationbox'>
      <div className='vaccine-inner-box'>
        <FaGraduationCap className='boxicons'/>
        <h4>Student</h4>
        <p>Early Bird</p>
        <h3>$395
        </h3>
      </div>
      <button className='button'>Register now</button>
    </div>


    <div className='vaccine-registrationbox'>
      <div className='vaccine-inner-box'>
        <FaBusinessTime  className='boxicons' />
        <h4>Delegate</h4>
        <p>Early Bird</p>
        <h3>$795</h3>
      </div>
      <button className='button'>Register now</button>
    </div>
  </div>
</div>


<div>
  <div className='vaccine-Get-text'>
  <h1 className='vaccine-h'>Get In Touch</h1>
  <p>To learn more about our conferences and events, please get in touch with us. Join our extensive network of scientists, professional experts, 
    and research scholars to stay informed and connected.</p>
  </div>
  <div className='vaccine-registration-boxes2'>

    <div className='vaccine-registrationbox2'>
      <div className='vaccine-inner-box2'>
        <FaMicrophone className='boxicons2' />
        <h4>Address</h4>
        <p>16192 Coastal Highway Lewes, Delaware, USA 19958</p>
      </div>
    </div>

  
    <div className='vaccine-registrationbox2'>
      <div className='vaccine-inner-box2'>
        <FaGraduationCap className='boxicons2'/>
        <h4>Phone number</h4>
        <p>+1 424 382 0198</p>
      </div>
    </div>


    <div className='vaccine-registrationbox2'>
      <div className='vaccine-inner-box2'>
        <FaBusinessTime  className='boxicons2' />
        <h4>E-mail address</h4>
        <p>ariana@stripeconferences.com</p>
      </div>
    </div>
  </div>
  </div>


  <div className='m-media'>
  <h1 className='m-Mediahead'>Media Patner's</h1>
  <div className='m-Mediacontainer'>
   <div className='m-Mediabox1'>
   <img src="https://th.bing.com/th/id/OIP.dvp1KVtUjM7dPTR5dPEsRgAAAA?rs=1&pid=ImgDetMain" alt="img" className='M-boximg' />
   </div>
   <div className='m-Mediabox1'>
   <img src="https://i0.wp.com/blog.10times.com/wp-content/uploads/2019/09/cropped-10times-logo-hd.png?fit=3077%2C937&ssl=1" alt="img" className='M-boximg' />
   </div>
   <div className='m-Mediabox1'>
   <img src="https://d35w6hwqhdq0in.cloudfront.net/transform/compress/21e1bffc6a43c967299cad0a1a235c8f.png" alt="img" className='M-boximg' />
   </div>
   <div className='m-Mediabox1'>
   <img src="https://www.thequeenshall.net/sites/default/files/images/tradfest-colour.png" alt="img" className='M-boximg' />
   </div>
   <div className='m-Mediabox1'>
   <img src="https://www.biihealthtech.com/wp-content/uploads/2023/09/World-Conference-Alerts.jpg" alt="img" className='M-boximg' />
  </div>
   <div className='m-Mediabox1'>
   <img src="https://virologyevents.com/wp-content/uploads/2024/07/events-in-ammeric-1.webp" alt="img" className='M-boximg'/>
  </div>
</div>
</div>

<div className='vaccine-venue'>
  <div className='vaccine-venuetext'>
   <h1>Venue</h1>
   <p>Paris, the capital of France, is a vibrant city known for its rich cultural and scientific heritage. Home to renowned institutions
     such as the Sorbonne and the CNRS, Paris fosters an environment of innovation and collaboration. The city is famous for its iconic landmarks, 
    including the Eiffel Tower and the Louvre, which reflect its historical significance. With its charming neighborhoods, 
    world-class cuisine, and dynamic arts scene, Paris provides an inspiring setting for scientific conferences, encouraging fruitful discussions
     and connections among researchers and professionals from around the globe.</p>
  </div>

  <div className='vaccine-venuemap'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5527949283564!2d78.32674347331772!3d17.3852392028706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95eda0afde1b%3A0x3ceeb127b9f59a87!2sKokapet%20Terminal!5e0!3m2!1sen!2sin!4v1727760886974!5m2!1sen!2sin" 
          title="Location map"
          width="560" 
          height="350" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
</div>


<div className='vaccine-contact-form-section'>
  <form className='vaccine-form' onSubmit={handleSubmit}>
    <h1 className='vaccine-contactus-heading'>CONTACT US</h1>
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
    <button className='vaccine-btn' type="submit">Submit</button>
  </form>
</div>
    </>
  )
}

export default Vaccine