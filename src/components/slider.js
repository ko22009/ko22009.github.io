import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.css";
import React from "react";
import SlickSlider from "react-slick";

export default function Slider(props) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <SlickSlider {...settings}>
        {props.items.map((el) => (
          <div>{el}</div>
        ))}
      </SlickSlider>
    </div>
  );
}
