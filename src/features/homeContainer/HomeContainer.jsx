import { styled } from "styled-components";
import HomeItem from "./HomeItem";
import { device } from "../../utils/sizes";

const StyledHomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 30rem);
  gap: 2rem;
  margin-bottom: 16rem;

  @media ${device.tabletL} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 40rem);
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 40rem);
  }
`;

function HomeContainer() {
  return (
    <StyledHomeContainer>
      <HomeItem
        title="Live Comfortably"
        img="/src/img/home/home-img-1.jpg"
        row={2}
        column={2}
        url="all"
      />
      <HomeItem
        title="Skincare"
        img="/src/img/home/home-img-2.jpg"
        row={2}
        url="skin-care"
      />
      <HomeItem
        title="Kitchen"
        img="/src/img/home/home-img-3.jpg"
        url="kitchen"
      />
      <HomeItem
        title="Electronics"
        img="/src/img/home/home-img-4.jpg"
        url="electronics"
      />
    </StyledHomeContainer>
  );
}

export default HomeContainer;
