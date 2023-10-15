export interface sliderInfo {
  slides: sliderImageInfo[];
}

export interface sliderImageInfo {
  src: string;
  alt: string;
}

export interface SliderProps {
  sliderData: sliderInfo;
}

export interface sliderIndicatorProps {
  slider: sliderImageInfo[];
  setSlide: Function;
  slide: number;
}

export interface selectedtheme {
  name: string;
  colors: {
    background: string;
    footer: string;
  };
}

export interface selectedthemeProps {
  setSelectedTheme: Function;
  selectedTheme: selectedtheme;
}
