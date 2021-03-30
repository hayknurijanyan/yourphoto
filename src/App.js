import "./App.css";
import Order from "./components/Order/Order";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Home";
import Checkout from "./components/Cart/Checkout";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/order" exact component={Order} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/cart/checkout" exact component={Checkout} />
          <div className="main">
            <Route path="/" exact component={Home} />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
