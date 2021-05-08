import React from "react";
import "./About.css";
import "./@Shared.css";
import img from "../../imgs/about.jpg";

const About = () => {
  return (
    <section id="about">
      <h1 className="section-title">About Us</h1>
      <figure className="about-container">
        <figcaption>
          <h3>Our Story</h3>
          <p>
            At YourPhoto, Inc., our purpose is to help share life’s joy. We are
            founded in 2016 as the leading retailer and manufacturing platform
            for personalized products such as photo prints, photo books,
            stickers, etc. We are the first online photo printing services with
            mobile and web application, based in Armenia.
            <br />
            Our goal is to help consumers capture, preserve, and share life’s
            important moments through professional and personal photographs, and
            personalized products. The YourPhoto brand brings photos to life in
            photo books, gifts, home décor, and cards. We use high quality photo
            papers that qualifies European standards, and put all the effort to
            maintain the quality of the photos products.
            <br />
            <br />
            YourPhoto helps you make the most out of life’s most memorable
            moments. As a personalized photos and services, we allow you to
            create; photo books; custom stationery, including cards,
            announcements, and invitations; as well as unique home decor and
            photo gifts. We help you connect with your family and friends by
            sharing your memories and photos in creative and innovative ways.
          </p>
        </figcaption>
        <img src={img} alt="" />
      </figure>
    </section>
  );
};

export default About;
