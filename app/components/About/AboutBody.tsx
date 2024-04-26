import React from 'react';
import "../assests/css/about.css";
import Image from 'next/image';
import aboutImg from "../assests/images/Banner7.jpg"

const AboutBody = () => {
  return (
    <section className='About' id='about'>
        <div className="aboutcont">
            <div className="aboutcont1">
                <div className="aboutheader">What Services DO We Offer ?</div>
                <div className="aboutdesc">Explore our full-service suite, including web and app development, seamless deployment, rigorous testing, and expert consultancy. Elevate your digital presence with our tailored solutions, ensuring your products shine in the competitive landscape. With strategic guidance and optimal performance, we're here to turn your vision into reality.</div>
                <div className="aboutservices">
                    <div className="aboutservicecont1">
                        <div className="serviceheader">Website</div>
                        <div className="servicedesc">Elevating your online presence with stunning, user-centric website designs.</div>
                    </div>
                    <div className="aboutservicecont1">
                        <div className="serviceheader">App</div>
                        <div className="servicedesc">Elevating your online presence with stunning, user-centric website designs.</div>
                    </div>
                    <div className="aboutservicecont1">
                        <div className="serviceheader">Ui/Ux</div>
                        <div className="servicedesc">Elevating your online presence with stunning, user-centric website designs.</div>
                    </div>
                </div>
                <div className="aboutservices">
                    <div className="aboutservicecont1">
                        <div className="serviceheader">Testing</div>
                        <div className="servicedesc">Elevating your online presence with stunning, user-centric website designs.</div>
                    </div>
                    <div className="aboutservicecont1">
                        <div className="serviceheader">Deployment</div>
                        <div className="servicedesc">Elevating your online presence with stunning, user-centric website designs.</div>
                    </div>
                </div>
            </div>
            <div className="aboutcont2">
                <Image src={aboutImg} alt='none' width={580} height={600} className='aboutImgs'/>
            </div>
        </div>
    </section>
  )
}

export default AboutBody