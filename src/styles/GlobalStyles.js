import { createGlobalStyle } from "styled-components";
import { device } from "../utils/sizes";

const GlobalStyles = createGlobalStyle`
  :root{
    --color-primary: #D4B196;
    --color-white:#fff;
    --color-black:#222;
    --color-dark-grey:#777;
    --color-light-grey:#ddd;
    --color-hover:rgba(212, 177, 150,0.4)
  }

  *,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-family: "Lato",sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    background-color: var(--color-white);
    color: var(--color-black);
  }

  @media ${device.laptop}{
  html{
    font-size: 56.25%;
  }}
  @media ${device.mobile}{
  html{
    font-size: 50%;
  }}
  


`;

export default GlobalStyles;
