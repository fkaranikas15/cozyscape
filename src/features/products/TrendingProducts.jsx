import { useLocation, useParams } from "react-router-dom";
import { items } from "../../data/AllData";
import ProductBox from "../../ui/ProductBox";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const StyledTrendingProducts = styled.div`
  margin-bottom: 16rem;
  & h3 {
    font-size: 2.4rem;
    text-transform: uppercase;
    margin-bottom: 3.2rem;
  }
`;

const TrendingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 2rem;

  & div {
    display: flex;
    gap: 2rem;

    & button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 1.6rem;

      background-color: var(--color-primary);
      color: var(--color-white);
      border: 1px solid var(--color-primary);
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        background-color: var(--color-white);
        color: var(--color-primary);
      }

      & svg {
        width: 2.4rem;
        height: 2.4rem;
        /* fill: var(--color-black); */
      }
    }
  }
`;
const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const TrendingContainer = styled.div`
  width: 100%;
  display: grid;
  white-space: nowrap;
  grid-template-columns: repeat(${(props) => props.itemslength}, 30rem);
  gap: 3rem;
  transform: ${(props) => props.x < 0 && `translateX(${props.x}rem)`};
  transition: all 0.3s;
`;

function TrendingProducts() {
  const { id } = useParams();
  const itemsLength = items.length - 1;
  const [translateX, setTranslateX] = useState(0);
  const { pathname } = useLocation();

  function moveRight() {
    if (translateX > -470) {
      setTranslateX((translateX) => translateX - 30 - 3);
    }
  }
  function moveLeft() {
    if (translateX < 0) {
      setTranslateX((translateX) => translateX + 30 + 3);
    } else {
      setTranslateX(0);
    }
  }
  useEffect(() => {
    setTranslateX(0);
  }, [pathname]);

  return (
    <StyledTrendingProducts>
      <TrendingHeader>
        <h3>Trending Products</h3>
        <div>
          <button onClick={moveLeft}>
            <FaArrowLeft />
          </button>
          <button onClick={moveRight}>
            <FaArrowRight />
          </button>
        </div>
      </TrendingHeader>
      <Container>
        <TrendingContainer itemslength={itemsLength} x={translateX}>
          {items
            .filter((item) => item.id !== Number(id))
            .map((item) => (
              <ProductBox item={item} key={item.id} />
            ))}
        </TrendingContainer>
      </Container>
    </StyledTrendingProducts>
  );
}

export default TrendingProducts;
