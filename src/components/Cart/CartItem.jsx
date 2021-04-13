import { Button } from "react-bootstrap";
import React from "react";

const CartItem = (props) => {
  if (props.items !== undefined) {
    return (
      <>
        <div className="cart-item">
          <div className="cart-item-main">
            <img
              src="https://photo-store.cvs.com/resources/images/cvs/store/2015/global/470x470/Evergreen_4x6Prints_2020_470x470.jpg"
              alt=""
            />
            <div className="cart-item-details">
              <div>{props.items.size}</div>
              <div>Classic Prints</div>
              <div>{props.items.price} AMD</div>
              <div>{props.items.quantity} photos</div>
            </div>
          </div>
          <div className="cart-item-buttons">
            <div>Edit</div>
            <div>Delete</div>
          </div>
        </div>
      </>
    );
  } else
    return (
      <>
        <div className="cart-item">
          <div className="cart-item-main">
            <img
              src="https://photo-store.cvs.com/resources/images/cvs/store/2015/global/470x470/Evergreen_4x6Prints_2020_470x470.jpg"
              alt=""
            />
            <div className="cart-item-details">
              <div></div>
              <div>Classic Prints</div>
              <div> AMD</div>
              <div> photos</div>
            </div>
          </div>
          <div className="cart-item-buttons">
            <div>Edit</div>
            <div>Delete</div>
          </div>
        </div>
      </>
    );
};

export default CartItem;
