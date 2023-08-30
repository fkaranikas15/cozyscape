import { styled } from "styled-components";
import { Container } from "../../ui/Container";
import { Button } from "../../ui/Button";
import { device } from "../../utils/sizes";

const StyledHero = styled.section`
  background-image: url("/hero-img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
  position: relative;
  margin-bottom: 8rem;

  @media ${device.laptopS} {
    background-position: 25%;
  }

  @media ${device.mobile} {
    background-position: 40%;
  }

  & h1 {
    font-size: 6.4rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 2.4rem;

    @media ${device.tablet} {
      line-height: 1.1;
      margin-bottom: 3.2rem;
      margin-top: 2rem;
    }
  }

  & h2 {
    font-size: 2rem;
    letter-spacing: 5px;
    color: var(--color-dark-grey);
  }
`;

const TextBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

function Hero() {
  return (
    <StyledHero>
      <Container>
        <TextBox>
          <h2>Discover Comfort</h2>
          <h1>Harmony Haven</h1>
          <Button>Shop now</Button>
        </TextBox>
      </Container>
    </StyledHero>
  );
}

export default Hero;
