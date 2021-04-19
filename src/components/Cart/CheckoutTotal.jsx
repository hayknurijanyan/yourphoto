import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckoutTotal = (props) => {
  const cart = useSelector((state) => state.cart);
  const itemsSum = useSelector((state) => state.itemsSum);
  const subtotal = useSelector((state) => state.subtotal);

  return (
    <div className="checkout-total-items">
      <div className="checkout-total-details">
        <div>
          <span>items ({cart.length})</span>
          <span>{itemsSum} AMD</span>
        </div>
        <div>
          <span>Delivery</span>
          <span>500 AMD</span>
        </div>
      </div>
      <div className="checkout-total-subtotal">
        <h4>Subtotal</h4>
        <h4>{subtotal} AMD</h4>
      </div>
      <Link
        onClick={props.handleSubmitClick}
        to="/cart/checkout"
        className="checkout-total-button">
        <Button onClick={props.submitOrder} variant="danger" type="submit">
          Confirm And Pay
        </Button>
      </Link>
    </div>
  );
};

export default CheckoutTotal;
