import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { device } from "../utils/sizes";

const StyledProductBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-dark-grey);
  width: 100%;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    border: 1px solid var(--color-black);
  }

  & img {
    width: 75%;
    height: 20rem;
    object-fit: cover;
    margin-bottom: 2rem;
    align-self: center;

    @media ${device.tabletL} {
      height: auto;
      width: 50%;
    }
  }

  & h4 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  & span {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const StyledLink = styled(Link)`
  &:visited,
  &:link,
  &:hover,
  &:active {
    text-decoration: none;
    color: var(--color-black);
  }
`;

function ProductBox({ item }) {
  const { description, img, price, id, category } = item;
  return (
    <StyledLink to={`/categories/${category}/product/${id}`}>
      <StyledProductBox>
        <img src={img} alt={description} />
        <h4>{description}</h4>
        <span>{price} $</span>
      </StyledProductBox>
    </StyledLink>
  );
}

export default ProductBox;
