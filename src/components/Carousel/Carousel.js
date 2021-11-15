import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselImg from "../../assets/img/carousel-img4.jpeg";
import CarouselImg2 from "../../assets/img/carousel-img3.jpeg";

const MainCarousel = () => {
  let style = {
    height: "550px",
  };

  return (
    <Carousel showThumbs={false} infiniteLoop={true}>
      <div>
        <img src={CarouselImg} alt="img" style={style} />
      </div>
      <div>
        <img src={CarouselImg2} alt="img" style={style} />
      </div>
    </Carousel>
  );
};

export default MainCarousel;
