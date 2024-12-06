import React from 'react'
import Containersection from '../Components/Containersection'
import Pagescontainer from '../Components/Pagescontainer'
import Detailscontainer from '../Components/Detailscontainer'
import Faqcontainer from '../Components/Faqcontainer'
import './Home.css'

const Home = () => {
  return (
    <div>
     <Containersection/>
      <Pagescontainer/>
      <Detailscontainer/>
      <Faqcontainer/>
    </div>
  )
}

export default Home
