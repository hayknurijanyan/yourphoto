import React, { useState, useRef, useEffect } from "react";
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
  ProgressBar,
  Container,
} from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

function Order(props) {
  let [selectedSize, setSelectedSize] = useState(
    props.match.params.id.split("x").join(" x ")
  );
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);
  const hiddenFileInput = React.useRef(null);
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   // Run! Like go get some data from an API.
  //   }
  // });

  const handleFileInput = (e) => {
    let uploads = [];
    let newImages = [...images];
    uploads.unshift(e.target.files);
    uploads = Object.values(uploads[0]);

    uploads.map((el) => {
      return newImages.unshift({
        imgSrc: URL.createObjectURL(el),
        id: uuidv4(),
        count: 1,
      });
    });

    setImages(newImages);
    console.log(images, "ALLIMAGES");
  };

  const handleDelete = (id) => {
    const filteredImages = images.filter((img) => {
      return img.id !== id;
    });
    console.log(filteredImages, "FILTERED images");
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

  const handleInputClick = (event) => {
    hiddenFileInput.current.click();
  };

  if (images.length > 0) {
    console.log(selectedSize, "SIZE");
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
              id="dropdown-menu-align-right">
              <Dropdown.Item
                onClick={(e) => {
                  setSelectedSize("3.5 x 4.5");
                }}>
                3.5 x 4.5
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => {
                  setSelectedSize("10 x 10");
                }}>
                10 x 10
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => {
                  setSelectedSize("10 x 15");
                }}>
                10 x 15
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => {
                  setSelectedSize("13 x 18");
                }}>
                13 x 18
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => {
                  setSelectedSize("A5 (14 x 21)");
                }}>
                A5 (14 x 21)
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => {
                  setSelectedSize("21 x 28");
                }}>
                21 x 28
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => {
                  setSelectedSize("A4");
                }}>
                A4
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => {
                  setSelectedSize("A3");
                }}>
                A3
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="right-buttons">
            <Link>
              <Button onClick={() => props.handleAddToCart()} variant="primary">
                Add To Cart
              </Button>
            </Link>
            <Button>Checkout</Button>
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
          onChange={handleFileInput}
          multiple
        />
        <div className="main-quantity">Quantity: {images.length}</div>
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
