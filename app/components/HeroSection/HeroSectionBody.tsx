import React from 'react';
import HeroImage from "../assests/images/HeroImage.png";
import Image from 'next/image';
import "../assests/css/herosection.css"
import Banner1 from "../assests/images/banner2.jpg"
import Banner2 from "../assests/images/banner4.png"

const HeroSectionBody = () => {
  return (
    <div className='Herosection' id="home">
        <div className="herocont">
          <div className="heroconImg">
            <div className="herosubcont">
              <div className="heroheader">Find & Hire</div>
              <div className="heroheader1">Expert Freelancers</div>
              <div className="herosubheader">Empowering freelancers, enabling success: Your partner in finding the perfect match for your projects.</div>
              <div className="heroline"></div>
              <div className="headerbuttons">
              <a href="#services" className='headbtn1'>Know more</a>
              <a href="#contactus" className='headbtn2'>Contact us</a>
              </div>
            </div>
            <Image src={Banner2} className="Banner2Img" width={500} height={600} alt='none'/>
          </div>
          <div className="herocontInfo">
            <div className="heroinfo">
              
            </div>
            <div className="heroinfo"></div>
            <div className="heroinfo"></div>
          </div>
        </div>
    </div>
  )
}

export default HeroSectionBody