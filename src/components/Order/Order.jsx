import React, { useState, useRef, useEffect } from "react";
import {
  Dropdown,
  DropdownButton,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import {
  updateCart,
  updateSelectedSize,
  updateImages,
  updateImagesCount,
  // updateItemsSum,
  // updateSubTotal,
  clearImages,
} from "./../../actions";
import "./Order.css";
import Grid from "./Grid";
import AddToCartModal from "./AddToCartModal";
import { ClassicPrintsData } from "../ProductList/ClassicPrintsData";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

function Order(props) {
  const dispatch = useDispatch();
  const hiddenFileInput = useRef(null);
  const images = useSelector((state) => state.images);
  const cart = useSelector((state) => state.cart);
  const selectedSize = useSelector((state) => state.selectedSize);
  const imagesCount = useSelector((state) => state.imagesCount);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const size = selectedSize;
    if (props.match.params.id) {
      size[0] = props.match.params.id?.split("x").join(" x ");
      dispatch(updateSelectedSize(size));
    }
  }, []);

  const handleFileInput = (e) => {
    let uploads = [];
    let newImages = [...images];
    uploads.unshift(e.target.files);
    uploads = Object.values(uploads[0]);

    uploads.map((el) => {
      if (
        el.name.includes(".jpg") ||
        el.name.includes(".jpeg") ||
        el.name.includes(".png")
        // || el.name.includes(".heic")
      ) {
        newImages.unshift({
          imgSrc: URL.createObjectURL(el),
          img: el,
          id: uuidv4(),
          count: 1,
        });
      } else {
        toast.info("1 file format not supported");
      }
      return newImages;
    });
    dispatch(updateImages(newImages));
  };

  const handleIncreaseCount = (el) => {
    let newImages = [...images];
    const index = newImages.indexOf(el);
    newImages[index] = { ...el };
    newImages[index].count++;
    dispatch(updateImages(newImages));
  };

  const handleDecreaseCount = (el) => {
    if (el.count > 1) {
      let newImages = [...images];
      const index = newImages.indexOf(el);
      newImages[index] = { ...el };
      newImages[index].count--;
      dispatch(updateImages(newImages));
    }
  };

  const handleDelete = (id) => {
    const filteredImages = images.filter((img) => {
      return img.id !== id;
    });

    dispatch(updateImages(filteredImages));
  };

  const handleInputClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleModalButton = () => {
    handleAddToCart();
    setModalShow(true);
  };

  const handleChangeSize = (el) => {
    const newSize = [el.size, el.price, "Glossy"];
    dispatch(updateSelectedSize(newSize));
  };

  const handleAddToCart = () => {
    let quantity = imagesCount;
    let price = selectedSize[1] * quantity;
    let newCart = [...cart];
    let newImages = [...images];
    let cartNumber = uuidv4();
    newCart.unshift({
      images: newImages,
      price,
      quantity,
      size: selectedSize[0],
      id: cartNumber,
    });
    dispatch(updateCart(newCart));
  };

  const handleCheckoutClick = () => {
    dispatch(clearImages());
  };
  const handleGoToCart = () => {
    dispatch(clearImages());
  };

  useEffect(() => {
    const checkImagesQuantity = () => {
      let sum = 0;
      for (let key in images) {
        sum += images[key].count;
      }
      dispatch(updateImagesCount(sum));
    };
    checkImagesQuantity();
  }, [images]);

  const handleDeleteCartItem = (id) => {
    const filteredCart = cart.filter((cartItem) => {
      return cartItem.id !== id;
    });

    dispatch(updateCart(filteredCart));
  };

  if (images.length > 0) {
    return (
      <main id="order-main">
        <header>
          <div className="left-buttons">
            <Button variant="primary" onClick={handleInputClick}>
              + Add Photos
            </Button>
          </div>

          <div className="right-buttons">
            <DropdownButton
              alignRight
              title={selectedSize[0]}
              id="dropdown-menu-align-right">
              {ClassicPrintsData.map((el, i) => {
                return (
                  <Dropdown.Item key={i} onClick={() => handleChangeSize(el)}>
                    {el.size}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>

            <AddToCartModal
              deleteCartItem={(id) => handleDeleteCartItem(id)}
              items={cart}
              addToCart={handleAddToCart}
              handleGoToCart={handleGoToCart}
              checkoutClick={handleCheckoutClick}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </header>
        <input
          type="file"
          style={{ display: "none" }}
          ref={hiddenFileInput}
          onChange={handleFileInput}
          multiple
        />
        <Grid
          increaseCount={handleIncreaseCount}
          decreaseCount={handleDecreaseCount}
          onDelete={handleDelete}
          images={images}
        />
        <div className="bottom-footer">
          <div className="main-quantity">{imagesCount} Photos</div>
          <Button
            className="cta-button"
            variant="danger"
            onClick={handleModalButton}>
            Add To Cart
          </Button>
        </div>
      </main>
    );
  } else {
    return (
      <main id="main">
        <Container
          style={{
            marginTop: "120px",
            height: "fit-content",
          }}>
          <Card className="text-center">
            <Card.Header className="p-3"></Card.Header>
            <Card.Body>
              <Card.Title>Upload photos to start</Card.Title>
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
