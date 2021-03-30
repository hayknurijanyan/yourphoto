import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const SippingForm = () => {
  return (
    <Form>
      {/* <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form.Row> */}
      <Form.Row>
        <Col>
          <Form.Group controlId="formGridName">
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First name" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formGridLName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Last name" />
          </Form.Group>
        </Col>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group controlId="formGridPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control placeholder="077 XX XX XX" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Yerevan</option>
            <option>Aragatsotn</option>
            <option>Armavir</option>
            <option>Kotayk</option>
            <option>Lori</option>
            <option>Shirak</option>
            <option>Syunik</option>
            <option>Tavush</option>
            <option>Vayots Dzor</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridComment">
        <Form.Label>Comment</Form.Label>
        <Form.Control placeholder="Enter comment" />
      </Form.Group>

      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Save Address" />
      </Form.Group>
      {/* <Button variant="primary" type="submit" style={{ width: "100%" }}>
        Add Address
      </Button> */}
    </Form>
  );
};

export default SippingForm;
