import React from "react";
import "./contact_style.css";
import us from "./us.png";
import NavBar from "./NavBar";

const Contact = () => {
  return (
    <>
      <div id="nav-div">
        <h1>Mithoo</h1>
        <NavBar />
      </div>
      <div className="content">
        <div className="image">
          <img src={us} />
          <h1>Contact Us</h1>
        </div>
        <div className="for">
          <form>
            <table>
              <tbody>
                <tr>
                  <td>
                    <input placeholder="Enter your name"></input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input placeholder="Enter your email"></input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <textarea rows="10" cols="50" placeholder="Describe your pet..."></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="submit">Submit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
