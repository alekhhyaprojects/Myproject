import React, { useState } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { PiGraduationCapFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import "./Infectiousscientific.css"

const topics = [
    {
      title: "Molecular Virology: Understanding Viral Replication and Pathogenesis",
      content: "This session will focus on the molecular mechanisms that underlie viral replication and disease. Presentations will cover the latest findings on viral life cycles, protein interactions, and the host-cell factors that influence viral pathogenesis. Researchers will share insights into viral entry, genome replication, and how these processes can be targeted for antiviral therapy."
    },
    {
      title: "Host-Pathogen Interactions: Immune Response to Viral Infections",
      content: "This session will explore the complex interactions between viruses and the immune system. Topics will include how viruses evade immune detection, the role of innate and adaptive immune responses in viral control, and the development of immune memory. Case studies on HIV, hepatitis, and respiratory viruses will highlight the latest research on viral immune evasion strategies."
    },
    {
      title: "Emerging and Re-emerging Viral Infections",
      content: "This session will cover newly identified viral pathogens and the resurgence of known viruses. Discussions will focus on epidemiological trends, factors driving viral emergence, and the role of global travel and climate change. Presentations will include case studies on recent outbreaks, such as Ebola, Zika, and SARS-CoV-2, and the global preparedness for future viral threats."
    },
    {
      title: "Vaccine Innovation: Developing Immunization Strategies for Infectious Diseases",
      content: "This session will present advances in vaccine technology, including mRNA vaccines, viral vector platforms, and protein subunit vaccines. Experts will discuss the challenges of vaccine development for highly mutable viruses like influenza and HIV, as well as new approaches to universal vaccines. Case studies on recent vaccine successes, including those for COVID-19, will be discussed."
    },
    {
      title: "Viral Evolution and Antigenic Variation",
      content: "Understanding how viruses evolve is critical for predicting the trajectory of pandemics and developing treatments. This session will focus on viral mutation rates, genetic drift, and recombination events that contribute to antigenic variation. Presentations will highlight the implications of viral evolution for vaccine design and drug resistance, using examples like influenza, HIV, and SARS-CoV-2."
    },
    {
      title: "Antiviral Therapeutics: Current Approaches and New Horizons",
      content: "This session will discuss current antiviral drugs, mechanisms of action, and challenges in overcoming resistance. Presenters will explore new therapeutic strategies, including broad-spectrum antivirals, CRISPR-based treatments, and monoclonal antibodies. Case studies on the treatment of chronic viral infections, such as hepatitis B and C, will also be highlighted."
    },
    {
      title: "Zoonotic Viral Diseases: Animal Reservoirs and Human Health",
      content: "Many infectious diseases are zoonotic, meaning they spread from animals to humans. This session will focus on the dynamics of zoonotic transmission, with discussions on wildlife reservoirs, human-animal interactions, and the risks posed by live animal markets. Emerging zoonotic viruses such as coronaviruses, Hantaviruses, and Nipah virus will be covered."
    },
    {
      title: "Infectious Disease Epidemiology: Tracking and Controlling Viral Outbreaks",
      content: "This session will cover methods for monitoring, tracking, and controlling viral outbreaks. Presenters will discuss how genomic surveillance, big data, and AI are being used to predict and model the spread of infectious diseases. Case studies will include global efforts to track COVID-19, influenza, and dengue outbreaks, as well as challenges in low-resource settings."
    },
    {
      title: "Viral Diagnostics: Innovations for Early Detection",
      content: "Early and accurate diagnostics are critical for controlling viral infections. This session will cover recent advances in diagnostic technologies, including point-of-care testing, PCR, next-generation sequencing, and CRISPR-based diagnostics. Presenters will discuss how these technologies are being applied to identify a wide range of viral pathogens, from HIV to respiratory viruses."
    },
    {
      title: "Vector-Borne Viral Diseases: Control and Prevention Strategies",
      content: "Vector-borne diseases, such as those transmitted by mosquitoes and ticks, are a significant public health challenge. This session will focus on the biology of viral vectors, environmental factors influencing their spread, and innovative control strategies. Topics will include the role of genetically modified mosquitoes, vector control programs, and the impact of climate change on vector distribution."
    }
  ];
  
  const topics2 = [
    {
      title: "Chronic Viral Infections: Mechanisms of Persistence and Treatment",
      content: "This session will examine how certain viruses persist in the body and evade immune detection, leading to chronic infections. Presenters will focus on diseases such as HIV, hepatitis B and C, and herpesviruses, discussing the latest research into viral latency, reactivation, and treatment options. Case studies on new therapies aimed at curing chronic viral infections will be presented."
    },
    {
      title: "Host Genetics and Susceptibility to Viral Infections",
      content: "The genetic makeup of the host plays a significant role in the outcome of viral infections. This session will explore how host genetic factors influence susceptibility to viral diseases, the severity of infections, and responses to treatment. Discussions will include genetic predispositions to diseases like COVID-19, influenza, and HIV, as well as personalized medicine approaches."
    },
    {
      title: "Pediatric Viral Infections: Challenges and Innovations in Treatment",
      content: "Viral infections in children present unique challenges for diagnosis, treatment, and prevention. This session will focus on the latest research into pediatric viral diseases, such as respiratory syncytial virus (RSV), rotavirus, and enteroviruses. Topics will include advances in pediatric vaccines, antiviral therapies tailored to children, and strategies to improve pediatric health outcomes globally."
    },
    {
      title: "Environmental Virology: The Role of the Environment in Viral Transmission",
      content: "This session will examine the role of environmental factors in the transmission of viruses. Discussions will focus on how changes in ecosystems, urbanization, and climate are influencing the spread of viral diseases. Presenters will highlight research on waterborne viruses, the role of environmental reservoirs, and the impact of global warming on vector-borne viral transmission."
    },
    {
      title: "HIV/AIDS Research: Advances in Antiretroviral Therapies and Vaccines",
      content: "This session will cover recent advances in the treatment and prevention of HIV/AIDS, including the development of long-acting antiretroviral drugs, PrEP (pre-exposure prophylaxis), and ongoing efforts toward an HIV vaccine. Experts will discuss the global challenge of controlling HIV, strategies to improve access to treatment in low-resource settings, and the future of HIV eradication."
    },
    {
      title: "Pandemic Preparedness: Lessons from COVID-19 and Future Threats",
      content: "The COVID-19 pandemic has reshaped global health preparedness. This session will focus on lessons learned from the pandemic, including the importance of global coordination, vaccine distribution, and public health infrastructure. Presenters will discuss strategies for preparing for future viral threats, including novel surveillance systems, rapid vaccine production, and international policy frameworks."
    },
    {
      title: "Sexually Transmitted Viral Infections: HPV, Herpes, and Beyond",
      content: "This session will cover the epidemiology, prevention, and treatment of sexually transmitted viral infections, such as human papillomavirus (HPV), herpes simplex virus (HSV), and HIV. Presenters will discuss recent advancements in vaccines, including the HPV vaccine, as well as the latest therapies for managing and preventing sexually transmitted infections."
    },
    {
      title: "Antimicrobial Resistance in Viral Infections",
      content: "Antiviral resistance is a growing challenge in treating viral infections. This session will explore the mechanisms by which viruses develop resistance to antiviral drugs and the implications for treatment. Topics will include the role of viral mutations, strategies to overcome resistance, and the development of next-generation antivirals to address resistant strains."
    },
    {
      title: "Viral Encephalitis and Neurological Complications of Viral Infections",
      content: "This session will focus on viral infections that affect the central nervous system, leading to encephalitis and other neurological disorders. Discussions will cover viruses such as West Nile virus, enteroviruses, and Zika, as well as the long-term neurological consequences of infections like COVID-19. Presenters will discuss diagnostic challenges, treatment options, and the impact on public health."
    },
    {
      title: "Viruses in Cancer: Oncogenic Viruses and Therapeutic Approaches",
      content: "Several viruses are known to cause cancer, including human papillomavirus (HPV), Epstein-Barr virus, and hepatitis B and C. This session will explore the mechanisms by which these oncogenic viruses contribute to cancer development, as well as strategies for prevention and treatment. Discussions will include the latest research on viral-induced cancers, vaccine development, and the potential for immunotherapy in treating virus-associated cancers."
    }
  ];


const Infectiousscientific = () => {
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
    <div className="Infectious_scientific_container">
    <div className="Infectious_scientific_background_container">
      <h1>Virology and Infectious Disease Scientific Session
      </h1>
      <p>Trending research Scientific topics</p>
    </div>

    <div className="Infectious_scientific_content_container">
      <div className='Infectious_scientific_text'>
      <h2 className="Infectious_scientific_heading">Trending research Virology and Infectious Disease- scientific topics...</h2>
      <p>Here are a few trending topics in Virology and Infectious Disease research</p>
      </div>
      <div className="Infectious_scientific_topic-rows">
        <ul className="Infectious_scientific_topic-list">
          {topics.map((topic, index) => (
            <li key={index} className="Infectious_scientific_topic-item">
              <div onClick={() => handleTopicClick(index)} className="Infectious_scientific_topic-title">
                <FaMicrophone className="Infectious_scientific_icon" /> {topic.title}
              </div>
              {selectedTopic === index && (
                <p className="Infectious_scientific_topic-content">{topic.content}</p>
              )}
            </li>
          ))}
        </ul>

        <ul className="Infectious_scientific_topic-list">
          {topics2.map((topic, index) => (
            <li key={index} className="Infectious_scientific_topic-item">
              <div onClick={() => handleTopicClick(index + topics.length)} className="Infectious_scientific_topic-title">
                <FaMicrophone className="Infectious_scientific_icon" /> {topic.title}
              </div>
              {selectedTopic === index + topics.length && (
                <p className="Infectious_scientific_topic-content">{topic.content}</p>
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

export default Infectiousscientific