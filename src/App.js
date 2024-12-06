import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
// import Containersection from './Components/Containersection';
// import Pagescontainer from './Components/Pagescontainer';
// import Detailscontainer from './Components/Detailscontainer'; 
// import Footersection from './Components/Footersection'; 
// import Faqcontainer from './Components/Faqcontainer';
import Footer from './Components/Footer'
import Home from './Components2/Home'; 
import Upcomingevents from './Components2/Upcomingevents/upcomingevents'; 
import Speakerguidelines from './Components2/Speakerguidelines';
import Awards from './Components2/Awards';
import Contact from './Components2/Contact'; 
import Register from './Components2/Register';
import Virologysummit from './Components/Conferences/Virologysummit';
import Emerging from'./Components/Conferences/Emerging';
import Virologyinfectious from './Components/Conferences/Virologyinfectious';
import Vaccine from './Components/Conferences/Vaccine';
import Antiviral from './Components/Conferences/Antiviral';
import Viral from './Components/Conferences/Viral';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import Cancellation from './Components/Cancellation';
import Abstract from './Components/Conferences/Abstract';
import Brochure from './Components/Conferences/Brochure';
import Emergingbrochure from './Components/Conferences/Brochuredownloads/Emergingbrochure';
import Emergingabstract from './Components/Conferences/Abstractsubmissions/Emergingabstract';
import Infectiousbstract from './Components/Conferences/Abstractsubmissions/Infectiousabstract';
import Vaccineabstract from './Components/Conferences/Abstractsubmissions/Vaccineabstract';
import Antiviralabstract from './Components/Conferences/Abstractsubmissions/Antiviralabstract';
import Viralabstract from './Components/Conferences/Abstractsubmissions/Viralabstract';
import Summitscientific from './Components/ScientificSessions/Summitscientific';
import Emergingscientific from './Components/ScientificSessions/Emergingscientific';
import Infectiousscientific from './Components/ScientificSessions/Infectiousscientific';
import Vaccinescientific from './Components/ScientificSessions/Vaccinescientific';
import Antiviralscientific from './Components/ScientificSessions/Antiviralscientific';
import Viralscientific from './Components/ScientificSessions/Viralscientific';


const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Containersection/>
      <Pagescontainer/>
      <Detailscontainer/>
      <Footersection/>
      <Faqcontainer/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcomingevents" element={<Upcomingevents />} />
        <Route path="/Awards" element={<Awards />} />
        <Route path="/Speakerguidelines" element={<Speakerguidelines />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/virologysummit" element={<Virologysummit/>}/>
        <Route path="/Emerging" element={<Emerging/>}/>
        <Route path="/Virologyinfectious" element={<Virologyinfectious/>}/>
        <Route path="/Vaccine" element={<Vaccine/>}/>
        <Route path="/Antiviral" element={<Antiviral/>}/>
        <Route path="/Viral" element={<Viral/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/Terms" element={<Terms/>}/>
        <Route path="/Cancellation" element={<Cancellation/>}/>
        <Route path="/Abstract" element={<Abstract/>}/>
        <Route path="/Brochure"element={<Brochure/>}/>
        <Route path="/Emergingbrochure" element={<Emergingbrochure/>}/>
        <Route path="/Emergingabstract"element={<Emergingabstract/>}/>
        <Route path="/Infectiousabstract" element={<Infectiousbstract/>}/>
        <Route path="/Vaccineabstract" element={<Vaccineabstract/>}/>
        <Route path="/Antiviralabstract" element={<Antiviralabstract/>}/>
        <Route path="/Viralabstract" element={<Viralabstract/>}/>
        <Route path="/Summitscientific" element={<Summitscientific/>}/>
        <Route path="/Emergingscientific" element={<Emergingscientific/>}/>
        <Route path="/Infectiousscientific" element={<Infectiousscientific/>}/>
        <Route path="/Vaccinescientific" element={<Vaccinescientific/>}/>
        <Route path="/Antiviralscientific" element={<Antiviralscientific/>}/>
        <Route path="/Viralscientific" element={<Viralscientific/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;