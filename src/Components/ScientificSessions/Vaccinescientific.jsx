import React, { useState } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { PiGraduationCapFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import "./Vaccinescientific.css"

const topics = [
    {
      title: "Advances in Viral Genomics: Implications for Vaccine Design",
      content: "This session will explore how advancements in viral genomics are revolutionizing vaccine development. Presenters will discuss the role of whole-genome sequencing in identifying viral mutations and how these insights are applied to design vaccines that target conserved regions of viral genomes. Case studies on viral diseases like HIV, Zika, and SARS-CoV-2 will be used to highlight how genomic data drives next-generation vaccine development."
    },
    {
      title: "mRNA Vaccines: A New Era in Vaccine Technology",
      content: "This session will focus on mRNA vaccine platforms, discussing the rapid development and success of vaccines against COVID-19 and their application to other viral diseases. Topics will include the mechanics of mRNA vaccines, the advantages of mRNA over traditional vaccine platforms, and ongoing research into vaccines for diseases such as influenza, Zika, and rabies using this technology."
    },
    {
      title: "Viral Evolution and Vaccine Escape: Challenges and Solutions",
      content: "This session will address the impact of viral evolution on vaccine effectiveness, with a focus on antigenic drift and shift. Presenters will discuss how rapidly mutating viruses, like influenza and SARS-CoV-2, escape immune responses induced by vaccines. Strategies to overcome viral mutation, such as the development of universal vaccines and updating vaccine strains, will be examined."
    },
    {
      title: "Live-Attenuated and Inactivated Vaccines: Classic Approaches, Modern Updates",
      content: "Despite the rise of new vaccine platforms, live-attenuated and inactivated vaccines remain foundational in virology. This session will review the history and mechanisms of these vaccine types, focusing on their safety profiles, immune responses, and ongoing efforts to improve them. Case studies will include polio, measles, and the development of novel vaccines for emerging viral diseases."
    },
    {
      title: "Viral Vector-Based Vaccines: Engineering Immunity",
      content: "This session will cover the development and application of viral vector-based vaccines, such as those using adenoviruses and poxviruses as delivery platforms. Topics will include the advantages of viral vectors in inducing robust immune responses, safety concerns, and the use of viral vector platforms in vaccines for diseases such as Ebola, COVID-19, and RSV."
    },
    {
      title: "Challenges in Vaccine Development for Chronic Viral Infections",
      content: "Chronic viral infections like HIV, hepatitis B, and herpes present unique challenges for vaccine development. This session will explore the mechanisms by which these viruses evade immune responses and persist in the host. Researchers will present updates on vaccine strategies aimed at controlling or curing chronic infections, including therapeutic vaccines and immunotherapy."
    },
    {
      title: "Adjuvants in Vaccine Development: Boosting Immune Responses",
      content: "Adjuvants play a crucial role in enhancing the effectiveness of vaccines by boosting the immune response. This session will discuss the different types of adjuvants used in viral vaccines, their mechanisms of action, and how they are selected during vaccine design. Presenters will also review the role of adjuvants in vaccines for influenza, HPV, and emerging viral threats."
    },
    {
      title: "Universal Vaccines: The Future of Broad-Spectrum Viral Protection",
      content: "This session will focus on the quest to develop universal vaccines, particularly for highly mutable viruses like influenza and coronaviruses. Presenters will discuss strategies for targeting conserved viral epitopes and the challenges in inducing broad and durable immune responses. The session will highlight ongoing research into universal vaccines for flu, HIV, and other rapidly evolving viruses."
    },
    {
      title: "Nanoparticle-Based Vaccines: Precision in Vaccine Delivery",
      content: "Nanoparticle-based vaccines offer a new approach to delivering antigens to the immune system in a highly targeted manner. This session will cover the design and development of nanoparticle vaccines, discussing their advantages in promoting strong and sustained immune responses. Case studies on the use of nanoparticles in vaccines for COVID-19, RSV, and cancer will be highlighted."
    },
    {
      title: "Vaccine Safety and Public Perception: Overcoming Misinformation",
      content: "Ensuring vaccine safety and addressing public concerns is critical for successful vaccine deployment. This session will cover the rigorous safety testing required for vaccines, post-market surveillance, and strategies to communicate vaccine safety to the public. Experts will discuss how misinformation can derail vaccination efforts and present strategies to build public trust in vaccines."
    }
  ];
  
  const topics2 = [
    {
      title: "Reverse Vaccinology: Designing Vaccines from Genomic Data",
      content: "This session will explore the use of reverse vaccinology, a method that involves screening pathogen genomes to identify potential vaccine targets. Presenters will highlight how this approach has been used to develop vaccines against meningitis, malaria, and other viral infections. The session will focus on the promise of reverse vaccinology in rapidly developing vaccines for emerging viruses."
    },
    {
      title: "T-Cell Based Vaccines: Targeting Cellular Immunity",
      content: "Most vaccines target antibody responses, but T-cell based vaccines focus on inducing cellular immunity, which is essential for controlling many viral infections. This session will discuss the development of T-cell vaccines for chronic and acute viral infections, the advantages of cellular immunity, and the challenges in designing vaccines that elicit strong T-cell responses. Case studies will include vaccines for HIV and CMV."
    },
    {
      title: "Pandemic Preparedness and Rapid Vaccine Development",
      content: "This session will review the lessons learned from the COVID-19 pandemic in terms of vaccine development and deployment. Presenters will discuss the key components of rapid vaccine production, such as flexible manufacturing platforms, streamlined regulatory pathways, and global coordination. Discussions will also cover how these lessons can be applied to prepare for future pandemics, including new platforms like DNA and mRNA vaccines."
    },
    {
      title: "Vaccine Development for Emerging Zoonotic Viruses",
      content: "Many emerging viral threats, such as Ebola, MERS, and Nipah, originate from animals. This session will discuss the unique challenges of developing vaccines for zoonotic viruses, including the need for rapid response platforms and the difficulties in predicting which zoonotic viruses may pose the greatest threat. Ongoing vaccine research for zoonotic diseases and surveillance strategies will be presented."
    },
    {
      title: "DNA Vaccines: Rapid, Scalable, and Safe",
      content: "DNA vaccines represent a promising platform for rapid and scalable vaccine production. This session will explore the mechanics of DNA vaccine technology, discussing its advantages in terms of stability and production, as well as its limitations in inducing robust immune responses. Case studies on DNA vaccines for viral diseases like Zika, dengue, and COVID-19 will be highlighted."
    },
    {
      title: "Vaccine-Induced Immunity: Understanding Long-Term Protection",
      content: "How long do vaccines protect, and what factors influence the duration of immunity? This session will explore the science behind vaccine-induced immunity, including the roles of memory B cells and T cells in long-term protection. Presenters will review studies on vaccines for influenza, hepatitis, and HPV, highlighting factors that affect immunity duration and the need for booster doses."
    },
    {
      title: "Maternal and Neonatal Vaccination: Protecting the Vulnerable",
      content: "This session will focus on vaccines that protect pregnant women and their newborns from viral infections, including influenza, pertussis, and RSV. Presenters will discuss the science behind maternal vaccination, how immunity is transferred to the fetus, and the benefits of protecting newborns during their most vulnerable early months. Case studies on successful maternal vaccination programs will be presented."
    },
    {
      title: "Broad-Spectrum Antiviral Vaccines: Targeting Multiple Viruses",
      content: "This session will explore the development of vaccines designed to protect against a range of viruses by targeting shared viral components. Discussions will include the challenges of developing such vaccines, the identification of cross-reactive antigens, and clinical trials of broad-spectrum vaccines for influenza, coronaviruses, and filoviruses like Ebola and Marburg."
    },
    {
      title: "Vaccine Development for Viral Hemorrhagic Fevers",
      content: "Viral hemorrhagic fevers, such as Ebola, Marburg, and Lassa, are among the most lethal viral diseases, and vaccine development for these viruses poses significant challenges. This session will review ongoing efforts to develop vaccines for these diseases, discussing platforms such as viral vectors and recombinant protein vaccines. Case studies on recent Ebola vaccine trials and deployment will be highlighted."
    },
    {
      title: "Global Vaccine Distribution: Overcoming Barriers in Low-Resource Settings",
      content: "Developing vaccines is only the first step—ensuring they reach those in need is equally critical. This session will address the logistical challenges of global vaccine distribution, particularly in low-resource settings. Topics will include cold chain requirements, equitable access to vaccines, and strategies for improving global distribution networks. The session will highlight recent successes and ongoing challenges in vaccine distribution for diseases like polio, measles, and COVID-19."
    }
  ];

const Vaccinescientific = () => {
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
    <div className="Vaccine_scientific_container">
    <div className="Vaccine_scientific_background_container">
      <h1>Virology and Vaccine Development Forumn</h1>
      <p>Trending research Scientific topics</p>
    </div>

    <div className="Vaccine_scientific_content_container">
      <h2 className="Vaccine_scientific_heading">Trending research Virology scientific topics...</h2>
      <p>Here are a few trending topics in Virology research</p>
      <div className="Vaccine_scientific_topic-rows">
        <ul className="Vaccine_scientific_topic-list">
          {topics.map((topic, index) => (
            <li key={index} className="Vaccine_scientific_topic-item">
              <div onClick={() => handleTopicClick(index)} className="Vaccine_scientific_topic-title">
                <FaMicrophone className="Vaccine_scientific_icon" /> {topic.title}
              </div>
              {selectedTopic === index && (
                <p className="Vaccine_scientific_topic-content">{topic.content}</p>
              )}
            </li>
          ))}
        </ul>

        <ul className="Vaccine_scientific_topic-list">
          {topics2.map((topic, index) => (
            <li key={index} className="Vaccine_scientific_topic-item">
              <div onClick={() => handleTopicClick(index + topics.length)} className="Vaccine_scientific_topic-title">
                <FaMicrophone className="Vaccine_scientific_icon" /> {topic.title}
              </div>
              {selectedTopic === index + topics.length && (
                <p className="Vaccine_scientific_topic-content">{topic.content}</p>
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
  )
}

export default Vaccinescientific