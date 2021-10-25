import React, { useState } from 'react';
import AppointmentForm from '../AppoinmentForm/AppointmentForm';
import './BookingCart.css'
const BookingCart = (props) => {
    const booking = props.booking;
    const date = props.date

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
   
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5>{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} spaces Available</p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</button>

                <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject} date={date}></AppointmentForm>
                </div>

            </div>
        </div>
    );
};

export default BookingCart;