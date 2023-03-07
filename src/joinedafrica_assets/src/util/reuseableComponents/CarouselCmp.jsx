import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselCmp({ images }) {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
