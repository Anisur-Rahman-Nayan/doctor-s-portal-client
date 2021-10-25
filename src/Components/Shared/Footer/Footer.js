import React from 'react';
import './Footer.css'
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
    return (
        <div className="row footer-row">
            <div className="col-md-3">
            <ul className="footer-item">
                <li>Emergency Dental Care</li>
                <li>Check Up</li>
                <li>Treatment of Personal Diseases</li>
                <li>Tooth Extraction</li>
                <li>Check Up</li>
            </ul>
            </div>
            <div className="col-md-3">
            <h2 style={{color:"aqua"}}>Services</h2>
                <li>Emergency Dental Care</li>
                <li>Check Up</li>
                <li>Treatment of Personal Diseases</li>
                <li>Tooth Extraction</li>
                <li>Check Up</li>
                <li>Check Up</li>
                <li>Check Up</li>
            </div>
            <div className="col-md-3">
                <h2 style={{color:"aqua"}}>Oral Health</h2>
            <li>Emergency Dental Care</li>
                <li>Check Up</li>
                <li>Treatment of Personal Diseases</li>
                <li>Tooth Extraction</li>
                <li>Check Up</li>
                <li>Check Up</li>
                <li>Check Up</li>
            </div>
            <div className="col-md-3">
            <h2 style={{color:"aqua"}}>Our Address</h2>
            <h2>Wari,Dhaka 1203,Bangladesh </h2>
            <div>
            <a href="https://www.youtube.com"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
<a href="https://www.facebook.com"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://www.twitter.com" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
<p>Call Now</p>
<button className="btn btn-primary"> 01686901824</button>
            </div>
            
            </div>
            <p style={{textAlign:"center",marginTop:"30px"}}>CopyRight © {(new Date()).getFullYear()} Doctor-portal By Anisur Rahman Nayan</p>
        </div>
    );
};

export default Footer;