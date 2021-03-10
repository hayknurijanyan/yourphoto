import React from "react";
import "./About.css";
import "./@Shared.css";
import img from "../imgs/about.jpg";

const About = () => {
  return (
    <section id="about">
      <h1 className="section-title">About Us</h1>
      <figure className="about-container">
        <figcaption>
          <h3>Our Story</h3>
          <p>
            At YourPhoto, Inc., our purpose is to help share life’s joy as the
            leading retailer and manufacturing platform for personalized
            products and communications. Founded in 2016, YourPhoto, Inc. has
            three divisions: Consumer, Lifetouch, and YourPhoto Business
            Solutions. Our Consumer and Lifetouch divisions help consumers
            capture, preserve, and share life’s important moments through
            professional and personal photography, and personalized products.
            The YourPhoto brand brings photos to life in photo books, gifts,
            home décor, and cards and stationery. Lifetouch is the national
            leader in school photography, built on the enduring tradition of
            “Picture Day,” and also serves families through portrait studios and
            other partnerships. YourPhoto Business Solutions delivers digital
            printing services that enable efficient and effective customer
            engagement through personalized communications. Together, we are
            YourPhoto, Inc.
            <br />
            <br />
            YourPhoto helps you make the most out of life’s most memorable
            moments. As a leader in personalized photos and services, we allow
            you to create lasting keepsakes; award-winning photo books; custom
            stationery, including cards, announcements, and invitations; as well
            as unique home decor and photo gifts. We help you connect with your
            family and friends by sharing your memories and photos in creative
            and innovative ways.
          </p>
        </figcaption>
        <img src={img} alt="" />
      </figure>
    </section>
  );
};

export default About;
