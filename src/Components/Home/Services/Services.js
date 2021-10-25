import React from 'react';
import pic1 from  '../../../images/001-dental.png'
import pic2 from '../../../images/tooth (1).png'
import pic3 from '../../../images/tooth.png'
import ServicesDetails from '../ServicesDetails/ServicesDetails';
const serviceData =[
    {
        name:"Fluoride Treatment",
        description:"A high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities",
        img: pic1
    },
    {
        name:"Cavity Filling",
        description:" brings back the functionality and appearance of the tooth. A passage is sort of a filling except for the within of the tooth, deep within the roots, where the nerve and blood supply is",
        img: pic2
    },
    {
        name:"Teeth whitening ",
        description:"Tooth whitening can be a very effective way of lightening the natural colour of your teeth without removing any of the tooth surface.",
        img:pic3
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
            <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
            </div>
            
            <div className="d-flex justify-content-center ">
           <div className="w-75 row mt-5 pt-5">
           {
             serviceData.map(service => <ServicesDetails service={service}></ServicesDetails>)   
            }
           </div>
        </div>
        </section>
    );
};

export default Services;