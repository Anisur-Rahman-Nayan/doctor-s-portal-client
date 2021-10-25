import React from 'react';
import './ClientReview.css'

const ClientReview = (props) => {
    const review = props.review 
    return (

            <div class="card" style={{width: "20rem",height:"20rem"}}>
            <div className="gap">
            {
                review.review
            }
            </div>

            <div class="card-body">
            <div className="d-flex">
            <div>
            <p class="card-text"><img src={review.image} alt="" /></p>
            </div>
            <div>

            <p class="card-text name-gap space">{review.name}</p>
            <p class="card-text name-gap ">{review.place}</p>

            </div>
            </div>
            
           
            </div>
        </div>          
        
            
    );
};

export default ClientReview;