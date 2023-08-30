import { keyframes, styled } from "styled-components";
import { blogItems } from "../../data/AllData";
import TextBox from "../../ui/TextBox";
import SliderItem from "./SliderItem";
import { device } from "../../utils/sizes";

const Scrolling = keyframes`
from{
  transform: translateX(0);
}
to{
  transform: translateX(-100%);
}
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 16rem;
`;

const StyledSlider = styled.div`
  width: 150rem;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  gap: 5rem;
  position: relative;

  &:hover > * {
    animation-play-state: paused;
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    width: 10rem;
    height: 100%;
    content: "";
    z-index: 2;

    @media ${device.mobile} {
      width: 0rem;
    }
  }

  &::before {
    left: 0;
    background: linear-gradient(to left, transparent, var(--color-white));
  }
  &::after {
    right: 0;
    background: linear-gradient(to right, transparent, var(--color-white));
  }
`;

const SliderContent = styled.div`
  display: inline-flex;
  gap: 5rem;

  animation: ${Scrolling} 40s infinite linear;
`;

function Slider() {
  return (
    <div>
      <TextBox h3="4.8rem" h4="2.4rem">
        <h4>Our Designs</h4>
        <h3>Inspired blog</h3>
      </TextBox>
      <SliderContainer>
        <StyledSlider>
          <SliderContent>
            {blogItems.map((item) => (
              <SliderItem item={item} key={item.id} />
            ))}
          </SliderContent>
          <SliderContent>
            {blogItems.map((item) => (
              <SliderItem item={item} key={item.id} />
            ))}
          </SliderContent>
        </StyledSlider>
      </SliderContainer>
    </div>
  );
}

export default Slider;
