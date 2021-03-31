import "./App.css";
import Order from "./components/Order/Order";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Home";
import Checkout from "./components/Cart/Checkout";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import ForgotPassword from "./components/Authentication/ForgotPassword";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/forgot-password" exact component={ForgotPassword} />
            <Route path="/order" exact component={Order} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/cart/checkout" exact component={Checkout} />
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
