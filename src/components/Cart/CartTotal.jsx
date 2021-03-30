import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const CartTotal = () => {
  return (
    <div className="cart-total-items">
      <Link to="cart/checkout" className="cart-total-button">
        <Button variant="danger">Go To Chekckout</Button>
      </Link>
      <div className="cart-total-details">
        <div>
          <span>items (7)</span>
          <span>1560 AMD</span>
        </div>
        <div>
          <span>Delivery</span>
          <span>500 AMD</span>
        </div>
      </div>
      <div className="cart-total-subtotal">
        <h4>Subtotal</h4>
        <h4>2960 AMD</h4>
      </div>
    </div>
  );
};

export default CartTotal;
