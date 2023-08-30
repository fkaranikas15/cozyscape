import { styled } from "styled-components";
import { device } from "../utils/sizes";

const StyledBanner = styled.div`
  text-align: center;
  background-image: url("/src/img/banner.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  padding: 15rem 0;
  margin-bottom: 16rem;

  @media ${device.laptopS} {
    background-position: 60%;
  }

  @media ${device.tabletL} {
    padding: 10rem 2rem;
  }

  & span {
    display: block;
    font-size: 9.6rem;
    font-weight: 700;
    color: var(--color-primary);
    @media ${device.tabletL} {
      font-size: 7.8rem;
    }
  }

  & h3 {
    font-size: 6.4rem;
    text-transform: uppercase;
    margin-top: -2rem;

    @media ${device.tabletL} {
      font-size: 4.8rem;
      line-height: 1.1;
      margin-top: -1rem;
    }
  }

  & h4 {
    font-size: 3.2rem;
    text-transform: uppercase;
    letter-spacing: 15px;
    color: var(--color-dark-grey);
  }
`;

function Banner() {
  const year = new Date().getFullYear();
  return (
    <StyledBanner>
      <div>
        <span>{year}</span>
        <h3>interior design in home</h3>
        <h4>special offer</h4>
      </div>
    </StyledBanner>
  );
}

export default Banner;
