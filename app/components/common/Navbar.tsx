"use client"
import React, { useRef, useState } from "react";
import "../assests/css/navbar.css";
import { FiAlignJustify, FiXSquare } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [hidmenu, sethidmenu] = useState(true);
  const router = useRouter();
  const navigateToAppointment = ()=>{
    router.push('/bookappointment');
  }
  return (
    <div className={hidmenu ? "Navbar" : "Navbar navheight"}>
      <div className="navbar">
        <a href="#home" className="header">
          <span>Cy</span>berDevs
        </a>
        <div className="sectioncont">
            <ul className={hidmenu ? "" : "showup"}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
            <button
              className={hidmenu ? "cvbutton" : "cvbutton showup"}
              onClick={()=>{navigateToAppointment()}}
            >
              Book Appointment
            </button>
        </div>
        <FiAlignJustify
          className={hidmenu ? "menu" : "menu hide"}
          onClick={() => sethidmenu(false)}
        />
        <FiXSquare
          className={hidmenu ? "close" : "close showup"}
          onClick={() => sethidmenu(true)}
        />
      </div>
    </div>
  );
};

export default Navbar;