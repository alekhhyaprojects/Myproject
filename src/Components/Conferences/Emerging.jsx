import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './Emerging.css'
import { TiTick } from "react-icons/ti";
import { FaMicrophone } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa6";

const Emerging = () => {
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
       <div className='emerging-background-container'>
        <div className='E-text'>
        <p>November 25 - 26, 2024 | Paris, France.</p>
        <h3>International Conference on</h3>
        <h1>Emerging Viral Diseases</h1>
        <p>Theme: Innovation in Viral Sciences: Current Trends and Future Directions</p>
        </div>
        <div className='emerging-summitbuttons'>
          <button><Link to="/Emergingabstract">SUMMIT ABSTRACT</Link></button>
          <button><Link to="/Register">GO TO REGISTRATION</Link></button>
          <button><Link to="/Emergingbrochure">DOWNLOAD BROCHURE</Link></button>
          <button>TENTATIVE PROGRAM</button>
        </div>
      </div>
</div>

<h1 className='E-h'>Innovation-Driven Research</h1>


<div className="emerging-info-section">
      {/* Section row with onClick functions */}
      <div className="emerging-info-section-row">
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

      <div className="emerging-info-section">
        {/* General Info Section */}
        {selectedSection === "general-info" && (
          <p className="info-p">
          Emerging Viral Diseases Conferences 2024 welcomes you to participate in the International Emerging Viral Diseases Which is scheduled on NOVEMBER 25-26 2024, in Rome, Italy<br />
          International Emerging Viral Diseases Conference 2024, is an annual meeting organized to be a platform for researchers, engineers, academicians, and industrial experts from all over the world to present their research results and development activities in VIROLOGY.<br />
          With a rich program featuring keynote addresses from distinguished leaders in virology, engaging panel discussions, interactive workshops, and dynamic poster sessions, Virology 2024 offers a platform for robust scientific exchange and collaboration.<br />
          We would like to strongly encourage you to submit your abstracts and register ton attend in order to share your achievements in the fields of Virology.<br />
          We cordially invite the scientific community to participate in what promises to be a memorable meeting in November 2024 in Rome, ITALY.
          </p>
        )}

        {/* About Us Section */}
        {selectedSection === "about-us" && (
          <p className='info-p'>
            The International Emerging Viral Diseases Conference is organized by a dedicated team with a global reach, focused on advancing the field of virology for the benefit of the scientific community. As seasoned organizers of scientific meetings, we excel in building community networks and executing high-quality conferences.<br /><br />
            
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
          <p className="info-p">
            Abstract Submission Deadline: August 10, 2024
            <br />
            Earlybird Registration Deadline: May 10, 2024
            <br />
            Standard Registration Deadline: October 13, 2024
            <br />
            Onspot Registration: November 25, 2024  
            <br />
            Conference Dates: November 25-26, 2024
          </p>
        )}
      </div>
    </div>

    <div className="emerging-scientific-sessions-container">
      <h1>Scientific Sessions/Topics</h1>
      <p>Please provide a concise overview of your proposed talk, presentation, symposium, or workshop that aligns with your session interest, including key themes and objectives.</p>  
      
      {/* Grid layout for topics */}
      <div className="emerging-topics-grid">
        {/* Left Column */}
        <div className="emerging-topics-column">
          <div className="emerging-topic-item">
            <TiTick className="tick-icon" />
            <p>Viral Ecology and Climate Change</p>
          </div>
          <div className="emerging-topic-item">
            <TiTick className="tick-icon" />
            <p>Viral Diagnostics</p>
          </div>
          <div className="emerging-topic-item">
            <TiTick className="tick-icon" />
            <p>Viral Vector Development for Gene Therapy</p>
          </div>
          <div className="emerging-topic-item">
            <TiTick className="tick-icon" />
            <p>Viral Pathogenesis</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="emerging-topics-column">
          <div className="emerging-topic-item">
            <TiTick className="tick-icon" />
            <p>Viral Ecology and Environmental Virolog</p>
          </div>
          <div className="emerging-topic-item">
            <TiTick className="tick-icon" />
            <p>Viral Genomics</p>
          </div>
          <div className="emerging-topic-item">
            <TiTick className="tick-icon" />
            <p>Viral Immunology and Immune Evasion Mechanisms</p>
          </div>
          <div className="emerging-topic-item">
            <TiTick className="tick-icon" />
            <p>SARS-CoV-2 Variants and Evolution</p>
          </div>
        </div>
      </div>
      <button className='scientificbutton'><Link to="/Emergingscientific">view all scientific sessions</Link></button>
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
  <h1>REGISTRATION</h1>
  <div className='emerging-registration-boxes'>

    <div className='emerging-registrationbox'>
      <div className='emerging-inner-box'>
        <FaMicrophone className='boxicons' />
        <h4>Speaker</h4>
        <p>Early Bird Registration</p>
        <h3>$745</h3>   
      </div>
      <button className='button'>Register now</button>
    </div>

  
    <div className='emerging-registrationbox'>
      <div className='emerging-inner-box'>
        <FaGraduationCap className='boxicons'/>
        <h4>Student</h4>
        <p>Early Bird</p>
        <h3>$395
        </h3>
      </div>
      <button className='button'>Register now</button>
    </div>


    <div className='emerging-registrationbox'>
      <div className='emerging-inner-box'>
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
  <div class="registrationtext">
  <h1 className='registrationtext-heading'>Get In Touch</h1>
  <p>To learn more about our conferences and events, please get in touch with us. Join our extensive network of scientists, professional experts, 
    and research scholars to stay informed and connected.</p>
  </div>
  <div className='emerging-registration-boxes2'>

    <div className='emerging-registrationbox2'>
      <div className='emerging-inner-box2'>
        <FaMicrophone className='boxicons2' />
        <h4>Address</h4>
        <p>16192 Coastal Highway Lewes, Delaware, USA 19958</p>
      </div>
    </div>

  
    <div className='emerging-registrationbox2'>
      <div className='emerging-inner-box2'>
        <FaGraduationCap className='boxicons2'/>
        <h4>Phone number</h4>
        <p>+1 424 382 0198</p>
      </div>
    </div>


    <div className='emerging-registrationbox2'>
      <div className='emerging-inner-box2'>
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

<div className='emerging-venue'>
  <div className='emerging-venuetext'>
   <h1>Venue</h1>
   <p>Paris, the capital of France, is a vibrant city known for its rich cultural and scientific heritage. Home to renowned institutions
     such as the Sorbonne and the CNRS, Paris fosters an environment of innovation and collaboration. The city is famous for its iconic landmarks, 
    including the Eiffel Tower and the Louvre, which reflect its historical significance. With its charming neighborhoods, 
    world-class cuisine, and dynamic arts scene, Paris provides an inspiring setting for scientific conferences, encouraging fruitful discussions
     and connections among researchers and professionals from around the globe.</p>
  </div>

  <div className='emerging-venuemap'>
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


<div className='virologyemerging-contact-form-section'>
  <form className='virologyemerging-form' onSubmit={handleSubmit}>
    <h1 className='virologyemerging-contactus-heading'>CONTACT US</h1>
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
    <button className='virologyemerging-btn' type="submit">Submit</button>
  </form>
</div>

</>
    
  )
}

export default Emerging
