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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <AuthProvider>
          <PrivateRoute path="/profile" component={Profile} />
          <Navbar />
          <Switch>
            <>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/order/:id" component={Order} />
              <Route path="/order" exact component={Order} />
              <Route path="/cart/checkout" component={Checkout} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/" exact component={Home} />
            </>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
