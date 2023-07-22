import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            blanditiis, animi officiis atque ullam et?
          </div>
        </div>
        <div className="col">
          <div className="title">Contect</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              om row house,pasodara ,surat,gujrat, 395006
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 6353351141</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: radadiyajenis0603@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">product1</span>
          <span className="text">product2</span>
          <span className="text">product3</span>
          <span className="text">product4</span>
          <span className="text">product5</span>
          <span className="text">product6</span>
          {/* <span className="text">product7</span> */}
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Term & Condition</span>
          <span className="text">Contect Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            SHREECROCHET 2023 CREATED BY JENIS RADADIYA.
          </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
