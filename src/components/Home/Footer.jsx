import React from "react";
import "./Footer.css";
import "./@Shared.css";
import paymentImg from "../../imgs/payments/pay3.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="main-footer">
        <div className="footer-about">
          <h2>YourPhoto</h2>
          <p>
            We’re a small company with roots in Yerevan with customers all over
            Armenia. We’ve been printing your photos since 2016 . It is our
            pleasure to help you make your memories last forever.
          </p>
        </div>
        <div className="nav-contact">
          <nav className="footer-nav">
            <h3>Navigation</h3>
            <ul className="footer-nav-links">
              <li className="footer-nav-link">
                <a href="/#">Home</a>
              </li>
              <li className="footer-nav-link">
                <a href="/#products">Products</a>
              </li>
              <li className="footer-nav-link">
                <a
                  href="https://www.facebook.com/yourphotoprinting/reviews"
                  target="_blank"
                  rel="noreferrer">
                  Reviews
                </a>
              </li>
              <li className="footer-nav-link">
                <a href="/#about">About Us</a>
              </li>
              <li className="footer-nav-link">
                <a
                  href="https://tawk.to/chat/5c59946a6cb1ff3c14cb321a/1eu1ga0pk"
                  target="_blank"
                  rel="noreferrer">
                  Live chat
                </a>
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
              <a
                href="http://onelink.to/xgzgvs"
                target="_blank"
                rel="noreferrer">
                <i className="fa fa-apple" aria-hidden="true"></i>
              </a>
              <a
                href="http://onelink.to/xgzgvs"
                target="_blank"
                rel="noreferrer">
                <i className="fa fa-android" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.facebook.com/yourphotoprinting"
                target="_blank"
                rel="noreferrer">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
              <a
                href="http://instagram.com/yourphoto.am"
                target="_blank"
                rel="noreferrer">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCX3Y2Zgd3lS-mNnG0nUdPKA"
                target="_blank"
                rel="noreferrer">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.google.com/maps/place/YourPhoto+(Online+Print)+Studio/@40.1947369,44.471829,11z/data=!4m5!3m4!1s0x406abd64e868a1b1:0xea8207e999beb7e9!8m2!3d40.2021712!4d44.4760555"
                target="_blank"
                rel="noreferrer">
                <i className="fa fa-google-plus-square" aria-hidden="true"></i>
              </a>
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
