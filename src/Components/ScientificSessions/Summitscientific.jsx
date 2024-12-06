import React, { useState } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { PiGraduationCapFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

import './Summitscientific.css';


const topics = [
  {
    title: "Emerging Viral Infections: New Threats and Global Responses",
    content: "This session will explore the dynamics of newly emerging viral diseases, including Ebola, Zika, and SARS-CoV-2. Discussions will focus on the epidemiological factors driving their spread, the role of environmental and socioeconomic conditions, and innovative approaches to surveillance and outbreak control. Leading experts will present case studies on recent outbreaks and the global preparedness strategies being implemented to combat these new viral threats."
  },
  {
    title: "COVID-19 and Long-Term Impact: Variants, Vaccines, and Healthcare Challenges",
    content: "Exploring the long-term implications of COVID-19, this session will discuss variants, ongoing vaccine development, and the persistent healthcare challenges posed by the pandemic."
  },
  {
    title: "Viral Immunology: Mechanisms of Host Defense and Immune Evasion",
    content: "This session covers how viruses interact with host immune systems and the mechanisms they use to evade immune detection."
  },
  {
    title: "Zoonotic Viruses: Transmission from Animals to Humans",
    content: "Focusing on zoonotic transmission, this session highlights key viruses like Ebola and COVID-19, and how they spread from animals to humans."
  },
  {
    title: "Antiviral Drug Development: Innovations and Challenges in Treatment",
    content: "Developing effective antiviral drugs remains one of the most significant challenges in virology. This session will explore breakthroughs in drug discovery, focusing on new antiviral agents, mechanisms of action, and drug resistance."
  },
  {
    title: "Vaccine Development: Novel Platforms and Global Accessibility",
    content: "This session will examine the latest advances in vaccine development, with an emphasis on new platforms such as mRNA vaccines and viral vector vaccines. Discussions will focus on the scientific, logistical, and ethical challenges of developing and distributing vaccines globally."
  },
  {
    title: "Viral Genomics and Evolution: Tracking Mutations and Evolutionary Trends",
    content: "The rapid evolution of viruses presents ongoing challenges for global health. This session will focus on how genomic technologies are being used to track viral mutations and understand evolutionary patterns."
  },
  {
    title: "HIV/AIDS Research: Advances in Treatment and Prevention",
    content: "With the advent of new therapies, the landscape of HIV/AIDS treatment and prevention has dramatically evolved. This session will cover recent advances in antiretroviral therapies, HIV vaccines, and long-acting injectable treatments."
  },
  {
    title: "Viral Pathogenesis: Mechanisms of Disease and Host Interactions",
    content: "Viral pathogenesis remains a key focus in understanding how viruses cause disease. This session will explore the molecular and cellular mechanisms by which viruses invade and damage host tissues."
  },
  {
    title: "Vector-Borne Viral Diseases: Challenges in Control and Prevention",
    content: "Vector-borne diseases such as dengue, Zika, and chikungunya continue to pose significant public health challenges. This session will examine the biology of viral vectors like mosquitoes and ticks."
  }
];

const topics2 = [
  {
    title: "Viruses in Global Health: Policy, Preparedness, and Ethical Considerations",
    content: "This session will discuss the intersection of virology with global health policy, pandemic preparedness, and ethical issues. Topics will include the role of international organizations in coordinating responses to viral outbreaks, the challenges of equitable healthcare access during pandemics, and ethical considerations in vaccine distribution and research. Case studies will focus on the lessons learned from recent global viral outbreaks, including COVID-19 and Ebola."
  },
  {
    title: "Viral Diagnostics: New Technologies for Early Detection and Monitoring",
    content: "Rapid and accurate viral diagnostics are critical for controlling outbreaks and guiding treatment. This session will focus on advances in diagnostic technologies, including molecular diagnostics, point-of-care testing, and next-generation sequencing. Presenters will highlight how these technologies are being applied to detect a wide range of viral infections, from respiratory viruses to blood-borne pathogens, and the role of diagnostics in outbreak management."
  },
  {
    title: "Viral Infections and Cancer: Oncogenic Viruses and Therapeutic Approaches",
    content: "Several viruses are known to cause cancer, including human papillomavirus (HPV), Epstein-Barr virus, and hepatitis B and C. This session will explore the mechanisms by which these oncogenic viruses contribute to cancer development, as well as strategies for prevention and treatment. Discussions will include the latest research on viral-induced cancers, vaccine development (e.g., HPV vaccine), and the potential for immunotherapy in treating virus-associated cancers."
  },
  {
    title: "Viral Therapeutics: Monoclonal Antibodies and Gene Therapy",
    content: "Monoclonal antibodies and gene therapy are emerging as powerful tools in the fight against viral infections. This session will cover the development and application of these therapies for a range of viral diseases, including HIV, hepatitis, and respiratory viruses. Experts will discuss the challenges and opportunities of using these cutting-edge approaches, including issues of delivery, durability, and access."
  },
  {
    title: "Pediatric Viral Infections: Challenges and Innovations in Treatment",
    content: "Viral infections in children present unique challenges for diagnosis, treatment, and prevention. This session will focus on the latest research into pediatric viral diseases, including respiratory syncytial virus (RSV), rotavirus, and enteroviruses. Topics will include advances in pediatric vaccines, antiviral therapies tailored to children, and strategies to improve pediatric health outcomes globally."
  },
  {
    title: "Respiratory Viral Infections: Influenza, RSV, and Beyond",
    content: "Respiratory viruses remain a leading cause of morbidity and mortality worldwide. This session will focus on the epidemiology, clinical management, and prevention of major respiratory viral infections, including influenza, RSV, and emerging respiratory pathogens. Presentations will highlight recent advances in antiviral treatments, vaccine development, and public health strategies for controlling respiratory viral outbreaks."
  },
  {
    title: "Chronic Viral Infections: Hepatitis and Beyond",
    content: "Chronic viral infections such as hepatitis B and C continue to pose long-term health challenges. This session will explore the mechanisms of viral persistence, the immune responses involved, and the development of cirrhosis and liver cancer. Experts will discuss new treatments, including antiviral therapies and liver transplantation, and the global efforts to eliminate hepatitis as a public health threat."
  },
  {
    title: "Environmental Virology: Impact of Climate Change on Viral Ecology",
    content: "Climate change is increasingly recognized as a factor influencing viral transmission and outbreaks. This session will explore the relationship between environmental changes and viral ecology, focusing on how shifting ecosystems, deforestation, and global warming are altering the dynamics of viral emergence. Presenters will also discuss the potential for new viral threats linked to changing environmental conditions."
  },
  {
    title: "Viral Epidemiology: Tracking Global Trends and Outbreaks",
    content: "Understanding the patterns of viral outbreaks is critical for controlling their spread. This session will cover advances in the field of viral epidemiology, focusing on how data from outbreaks, including COVID-19, influenza, and other viruses, is being used to inform public health interventions. Presentations will highlight the use of digital epidemiology, big data, and mathematical modeling to track viral transmission and predict future outbreaks."
  },
  {
    title: "Viral Evolution and Host Adaptation: Cross-Species Transmission and Host Shifts",
    content: "Viruses are constantly evolving and adapting to new hosts, leading to cross-species transmission events. This session will focus on the genetic and ecological factors that drive viral host shifts and the implications for human health. Case studies will include research on influenza, coronaviruses, and arboviruses, highlighting the evolutionary mechanisms that facilitate viral adaptation to new species and environments."
  }
];

const Summitscientific = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (index) => {
    setSelectedTopic(selectedTopic === index ? null : index); // Toggle content display
  };

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
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="summit_scientific_container">
      <div className="summit_scientific_background_container">
        <h1>Virology Scientific Session</h1>
        <p>Trending research Scientific topics</p>
      </div>

      <div className="summit_scientific_content_container">
        <h2 className="summit_scientific_heading">Trending research Virology scientific topics...</h2>
        <p>Here are a few trending topics in Virology research</p>
        <div className="summit_scientific_topic-rows">
          <ul className="summit_scientific_topic-list">
            {topics.map((topic, index) => (
              <li key={index} className="summit_scientific_topic-item">
                <div onClick={() => handleTopicClick(index)} className="summit_scientific_topic-title">
                  <FaMicrophone className="summit_scientific_icon" /> {topic.title}
                </div>
                {selectedTopic === index && (
                  <p className="summit_scientific_topic-content">{topic.content}</p>
                )}
              </li>
            ))}
          </ul>

          <ul className="summit_scientific_topic-list">
            {topics2.map((topic, index) => (
              <li key={index} className="summit_scientific_topic-item">
                <div onClick={() => handleTopicClick(index + topics.length)} className="summit_scientific_topic-title">
                  <FaMicrophone className="summit_scientific_icon" /> {topic.title}
                </div>
                {selectedTopic === index + topics.length && (
                  <p className="summit_scientific_topic-content">{topic.content}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="scientific_button">
          <button className="scientific_btn">Abstract Summision</button>
          <button className="scientific_btn">Register Now</button>
        </div>
      </div>

      <div className='Brochure-box-container'>
        <div className='Brochure-box-text'>
          <h2 className='Brochure-box-head2'>Get In Touch</h2><hr/><br/>
          <p className='Brochure-box-para'>
            To learn more about our conferences and events, please get in touch with us. 
            Join our extensive network of scientists, professional experts, and research scholars to stay informed and connected.
          </p> 
        </div>
       <div className='Brochure-boxes'>
        <div className='Brochure-box'>
          <FaMicrophone className='Brochure-icon' />
          <h2 className='Brochure-headingbox'>Address</h2>
          <p className='Brochure-paragraphbox'>
            16192 Coastal Highway Lewes, Delaware, USA 19958
          </p>
        </div>

        <div className='Brochure-box'>
          <PiGraduationCapFill className='Brochure-icon' />
          <h2 className='Brochure-headingbox'>Phone number</h2>
          <p className='Brochure-paragraphbox'>
            +1 630 768 1199
          </p>
        </div>

        <div className='Brochure-box'>
          <MdEmail className='Brochure-icon' />
          <h2 className='Brochure-headingbox'>E-mail address</h2>
          <p className='Brochure-paragraphbox'>
            support@stripeconferences.com
          </p>
        </div>
      </div>
      </div>
      <div className='Brochure-form-row'>
        {/* Form Section */}
        <div className='Brochure-form-section'>
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
};

export default Summitscientific;