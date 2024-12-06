import React from 'react'
import'./Detailscontainer.css'
import { FaMapLocationDot } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6"
import { AiFillThunderbolt } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";


const detailscontainer = () => {
  return (
    <>
      <div className='details-container'>
        <div className='detail-box'>
          <FaMapLocationDot className='detail-icon' />
          <h2 className='detail-heading-box'>World-Class Location: Rome</h2>
          <p className='detail-paragraph-box'>
            Rome, with its millennia of history, offers attendees the opportunity to explore world-renowned landmarks such as the Colosseum, Vatican City, and the Roman Forum.
          </p>
        </div>
  
        <div className='detail-box'>
          <FaHandshakeSimple className='detail-icon'/>
          <h2 className='detail-heading-box'>Networking Opportunities</h2>
          <p className='detail-paragraph-box'>
            Connect with renowned scientists, clinicians, and researchers from around the world.
          </p>
        </div>
  
        <div className='detail-box'>
          <AiFillThunderbolt className='detail-icon' />
          <h2 className='detail-heading-box'>Focus on Innovation and Future Trends</h2>
          <p className='detail-paragraph-box'>
            Learn about the latest technological advancements in virology, including new diagnostic tools, treatments, and vaccine developments.
          </p>
        </div>
  
        <div className='detail-box'>
          <IoMdContacts className='detail-icon'/>
          <h2 className='detail-heading-box'>Comprehensive Support</h2>
          <p className='detail-paragraph-box'>
            Our team is committed to providing assistance and support before, during, and after the conference to ensure a seamless experience for all attendees.
          </p>
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
<div>
<h1 className='Faq-heading'>Virology Summit FAQ's</h1>
</div>
</> 
  
  )
}

export default detailscontainer