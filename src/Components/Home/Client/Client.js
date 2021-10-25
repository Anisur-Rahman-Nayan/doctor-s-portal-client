import React from 'react';
import './Client.css'
import pic1 from '../../../images/Ellipse 1.png'
import pic2 from '../../../images/Ellipse 3.png'
import pic3 from '../../../images/Ellipse 2.png'
import ClientReview from '../ClientReview/ClientReview';
import pic5 from '../../../images/q.jpg'
import './Client.css'
const reviews =[
    {
        review:"Great service and care! from front desk to the Doctor and the stuff . Dr. Anisur Rahman Nayan is an awesome Dentist, also friendly, professional, and helpful. I am very happy and pleased with his work. Highly recommend everybody to go there and take their service.",
        name:"Dr. Mahfuzur Rahman",
        image:pic1,
        place:"Dhaka"
    },
    {
        review:"This is the only dental clinic I have ever been to where I felt like they were telling me the truth about my teeth and not trying to get money out of me! Dr. Anisur Rahman Nayan is very gentle and told me exactly what he was doing and was very attentive to my needs.",
        name:"winson Herry",
        image:pic2,
        place:"california"
    },
    {
        review:"I was so afraid of Injection since my childhood. But when Dr. Anisur Rahman Nayan gave me Injection, I didn’t even realize anything at all! It was completely painless & since then I am one of the biggest fans of Dr. Anisur Rahman Nayan.",
        name:"Sara Diamonds",
        image:pic3,
        place:"Barcelona"
    }
]
const Client = () => {
    return (
        <div>
            <div className="tetimonial-gap">
               <div  className="d-flex justify-content-between" >
               <div>
               <h2 style={{color:"aqua"}}>TESTIMONIAL</h2>
                <h1>What's Our Patients</h1>
                <h1>Says</h1>
               </div>
                <div>
                    <img className="img-fluid img-gap" src={pic5} alt="" />
                </div>
               </div>
            </div>
            <div className="row review-space">
                {
                    reviews.map(review=><ClientReview review={review}></ClientReview>)
                }

            </div>
        </div>
    );
};

export default Client;