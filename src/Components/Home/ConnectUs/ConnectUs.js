import React from 'react';
import './ConnectUs.css'

const ConnectUs = () => {
    return (
        <div className="bg bg-dark form-Space">   
            <div>
                <h2 style={{color:"aqua",textAlign:"center"}}>CONTACT US</h2>
                <h1 style={{textAlign:"center",color:"white"}}>Always Connect With Us</h1>
            </div>
            <div >
            <form className=" input-form" action="">
               <br />
           <input style={{width:"730px"}} class="form-control " type="email" placeholder="Email Address :"required></input>
            <br />
            <input style={{width:"730px"}} class="form-control" type="subject" placeholder="Subject :" required></input>
            <br />
            <input style={{height:"100px",width:"730px"}} class="form-control " type="text" placeholder="Your Message :" required></input>
           <br />
           <button className="btn btn-success">Submit</button>
           </form>
            </div>
        </div>
    );
};

export default ConnectUs; 
