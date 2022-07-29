import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import Axios from "axios";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };

  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const cartItems = (product) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row justify-content-between">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.name}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.name}</h3>
                <p className="lead fw-bold">
                  {product.qty} X ${product.price}=$
                  {parseInt(product.qty) * parseInt(product.price)}
                </p>
                <div className="d-flex justify-content-start">
                  <button
                    className="btn btn-outline-dark me-4"
                    onClick={() => handleDel(product)}
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  <button
                    className="btn btn-outline-dark me-4"
                    onClick={() => {
                      handleAdd(product);
                      console.log(state);
                    }}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row mx-auto">
            {/* <NavLink
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-100 mx-auto"
            > */}
            <button
              onClick={() => {
                if (localStorage.getItem("user") !== null) {
                  state.map((prod) => {
                    const id = prod.id;
                    const name = prod.name;
                    const price = prod.price;
                    const qty = prod.qty;
                    Axios.post("http://localhost:5000/order", {
                      id,
                      name,
                      price,
                      qty,
                    });
                  });
                  alert("Order Placed");
                  window.location.reload(false);
                } else {
                  alert("Log in to your account to make a purchase");
                }
              }}
            >
              Proceed to Checkout
            </button>
            {/* </NavLink> */}
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div id="nav-div">
        <h1>Mithoo</h1>
        <NavBar />
      </div>
      <NavLink to="/history">
        <p
          style={{
            textAlign: "right",
            marginRight: "3rem",
            fontWeight: "bold",
          }}
        >
          History
        </p>
      </NavLink>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
