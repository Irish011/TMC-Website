import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useMediaQuery } from "@react-hook/media-query";
import Img1Slider from "../images/home-slider-1.jpg";
import Img2Slider from "../images/home-slider-2.jpg";
import Img3Slider from "../images/home-slider-3.jpg";
import Img4Slider from "../images/home-slider-4.jpg";

function ImgSlider() {
  const matches = useMediaQuery("only screen and (max-width: 991px)");
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const sliderStyle = matches
    ? {
        height: "25vh",
        marginBottom: "30px",
        position: "relative",
        zIndex: 1,
      }
    : {
        height: "80vh",
        position: "relative",
        zIndex: 1,
      };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} style={sliderStyle}>
        <Carousel.Item className="carousel-item">
          <img className="carousel-item-img" src={Img1Slider} alt="First Slide" />
          <Carousel.Caption>
            <div className="carousel-slider-caption">
              <div className="carousel-slider-text">Image 1</div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img className="carousel-item-img" src={Img2Slider} alt="Second Slide" />
          <Carousel.Caption>
            <div className="carousel-slider-caption">
              <div className="carousel-slider-text">Image 2</div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img className="carousel-item-img" src={Img3Slider} alt="Third Slide" />
          <Carousel.Caption>
            <div className="carousel-slider-caption">
              <div className="carousel-slider-text">Image 3</div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img className="carousel-item-img" src={Img4Slider} alt="Fourth Slide" />
          <Carousel.Caption>
            <div className="carousel-slider-caption">
              <div className="carousel-slider-text">Image 4</div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div> 
  );
}

export default ImgSlider;
