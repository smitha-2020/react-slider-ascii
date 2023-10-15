import { Container, Form, Navbar } from "react-bootstrap";
import { selectedtheme, selectedthemeProps } from "../models/carousel";
import { dark, light } from "../styledComponent/themeStyle";

export const Navigation = ({
  setSelectedTheme,
  selectedTheme,
}: selectedthemeProps) => {
  const funcSwitchTheme = (theme: selectedtheme) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-Theme", JSON.stringify(theme));
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Exove Task</Navbar.Brand>
        <Form className="row justify-content-end">
          <Form.Check // prettier-ignore
            type="switch"
            defaultChecked={
              JSON.parse(localStorage.getItem("current-Theme")!).name ===
              "dark-theme"
                ? true
                : false
            }
            id="custom-switch"
            onClick={() =>
              selectedTheme.name === "light-theme"
                ? funcSwitchTheme(dark)
                : funcSwitchTheme(light)
            }
            className="col-4 custom-switch"
          />
        </Form>
      </Container>
    </Navbar>
  );
};
