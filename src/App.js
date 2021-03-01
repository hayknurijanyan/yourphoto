import './App.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products';
import Slider from './components/Slider';

function App() {
  return (
    <>
      <Navbar/>
      <div className="main">
      <Slider/>
      <Products/>
      </div>    
    </>
  );
}

export default App;
