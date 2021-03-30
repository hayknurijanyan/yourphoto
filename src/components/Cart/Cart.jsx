import React, { Component } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import "./Cart.css";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div className="cart-container">
        <div className="cart-items">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="cart-total">
          <CartTotal />
        </div>
      </div>
    );
  }
}

export default Cart;
