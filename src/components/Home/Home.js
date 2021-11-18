import React from "react";
import Products from "../Products/Products";
import MainCarousel from "../Carousel/Carousel";
import "./Home.css";
import RangeSlider from "./RangeSlider/RangeSlider";
import Content from "../Content.js/Content";

const Home = () => {
  return (
    <div className="wrapper">
      <MainCarousel />
      <Content />
      <RangeSlider />
      <Products />
    </div>
  );
};

export default Home;
