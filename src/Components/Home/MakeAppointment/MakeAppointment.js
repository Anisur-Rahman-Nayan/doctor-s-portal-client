import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../images/5790-removebg.png'
import './MakeAppointment.css'
const MakeAppointment = () => {
    return (
        <div className="row background d-flex align-items-cente"> 
            <div className="col-md-5">
                <img className="img-fluid" src={doctor} alt="" />
            </div>
            <div className="col-md-5">
                <h2 style={{color:"aqua"}}>APPOINTMENT</h2>
                <h1 className="text-white">Make an Appointment</h1>
                <h1 className="text-white">Today ! </h1>
                <p className="text-secondary">The dentist will reviews the cleaning done by the hygienist, conducts an oral exam of your gums and teeth, diagnoses any oral health problems, orders to recover that problems...</p>
                <button className="button">Learn More</button>
            </div>
        </div>
    );
};

export default MakeAppointment;