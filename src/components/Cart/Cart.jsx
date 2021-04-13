import React, { useState } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import "./Cart.css";
import { Card, Container } from "react-bootstrap";
import cartImage from "./../../imgs/photos/icon-emptycart.png";

const Cart = (props) => {
  if (props.cart.length > 0) {
    return (
      <div className="cart-container">
        <div className="cart-items">
          {props.cart.map((el, i) => {
            return <CartItem key={i} items={el} />;
          })}
        </div>
        <div className="cart-total">
          <CartTotal
            subtotal={props.subtotal}
            itemsSum={props.itemsSum}
            cart={props.cart}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart-container">
        <Container className="w-100 d-flex justify-content-center">
          <img
            style={{ width: "60%" }}
            alt="cart is empty"
            src={cartImage}></img>
        </Container>
      </div>
    );
  }
};

export default Cart;
