import React, { useState } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { PiGraduationCapFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

import "./Emergingscientific.css"

const topics = [
    {
      title: "Global Surveillance of Emerging Viral Diseases",
      content: "This session will discuss the importance of global surveillance networks for early detection of emerging viral diseases. Presentations will cover current technologies, from satellite data to real-time genomic sequencing, to monitor viral outbreaks and prevent pandemics. Experts will highlight case studies of successful early warning systems, the challenges faced in data sharing across borders, and innovations in digital epidemiology."
    },
    {
      title: "Viral Spillover: Mechanisms and Risk Factors",
      content: "This session will delve into the mechanisms that lead to the spillover of viruses from animals to humans. Experts will cover zoonotic transmission, the role of wildlife and livestock in harboring emerging viruses, and ecological drivers such as habitat destruction and climate change. Case studies on recent viral spillovers, such as Nipah virus and coronaviruses, will be discussed, along with strategies to predict and mitigate spillover events."
    },
    {
      title: "Molecular Mechanisms of Viral Pathogenesis in Emerging Diseases",
      content: "A deep dive into the molecular and cellular mechanisms by which emerging viruses cause disease. This session will cover viral entry, replication, immune evasion, and host cell interactions for viruses such as Ebola, Hendra, and SARS-CoV-2. Researchers will present new findings on viral proteins that could serve as targets for antiviral therapies."
    },
    {
      title: "Rapid Vaccine Development for Emerging Viruses",
      content: "This session will highlight advances in vaccine development against emerging viral threats, with a focus on rapid response platforms like mRNA, viral vectors, and nanoparticle vaccines. Discussion will include lessons learned from COVID-19, ongoing research for vaccines against other high-risk viruses like Zika, and the challenges in scaling vaccine production for global distribution."
    },
    {
      title: "Emerging Respiratory Viruses: Epidemiology and Control",
      content: "Respiratory viruses, such as novel influenza strains and coronaviruses, pose significant risks to global health. This session will focus on the epidemiology of emerging respiratory viruses, modes of transmission, and public health strategies to control their spread. Presenters will discuss the role of air travel in viral transmission, the effectiveness of non-pharmaceutical interventions (like masks and social distancing), and future vaccine strategies."
    },
    {
      title: "Antiviral Drug Development for Emerging Diseases",
      content: "Developing effective antiviral drugs for emerging viral diseases remains a major challenge. This session will discuss recent advances in drug discovery, targeting viral enzymes, and preventing viral replication. Focus areas will include novel drug targets, therapeutic monoclonal antibodies, and the complexities of antiviral resistance. Clinical trials for emerging diseases like Lassa fever and Zika will also be explored."
    },
    {
      title: "Climate Change and Its Impact on Emerging Viral Diseases",
      content: "Climate change is altering the ecology of viruses and their hosts, contributing to the emergence of new viral threats. This session will examine how rising temperatures, deforestation, and habitat destruction are increasing the risk of viral spillovers and outbreaks. Experts will present research on how climate change is affecting the distribution of viral vectors, such as mosquitoes, and its role in the spread of diseases like dengue and chikungunya."
    },
    {
      title: "Emerging Arboviruses: Global Threats and Control Strategies",
      content: "Arboviruses, transmitted by insects like mosquitoes and ticks, are increasingly becoming global threats. This session will focus on the biology, transmission, and control of emerging arboviruses such as Zika, dengue, and chikungunya. Topics will include vector control strategies, the development of vaccines and antivirals, and the role of climate change in altering the distribution of arbovirus vectors."
    },
    {
      title: "Zoonotic Viral Diseases: The Human-Animal Interface",
      content: "Many emerging viral diseases have zoonotic origins, meaning they are transmitted from animals to humans. This session will explore the dynamics of zoonotic transmission, with a focus on wildlife reservoirs and human activities that increase contact with these animals. Presenters will discuss surveillance at the human-animal interface, emerging zoonotic viruses (e.g., Ebola, Marburg, and Hantaviruses), and strategies to mitigate future spillovers."
    },
    {
      title: "Cross-Species Transmission and Viral Adaptation",
      content: "This session will focus on how viruses adapt to infect new species, including humans. Researchers will present studies on the genetic and ecological factors that drive cross-species transmission, using examples such as coronaviruses, influenza, and bat-borne viruses. The session will also explore how viral evolution contributes to host range expansion and increased transmissibility."
    }
  ];
  
  const topics2 = [
    {
      title: "Pandemic Preparedness and Emerging Viral Threats",
      content: "This session will discuss the critical components of global pandemic preparedness, including early detection systems, public health infrastructure, and international coordination. Experts will evaluate lessons learned from recent pandemics, such as COVID-19 and H1N1, and discuss strategies for improving preparedness for future viral threats, including potential vaccine stockpiles and rapid diagnostic development."
    },
    {
      title: "Genomic Surveillance of Emerging Viruses",
      content: "Advances in genomic surveillance have revolutionized our ability to track emerging viral threats. This session will showcase the use of next-generation sequencing to monitor viral evolution, identify new variants, and track transmission pathways. Case studies will highlight how genomic data from viruses like SARS-CoV-2, Ebola, and chikungunya are being used in real-time to inform public health responses."
    },
    {
      title: "Viral Vector Control in the Age of Emerging Diseases",
      content: "The control of viral vectors (such as mosquitoes and ticks) is a key strategy in preventing the spread of many emerging diseases. This session will discuss innovative approaches to vector control, including genetically modified mosquitoes, biocontrol methods, and environmental management. Presenters will also address the challenges of vector control in regions where climate change is altering the habitats of viral vectors."
    },
    {
      title: "Ethics and Equity in Response to Emerging Viral Diseases",
      content: "Emerging viral diseases often exacerbate existing inequalities in healthcare and resources. This session will focus on the ethical challenges surrounding the distribution of vaccines, treatments, and public health interventions in the face of a global viral threat. Discussions will include the fair allocation of resources, the role of international organizations, and the ethical dilemmas faced during pandemic responses, such as quarantine measures."
    },
    {
      title: "Novel Diagnostic Tools for Emerging Viral Infections",
      content: "Timely and accurate diagnostics are essential for controlling the spread of emerging viral diseases. This session will cover recent advances in diagnostic technologies, including point-of-care testing, CRISPR-based diagnostics, and rapid antigen detection. Researchers will present case studies on how new diagnostic tools are being used in field settings for diseases like Ebola, Zika, and Lassa fever."
    },
    {
      title: "One Health Approach to Emerging Viral Diseases",
      content: "The One Health framework emphasizes the interconnectedness of human, animal, and environmental health in addressing emerging viral diseases. This session will explore how integrating knowledge across these domains is critical for preventing viral outbreaks. Presenters will discuss case studies where the One Health approach has been applied to control diseases like Rift Valley fever, avian influenza, and Nipah virus."
    },
    {
      title: "Socioeconomic Drivers of Emerging Viral Diseases",
      content: "Emerging viral diseases are often linked to socioeconomic factors such as urbanization, poverty, and globalization. This session will examine how these drivers contribute to the spread of viral diseases and exacerbate their impact. Topics will include the role of rapid urbanization in increasing viral transmission, the impact of global trade and travel, and the disproportionate effects of emerging diseases on low-income populations."
    },
    {
      title: "Veterinary Perspectives on Emerging Viral Diseases",
      content: "Many emerging viruses are first identified in animal populations. This session will focus on the role of veterinary science in identifying, monitoring, and controlling emerging viral diseases at the animal-human interface. Presentations will cover viral diseases in livestock, wildlife surveillance programs, and veterinary interventions that prevent viral spillovers into human populations."
    },
    {
      title: "Public Health Communication During Emerging Viral Outbreaks",
      content: "Effective communication is critical during an outbreak of an emerging viral disease. This session will discuss strategies for communicating risk, promoting public health measures, and countering misinformation. Experts will present lessons learned from past outbreaks, including how to maintain public trust and ensure clear messaging during times of crisis."
    },
    {
      title: "The Role of Big Data and AI in Predicting Emerging Viral Outbreaks",
      content: "This session will explore how big data and artificial intelligence are being harnessed to predict emerging viral outbreaks. Presenters will showcase AI-driven models that analyze vast datasets, including climate data, human mobility patterns, and genetic sequences, to predict where and when new viral threats are likely to emerge. Discussions will also focus on how these predictive tools can be integrated into global surveillance systems."
    }
  ];

const Emergingscientific = () => {
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
    <div className="Emerging_scientific_container">
    <div className="Emerging_scientific_background_container">
      <h1>Emerging Viral Diseases Scientific Session</h1>
      <p>Trending research Scientific topics</p>
    </div>

    <div className="Emerging_scientific_content_container">
      <div className='Emerging_scientific_text'>
      <h2 className="Emerging_scientific_heading">Trending research Virology scientific topics...</h2>
      <p>Here are a few trending topics in Virology research</p>
      </div>
      <div className="Emerging_scientific_topic-rows">
        <ul className="Emerging_scientific_topic-list">
          {topics.map((topic, index) => (
            <li key={index} className="Emerging_scientific_topic-item">
              <div onClick={() => handleTopicClick(index)} className="Emerging_scientific_topic-title">
                <FaMicrophone className="Emerging_scientific_icon" /> {topic.title}
              </div>
              {selectedTopic === index && (
                <p className="Emerging_scientific_topic-content">{topic.content}</p>
              )}
            </li>
          ))}
        </ul>

        <ul className="Emerging_scientific_topic-list">
          {topics2.map((topic, index) => (
            <li key={index} className="Emerging_scientific_topic-item">
              <div onClick={() => handleTopicClick(index + topics.length)} className="Emerging_scientific_topic-title">
                <FaMicrophone className="Emerging_scientific_icon" /> {topic.title}
              </div>
              {selectedTopic === index + topics.length && (
                <p className="Emerging_scientific_topic-content">{topic.content}</p>
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

export default Emergingscientific
