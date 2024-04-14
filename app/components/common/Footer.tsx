import React from 'react';
import "../assests/css/footer.css";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";


const Footer = () => {
  return (
    <>
      <div className="footerhead">Back to Top  <TbArrowBigUpLinesFilled className='arrowup'/></div>
      <div className='footer'>
        <div className="subfooter">
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