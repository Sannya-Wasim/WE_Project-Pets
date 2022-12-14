import { useEffect, useState } from "react";
import DropDown from "./Dropdown";
import { NavLink } from "react-router-dom";
import downArrow from "../assets/images/downArrow.png";
// import whiteArrow from "../assets/images/whiteArrow.png";
import { useSelector } from "react-redux";

const NavBar = () => {
  const productItems = ["Food Products", "Accessories", "Toys"];
  const petItems = ["Cats", "Dogs", "Parrots"];
  // const history = ["Order History"];
  const [loggedIn, setLoggedIn] = useState(false);

  const [showProductsDropDown, setProductsDropDown] = useState(false);
  const [showPetsDropDown, setPetsDropDown] = useState(false);
  // const [showHistory, setHistory] = useState(false);

  const state = useSelector((state) => state.handleCart);

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.clear();
  };

  return (
    <nav id="navigation-bar">
      <ul id="nav-ul">
        <li>
          <NavLink to="/" aria-current="page" className="nav-element">
            Home
          </NavLink>
        </li>
        <li
          className="dropdown-li"
          onMouseOver={() => {
            setProductsDropDown(true);
          }}
          onMouseOut={() => {
            setProductsDropDown(false);
          }}
        >
          <NavLink className="nav-element" to="/products" aria-current="page">
            Products
            <img src={downArrow} alt="More" />
          </NavLink>
          {showProductsDropDown && (
            <DropDown items={productItems} isProduct={true} />
          )}
        </li>
        <li
          className="dropdown-li"
          onMouseOver={() => {
            setPetsDropDown(true);
          }}
          onMouseOut={() => {
            setPetsDropDown(false);
          }}
        >
          <NavLink className="nav-element" to="/pets" aria-current="page">
            Pets
            <img src={downArrow} alt="More" />
          </NavLink>
          {showPetsDropDown && <DropDown items={petItems} isProduct={false} />}
        </li>
        <li>
          <NavLink aria-current="page" to="/contact">
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink aria-current="page" to="/about">
            About Us
          </NavLink>
        </li>
        {!loggedIn ? (
          <>
            <li>
              <NavLink className="button" to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="button" to="/signup">
                Sign up
              </NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink className="button" to="/" onClick={handleLogout}>
              Logout
            </NavLink>
          </li>
        )}
        {/*<li>
           <NavLink aria-current="page" className="button" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink aria-current="page" className="button" to="/signup">
            Sign up
          </NavLink>
        </li> */}
        <li>
          <NavLink aria-current="page" className="button" to="/cart">
            <i className="fa fa-shopping-cart me-1"></i> Cart({state.length})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
