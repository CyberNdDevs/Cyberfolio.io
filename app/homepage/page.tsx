import React from 'react'
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import "../components/assests/css/style.css";
import HeroSectionBody from '../components/HeroSection/HeroSectionBody';
import TeamBody from '../components/Team/TeamBody';
import TestimonialsBody from '../components/Testimonials/TestimonialsBody';
import AboutBody from '../components/About/AboutBody';
import PricingBody from '../components/Pricing/PricingBody';

const page = () => {
  return (
    <div className='homePage'>
      <Navbar/>
      <HeroSectionBody/>
      <AboutBody/>
      <TeamBody/>
      <TestimonialsBody/> 
      <PricingBody/>
      <Footer/>
    </div>
  )
}

export default page