import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/Mask Group 1.png'
const HeaderMain = () => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:"#3A4256"}}>Your New Smile <br /> Starts Here</h1>
                <p className="text-secondary">
                “ I’m always amazed to hear of air crash victims so badly mutilated that they have to be identified by their dental records.  What I can’t understand is, if they don’t know who you are, how do they know who your dentist is ? ”
                </p>
               
                <Link to="/appointment"> <button className="btn btn-primary">GET APPOINTMENT </button></Link>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={chair} alt="" />
            </div>

        </main>
    );
};

export default HeaderMain;