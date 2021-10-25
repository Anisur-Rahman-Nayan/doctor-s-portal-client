import React from 'react';
import InfoCart from '../InfoCart/InfoCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMarker,faPhone } from '@fortawesome/free-solid-svg-icons'

const infoData =[
    {
        title: "Opening Hours",
        description: "We are open 7 days",
        icon:faClock,
        background: "primary"
    },
    {
        title: "Visit Our Location",
        description: "Wari, Dhaka 1203 Bangladesh",
        icon:faMarker,
        background: "dark"
    },
    {
        title: "Call Us Now",
        description: "01686901824",
        icon:faPhone,
        background: "primary"
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center ">
           <div className="w-75 row">
           {
             infoData.map(info => <InfoCart info={info}></InfoCart>)   
            }
           </div>
        </section>
    );
};

export default BusinessInfo;