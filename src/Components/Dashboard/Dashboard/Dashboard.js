import React, { useContext ,useEffect } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react/cjs/react.development';
import { UserContext } from '../../../App';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}


const Dashboard = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    const [selectedDate , setSelectedDate] = useState(new Date())
    const [appointments , setAppointment] = useState([]);
    const handleDataChange= date =>{
        setSelectedDate(date)  
    }

    useEffect(()=>{
        fetch('https://calm-thicket-08342.herokuapp.com/appointmentsByDate',{
            method:"POST",
            headers:{'content-type': 'application/json'},
            body: JSON.stringify({date: selectedDate, email: loggedInUser.email})
        })
        .then(res=>res.json())
        .then(appointments =>{
                setAppointment(appointments)
        })
    },[selectedDate])

    

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                        <Calendar
                        onChange={handleDataChange}
                        value={new Date()}
      />
                </div>
                <div className="col-md-5">
                        <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;