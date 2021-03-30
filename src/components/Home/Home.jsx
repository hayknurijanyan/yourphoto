import React, { Component } from "react";
import About from "./About";
import AppDownload from "./AppDownload";
import Contact from "./Contact";
import Delivery from "./Delivery";
import Ideas from "./Ideas";
import KeyFeatures from "./KeyFeatures";
import Products from "./Products";
import Slider from "./Slider";
import Footer from "./Footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Slider />
        <Products />
        <Ideas />
        <AppDownload />
        <KeyFeatures />
        <Delivery />
        <About />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Home;
