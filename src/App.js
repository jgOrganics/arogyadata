import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';
// import { Gif, Menu } from '@mui/icons-material';
import PageNotFound from './Pages/PageNotFound';
import Gift from './Pages/Gift';
import ProductDetail from './Pages/ProductDetails';
import Cart from './Components/Cart';
import Checkout from './Pages/CheckOut';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gift' element={<Gift />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
        <Route path='/pagenotfound' element={<PageNotFound />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
