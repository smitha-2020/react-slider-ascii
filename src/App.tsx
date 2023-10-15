import { Carousel } from "./components/Carousel";
import sliderData from "./data/sliderData.json";
import { Navigation } from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { light } from "./styledComponent/themeStyle";
import { useEffect, useState } from "react";
import { selectedtheme } from "./models/carousel";
import { SortingAscii } from "./components/SortingAscii";

function App() {
  const [selectedTheme, setSelectedTheme]: [selectedtheme, Function] =
    useState(light);

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-Theme")!!);
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={selectedTheme}>
        <Navigation
          setSelectedTheme={setSelectedTheme}
          selectedTheme={selectedTheme}
        />
        <Carousel sliderData={sliderData} />
        <SortingAscii />
      </ThemeProvider>
    </div>
  );
}

export default App;
