import React from "react";
import "./Delivery.css";
import "./@Shared.css";
import img from "./../imgs/delivery.jpg";

const Delivery = () => {
  return (
    <section id="delivery">
      <h1 className="section-title">Delivery Information</h1>
      <figure className="delivery-container">
        <img src={img} alt="Delivery Service" />
        <figcaption>
          <h3>Process</h3>
          <p>
            Once we receive your order, it takes us a few days to make it just
            right for you. Because every order is custom, it can take up to 2
            business days to process your order. Next, we send orders out for
            shipping. It can take up to 7 days after processing to receive your
            order, depending on the shipping method you select. YourPhoto offers
            four convenient ways to ship your order: standard, ground, 2-day,
            and overnight. Details on these options can be found here.
            <br />
            <br />
            Do you need your order today? Select items like prints, photo paper
            cards, and calendars can be picked up in-store at a retailer near
            you. Shop items you can pick up in store.
          </p>
        </figcaption>
      </figure>
    </section>
  );
};

export default Delivery;
