import { styled } from "styled-components";
import { device } from "../../utils/sizes";

const StyledProductDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 4.8rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: 2.4rem;
  }

  & div {
    background-color: var(--color-light-grey);
    text-align: left;
    padding: 2.4rem 3.2rem;

    & h4 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    & span {
      font-size: 1.8rem;
      letter-spacing: 2px;
    }
  }
`;

function ProductDetails({ texture, weight, size }) {
  return (
    <StyledProductDetails>
      <div>
        <h4>Texture:</h4>
        <span>{texture}</span>
      </div>
      <div>
        <h4>Weight:</h4>
        <span>{weight}</span>
      </div>
      <div>
        <h4>Size:</h4>
        <span>{size}</span>
      </div>
    </StyledProductDetails>
  );
}

export default ProductDetails;
