import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItem from "../Cart/CartItem";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
        <h6>All photos are successfully added to cart </h6>
        <i
          className="fa fa-check-circle"
          aria-hidden="true"
          style={{ color: "green", marginLeft: "3px" }}></i>
      </Modal.Header>
      <Modal.Body>
        <h6>Your 71 photos added to cart</h6>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/cart">
          <Button>Go to cart</Button>
        </Link>

        <Link to="/cart/checkout">
          <Button variant="danger">Checkout</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
