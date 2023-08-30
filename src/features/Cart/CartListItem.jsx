import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { deleteItem, getCurrentQuantityById } from "./cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { FaTrash } from "react-icons/fa";
import { device } from "../../utils/sizes";

const StyledLi = styled.li`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 15rem 1fr;
  gap: 5rem;
  align-items: start;
  padding: 1.2rem 2.4rem;
  border: 1px solid var(--color-dark-grey);

  @media ${device.mobileS} {
    grid-template-columns: 10rem 1fr;
  }

  & img {
    align-self: center;
    justify-self: center;
    width: 100%;
    object-fit: cover;
  }

  & h4 {
    font-size: 1.8rem;
    font-weight: 400;
    border: none;
    padding-right: 2rem;
  }
  & p {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 4rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2.4rem;
  display: flex;
  border: none;
  background-color: transparent;
  color: var(--color-black);
  cursor: pointer;
`;

function CartListItem({ item }) {
  const { img, description, totalPrice, id } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const dispatch = useDispatch();
  return (
    <StyledLi>
      <CloseButton onClick={() => dispatch(deleteItem(id))}>
        <FaTrash />
      </CloseButton>
      <img src={img} alt={description} />
      <div>
        <h4>{description}</h4>
        <p>{totalPrice} $</p>
        <UpdateItemQuantity productId={id} currentQuantity={currentQuantity} />
      </div>
    </StyledLi>
  );
}

export default CartListItem;
