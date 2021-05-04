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

function App() {
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
