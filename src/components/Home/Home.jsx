import React from "react";
import About from "./About";
import AppDownload from "./AppDownload";
import Contact from "./Contact";
import Delivery from "./Delivery";
import Ideas from "./Ideas";
import KeyFeatures from "./KeyFeatures";
import Products from "./Products";
import Slider from "./Slider";
import Footer from "./Footer";

const Home = (props) => {
  return (
    <>
      <Slider />
      <Products handleDefaultSize={(el) => props.handleDefaultSize(el)} />
      <Ideas />
      <AppDownload />
      <KeyFeatures />
      <Delivery />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
