import React from "react";
import { Modal, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProgressModal(props) {
  if (props.progress === undefined || props.progress < 100) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <h6>Please wait a moment, we are uploading your photos...</h6>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center flex-column">
          <ProgressBar
            style={{ width: "100%", marginTop: "20px" }}
            now={props.progress}
          />
          <h6 style={{ color: "grey", alignSelf: "center", margin: "10px" }}>
            uploading {props.progress}%
          </h6>
        </Modal.Body>
        <Modal.Footer>
          <Button>Pause</Button>
          <Button>Cancel</Button>
          {/* <Button>Continue</Button> */}
        </Modal.Footer>
      </Modal>
    );
  }
  if (props.progress === 100) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <h6>Photos Are Uploaded Successfully </h6>
          <i
            className="fa fa-check-circle"
            aria-hidden="true"
            style={{ color: "green", marginLeft: "3px" }}></i>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center flex-column">
          <h4
            style={{ color: "grey", alignSelf: "center", margin: "60px 0px" }}>
            Thank You! your order has been placed
            {/* Շնորհակալություն Պատվերն Ընդունված է */}
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/">
            <Button variant="primary">Done</Button>
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
          <h6>Please wait a moment, we are uploading your photos...</h6>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center flex-column">
          <ProgressBar
            style={{ width: "100%", marginTop: "20px" }}
            now={props.progress}
          />
          <h6 style={{ color: "grey", alignSelf: "center", margin: "10px" }}>
            uploading {props.progress}%
          </h6>
        </Modal.Body>
        <Modal.Footer>
          <Button>Pause</Button>
          <Button>Cancel</Button>
          {/* <Button>Continue</Button> */}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ProgressModal;
