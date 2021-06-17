import React, { useEffect, useState } from "react";
import { Form, Col } from "react-bootstrap";
// import PaymentForm from "./PaymentForm";
// import ShippingForm from "./ShippingForm";
import CheckoutTotal from "./CheckoutTotal";
import ProgressModal from "./ProgressModal";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { db, storageRef } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import { clearCart } from "../../actions";
import { useAuth } from "../../contexts/AuthContext";
import ErrorModal from "../Errors/errorModal";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = (props) => {
  const dispatch = useDispatch();
  const subtotal = useSelector((state) => state.subtotal);
  const { currentUser, loginAsGuest } = useAuth();
  const cart = useSelector((state) => state.cart);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  let [progress, setProgress] = useState(0);
  let [cartImagesCount, setCartImagesCount] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const handleCloseError = () => setShowErrorModal(false);
  const handleShowError = () => setShowErrorModal(true);

  useEffect(() => {
    let sum = 0;
    function count() {
      cart.forEach((el) => {
        sum += el.images.length;
      });
      setCartImagesCount(sum);
    }
    count();
  }, []);

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

  const orderDone = () => {
    dispatch(clearCart());
  };

  const handleSubmitClick = async (touched) => {
    let response;
    if (currentUser === null) {
      response = await loginAsGuest();
    }

    if (response || currentUser) {
      if (cart.length > 0) {
        const orderData = {
          user_name: touched.firstName,
          user_lastname: touched.lastName,
          user_phone: touched.phone,
          user_address: touched.address,
          user_zip: touched.zip,
          user_city: touched.city,
          user_state: touched.state,
          saveAddress: touched.saveAddress,
          comment: touched.comment,
          order_price: subtotal,
        };

        let date = new Date();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let newDate = `${year}-${month}-${day}-${hours}_${minutes}`;

        setProgress(0);

        let folderId = uuidv4();
        let sum = 0;

        try {
          cart.forEach((cartItem) => {
            cartItem.images.forEach(async (file) => {
              let imgId = Math.floor(Math.random() * 100000);
              let shortSize = cartItem.size.split(" ").join("");
              let snapshot = await storageRef
                .child(
                  `orders/${newDate}-${folderId}/${file.count}_aspect_${shortSize}__${imgId}_${file.img.name}`
                )
                .put(file.img);

              sum += 1;
              let progress = Math.floor((sum / cartImagesCount) * 100);
              setProgress(progress);

              if (sum === cartImagesCount) {
                try {
                  let browserUrl =
                    "https://console.firebase.google.com/u/0/project/yourphoto-app/storage/yourphoto-app.appspot.com/files/~2Forders~";
                  let url = await storageRef.child(
                    `order/${newDate}-${folderId}`
                  ).name;
                  let downloadUrl = `${browserUrl}2F${url}`;

                  await db
                    .collection("orders")
                    .doc(`${newDate}-${folderId}`)
                    .set({
                      ...orderData,
                      browserPath: downloadUrl,
                      storageName: url,
                    });
                  setModalShow(true);
                  orderDone();

                  const webhookUrl =
                    process.env.REACT_APP_SLACK_APP_WEBHOOK_URL;

                  const info = `
:date: *Date*: ${newDate}          
:raising_hand: *Name*: ${orderData.user_name} ${orderData.user_lastname}
:phone: *Phone*: ${orderData.user_phone}
:house: *Address*: ${orderData.user_city}, ${orderData.user_address}
:moneybag: *Price*: ${orderData.order_price} AMD (cash)
:memo: *Comment*: ${orderData.comment}
${downloadUrl}`;
                  const payload = `{"text":"${info}"}`;
                  const data = payload;
                  try {
                    await axios.post(webhookUrl, data);
                  } catch {
                    toast.error(
                      `ERROR: ${folderId}, Whoops! looks like something went wrong, for checking your order status please take a screenshot and call to 077540454`,
                      {
                        position: "top-right",
                        autoClose: 30000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      }
                    );
                  }
                } catch {
                  setErrorMessage(
                    "Error uploading files, please check your connection and try again"
                  );
                  handleShowError();
                }
              }
            });
          });
        } catch (error) {
          setErrorMessage("Failed to upload, please try again");
          handleShowError();
        }
        setModalShow(true);
      } else {
        setErrorMessage(
          "Cart is empty, please add items to your cart and try again."
        );
        handleShowError();
      }
    } else {
      setErrorMessage("Can't create account, please try again.");
      handleShowError();
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
                        defaultChecked="true"
                        label="Cash Payment"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        disabled={true}
                        label="Credit/Debit Card"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                      <Form.Check
                        type="radio"
                        disabled={true}
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
                      <Form.Label>City*</Form.Label>
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
                      disabled
                      name="saveAddress"
                      value={values.saveAddress}
                      onChange={handleChange}
                      // isValid={touched.saveAddress && !errors.saveAddress}
                      // isInvalid={!!errors.saveAddress}
                      label="Save Address"
                    />
                  </Form.Group>
                </fieldset>
              </div>
            </div>

            <div className="checkout-total">
              <ProgressModal
                progress={progress}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <ErrorModal
                handleCloseError={handleCloseError}
                handleShowError={handleShowError}
                errorMessage={errorMessage}
                show={showErrorModal}
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
