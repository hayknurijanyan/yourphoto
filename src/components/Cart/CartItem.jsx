import { Button } from "react-bootstrap";
import React from "react";

const CartItem = () => {
  return (
    <>
      <div className="cart-item">
        <div className="cart-item-main">
          <img
            src="https://photo-store.cvs.com/resources/images/cvs/store/2015/global/470x470/Evergreen_4x6Prints_2020_470x470.jpg"
            alt=""
          />
          <div className="cart-item-details">
            <div>10 x 15 Glossy</div>
            <div>Classic Prints</div>
            <div>1560 AMD</div>
            <div>26 photos</div>
          </div>
        </div>
        <div className="cart-item-buttons">
          <Button>Edit</Button>
          <Button variant="primary">Delete</Button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
