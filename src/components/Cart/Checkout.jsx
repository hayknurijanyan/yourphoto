import React, { useRef, useState } from "react";
import { Form, Col, ProgressBar } from "react-bootstrap";
// import PaymentForm from "./PaymentForm";
// import ShippingForm from "./ShippingForm";
import CheckoutTotal from "./CheckoutTotal";
import ProgressModal from "./ProgressModal";
import { Formik } from "formik";
import * as yup from "yup";

const Checkout = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "*Names must have at least 2 characters")
      .max(30, "*Names can't be longer than 30 characters")
      .required(),
    lastName: yup.string(),
    phone: yup
      .string()
      .min(9, "*Phone Numbers must have at least 9 characters")
      .matches(phoneRegExp, "*Phone number is not valid")
      .required("*Phone number required"),
    address: yup.string().required(),
    city: yup.string().required(),
    state: yup.string(),
    zip: yup.string(),
    comment: yup.string(),
    saveAddress: yup.bool(),
  });

  const handleSubmitClick = (touched) => {
    if (props.cart.length > 0) {
      const shippingData = {
        user_name: `${touched.firstName} ${touched.lastName}`,
        user_phone: touched.phone,
        user_address: touched.address,
        user_zip: touched.zip,
        user_city: touched.city,
        user_state: touched.state,
        saveAddress: touched.saveAddress,
      };
      props.submitOrder(shippingData);
      console.log(touched);
      setModalShow(true);
    }
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(touched) => handleSubmitClick(touched)}
      initialValues={{
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        city: "Yerevan",
        state: "Yerevan",
        zip: "",
        comment: "",
        saveAddress: false,
      }}>
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate>
          <div className="checkout-container">
            <div className="checkout-info">
              <div className="checkout-payment">
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
              </div>
              <div className="checkout-shipping">
                <fieldset>
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
                      <Form.Group controlId="validationFormik101">
                        <Form.Label>First Name*</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          isValid={touched.firstName && !errors.firstName}
                          isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.firstName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="validationFormik102">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          // isValid={touched.lastName && !errors.lastName}
                          isInvalid={!!errors.lastName}
                        />
                      </Form.Group>
                    </Col>
                  </Form.Row>

                  <Form.Group controlId="validationFormik103">
                    <Form.Label>Address*</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      isValid={touched.address && !errors.address}
                      isInvalid={!!errors.address}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.address}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="validationFormik104">
                    <Form.Label>Phone Number*</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      isValid={touched.phone && !errors.phone}
                      isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phone}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="validationFormik105">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        isValid={touched.city && !errors.city}
                        isInvalid={!!errors.city}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.city}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="validationFormik106">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        as="select"
                        name="state"
                        value={values.state}
                        onChange={handleChange}
                        // isValid={touched.state && !errors.state}
                        // isInvalid={!!errors.state}
                      >
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

                    <Form.Group as={Col} controlId="validationFormik107">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control
                        type="text"
                        name="zip"
                        value={values.zip}
                        onChange={handleChange}
                        // isValid={touched.zip && !errors.zip}
                        isInvalid={!!errors.zip}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="validationFormik108">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                      type="text"
                      name="comment"
                      value={values.comment}
                      onChange={handleChange}
                      // isValid={touched.comment && !errors.comment}
                      isInvalid={!!errors.comment}
                    />
                  </Form.Group>

                  <Form.Group controlId="validationFormik109">
                    <Form.Check
                      name="saveAddress"
                      value={values.saveAddress}
                      onChange={handleChange}
                      // isValid={touched.saveAddress && !errors.saveAddress}
                      // isInvalid={!!errors.saveAddress}
                      label="Save Address"
                    />
                  </Form.Group>
                  {/* <Button
        variant="primary"
        type="submit"
        // style={{ display: "none" }}
      >
        AAAA
      </Button> */}
                </fieldset>
              </div>
            </div>

            <div className="checkout-total">
              <ProgressModal
                progress={props.progress}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <CheckoutTotal
                cart={props.cart}
                subtotal={props.subtotal}
                itemsSum={props.itemsSum}
                submitOrder={() => handleSubmit(touched)}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Checkout;
