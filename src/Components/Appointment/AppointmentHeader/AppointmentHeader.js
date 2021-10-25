import React from 'react';
import chair from '../../../images/Mask Group 1.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = (props) => {
    const handleDataChange = props.handleDataChange;
    
    
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h1 style={{color:"#3A4256"}}>Appointment</h1>
            <Calendar
        onChange={handleDataChange}
        value={new Date()}
      />
            
        </div>
        <div className="col-md-6">
            <img className="img-fluid" src={chair} alt="" />
        </div>

    </main>
    );
};

export default AppointmentHeader;