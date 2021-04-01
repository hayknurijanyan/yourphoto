import React, { useState, useRef } from "react";
import "./Order.css";
import Cropper from "./Cropper";
import Preview from "./Preview";
import Grid from "./Grid";
import { Link } from "react-router-dom";
import {
  Dropdown,
  Button,
  Card,
  DropdownButton,
  Container,
} from "react-bootstrap";

let fileArray = [];
let fileObj = [];

function Order() {
  const [selectedSize, setSelectedSize] = useState("10x15");
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);
  const hiddenFileInput = React.useRef(null);

  const handleInputClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleFileInput = (e) => {
    fileObj.unshift(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.unshift(URL.createObjectURL(fileObj[0][i]));
    }

    let uploads = [];

    fileArray.map((blob, i) => {
      return uploads.push({
        imgSrc: blob,
        id: i,
        count: 1,
        size: selectedSize,
      });
    });
    setImages(uploads);
    fileObj = [];
  };

  const handleDelete = (id) => {
    const filteredImages = images.filter((img) => {
      return img.id !== id;
    });
    console.log(filteredImages);
    console.log(images, "images");
    setImages(filteredImages);
  };

  const handleIncreaseCount = (el) => {
    let newImages = [...images];
    const index = newImages.indexOf(el);
    newImages[index] = { ...el };
    newImages[index].count++;
    setImages(newImages);
  };

  const handleDecreaseCount = (el) => {
    if (el.count > 1) {
      let newImages = [...images];
      const index = newImages.indexOf(el);
      newImages[index] = { ...el };
      newImages[index].count--;
      setImages(newImages);
    }
  };

  const handleDropDownSelect = (e) => {
    const selectedSize = String(e);
    setSelectedSize(selectedSize);
  };

  if (images.length > 0) {
    return (
      <main id="main">
        <header>
          <div className="left-buttons">
            <Button variant="danger" onClick={handleInputClick}>
              + Add Photos
            </Button>
            <DropdownButton
              alignRight
              title={selectedSize}
              id="dropdown-menu-align-right"
              onSelect={handleDropDownSelect}>
              <Dropdown.Item href="#/10x15 ">10 x 15</Dropdown.Item>
              <Dropdown.Item href="#/13x18">13 x 18</Dropdown.Item>
              <Dropdown.Item href="#/A4">A4</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="right-buttons">
            <Link to="/cart">
              <Button>Add To Cart</Button>
            </Link>
            <Button>Checkout</Button>
          </div>
        </header>
        {/* <ProgressBar variant="danger" animated now={3} /> */}
        {/* <Cropper images={this.state.images} /> */}
        {/* <Preview /> */}
        <input
          type="file"
          style={{ display: "none" }}
          ref={hiddenFileInput}
          onChange={handleFileInput}
          multiple
        />
        <div className="main-quantity" style={{ color: "black" }}>
          Quantity: {images.length}
        </div>
        <Grid
          increaseCount={handleIncreaseCount}
          decreaseCount={handleDecreaseCount}
          onDelete={handleDelete}
          images={images}
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
                onChange={handleFileInput}
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
