import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

const StyledUpdate = styled.div`
  display: flex;

  & span,
  & button {
    padding: 1.2rem 2.4rem;
    border: 1px solid var(--color-black);
  }

  & span {
    font-size: 1.8rem;
    border-left: none;
    border-right: none;
  }

  & button {
    font-size: 2.4rem;
    font-weight: 700;
    background-color: var(--color-white);
    cursor: pointer;

    transition: all 0.3s;

    &:hover {
      background-color: transparent;
    }
  }
`;

function UpdateItemQuantity({ currentQuantity, productId }) {
  const dispatch = useDispatch();
  return (
    <StyledUpdate>
      <button onClick={() => dispatch(decreaseItemQuantity(productId))}>
        -
      </button>
      <span>{currentQuantity}</span>
      <button onClick={() => dispatch(increaseItemQuantity(productId))}>
        +
      </button>
    </StyledUpdate>
  );
}

export default UpdateItemQuantity;
