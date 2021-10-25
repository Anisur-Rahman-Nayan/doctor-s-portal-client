import React from 'react';
import './DoctorInfo.css'
const DoctorInfo = (props) => {
const doctor = props.doctor;
    return (
        <div className="col-md-3 doctor-pic">
            <div>
                <img src={doctor.img} alt="" />
                    {/* <img src={`data:image/png;base64,${doctor.image.img}`} alt="" /> */}
                {/* <img src={`https://calm-thicket-08342.herokuapp.com/${doctor.img}`} alt="" /> */}
                <h4 style={{marginTop:"20px"}}>{doctor.name}</h4>
                <p>📞{doctor.phone}</p>
            </div>
        </div>
    );
};

export default DoctorInfo;