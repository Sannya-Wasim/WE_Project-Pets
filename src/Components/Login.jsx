import React from "react";
import "../assets/css/login_style.css";
import copy from "../assets/images/logo copy.png";
import NavBar from "./NavBar.jsx";

function Login() {
  return (
    <div>
      <div id="nav-div">
        <h1>Mithoo</h1>
        <NavBar />
      </div>
      <section id="bg">
        <section className="logo">
          <div id="content">
            <img src={copy} alt="Picture not Found" />
            <h2 id="head2" style={{ color: "white" }}>
              Welcome Back!
            </h2>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              ducimus.
            </p>
          </div>
        </section>

        <section className="login">
          <div id="content1">
            <h2>Login Form</h2>
            <hr />
            <form action="">
              <div className="form">
                <input type="text" placeholder="Enter your Name" />
              </div>
              <div className="form">
                <input type="text" placeholder="Password" />
              </div>

              <div className="labels">
                <div id="checkbox">
                  <input type="checkbox" name="remember_me" id="" /> Remember Me{" "}
                </div>
                <div id="btn">
                  <button>Log In</button>{" "}
                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Login;
