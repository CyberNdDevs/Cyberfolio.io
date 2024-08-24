import React from 'react';
import "../assests/css/footer.css";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      <a href="#home" className="footerhead">Back to Top  <TbArrowBigUpLinesFilled className='arrowup'/></a>
      <div className='footer'>
        <div className="subfooter">
           <div className="footercont">
                <div className="footcont1">
                  <p className="footheader"><span>Cy</span>berDevs</p>
                  <div className="footline1"></div>
                  <div className="footdesc">Empowering Your Digital Realm: Where Security Meets Innovation. Trust our Expertise in Cybersecurity and Development for Unrivaled Protection and Progress.</div>
                  <div className="footersocioicons">
                    <FaSquareInstagram className='sicons'/>
                    <IoLogoLinkedin  className='sicons'/>
                    <FaSquareTwitter  className='sicons'/>
                    <FaSquareGithub  className='sicons'/>
                  </div>
                </div>

                <div className="footcont2">


                  <div className="foot2link1">
                    <div className="foot2linkhead">
                      Socials
                    </div>
                    <div className="footline2"></div>
                    <ul>
                      <li><a href="#insta">Instagram</a></li>
                      <li><a href="#linkedin">LinkedIn</a></li>
                      <li><a href="#facebook">Facebook</a></li>
                      <li><a href="#Twitter">Twitter</a></li>
                      <li><a href="#Github">Github</a></li>
                    </ul>
                  </div>

                  <div className="foot2link1">
                    <div className="foot2linkhead">
                      Sections
                    </div>
                    <div className="footline2"></div>
                    <ul>
                      <li><a href="#home">Home</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#services">Services</a></li>
                      <li><a href="#team">Team</a></li>
                      <li><a href="#testimonials">Testimonials</a></li>
                    </ul>
                  </div>

                  <div className="foot2link1">
                    <div className="foot2linkhead">
                      Services
                    </div>
                    <div className="footline2"></div>
                    <ul>
                      <li><a href="#app">Apps</a></li>
                      <li><a href="#web">Website</a></li>
                      <li><a href="#ux">Ux/UI</a></li>
                      <li><a href="#test">Testing</a></li>
                      <li><a href="#deploy">Deployments</a></li>
                    </ul>
                  </div>
                  
                </div>

           </div>
        </div>
      </div>
      <div className="footerend">
        <p>
           © 2023 Work with CyberDevs. All Rights Reseverd  
        </p>
      </div>
    </>
  )
}

export default Footer