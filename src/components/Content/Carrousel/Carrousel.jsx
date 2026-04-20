import React from 'react';
import { Carousel } from 'react-bootstrap';
import ExampleImage1 from "../../../assets/exampleCam1.png";
import ExampleImage2 from "../../../assets/exampleCam2.png";
import ExampleImage3 from "../../../assets/exampleCam3.png";
import "./Carrousel.scss";

function Carrousel() {
  return (
    <>
      <Carousel
        className="custom-carousel"
        indicators={false}
        interval={4000}
        keyboard={false}
        touch={true}
        variant="dark"
      >
        <Carousel.Item>
          <img
            src={ExampleImage1}
            className="carousel-image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ExampleImage2}
            className="carousel-image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ExampleImage3}
            className="carousel-image"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carrousel;