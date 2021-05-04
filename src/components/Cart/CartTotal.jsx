import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const CartTotal = (props) => {
  return (
    <div className="cart-total-items">
      <Link to="cart/checkout" className="cart-total-button">
        <Button variant="danger">Go To Checkout</Button>
      </Link>
      <div className="cart-total-details">
        <div>
          <span>Cart items ({props.cart.length})</span>
          <span>{props.itemsSum} AMD</span>
        </div>
        <div>
          <span>Delivery</span>
          <span>500 AMD</span>
        </div>
      </div>
      <div className="cart-total-subtotal">
        <h4>Subtotal</h4>
        <h4>{props.subtotal} AMD</h4>
      </div>
    </div>
  );
};

export default CartTotal;
