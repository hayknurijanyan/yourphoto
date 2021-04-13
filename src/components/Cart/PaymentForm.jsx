import React from "react";
import { Form, Col } from "react-bootstrap";

const PaymentForm = () => {
  return (
    <fieldset>
      <Form.Group as={Col} style={{ padding: "0px" }}>
        <Form.Label as="legend" column sm={10}>
          Payment Method
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            type="radio"
            label="Cash Payment"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
          />
          <Form.Check
            type="radio"
            label="Credit/Debit Card"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
          />
          <Form.Check
            type="radio"
            label="Pay With iDram"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
          />
        </Col>
      </Form.Group>
    </fieldset>
  );
};

export default PaymentForm;
