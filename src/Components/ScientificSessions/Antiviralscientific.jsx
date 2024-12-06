import React, { useState } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { PiGraduationCapFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import "./Antiviralscientific.css"

const topics = [
    {
      title: "Bacterial Infectious Diseases",
      content: "This session focuses on diseases caused by bacterial pathogens. Topics include the mechanisms of bacterial infection, disease pathogenesis, diagnostic techniques, and treatment strategies. Special emphasis will be placed on antibiotic resistance, emerging bacterial threats, and innovations in bacterial disease management."
    },
    {
      title: "Parasitology & Infectious Diseases",
      content: "Covers parasitic infections, including those caused by protozoa, helminths, and ectoparasites. Discussions will include life cycles, transmission routes, clinical manifestations, diagnostic methods, and treatment options. The session also addresses the interplay between parasitic and other infectious diseases."
    },
    {
      title: "Vaccines and Vaccination",
      content: "Examines the development and implementation of vaccines to prevent infectious diseases. Topics include vaccine types, immunization schedules, public health impact, vaccine hesitancy, and strategies for improving vaccine uptake and effectiveness."
    },
    {
      title: "Nosocomial Infections & Control",
      content: "Focuses on infections acquired in healthcare settings, such as hospitals and clinics. The session covers common nosocomial pathogens, infection control measures, prevention strategies, and the role of surveillance systems in reducing hospital-acquired infections."
    },
    {
      title: "Veterinary Diseases",
      content: "Discusses infectious and non-infectious diseases affecting animals, including livestock, pets, and wildlife. Topics include disease prevention, diagnosis, and treatment, as well as the impact of veterinary diseases on animal health and human health through zoonotic transmission."
    },
    {
      title: "Broad-Spectrum Antiviral Agents: Tackling Multiple Viruses",
      content: "Broad-spectrum antivirals have the potential to treat multiple viral infections by targeting conserved viral processes. This session will focus on the development of drugs that can inhibit a wide range of viruses, such as RNA polymerase inhibitors and protease inhibitors. Presentations will cover case studies on drugs like favipiravir and remdesivir, and their application in treating viral pandemics."
    },
    {
      title: "Antiviral Resistance: Understanding and Overcoming Drug Resistance",
      content: "This session will examine the mechanisms by which viruses develop resistance to antiviral drugs. Discussions will focus on the genetic mutations that confer resistance, the clinical implications of resistance in treating chronic infections such as HIV and hepatitis C, and strategies to overcome resistance through combination therapies and next-generation drugs."
    },
    {
      title: "Antiviral Nanomedicine: Drug Delivery Using Nanoparticles",
      content: "Nanoparticle-based drug delivery systems have emerged as a promising approach to improving the efficacy and specificity of antiviral therapies. This session will discuss the development of nanomedicine platforms for delivering antiviral agents, their advantages in reducing drug toxicity, and their application in treating viral infections such as HIV, influenza, and herpes."
    },
    {
      title: "Monoclonal Antibodies: Precision Antiviral Therapy",
      content: "Monoclonal antibodies (mAbs) represent a targeted approach to neutralizing viruses by binding to specific viral proteins. This session will cover the development of mAbs for treating infectious diseases, including their success in treating Ebola and COVID-19. Discussions will include the challenges of manufacturing, delivery, and resistance, as well as next-generation mAb therapies."
    },
    {
      title: "Polymerase Inhibitors: Blocking Viral Genome Replication",
      content: "This session will focus on drugs that inhibit viral polymerases, which are essential for viral genome replication. Topics will include the development of nucleotide and non-nucleotide polymerase inhibitors, their application in treating RNA and DNA viruses, and ongoing research to improve efficacy and reduce resistance. Case studies will include treatments for hepatitis B, C, and coronaviruses."
    }
  ];
  
  const topics2 = [
    {
      title: "Fungal Infectious Diseases",
      content: "Addresses infections caused by fungi, including both opportunistic and pathogenic fungi. The session covers diagnostic challenges, treatment options, and emerging fungal pathogens, with a focus on managing infections in immunocompromised patients."
    },
    {
      title: "STD and HIV Infection7 Viral Immunology and Immune Evasion Mechanisms",
      content: "Focuses on sexually transmitted diseases (STDs) and human immunodeficiency virus (HIV) infections. Topics include epidemiology, clinical presentation, prevention strategies, and treatment advancements. The session also explores the impact of STDs and HIV on public health."
    },
    {
      title: "Neuro Infectious Diseases",
      content: "Examines infections affecting the nervous system, including meningitis, encephalitis, and neuroinvasive viral infections. The session covers diagnostic approaches, treatment options, and the challenges of managing infections that impact neurological function."
    },
    {
      title: "Market Analysis of Infectious Diseases",
      content: "Provides an overview of the market dynamics related to infectious diseases. Topics include the economic impact of infectious diseases, market trends for diagnostics and therapeutics, and the influence of policy and public health initiatives on market development."
    },
    {
      title: "Problems in Infectious Disease Practice",
      content: "Discusses common challenges faced by healthcare professionals in the field of infectious diseases. Topics include diagnostic difficulties, treatment dilemmas, management of complex cases, and strategies for overcoming barriers in infectious disease practice."
    },
    {
      title: "Viral Entry Inhibitors: Blocking Initial Stages of Infection",
      content: "This session will focus on antiviral drugs that prevent viruses from entering host cells. Presentations will cover the mechanisms of viral entry inhibitors, including fusion inhibitors and receptor antagonists, and their application in treating infections like HIV, hepatitis, and influenza. Discussions will also explore combination therapies that include entry inhibitors."
    },
    {
      title: "High-Throughput Screening in Antiviral Drug Discovery",
      content: "High-throughput screening (HTS) technologies allow for the rapid identification of antiviral compounds. This session will cover the principles of HTS, the role of compound libraries, and how HTS has accelerated the discovery of antiviral drugs for diseases such as COVID-19, dengue, and Zika. Researchers will also discuss integrating artificial intelligence and machine learning to improve screening efficiency."
    },
    {
      title: "Antisense Oligonucleotides and RNA Interference: Targeting Viral RNA",
      content: "Antisense oligonucleotides (ASOs) and RNA interference (RNAi) represent powerful tools to inhibit viral RNA. This session will explore the mechanisms of action for ASOs and RNAi in silencing viral gene expression, focusing on their application in treating hepatitis, HIV, and respiratory viruses. Presenters will discuss the challenges of delivery and the latest advancements in this field."
    },
    {
      title: "Pharmacokinetics and Pharmacodynamics in Antiviral Therapy",
      content: "Understanding the pharmacokinetics (PK) and pharmacodynamics (PD) of antiviral drugs is critical for optimizing treatment regimens. This session will explore how PK/PD modeling informs dose selection, drug interactions, and the timing of antiviral therapy. Case studies will focus on HIV, hepatitis, and COVID-19 therapies, highlighting the importance of tailoring drug regimens to individual patients."
    },
    {
      title: "Antiviral Combinations: Synergistic Approaches to Treatment",
      content: "Combining antiviral drugs with different mechanisms of action can improve treatment outcomes and reduce the risk of resistance. This session will explore the principles behind antiviral combination therapy, with examples from HIV, hepatitis, and influenza treatment. Presenters will discuss the pharmacological basis for combining drugs and the challenges in developing effective combination regimens."
    }
  ];


const Antiviralscientific = () => {
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
    <div className="Antiviral_scientific_container">
    <div className="Antiviral_scientific_background_container">
      <h1>Virology and Vaccine Development Forumn</h1>
      <p>Trending research Scientific topics</p>
    </div>

    <div className="Antiviral_scientific_content_container">
      <h2 className="Antiviral_scientific_heading">Trending research Virology and Antiviral Therapy and Drug Development-Scientific topics..</h2>
      <p>Here are a few trending topics in Virology Antiviral Therapy and Drug Development</p>
      <div className="Antiviral_scientific_topic-rows">
        <ul className="Antiviral_scientific_topic-list">
          {topics.map((topic, index) => (
            <li key={index} className="Antiviral_scientific_topic-item">
              <div onClick={() => handleTopicClick(index)} className="Antiviral_scientific_topic-title">
                <FaMicrophone className="Antiviral_scientific_icon" /> {topic.title}
              </div>
              {selectedTopic === index && (
                <p className="Antiviral_scientific_topic-content">{topic.content}</p>
              )}
            </li>
          ))}
        </ul>

        <ul className="Antiviral_scientific_topic-list">
          {topics2.map((topic, index) => (
            <li key={index} className="Antiviral_scientific_topic-item">
              <div onClick={() => handleTopicClick(index + topics.length)} className="Antiviral_scientific_topic-title">
                <FaMicrophone className="Antiviral_scientific_icon" /> {topic.title}
              </div>
              {selectedTopic === index + topics.length && (
                <p className="Antiviral_scientific_topic-content">{topic.content}</p>
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

export default Antiviralscientific