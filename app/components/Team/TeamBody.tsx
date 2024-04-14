"use client";
import React, { useState } from 'react';
import "../assests/css/team.css";
import Image from 'next/image';
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from "react-icons/bs";
import { FaUserSecret } from "react-icons/fa6";


const TeamBody = () => {
  const [team_members, setteam_members] = useState([
    {
      name:"ROHIT PANDEY",
      role: "Full-Stack Developer",
      linkedLink: "https://www.linkedin.com/in/rohitpandey777/",
      instagramLink:"https://www.instagram.com/rohitpande77/",
      twitterLink: "https://twitter.com/rohit_dev7",
      description: "Hey,I'm Rohit Pandey a Full-Stack Guy, have collaborated with startups, crafting bespoke applications that optimize operations and boost growth, leveraging diverse technologies to deliver impactful solutions.",
      profile:"/images/Team2.png",
      infoshow:false,
    },
    {
      name:"ANKIT PANDEY",
      role: "Cyber-Security Consultant",
      linkedLink: "https://www.linkedin.com/in/ankit-pandey-9620691a7/",
      instagramLink:" https://www.instagram.com/ankitspandey07/",
      twitterLink: "https://twitter.com/AnkitsPandey",
      description: "Ankit Pandey is a passionate penetration tester with expertise in web application, Android/iOS, and API VAPT and also have knowledge of Source code review. Committed to continuous learning and growth, aspiring to excel in the realm of Red Teaming.",
      profile:"/images/Team3.jpeg",
      infoshow:false,
    },
    {
      name:"SHUBHAM MISHRA",
      role: "Full-Stack Developer",
      linkedLink: "https://www.linkedin.com/in/rohitpandey777/",
      instagramLink:"https://www.instagram.com/rohitpande77/",
      twitterLink: "https://twitter.com/rohit_dev7",
      description: "Hey,I'm Rohit Pandey a Full-Stack Guy, have collaborated with startups, crafting bespoke applications that optimize operations and boost growth, leveraging diverse technologies to deliver impactful solutions.",
      profile:"/images/Team5.png",
      infoshow:false,
    }, {
      name:"ARCHANA PRAJAPATI",
      role: "Full-Stack Developer",
      linkedLink: "https://www.linkedin.com/in/rohitpandey777/",
      instagramLink:"https://www.instagram.com/rohitpande77/",
      twitterLink: "https://twitter.com/rohit_dev7",
      description: "Hey,I'm Rohit Pandey a Full-Stack Guy, have collaborated with startups, crafting bespoke applications that optimize operations and boost growth, leveraging diverse technologies to deliver impactful solutions.",
      profile:"/images/Team4.jpeg",
      infoshow:false,
    }, {
      name:"HARSH PATHAK",
      role: "Full-Stack Developer",
      linkedLink: "https://www.linkedin.com/in/rohitpandey777/",
      instagramLink:"https://www.instagram.com/rohitpande77/",
      twitterLink: "https://twitter.com/rohit_dev7",
      description: "Hey,I'm Rohit Pandey a Full-Stack Guy, have collaborated with startups, crafting bespoke applications that optimize operations and boost growth, leveraging diverse technologies to deliver impactful solutions.",
      profile:"/images/Team1.jpeg",
      infoshow:false,
    }
  ])
  const showMemberInfo = (index:number) => {
    setteam_members((prevMembers) =>
      prevMembers.map((member, i) =>
        i === index ? { ...member, infoshow: true } : member
      )
    );
  };

  const hideMemberInfo = (index:number) => {
    setteam_members((prevMembers) =>
      prevMembers.map((member, i) =>
        i === index ? { ...member, infoshow: false } : member
      )
    );
  };

  return (
    <div className='Teams' id="team">
      <div className="teamheader">Lets Meet Our Dynamic Team</div>
      <div className="teamsubheader">Fueling Growth, Fortifying Security: Your Agile Team for Online Success </div>
      <div className="teampeoplebox">
      {
        team_members.map((member:any,index:any)=>{
          return(
            <div className="temacont" key={index}>
              <div className="temacontsub">
                <Image src={member.profile} className="profile" alt='none' width={250} height={250}/>
              </div>
              <div className="teamname">{member.name}</div>
              <div className="teamrole">{member.role}</div>
              <div className="Teamsocials">
                <a href={member.instagramLink} target='_blank'><GrInstagram /></a>
                <a href={member.twitterLink} target='_blank'><FaTwitter/></a>
                <a href={member.twitterLink} target='_blank'><FaLinkedin/></a>
              </div>

              <div className="infoicons">
                { 
                  (member.infoshow)?<BsArrowDownSquareFill className='teaminfoicons2' onClick={()=>{hideMemberInfo(index)}}/>:<BsArrowUpSquareFill className='teaminfoicons' onClick={()=>{showMemberInfo(index)}}/>
                }
              </div>
              <div className={(member.infoshow)?"teamdescription":"teamdescription teaminfohide"}>
                <div className="line1"></div>
                <FaUserSecret className='teamdescriptionicon'/>
                <p>" {member.description} "</p>
                <div className="line2"></div>
              </div>
            </div>
          )
        })
      }      
      </div>
    </div>
  )
}

export default TeamBody