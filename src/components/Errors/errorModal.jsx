import { Modal, Button } from "react-bootstrap";
import React from "react";

function ErrorModal(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleCloseError}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Oops.. Something Went Wrong</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCloseError}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ErrorModal;
