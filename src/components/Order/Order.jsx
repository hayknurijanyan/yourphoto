import React, { useState, useRef } from "react";
import "./Order.css";
// import Cropper from "./Cropper";
// import Preview from "./Preview";
import { ClassicPrintsData } from "../ProductList/ClassicPrintsData";
import Grid from "./Grid";
import { Link } from "react-router-dom";
import MyVerticallyCenteredModal from "./AddToCartModal";
import {
  Dropdown,
  DropdownButton,
  Button,
  Card,
  Container,
} from "react-bootstrap";

function Order(props) {
  const [modalShow, setModalShow] = useState(false);
  const hiddenFileInput = useRef(null);
  let [selectedSize, setSelectedSize] = useState(
    props.match.params.id.split("x").join(" x ")
  );

  const handleInputClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleModalButton = () => {
    props.handleAddToCart();
    setModalShow(true);
  };

  const handleChangeSize = (el) => {
    setSelectedSize(el.size);
    props.handleChangeSize(el);
  };

  if (props.images.length > 0) {
    return (
      <main id="main">
        <header>
          <div className="left-buttons">
            <Button variant="primary" onClick={handleInputClick}>
              + Add Photos
            </Button>
            <DropdownButton
              alignRight
              title={selectedSize}
              id="dropdown-menu-align-right">
              {ClassicPrintsData.map((el, i) => {
                return (
                  <Dropdown.Item key={i} onClick={() => handleChangeSize(el)}>
                    {el.size}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
          </div>
          <div className="right-buttons">
            <Button variant="danger" onClick={handleModalButton}>
              Add To Cart
            </Button>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <Link to="/cart/checkout">
              <Button>Checkout</Button>
            </Link>
          </div>
        </header>
        {/* <ProgressBar variant="danger" animated now={3} /> */}
        {/* <Cropper images={this.state.images} /> */}
        {/* <Preview /> */}
        {/* {uploading && <ProgressBar animated now={45} />} */}
        <input
          type="file"
          style={{ display: "none" }}
          ref={hiddenFileInput}
          onChange={props.handleFileInput}
          multiple
        />
        <div className="main-quantity">Quantity: {props.imagesCount}</div>
        <Grid
          increaseCount={props.handleIncreaseCount}
          decreaseCount={props.handleDecreaseCount}
          onDelete={props.handleDelete}
          images={props.images}
        />
      </main>
    );
  } else {
    return (
      <main id="main">
        <Container style={{ paddingTop: "70px" }}>
          <Card className="text-center">
            <Card.Header>Everything starts from here!</Card.Header>
            <Card.Body>
              <Card.Title>Please upload Your Photos to start</Card.Title>
              <Card.Text>
                Click to "Add Photos" or simply drag and drop your photos here.
              </Card.Text>
              <Button variant="danger" onClick={handleInputClick}>
                Add Photos
              </Button>
              <input
                type="file"
                style={{ display: "none" }}
                onChange={props.handleFileInput}
                ref={hiddenFileInput}
                multiple
              />
            </Card.Body>
          </Card>
        </Container>
      </main>
    );
  }
}

export default Order;
