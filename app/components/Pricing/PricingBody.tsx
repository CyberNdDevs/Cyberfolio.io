import React from 'react';
import "../assests/css/pricing.css";
import { TiTick } from "react-icons/ti";

const PricingBody = () => {
  return (
    <div className='Pricing' id='pricing'>
        <div className="pricingcont">
            <div className="priceheader">Ready to Get Started?</div>
            <div className="pricesubheader">Choose a service tailored to your needs </div>
            <div className="priceservicecont">
                <div className="priceservice">
                    <div className="priceservicehead">App</div>
                    <div className="pricecharge">Rs. 20000/- <span>onwards</span> </div>
                    <div className="pricesubdesc">Offering the most competitive price in line with current market standards.</div>
                    <button className='pricebtn'>Get Started</button>
                    <div className="facilities">
                        <TiTick className='facilityicon'/> 
                        <p className="facilityinfo">Project lifecycle</p>
                    </div>
                    <div className="facilities">
                        <TiTick className='facilityicon'/> 
                        <p className="facilityinfo">Tech-stack suggestion</p>
                    </div>
                    <div className="facilities">
                        <TiTick className='facilityicon'/> 
                        <p className="facilityinfo">Product designs</p>
                    </div>
                    <div className="facilities">
                        <TiTick className='facilityicon'/> 
                        <p className="facilityinfo">Testing</p>
                    </div>
                    <div className="facilities">
                        <TiTick className='facilityicon'/> 
                        <p className="facilityinfo">Deployments</p>
                    </div>
                </div>
                <div className="priceservice1">
                    <div className="priceservicehead"><p>Website</p> <span>popular</span></div>
                    <div className="pricecharge">Rs. 15000/- <span>onwards</span> </div>
                    <div className="pricesubdesc">Offering the most competitive price in line with current market standards.</div>
                    <button className='pricebtn1'>Get Started</button>
                    <div className="facilities">
                        <TiTick className='facilityicon'/> 
                        <p className="facilityinfo">Project lifecycle</p>
                    </div>
                    <div className="facilities">
                        <TiTick className='facilityicon'/> 
                        <p className="facilityinfo">Tech-stack suggestion</p>
                    </div>
                    <div className="facilities">
                        <TiTick className='facilityicon'/> 
                        <p className="facilityinfo">Product designs</p>
                    </div>
                    <div className="facilities">
                        <TiTick className='facilityicon'/> 
                        <p className="facilityinfo">Testing</p>
                    </div>
                    <div className="facilities">
                        <TiTick className='facilityicon'/> 
                        <p className="facilityinfo">Deployments</p>
                    </div>
                </div>
                <div className="priceservice">
                    <div className="priceservicehead">VP testing</div>
                    <div className="pricecharge">Rs. 12000/- <span>onwards</span> </div>
                    <div className="pricesubdesc">Offering the most competitive price in line with current market standards.</div>
                    <button className='pricebtn'>Get Started</button>
                    <div className="facilities">
                        <TiTick className='facilityicon'/> 
                        <p className="facilityinfo">Vulnerability & penetration tests</p>
                    </div>
                    <div className="facilities">
                        <TiTick className='facilityicon'/> 
                        <p className="facilityinfo">For Android, Web, iOS apps.</p>
                    </div>
                    <div className="facilities">
                        <TiTick className='facilityicon'/> 
                        <p className="facilityinfo">Configuration Review</p>
                    </div>
                    <div className="facilities">
                        <TiTick className='facilityicon'/> 
                        <p className="facilityinfo">Source code Review </p>
                    </div>
                    <div className="facilities">
                        <TiTick className='facilityicon'/> 
                        <p className="facilityinfo">Network Penetration Tests</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricingBody