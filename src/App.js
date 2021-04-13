import "./App.css";
import React, { useEffect } from "react";
import Order from "./components/Order/Order";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Checkout from "./components/Cart/Checkout";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import Profile from "./components/Authentication/Profile";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { db, storageRef } from "./firebase";

function App() {
  // const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  let [images, setImages] = useState([]);

  let [imagesCount, setImagesCount] = useState(0);
  const [selectedSize, setSelectedSize] = useState(["10 x 15", 100, "Glossy"]);
  const [cart, setCart] = useState([]);
  const [itemsSum, setItemsSum] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const checkSum = () => {
      let sum = 0;
      let obj = { ...cart };
      for (let key in obj) {
        sum += obj[key].price;
      }
      setItemsSum(sum);
      setSubtotal(sum + 500);
    };

    checkSum();
  }, [cart]);

  // console.log(images, "images");
  // console.log(cart, "cart");
  const handleFileInput = (e) => {
    let uploads = [];
    let newImages = [...images];
    uploads.unshift(e.target.files);
    uploads = Object.values(uploads[0]);

    uploads.map((el) => {
      return newImages.unshift({
        imgSrc: URL.createObjectURL(el),
        img: el,
        id: uuidv4(),
        count: 1,
      });
    });
    setImagesCount(newImages.length);
    setImages(newImages);
  };

  const handleDelete = (id) => {
    const filteredImages = images.filter((img) => {
      return img.id !== id;
    });

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
  const handleChangeSize = (el) => {
    let newArr = [el.size, el.price, "Matte"];
    setSelectedSize(newArr);
  };

  const handleDefaultSize = (el) => {
    setSelectedSize([el.size, el.price, "Glossy"]);
  };

  const handleAddToCart = () => {
    let quantity = imagesCount;
    let price = selectedSize[1] * quantity;
    let newCart = [...cart];
    let newImages = [...images];
    newCart.push({ images: newImages, price, quantity, size: selectedSize[0] });
    setCart(newCart);
  };

  const handleSubmitOrder = async (shippingData) => {
    let date = new Date();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let newDate = `${year}-${month}-${day}-${hours}:${minutes}`;
    let newId = uuidv4();
    let orderData = {
      saveAddress: shippingData.saveAddress,
      user_address: shippingData.user_address,
      user_city: shippingData.user_city,
      user_name: shippingData.user_name,
      user_phone: shippingData.user_phone,
      user_state: shippingData.user_state,
      user_zip: shippingData.user_zip,
      payment_id: "cash",
      order_total: subtotal,
      order_price: itemsSum,
      delivery: "500",
      cart_item: cart.length,
    };
    setProgress(0);

    // db.collection("orders")
    //   .add(shippingData)

    let folderId = uuidv4();
    let sum = 0;

    try {
      cart.forEach((cartItem) => {
        cartItem.images.forEach((file) => {
          storageRef
            .child(
              `orders/${newDate}-${folderId}/${file.count}_aspect_${cartItem.size}_${file.img.name}`
            )
            .put(file.img)
            .then((snapshot) => {
              let progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              sum += 1;

              setProgress(
                Math.floor(((sum / cartItem.images.length) * 100) / cart.length)
              );

              if (sum === cartItem.images.length) {
                console.log("Done");
              }
            });
        });
      });
    } catch (error) {
      console.error(error);
      console.log("Upload Not Completed");
    }
    db.collection("orders")
      .doc(`${newDate}--id:${newId}`)
      .set(orderData)
      .then(() => {
        console.log("Document written with ID:");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    //  storageRef.child("images/user1234).put(images[0].imgSrc);
  };

  useEffect(() => {
    const checkImagesQuantity = () => {
      let sum = 0;
      for (let key in images) {
        sum += images[key].count;
      }
      setImagesCount(sum);
    };
    checkImagesQuantity();
  }, [handleDelete, handleFileInput, handleDecreaseCount, handleIncreaseCount]);

  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar cart={cart.length} />
          <Switch>
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route
              path="/order/:id"
              render={(props) => {
                return (
                  <Order
                    images={images}
                    imagesCount={imagesCount}
                    handleAddToCart={handleAddToCart}
                    handleFileInput={handleFileInput}
                    handleChangeSize={handleChangeSize}
                    handleIncreaseCount={handleIncreaseCount}
                    handleDecreaseCount={handleDecreaseCount}
                    handleDelete={handleDelete}
                    {...props}
                  />
                );
              }}
            />
            <Route
              path="/order"
              render={(props) => {
                return (
                  <Order
                    images={images}
                    imagesCount={imagesCount}
                    handleAddToCart={handleAddToCart}
                    handleFileInput={handleFileInput}
                    handleChangeSize={handleChangeSize}
                    handleIncreaseCount={handleIncreaseCount}
                    handleDecreaseCount={handleDecreaseCount}
                    handleDelete={handleDelete}
                    {...props}
                  />
                );
              }}
            />

            <Route
              path="/cart/checkout"
              render={(props) => {
                return (
                  <Checkout
                    submitOrder={handleSubmitOrder}
                    itemsSum={itemsSum}
                    subtotal={subtotal}
                    cart={cart}
                    progress={progress}
                    {...props}
                  />
                );
              }}
            />
            <Route
              path="/cart"
              render={(props) => {
                return (
                  <Cart
                    subtotal={subtotal}
                    itemsSum={itemsSum}
                    cart={cart}
                    {...props}
                  />
                );
              }}
            />
            <div className="main">
              <Route
                path="/"
                exact
                render={(props) => (
                  <Home
                    handleDefaultSize={(el) => handleDefaultSize(el)}
                    {...props}
                  />
                )}
              />
            </div>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
