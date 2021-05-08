import React from "react";

const CartItem = (props) => {
  if (props.items !== undefined) {
    return (
      <>
        <div className="cart-item">
          <div className="cart-item-main">
            <img src={props.items.images[0].imgSrc} alt="Preview Image" />
            <div className="cart-item-details">
              <div>Classic Prints</div>
              <div>{props.items.size}</div>
              <div>{props.items.quantity} photos</div>
              <div>{props.items.price} AMD</div>
            </div>
          </div>
          <div className="cart-item-buttons">
            <div onClick={props.deletecartitem}>
              <i
                className="fa fa-trash"
                aria-hidden="true"
                style={{ fontSize: "20px" }}></i>
            </div>
          </div>
        </div>
      </>
    );
  } else
    return (
      <>
        <div className="cart-item">
          <h6>Cart is Empty</h6>
        </div>
      </>
    );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default CartItem;
