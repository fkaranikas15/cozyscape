import { styled } from "styled-components";
import { Overlay } from "../../ui/Overlay";
import { FaTimes } from "react-icons/fa";
import { CloseButton } from "../../ui/CloseButton";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { Button } from "../../ui/Button";
import { device } from "../../utils/sizes";

const StyledShoppingCart = styled.div`
  width: 50rem;
  height: 100vh;
  padding: 3.2rem;
  position: fixed;
  top: 0;
  right: ${(props) => (props.open === "true" ? "0" : "-120%")};
  background-color: var(--color-white);
  z-index: 100;

  @media ${device.mobile} {
    width: 100vw;
  }

  transition: all 0.8s ease-in-out;

  & h3 {
    font-size: 2.2rem;
    margin-top: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--color-dark-grey);
  }
`;

const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 2rem;
  border-top: 1px solid var(--color-dark-grey);
  padding: 1.6rem 0;

  & span {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

function ShoppingCart({ isShoppingCartOpen, handleToggleCart }) {
  const cart = useSelector(getCart);
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <>
      <Overlay
        open={isShoppingCartOpen.toString()}
        onClick={handleToggleCart}
      ></Overlay>
      <StyledShoppingCart open={isShoppingCartOpen.toString()}>
        <CloseButton onClick={handleToggleCart}>
          <FaTimes />
        </CloseButton>
        <h3>{`Your Shopping Cart ( ${totalQuantity} )`}</h3>
        {cart.length === 0 ? (
          <EmptyCart handleToggleCart={handleToggleCart} />
        ) : (
          <>
            <CartList />
            <TotalPrice>
              <span>{`Subtotal: ${
                totalCartPrice ? `${totalCartPrice} $` : "0 $"
              }`}</span>
              <Button>Go to CheckOut</Button>
            </TotalPrice>
          </>
        )}
      </StyledShoppingCart>
    </>
  );
}

export default ShoppingCart;
