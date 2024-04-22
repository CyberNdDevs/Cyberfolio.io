"use client"
import React, { useState } from 'react';
import "../assests/css/testimonials.css";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { GiRoundStar } from "react-icons/gi";
import Image from 'next/image';


const TestimonialsBody = () => {
    const [testimonials, setTestimonials] = useState([
        {
            name: "Tarun Sighn",
            role: "Data Scientist",
            hovershow: false,
            headercontent: "It's all good",
            stars: 5,
            description: "I must commend the team for their outstanding work and their commitment to delivering results on time. Their dedication and attention to detail are truly remarkable, ensuring that every aspect of the project is executed flawlessly. It's a testament to their professionalism and expertise. Keep up the excellent work.",
            profileimg: '/images/test2.png',
            userinfoshow: true
        },
        {
            name: "Tanish Khandelwal",
            role: "ML Engineer",
            hovershow: false,
            headercontent: "Good With Commitments",
            stars: 5,
            description: "I absolutely adore the way they wholeheartedly commit to their promises and consistently go above and beyond what was initially committed. Their dedication and determination to exceed expectations are truly inspiring. It's rare to find such a level of reliability and accountability in today's fast-paced world. Their commitment sets a benchmark for excellence that others strive to emulate.",
            profileimg: '/images/test4.jpg',
            userinfoshow: false
        },
        {
            name: "Rishabh Sinha",
            role: "Tech Lead",
            hovershow: true,
            headercontent: "Great Work!",
            stars: 4,
            description: "I cannot overstate how impressed I am with the exceptional service provided in the website redesign project. Not only did it enhance the visual appeal and functionality, but it also resulted in a remarkable 25% increase in my business. It's a testament to their expertise and commitment to delivering outstanding results",
            profileimg: '/images/test1.png',
            userinfoshow: false
        },
        {
            name: "Ansh Kapoor",
            role: "Full-Stack Developer",
            hovershow: true,
            headercontent: "Great Experience",
            stars: 4,
            description: "I am thoroughly impressed with the application's exceptional performance and intuitive user interface. It has surpassed my expectations in every aspect. From seamless navigation to lightning-fast responsiveness, every interaction with the app feels effortless and enjoyable. I wholeheartedly recommend it to anyone seeking a superior mobile experience!",
            profileimg: '/images/test31.png',
            userinfoshow: false
        },
        {
            name: "Aryan",
            role: "Mobile user",
            hovershow: false,
            headercontent: "Impressive Work!",
            stars: 5,
            description: "I'm truly amazed by the app's functionality; it's a game-changer for mobile users like myself. Moreover, the team also addressed security breaches effectively, enhancing the app's overall security measures. This proactive approach not only ensures a seamless user experience but also instills confidence in the app's reliability and safety. Kudos to the team for their dedication and expertise",
            profileimg: '/images/test1.png',
            userinfoshow: false
        }
    ]);

    const setUser = (index:any) => {
        setTestimonials(prevTestimonials => {
            return prevTestimonials.map((testimonial, i) => {
                if (i === index) {
                    setheader(testimonial.headercontent);
                    setcontent(testimonial.description);
                    setstarcount(testimonial.stars);
                    return { ...testimonial, userinfoshow: true };
                } else {
                    return { ...testimonial, userinfoshow: false };
                }
            });
        });
    };

  const [header, setheader] = useState(testimonials[0].headercontent);
  const [content, setcontent] = useState(testimonials[0].description);
  const [starcount, setstarcount] = useState<any>(testimonials[0].stars);
  
  const totalStars = testimonials.reduce((total, testimonial) => total + testimonial.stars, 0);
  const overallrating = (totalStars / 25)*5;

  return (
    <section className='Testimonials' id='testimonials'>
        <div className="testimonialcont">
            <div className="testimonialcont1">
                <li className="testheader">TESTIMONIALS</li>
                <div className="testsubheader">The voice of experience</div>
                {
                    testimonials.map((test,index)=>{
                        return(
                            <div className={(test.userinfoshow)?"testpeople testpeoplehover":"testpeople"} key={index} onClick={()=>{setUser(index)}}>
                                <Image src={test.profileimg} alt="none" width={200} height={200} className='testimg'/>
                                <div className="userinfo">
                                    <p className="testname">{test.name}</p>
                                    <p className="testrole">{test.role}</p>
                                </div>
                                <BiSolidQuoteLeft className='testicons'/>
                            </div>
                        )
                    })
                }
                <div className="overallrate">
                    <div className="overallrate_header">{overallrating.toFixed(1)} out of 5</div>
                    <div className="overallrate_subheader">Overall average rating</div>
                </div>
            </div>



            <div className="testimonialcont2">
                <div className="testimonialcontentheader">
                    <p>{header}</p>
                    <p className='starrate'>
                    {[...Array(starcount)].map((_, index) => (
                        <GiRoundStar key={index} />
                    ))}
                    </p>
                </div>
                <div className="testimonialdescription">{content}</div>
            </div>
        </div>
    </section>
   )
}

export default TestimonialsBody