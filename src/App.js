import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Contact from "./Components/Contact";
import About from "./Components/About";
// import Products from "./Components/Products";
// import Pets from "./Components/Pets";
// import Product from "./Components/Product";
// import Cart from "./Components/Cart";
// import History from "./Components/History";
import Products from "./Components/Products";
import Pets from "./Components/Pets";
import IndividualPet from "./Components/IndividualPet";
import Cart from "./Components/Cart";
import History from "./Components/History";
import Stolen from "./Components/Stolen";
import IndividualProduct from "./Components/IndividualProduct";

function App() {
  return (
    <>
      {/* <Home/> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<IndividualProduct />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/pets/:id" element={<IndividualPet />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/history" element={<History />} />
        <Route path="/stolen" element={<Stolen />} />
      </Routes>
    </>
  );
}

export default App;
