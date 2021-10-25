import React from 'react';
import pic1 from '../../../images/doc-1.jpg'
import pic2 from '../../../images/doctor-character-background_1270-84.jpg'
import pic3  from '../../../images/doc-3.png'
import DoctorInfo from '../DoctorInfo/DoctorInfo';
import './Doctor.css'
const doctors =[
    {
    img:pic1,
    name:'Dr. Sara Diamond',
    phone:'01600000000'
    },
    {
        img:pic2,
        name:'Dr. Anisur Rahman Nayan',
        phone:'01686901824'
        },
        {
            img:pic3,
            name:'Dr. Mahima Akter Himu',
            phone:'01700000000'
            },
]

const Doctor = () => {
    return (
        <div>
            <div>
                <h1 style={{textAlign:"center",color:"aqua",marginTop:"80px"}}>Our Doctors</h1>
            </div>
            <div className="row justify-content-center doctorInfo-div">
        {
            doctors.map(doctor=> <DoctorInfo doctor={doctor}></DoctorInfo>)
        }
            </div>
        </div>
    );
};

export default Doctor;