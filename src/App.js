import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route} from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Products from './Components/Products';
import Pets from './Components/Pets';
import Product from './Components/Product';
import Cart from './Components/Cart';
import History from './Components/History';


function App() {
  return (
    <>
    {/* <Home/> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/pets" element={<Pets/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/history" element={<History/>}/>
      </Routes>
    </>
  );
}

export default App;
