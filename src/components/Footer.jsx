import React from "react";
import "./Footer.css";
import "./@Shared.css";
import paymentImg from "./../imgs/payments/pay3.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="main-footer">
        <div className="footer-about">
          <h2>YourPhoto</h2>
          <p>
            We’re a small company with roots in Yerevan with customers all over
            Armenia. We’ve been printing your photos since 2016 and having fun
            while we do it!
          </p>
        </div>
        <div className="nav-contact">
          <nav className="footer-nav">
            <h3>Navigation</h3>
            <ul className="footer-nav-links">
              <li className="footer-nav-link">
                <a href="#">Home</a>
              </li>
              <li className="footer-nav-link">
                <a href="#prints">Products</a>
              </li>
              <li className="footer-nav-link">
                <a href="#">Reviews</a>
              </li>
              <li className="footer-nav-link">
                <a href="#about">About Us</a>
              </li>
              <li className="footer-nav-link">
                <a href="#">Support</a>
              </li>
            </ul>
          </nav>
          <div className="footer-contacts">
            <h3>Contacts</h3>
            <div className="footer-contact-item">
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
              <span> +374 77 54 04 54</span>
            </div>
            <div className="footer-contact-item">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <span>yourphotoprints@gmail.com</span>
            </div>
            <div className="footer-icon-social">
              <i className="fa fa-apple" aria-hidden="true"></i>
              <i className="fa fa-android" aria-hidden="true"></i>
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <i className="fa fa-youtube-play" aria-hidden="true"></i>
              <i className="fa fa-google-plus-square" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div className="footer-icons">
          <div className="footer-icon-payments">
            <h3>Payment Methods</h3>
            <img src={paymentImg} alt="" width="280px" />
          </div>
        </div>
      </div>
      <hr className="default-hr" />
      <div className="secondary-footer">
        © Copyright 2021 YourPhoto Print Studio
      </div>
    </footer>
  );
};

export default Footer;
