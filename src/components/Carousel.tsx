import { SliderProps } from "../models/carousel";
import { useState } from "react";
import {
  BoxContainer,
  CarouselContainer,
  StyledFontAwesomeIconLeftArrow,
  StyledFontAwesomeIconRightArrow,
} from "../styledComponent/carouselStyle";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { CarouselIndicators } from "./CarouselIndicators";

export const Carousel = ({ sliderData }: SliderProps) => {
  const [slider, setSlider] = useState(sliderData.slides);
  const [slide, setSlide] = useState(0);

  const slideNext = () => {
    setSlide(slide === sliderData.slides.length - 1 ? 0 : slide + 1);
  };

  const slidePrev = () => {
    setSlide(slide === 0 ? sliderData.slides.length - 1 : slide - 1);
  };

  return (
    <BoxContainer>
      <CarouselContainer>
        <StyledFontAwesomeIconLeftArrow
          icon={faCircleLeft}
          className="onHover"
          onClick={slidePrev}
        />
        {slider.map((sliderElement, idx) => (
          <img
            src={sliderElement.src}
            alt={sliderElement.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide slide-hidden"}
          />
        ))}
        <StyledFontAwesomeIconRightArrow
          icon={faCircleRight}
          className="onHover"
          onClick={slideNext}
        />
        <CarouselIndicators slider={slider} setSlide={setSlide} slide={slide} />
      </CarouselContainer>
    </BoxContainer>
  );
};
