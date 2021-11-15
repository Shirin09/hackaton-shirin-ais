   
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselImg from '../../assets/img/carousel-img4.jpeg';
import CarouselImg2 from '../../assets/img/carousel-img3.jpeg';

const MainCarousel = () => {
    return (
        <Carousel showThumbs={false} infiniteLoop={true}>
            <div>
                <img src={CarouselImg} alt="img"/>
            </div>
            <div>
                <img src={CarouselImg2} alt="img"/>
            </div>
           
        </Carousel>
    );
};

export default MainCarousel;