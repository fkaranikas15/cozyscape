import { styled } from "styled-components";
import { Button } from "../../ui/Button";
import UpdateItemQuantity from "../Cart/UpdateItemQuantity";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCart, getTotalCartQuantity } from "../Cart/cartSlice";
import { device } from "../../utils/sizes";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-light-grey);
  padding: 9.6rem 4.8rem;

  @media ${device.tabletL} {
    padding: 4.8rem;
  }

  & p {
    font-size: 2rem;
    line-height: 1.7;
    letter-spacing: 2px;
    text-align: left;
    margin-bottom: 4.8rem;
  }
`;

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4.8rem;

  @media ${device.mobileS} {
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
  }

  & span {
    font-size: 2.4rem;
    font-weight: 700;
    white-space: nowrap;
  }
`;

const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  opacity: ${(props) => (props.isincart ? "1" : "0")};
  pointer-events: ${(props) => (props.isincart ? "all" : "none")};
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.2rem;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 2rem;
  }
`;

function ProductDescription({
  specs,
  price,
  productId,
  currentQuantity,
  product,
  handleToggleCart,
}) {
  const cart = useSelector(getCart);
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const dispatch = useDispatch();
  const newItem = { ...product, totalPrice: product.price * product.quantity };

  function handleBuyNowButton() {
    if (totalCartQuantity === 0) {
      dispatch(addItem(newItem));
      handleToggleCart();
    } else {
      handleToggleCart();
    }
  }

  return (
    <TextContainer>
      <p>{specs}</p>
      <PriceBox>
        <QuantityBox isincart={cart.find((item) => item.id === productId)}>
          <span>Quantity</span>
          <UpdateItemQuantity
            currentQuantity={currentQuantity}
            productId={productId}
          />
        </QuantityBox>

        <span>{price} $</span>
      </PriceBox>
      <ButtonBox>
        <Button
          variation="addToCart"
          onClick={() => dispatch(addItem(newItem))}
          disabled={cart.find((item) => item.id === productId)}
        >
          add to cart
        </Button>
        <Button onClick={handleBuyNowButton}>buy now</Button>
      </ButtonBox>
    </TextContainer>
  );
}

export default ProductDescription;
