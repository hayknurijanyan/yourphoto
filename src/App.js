import "./App.css";
import About from "./components/About";
import AppDownload from "./components/AppDownload";
import Contact from "./components/Contact";
import Delivery from "./components/Delivery";
import Ideas from "./components/Ideas";
import KeyFeatures from "./components/KeyFeatures";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Order from "./components/Order/Order";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/order" exact component={Order} />
          <div className="main">
            <Slider />
            <Products />
            <Ideas />
            <AppDownload />
            <KeyFeatures />
            <Delivery />
            <About />
            <Contact />
          </div>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
