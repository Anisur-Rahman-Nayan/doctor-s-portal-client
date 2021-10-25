import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCart.css'

const InfoCart = (props) => {
   const info = props.info
    return (
        <div className="col-md-4 info-cart">
           <div className={`d-flex justify-content-center info-container info-${info.background}`}>
           <div className="ms-3">
                <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
            </div>
            <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
            </div>
        </div>
           </div>
    );
};

export default InfoCart;