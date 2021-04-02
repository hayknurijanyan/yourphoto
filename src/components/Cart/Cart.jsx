import React, { useState } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((el) => {
          return <CartItem />;
        })}
      </div>
      <div className="cart-total">
        <CartTotal />
      </div>
    </div>
  );
};

export default Cart;
