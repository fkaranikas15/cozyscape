import { styled } from "styled-components";
import { device } from "../utils/sizes";

export const Container = styled.div`
  max-width: 150rem;
  margin: 0 auto;
  padding: 0 2rem;

  @media ${device.tablet} {
    padding: 0 4rem;
  }
  @media ${device.mobile} {
    padding: 0 2rem;
  }
`;
