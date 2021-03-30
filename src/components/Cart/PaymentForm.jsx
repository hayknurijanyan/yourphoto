import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const PaymentForm = () => {
  return (
    <Form>
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
      {/* <Form.Group as={Col} controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group> */}

      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          {/* <Button type="submit" style={{ width: "100%" }}>
            Add Payment
          </Button> */}
        </Col>
      </Form.Group>
    </Form>
  );
};

export default PaymentForm;
