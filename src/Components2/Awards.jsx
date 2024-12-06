import React, { useState } from 'react';
import './Awards.css';
import { FaMicrophone } from "react-icons/fa6";
import { PiGraduationCapFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const Awards = () => {

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
    <div className='awards'>
      <h1 className='head1'>Awards Nomination</h1>

    <div className='awards-text'>
      <p className='p-text'>
        We are delighted to present an overview of our nomination process and guidelines, 
        designed to recognize and celebrate the achievements of exceptional scholars, students, scientists, physicians, and professionals. 
        Your contributions deserve the recognition they merit, and we invite you to participate in this prestigious opportunity.
      </p>

      <div className='t'>
        <h3 className='heading-awards'>Expressing Interest:</h3>
        <p className='para-awards'>
          If you believe your work deserves recognition, we encourage you to submit a 100-word abstract. 
          This abstract should succinctly outline the key points within your field of expertise, allowing us to understand
          the depth and significance of your contributions.
        </p>
      </div>

      <div className='t'>
        <h3 className='heading-awards'>Biography and Publications:</h3>
        <p className='para-awards'>
          To showcase your accomplishments, we kindly request a brief 50-word biography highlighting your outstanding achievements. Additionally, 
          please provide a minimum of five publications in reputed journals to establish your expertise and impact in your respective field.
        </p>
      </div>

      <div className='t'>
        <h3 className='heading-awards'>Thorough Review and Verification:</h3>
        <p className='para-awards'>
        Each nomination undergoes a comprehensive review and verification process by our esteemed organizing committee and local team. Their expert evaluation focuses on assessing the quality, significance, and impact of your contributions, ensuring a fair and rigorous selection process.
        </p>
      </div>
      <div className='t'>
        <h3 className='heading-awards'>The Opportunity Ahead: </h3>
        <p className='para-awards'>
        Selected participants will have the honor of presenting and participating in our upcoming series of esteemed events. These include the Global Tech Summit series, dedicated to shaping the future of technology; the Health Summit series, committed to making healthcare more affordable; and the Global Pharma Summit series, focused on accessible medicine for all. These transformative gatherings and pre-conference meetings will take place in major cities worldwide, bustling urban centers that serve as hubs of commerce, culture, and innovation.
        </p>
      </div>


      <div className='t'>
        <h3 className='heading-awards'>Unveiling Global Cityscapes:</h3>
        <p className='para-awards'>
        Among the top 50 major cities, Tokyo, Delhi, Shanghai, Sao Paulo, and Mexico City represent the dynamic urban landscapes of Asia, Latin America, and beyond. Cairo and Mumbai showcase the vibrant spirit and historical significance of cities in Africa and South Asia. Beijing, Osaka, Riyadh, and Dubai exemplify the rapid growth and economic prowess of cities in China and the Middle East. Istanbul bridges the gap between Europe and Asia, while Buenos Aires and Rio de Janeiro bring the vibrant essence of South America to the forefront. These cities, alongside other remarkable destinations like London, Moscow, New York City, Sydney, Hyderabad, Chennai, Vizag, Mumbai, Johannesburg, and Los Angeles, contribute to the global tapestry of diverse cultures, languages, and opportunities. Each city offers its own unique charm and attractions, attracting people from around the world and fostering the interconnectedness of our global society.

For Detailed Guidelines and Further Information: For a comprehensive understanding of the guidelines and additional information, please visit the award nomination pages on our websites. If you have any questions or require assistance, our dedicated committee members are readily available to support and guide you throughout the nomination process. Your journey towards recognition begins with a single step, and we are here to accompany you every step of the way. Together, let us celebrate excellence, shape the future, and inspire generations to come. We extend our heartfelt gratitude for your unwavering commitment to maintaining standards and making a remarkable difference in the world of academia, research, and innovation.

Get In Touch
To learn more about our conferences and events, please get in touch with us. Join our extensive network of scientists, professional experts, and research scholars to stay informed and connected.

Address
16192 Coastal Highway Lewes, Delaware, USA 19958

Phone number
+1 630 768 1199

E-mail address
support@stripeconferences.com

CONTACT US
Your name
 Your email
 Your message (optional)
 

ecosystem that brings the Scholars, people in the scientific study & research, knowledge group of the society, the students, learners and more on a common ground – to share their knowledge, on the scientific progress that brings along the benefits to humanity and to our existence itself.

USEFUL LINKS
Home
Upcoming Events

Awards
Speaker Guidelines
Contact Us
CONTACT INFO
+1 630 768 1199
ariana@stripeconferences.com
16192 Coastal Highway Lewes, Delaware, USA 19958
Privacy Policy Terms and Conditions Cancellation Policy
Copyright 2024 © virology events(Stripe Conferences)

        </p>
      </div>
    </div>
  <div className='awardscontainer'>
        <div>
          <h2 className='head2'>Get In Touch</h2>
          <p className='para'>
            To learn more about our conferences and events, please get in touch with us. 
            Join our extensive network of scientists, professional experts, and research scholars to stay informed and connected.
          </p> 
        </div>

        <div className='awardboxes'> 
          <div className='awards-box'>
            <FaMicrophone className='awards-icon' />
            <h2 className='headingbox'>Address</h2>
            <p className='paragraphbox'>
              16192 Coastal Highway Lewes, Delaware, USA 19958
            </p>
          </div>
    
          <div className='awards-box'>
            <PiGraduationCapFill className='awards-icon' />
            <h2 className='headingbox'>Phone number</h2>
            <p className='paragraphbox'>
              +1 630 768 1199
            </p>
          </div>
    
          <div className='awards-box'>
            <MdEmail className='awards-icon' />
            <h2 className='headingbox'>E-mail address</h2>
            <p className='paragraphbox'>
              support@stripeconferences.com
            </p>
          </div>
        </div>
      </div>
      <div className='contactform-row'>
  {/* Form Section */}
  <div className='contactform-section'>
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
  <div className='map'>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5527949283564!2d78.32674347331772!3d17.3852392028706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95eda0afde1b%3A0x3ceeb127b9f59a87!2sKokapet%20Terminal!5e0!3m2!1sen!2sin!4v1727760886974!5m2!1sen!2sin" 
      title="Location map"
      width="570" 
      height="450" 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</div>
</div>
  );
}

export default Awards;