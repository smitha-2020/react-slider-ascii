import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import {sliderIndicatorProps} from "../models/carousel";

export const CarouselIndicators = ({
  slider,
  setSlide,
  slide,
}: sliderIndicatorProps) => {
  return (
    <span className="indicators">
      {slider.map((_, idx) => {
        return (
          <FontAwesomeIcon
            icon={faCircle}
            key={idx}
            onClick={() => setSlide(idx)}
            className={
              slide === idx ? "indicator" : "indicator indicator-inactive"
            }
          />
        );
      })}
    </span>
  );
};
