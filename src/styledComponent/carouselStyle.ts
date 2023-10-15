import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Container, Form} from "react-bootstrap";

export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 400px;
`;
export const StyledFontAwesomeIconLeftArrow = styled(FontAwesomeIcon)`
  position: absolute;
  width: 2rem;
  height: 2rem;
  color: white;
  left: 1rem;
  filter: drop-shadow(0 0 5px #555);
`;

export const StyledFontAwesomeIconRightArrow = styled(FontAwesomeIcon)`
  position: absolute;
  width: 2rem;
  height: 2rem;
  color: white;
  right: 1rem;
  filter: drop-shadow(0 0 5px #555);
`;

export const BoxContainer = styled(Container)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;



