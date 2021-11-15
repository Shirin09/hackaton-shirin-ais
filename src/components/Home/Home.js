import React from "react";
import Products from "../Products/Products";
import MainCarousel from "../Carousel/Carousel";

import "./Home.css";
const Home = () => {
  return (
    <div className="wrapper">
      <MainCarousel />
      <Products />
    </div>
  );
};

export default Home;
