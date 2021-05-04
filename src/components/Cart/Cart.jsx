import React, { useEffect } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import "./Cart.css";
import { Container } from "react-bootstrap";
import cartImage from "./../../imgs/photos/icon-emptycart.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, updateItemsSum, updateSubTotal } from "./../../actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const itemsSum = useSelector((state) => state.itemsSum);
  const subtotal = useSelector((state) => state.subtotal);

  const deleteCartItem = (id) => {
    const filteredCart = cart.filter((cartItem) => {
      return cartItem.id !== id;
    });
    dispatch(updateCart(filteredCart));
  };

  useEffect(() => {
    const checkSum = () => {
      let sum = 0;
      let obj = { ...cart };
      for (let key in obj) {
        sum += obj[key].price;
      }

      dispatch(updateItemsSum(sum));
      dispatch(updateSubTotal(sum));
    };
    checkSum();
  }, [cart]);

  if (cart.length > 0) {
    return (
      <div className="cart-container">
        <div className="cart-items">
          {cart.map((el, i) => {
            return (
              <CartItem
                key={i}
                items={el}
                handleDeleteCartItem={() => deleteCartItem(el.id)}
              />
            );
          })}
          <Link to="/order">
            <div className="cart-items-add">+ Add More Photos</div>
          </Link>
        </div>
        <div className="cart-total">
          <CartTotal subtotal={subtotal} itemsSum={itemsSum} cart={cart} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart-container">
        <Container className="w-100 mt-5 d-flex flex-column align-items-center justify-content-center">
          <img
            style={{ width: "60%" }}
            alt="cart is empty"
            src={cartImage}></img>
          <h5>Cart is empty</h5>
        </Container>
      </div>
    );
  }
};

export default Cart;
