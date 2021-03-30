import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const CheckoutTotal = () => {
  return (
    <div className="checkout-total-items">
      <div className="checkout-total-details">
        <div>
          <span>items (7)</span>
          <span>1560 AMD</span>
        </div>
        <div>
          <span>Delivery</span>
          <span>500 AMD</span>
        </div>
      </div>
      <div className="checkout-total-subtotal">
        <h4>Subtotal</h4>
        <h4>2960 AMD</h4>
      </div>
      <Link to="cart/checkout" className="checkout-total-button">
        <Button variant="danger">Confirm And Pay</Button>
      </Link>
    </div>
  );
};

export default CheckoutTotal;
