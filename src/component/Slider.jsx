import React from "react";
import Image from "react-bootstrap/Image";
import sliderImg from "../assets/slider.jpg";

const Slider = () => {
  return (
    <>
      <div className="slider-wrapper">
        <Image src={sliderImg} fluid />
      </div>
    </>
  );
};

export default Slider;
