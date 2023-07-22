import React from "react";
import {
    FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn
} from "react-icons/fa";

import "./Newsletter.scss";
const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">sign up for latest update and offers</span>
        
        <div className="form">
            <input type="text" placeholder="Email Adderss" />
            <button>Submit</button>
        </div>
        <div className="text">will be used in accordance with our privacy and policy</div>
        <div className="social-icon">
            <div className="icon">
                <FaFacebookF size={14}/>
            </div>
            <div className="icon">
                <FaInstagram size={14}/>
            </div>
            <div className="icon">
                <FaTwitter size={14}/>
            </div>
            <div className="icon">
                <FaLinkedinIn size={14}/>
            </div>
            </div>
        </div>
    </div>;
};

export default Newsletter;
