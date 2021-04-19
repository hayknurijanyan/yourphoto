import "./App.css";
import React from "react";
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

function App() {
  // const handleSubmitOrder = async (shippingData) => {
  //   let date = new Date();
  //   let month = date.getMonth() + 1;
  //   let year = date.getFullYear();
  //   let day = date.getDate();
  //   let hours = date.getHours();
  //   let minutes = date.getMinutes();
  //   let newDate = `${year}-${month}-${day}-${hours}:${minutes}`;
  //   let newId = uuidv4();
  //   let orderData = {
  //     saveAddress: shippingData.saveAddress,
  //     user_address: shippingData.user_address,
  //     user_city: shippingData.user_city,
  //     user_name: shippingData.user_name,
  //     user_phone: shippingData.user_phone,
  //     user_state: shippingData.user_state,
  //     user_zip: shippingData.user_zip,
  //     payment_id: "cash",
  //     order_total: subtotal,
  //     order_price: itemsSum,
  //     delivery: "500",
  //     cart_item: cart.length,
  //   };
  //   setProgress(0);

  //   let folderId = uuidv4();
  //   let sum = 0;

  //   try {
  //     cart.forEach((cartItem) => {
  //       cartItem.images.forEach((file) => {
  //         storageRef
  //           .child(
  //             `orders/${newDate}-${folderId}/${file.count}_aspect_${cartItem.size}_${file.img.name}`
  //           )
  //           .put(file.img)
  //           .then((snapshot) => {
  //             let progress =
  //               (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //             sum += 1;

  //             setProgress(
  //               Math.floor(((sum / cartItem.images.length) * 100) / cart.length)
  //             );

  //             if (sum === cartItem.images.length) {
  //               console.log("Done");
  //             }
  //           });
  //       });
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     console.log("Upload Not Completed");
  //   }
  //   db.collection("orders")
  //     .doc(`${newDate}--id:${newId}`)
  //     .set(orderData)
  //     .then(() => {
  //       console.log("Document written with ID:");
  //     })
  //     .catch((error) => {
  //       console.error("Error adding document: ", error);
  //     });
  //   //  storageRef.child("images/user1234).put(images[0].imgSrc);
  // };

  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/order/:id" component={Order} />
            <Route path="/order" component={Order} />
            <Route path="/cart/checkout" component={Checkout} />
            <Route path="/cart" component={Cart} />
            <div className="main">
              <Route path="/" exact component={Home} />
            </div>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
