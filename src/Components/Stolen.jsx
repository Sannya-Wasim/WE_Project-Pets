import React from "react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import report from "../assets/images/report.png";

function Stolen() {
  return (
    <div>
      <div id="nav-div">
        <h1>Mithoo</h1>
        <NavBar />
      </div>
      <div id="background">
        <section className="logo" style={{width:"22%"}}>
          <div id="content">
            <img src={report} alt="Picture not Found" />
          </div>
        </section>
        <section className="login" style={{width:"72%", height:"406px"}}>
          <div id="content1">
            <h2>Report Here</h2>
            <hr />
            <form action="" style={{ height: "240px", display: "flex" }}>
              <div className="row">
                <div className="col">
                  <div className="form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Name"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your pet name"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location where they got lost from"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Last day you them"
                    />
                  </div>
                </div>

                <div class="form">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Describe your pet...."
                  ></textarea>
                </div>

                <div className="labels">
                  <div id="btn">
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Stolen;
