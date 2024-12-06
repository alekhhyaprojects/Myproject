import React from 'react'
import './Containersection.css'

const containersection = () => {
  return (
  <>
    <div className='Container-head'>
    <div className='Container-text'>
        <h1>Virology Events</h1>
        <p>Explore the cutting-edge research and advancements 
            pushing the boundaries of virology and expanding 
            our understanding of viruses.
        </p>
    </div>
   </div>
    <div className='content-main'>
       <div className='content'>
            <h3 className='Head-content-container'>Welcome to the forefront of virology!</h3>
                <p className='para-content-container'>Our scientific events are dedicated to advancing the understanding of viruses and their impact on human health. 
                      These gatherings bring together leading researchers, clinicians, and industry experts to exchange knowledge,
                      discuss the latest breakthroughs, and collaborate on innovative solutions to combat viral diseases.
                      By participating in these events, you contribute to a vibrant community dedicated to unraveling the complexities of virology and improving global health outcomes.
                      We look forward to your engagement and to the shared discoveries that will shape the future of virology.</p>
          </div>
         <div>
         <img src="https://virology.ws/wp-content/uploads/2013/12/VirologyTitle2.png" alt="img" className='img-content-container' />
         </div>
    </div>
    <div> 
    <h1 className='conferences-Heading'>Worldwide Upcoming Virology Conferences</h1>
  </div>
  </>

  )
}

export default containersection