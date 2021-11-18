import React from "react";
import Products from "../Products/Products";
import MainCarousel from "../Carousel/Carousel";
import "./Home.css";
import RangeSlider from "./RangeSlider/RangeSlider";

const Home = () => {
  return (
    <div className="wrapper">
      <MainCarousel />
      <RangeSlider />
      <Products />
    </div>
  );
};

export default Home;
