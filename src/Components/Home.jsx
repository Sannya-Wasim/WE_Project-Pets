import React from "react";
import "./Home.css";
import IntroSection from "./IntroSection";
import ServicesSection from "./ServicesSection";
import PetsSection from "./PetsSection";
import ProductsSection from "./ProductsSection";
import StolenPetsSection from "./StolenPetsSection";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div>
      <div id="main-div">
        <div id="nav-div"><h1>Mithoo</h1><NavBar /></div>
        <IntroSection />
        <ServicesSection />
        <PetsSection />
        <ProductsSection />
        <StolenPetsSection />
        <div style={{ height: 200 }}></div>
      </div>
    </div>
  );
};

export default Home;
