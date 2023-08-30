import { styled } from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 50;
  pointer-events: ${(props) => (props.open === "true" ? "all" : "none")};
  visibility: ${(props) => (props.open === "true" ? "visible" : "hidden")};
  background: ${(props) =>
    props.open === "true" ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"};
  transition: all 0.8s ease-in-out;
`;
