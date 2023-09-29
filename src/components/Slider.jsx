import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import imgOne from '../images/img1.png'
import imgTwo from '../images/img2.png'
import imgThree from '../images/img3.png'

function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={imgOne} alt="FirstSlide"
          className="d-block w-100 height:100px"  />
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgTwo} alt="SecondSlide"
          className="d-block w-100 h-80" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgThree} alt="ThirdSlide"
          className="d-block w-100 h-80" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;