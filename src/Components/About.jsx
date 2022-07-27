import React from 'react'
import './About.css';
import petpic from "./petpic.jpg";
import NavBar from './NavBar';

const About = () => {
  return (
    <>
            <div id="nav-div"><h1>Mithoo</h1><NavBar /></div>
    <div className="About">
      <header className="App-header">
        <div className="heading">WHAT WE DO</div>
        <img
          src={petpic}
          alt="Error loading image"
          width={600}
          height={400}
        ></img>
      </header>
      <div className="below">
        <p>
          <span>
            <b>Mithoo</b>
          </span>{" "}
          is an online store for pet lovers, which provides the facility of
          buying pets and their accessories online to its customers. Our
          cusomers can also report if their pet&#40;s&#41; are missing or
          stolen. The visitors on our website can provide help in finding the
          lost/stolen pets and can be rewarded.{" "}
        </p>
        <div className="service">
          <h1>
            <u>Our Services</u>
          </h1>
          <a href="#">Pets</a>
          <br />
          <a href="#">Accessories</a>
          <br />
          <a href="#">Food</a>
          <br />
          <a href="#">Report</a>
          <br />
        </div>
        <p>
          Our objective is to provide facility to our regular as well as new
          customers. They can order pets, foods and accessories for their pets.
          Moreover, they can report if their pet&#40;s&#41; are missing/stolen.
          We hope you will enjoy shopping with us.
        </p>
      </div>
    </div>
    </>
  )
}

export default About
