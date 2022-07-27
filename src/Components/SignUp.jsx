import React from "react";
import "../assets/css/signup_style.css";
import copy from "../assets/images/logo copy.png";
import NavBar from "./NavBar";

function SignUp() {
  return (
    <div>
      <div id="nav-div">
        <h1>Mithoo</h1>
        <NavBar />
      </div>
      <section id="background">
        <section className="logo">
          <div id="content">
            <img src={copy} alt="Picture not Found" />
            <h2 id="head2" style={{ color: "white" }}>
              Welcome!
            </h2>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              ducimus.
            </p>
          </div>
        </section>

        <section className="sign">
          <div id="content1">
            <h2>Sign Up</h2>
            <hr />
            <form action="" className="container">
              <div className="left-container">
                <div className="input">
                  <input type="text" placeholder="Enter your First Name" />
                </div>
                <div className="input">
                  <input type="text" placeholder="Enter your  Last Name" />
                </div>
                <div className="input">
                  <input type="text" placeholder="Enter your Email" />
                </div>
              </div>
              <div className="right-container">
                  <div className="input">
                    <input type="text" placeholder="Password" />
                  </div>
                  <div className="input">
                    <input type="file" id="imageFile" accept="image/*" />
                  </div>

                  <div className="labels">
                    <div id="checkbox">
                      <input type="checkbox" name="remember_me" id="" />{" "}
                      Remember Me{" "}
                    </div>
                    <div id="btn">
                      <button>Sign Up</button>{" "}
                    </div>
                  </div>
                </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}

export default SignUp;
