import React from "react";
import Slider from "react-slick";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/1920x600" alt="Slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/1920x600" alt="Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/1920x600" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
