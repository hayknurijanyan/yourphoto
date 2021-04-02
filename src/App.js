import "./App.css";
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
import { useState } from "react";

function App() {
  let [cart, setCart] = useState("0");

  const handleAddToCart = () => {
    setCart(++cart);
  };

  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar cart={cart} />
          <Switch>
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route
              path="/order/:id"
              render={(props) => (
                <Order handleAddToCart={handleAddToCart} {...props} />
              )}
            />
            <Route
              path="/order"
              render={(props) => (
                <Order handleAddToCart={handleAddToCart} {...props} />
              )}
            />
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
