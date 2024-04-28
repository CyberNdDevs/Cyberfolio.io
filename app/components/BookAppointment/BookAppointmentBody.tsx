import React from 'react';
import "../assests/css/bookappointment.css";

const BookAppointmentBody = () => {
  return (
    <div className='bookAppointment'>
      <div className="bookappointmentcont">
        <div className="appointmentcont1">
          <h1 className='appointmentheads'>We have got</h1>
          <h1 className='appointmentheads2'>your back, always!</h1>
          <div className="appointmentdesc">We are here to help you and we'd love to connect with you.</div>
          <div className="appointmentdesc">We'll get back in 24h.</div>
          <div className="subinfoappointmentcont">
            <h1>Join our mission today!</h1>
            <p>
CyberDevs drives the expansion of businesses by delivering robust solutions in data security and software development, fostering sustainable growth and success.</p>
             <button>Learn more</button>
          </div>
        </div>
        <div className="appointmentcont2">
           <div className="appointmentmessagecont">
             <div className='appointmentinputscont'>
                 <p className='appointmentinputsheader'>Name <span>| Required*</span></p>
                 <input type="text" className='appointmentinputbox'/>
             </div>
             <div className='appointmentinputscont'>
                 <p className='appointmentinputsheader'>Email <span>| Required*</span></p>
                 <input type="email" className='appointmentinputbox'/>
             </div>
             <div className='appointmentinputscont'>
                 <p className='appointmentinputsheader'>Service <span>| Required*</span></p>
                 <select className='appointmentinputbox'>
                     <option value=''>Select services</option>
                     <option value='Website Development'>Website Development</option>
                     <option value='App development'>App development</option>
                     <option value='Consultancy'>Consultancy</option>
                 </select>
             </div>
             <div className='appointmentinputscont'>
                 <p className='appointmentinputsheader'>Message <span>| <span>Required*</span></span></p>
                 <textarea rows={7} cols={10} className='appointmentinputbox'/>
             </div>

             <button className='appointsendmessagebtn'>Send message</button>

           </div>
        </div>
      </div>
    </div>
  )
}

export default BookAppointmentBody