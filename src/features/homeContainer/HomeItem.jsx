import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { device } from "../../utils/sizes";

const StyledHomeItem = styled.div`
  position: relative;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  grid-column: span ${(props) => props.column};
  grid-row: span ${(props) => props.row};
  cursor: pointer;

  @media ${device.tabletL} {
    grid-column: span 1;
    grid-row: span 1;
  }

  & h3 {
    font-size: 4rem;
    color: var(--color-white);
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    z-index: 20;
  }
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

function HomeItem({ title, img, row, column, url }) {
  return (
    <StyledHomeItem img={img} row={row} column={column}>
      <Link to={`/categories/${url}`}>
        <Overlay></Overlay>
        <h3>{title}</h3>
      </Link>
    </StyledHomeItem>
  );
}

export default HomeItem;
