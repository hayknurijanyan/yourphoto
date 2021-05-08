import React from "react";
import "./Delivery.css";
import "./@Shared.css";
import img from "../../imgs/delivery.jpg";

const Delivery = () => {
  return (
    <section id="delivery">
      <h1 className="section-title">Delivery Information</h1>
      <figure className="delivery-container">
        <img src={img} alt="Delivery Service" />
        <figcaption>
          <h3>Process</h3>
          <p>
            Once we receive your order, it takes us a few days to prepare it.
            Because every order is custom, it may take few days to process your
            order. Next, we send orders out for delivery. In Yerevan it may take
            2-3 days for your order to be delivered. The delivery service costs
            500 AMD. For faster delivery, please talk to a representative in
            advance, before submitting your order. The cost for faster delivery
            may vary.
            <br />
            <br />
            For the orders from Armenian provinces we use "HayPost" services to
            deliver the order. It may take up to 7 days after the processing to
            receive your order.
          </p>
        </figcaption>
      </figure>
    </section>
  );
};

export default Delivery;
