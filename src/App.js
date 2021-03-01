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

function App() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}

export default App;
