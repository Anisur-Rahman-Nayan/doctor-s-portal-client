import React from 'react';
import pic4 from '../../../images/Mask Group 3.png'
import './DentalCare.css'
const DentalCare = () => {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-md-5">
                <img style={{height:'500px',width:'500px',marginTop:"50px" , borderRadius:"15px"}} className="img-fluid" src={pic4} alt="" />
            </div>
            <div className="col-md-5 " style={{padding:"20px",marginTop:"40px"}}>
                <h1>Exceptional Dental</h1>
                <h1>Care,on Your Terms</h1>
                <p className="text-secondary">It is so important to brush your teeth, take care of your oral health, and thank your dental hygienist.</p>

                <p className="text-secondary">A smile is your unique accessory and pearly white teeth make it even more beautiful. If you want to keep the aching tooth away and want to keep those pearly whites intact, taking good care of your teeth is a must. You must always brush your teeth! As Miguel de Cervantes said, “Every tooth in a man's head is more valuable than a diamond.” So remember to brush your teeth, and look after them as well as you would look after a diamond!</p>

                <p className="text-secondary">It is important to teach children about dentistry and the importance of looking after their teeth, and dentist quotes can be a great way to do this. A dentist can clean our teeth for us once in a while, but the main responsibility to brush our teeth is firmly on us.</p>

                <button className="button">Learn More</button>

            </div>
        </div>
    );
};

export default DentalCare;