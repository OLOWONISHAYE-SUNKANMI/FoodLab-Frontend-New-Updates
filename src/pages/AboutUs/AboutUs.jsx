import React from 'react'
import './AboutUs.css'
import AboutHeader from '../../components/AboutHeader/AboutHeader'
import AboutBody from '../../components/AboutBody/AboutBody'
import OurTeam from '../../components/OurTeam/OurTeam'
import Footer from '../../components/Footer/Footer'


const AboutUs = () => {
  return (
    <div>
        <AboutHeader />
        <AboutBody />
        <OurTeam />
        <Footer />
    </div>
  )
}

export default AboutUs