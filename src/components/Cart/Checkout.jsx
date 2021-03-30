import { Button } from "react-bootstrap";
import React from "react";
import PaymentForm from "./PaymentForm";
import ShippingForm from "./ShippingForm";
import CheckoutTotal from "./CheckoutTotal";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div className="checkout-info">
        <div className="checkout-payment">
          <PaymentForm />
        </div>
        <div className="checkout-shipping">
          <ShippingForm />
        </div>
      </div>

      <div className="checkout-total">
          <CheckoutTotal />
      </div>
    </div>
  );
};

export default Checkout;
