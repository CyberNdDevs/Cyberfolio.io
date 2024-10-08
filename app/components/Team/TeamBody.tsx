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
      description: "Ankit Pandey excels in web, mobile, and API VAPT, with source code review expertise. Committed to growth, he aspires to master Red Teaming through continuous learning and dedication.",
      profile:"/images/team99.jpg",
      infoshow:false,
    },
    {
      name:"SHUBHAM MISHRA",
      role: "Cyber-Security Consultant",
      linkedLink: "https://www.linkedin.com/in/shubham-mishra-74a246237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagramLink:"https://www.instagram.com/shuubham.mishra?igsh=MWpncHJxbW4waHRqaw==",
      twitterLink: "https://twitter.com/",
      description: "Shubham Misra excels in web, mobile, and API VAPT, with source code review expertise. Committed to growth, he aspires to master Red Teaming through continuous learning and dedication.",
      profile:"/images/Team78.jpg",
      infoshow:false,
    }, 
    {
      name:"ARCHANA PRAJAPATI",
      role: "Cyber-Security Consultant",
      linkedLink: "https://www.linkedin.com/in/archana0708",
      instagramLink:"https://www.instagram.com/archanap_08/",
      twitterLink: "https://twitter.com",
      description: "Archana, a cybersecurity consultant, specializes in Android, web, API, and network VAPT. Passionate about exploring new domains, she continuously expands her expertise to stay ahead in the digital landscape.",
      profile:"/images/Team4.jpeg",
      infoshow:false,
    }, {
      name:"HARSH PATHAK",
      role: "Full-Stack Developer",
      linkedLink: "https://www.linkedin.com/in/harsh--pathak",
      instagramLink:"https://www.instagram.com/harshh_pathakk/",
      twitterLink: "https://twitter.com/Harsh_200",
      description: "Hey,I'm Harsh Pathak a passionate learner who excels in web development and cybersecurity analysis. With a penchant for coding and problem-solving, I develops amazing tech products.",
      profile:"/images/Team11.jpeg",
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
                <a href={member.linkedLink} target='_blank'><FaLinkedin/></a>
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