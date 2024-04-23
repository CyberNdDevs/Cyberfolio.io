import React from 'react';
import "../assests/css/bookappointment.css";
import Image from 'next/image';
import Banner from '../assests/images/bookapp.jpg';

const BookAppointmentBody = () => {
  return (
    <div className='bookAppointment'>
      <div className="bookappointmentcont">
          <div className="bookappointmentimg">
            <Image src={Banner} width={800} height={500} alt='none' className='imageappointment'/>
          </div>
      </div>
    </div>
  )
}

export default BookAppointmentBody