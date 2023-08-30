import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import CartListItem from "./CartListItem";
import { styled } from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 3.2rem 0;
  height: 60vh;
  overflow-y: scroll;
  overflow-x: hidden;
`;

function CartList() {
  const cart = useSelector(getCart);
  return (
    <StyledList>
      {cart.map((item) => (
        <CartListItem item={item} key={item.id} />
      ))}
    </StyledList>
  );
}

export default CartList;
