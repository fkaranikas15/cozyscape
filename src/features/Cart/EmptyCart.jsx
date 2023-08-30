import { styled } from "styled-components";
import { Button } from "../../ui/Button";

const StyledEmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 7.8rem;

  & span {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 3.2rem;
  }
`;

function EmptyCart({ handleToggleCart }) {
  return (
    <StyledEmptyCart>
      <img src="/empty-cart.png" alt="Empty Cart" />
      <span>Your cart is empty</span>
      <Button onClick={handleToggleCart}>Keep Browsing</Button>
    </StyledEmptyCart>
  );
}

export default EmptyCart;
