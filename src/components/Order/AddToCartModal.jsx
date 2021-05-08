import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItem from "../Cart/CartItem";

function AddToCartModal(props) {
  if (props.items.length === 0) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <h6>All photos has been deleted</h6>
        </Modal.Header>
        <Modal.Body>
          <h5>Cart is empty</h5>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/order">
            <Button onClick={props.onHide}>Back</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <h6>Selected photos are successfully added to cart </h6>
          <i
            className="fa fa-check-circle"
            aria-hidden="true"
            style={{ color: "green", marginLeft: "3px" }}></i>
        </Modal.Header>
        <Modal.Body>
          <p>You can edit or delete photos before purchasing.</p>
          <CartItem
            items={props.items[0]}
            deletecartitem={() => props.deletecartitem(props.items[0].id)}
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button className="ml-2" onClick={props.onHide}>
            Back
          </Button>

          <Link to="/cart">
            <Button variant="danger" onClick={props.handleGoToCart}>
              Go to cart
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddToCartModal;
