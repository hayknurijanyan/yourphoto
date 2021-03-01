import React from "react";
import "./Contact.css";
import "./@Shared.css";

const Contact = () => {
  return (
    <section id="contact">
      <h1 class="section-title">Get In Touch With Us</h1>
      <div class="contact-container">
        <div class="contact-map">
          <iframe
            src="https://maps.google.com/maps?q=yerevan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
        <div class="contact-details">
          <h2>Contacts</h2>
          <div class="contact-detail-item">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <span>Address: H. Paronyan 6, Yerevan, Armenia</span>
          </div>
          <div class="contact-detail-item">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>Phone: 077 54 04 54</span>
          </div>
          <div class="contact-detail-item">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <span>
              Facebook:{" "}
              <a href="https://www.facebook.com/yourphotoprinting">
                YourPhotoPrinting
              </a>
            </span>
          </div>

          <div class="contact-detail-item">
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <span>
              Instagram:{" "}
              <a href="https://www.instagram.com/yourphoto.am">@yourphoto.am</a>
            </span>
          </div>
          <div class="contact-detail-item">
            <i class="fa fa-whatsapp" aria-hidden="true"></i>
            <span>Whatsapp/Viber: +37477540454</span>
          </div>
          <div class="contact-detail-item">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            <span>
              <mark>Email: yourphotoprints@gmail.com</mark>
            </span>
          </div>

          <h3>Working Hours</h3>
          <div class="contact-detail-item">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            <span>Monday - Saturday 10:00 - 19:00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
