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

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Order />
        <Slider />
        <Products />
        <Ideas />
        <AppDownload />
        <KeyFeatures />
        <Delivery />
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
