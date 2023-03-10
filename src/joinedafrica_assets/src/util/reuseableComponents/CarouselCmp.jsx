import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselCmp({ images }) {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={image} style={{ height: "400px" }} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
