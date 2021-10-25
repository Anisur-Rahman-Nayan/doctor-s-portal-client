import React from 'react';
import BookingCart from '../BookingCart/BookingCart';

const BookAppointment = (props) => {
    const date = props.date;
    const bookingData = [
        {
            _id: 'bookingData1',
            id: 1,
            subject:"teeth Orthodontic",
            visitingHour:'8:00 AM - 9:00 AM',
            totalSpace: 10 ,
        },
        {
            _id: 'bookingData2',
            id: 2,
            subject:"Cosmetic Dentistry",
            visitingHour:'10:50 AM - 11:30 AM',
            totalSpace: 12 ,
        },
        {
            _id: 'bookingData3',
            id: 3,
            subject:"Teeth Cleaning",
            visitingHour:'5:00 PM - 6:00 AM',
            totalSpace: 15 ,
        },
        {
            _id: 'bookingData4',
            id: 4,
            subject:"Cavity Protection",
            visitingHour:'7:00 AM - 8:30 AM',
            totalSpace: 10 ,
        },
        {
            _id: 'bookingData5',
            id: 5,
            subject:"Teeth Orthodontics",
            visitingHour:'8:00 AM - 9:30 AM',
            totalSpace: 11 ,
        },
        {
            _id: 'bookingData6',
            id: 6,
            subject:"Tooth Check-Up",
            visitingHour:'8:00 AM - 10:30 AM',
            totalSpace: 20 ,
        }
    ]
    return (
        <section>
            <h2 className="text-center mb-5" style={{color:"#1cc7c1"}}>Available Appointment on {date.toDateString()}  </h2>
            <div className="row">
                {
                    bookingData.map(booking=> <BookingCart booking={booking} key = {booking.id} date={date}></BookingCart>)
                }
            </div>
         </section>
    );
};

export default BookAppointment;