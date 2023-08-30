import { FaBars, FaShoppingCart } from "react-icons/fa";
import { styled } from "styled-components";
import { Container } from "./Container";
import { useState } from "react";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import ShoppingCart from "../features/Cart/ShoppingCart";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../features/Cart/cartSlice";
import { device } from "../utils/sizes";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-light-grey);
  padding: 1rem 2rem;

  @media ${device.mobile} {
    gap: 2rem;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  & img {
    width: 50%;
    object-fit: cover;

    @media ${device.tablet} {
      width: 50%;
    }

    @media ${device.mobile} {
      width: 70%;
    }
    @media ${device.mobileS} {
      width: 80%;
    }
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: relative;

  & svg {
    width: 4rem;
    height: 4rem;
    fill: var(--color-black);
    transition: all 0.3s;

    &:hover,
    &:active {
      fill: var(--color-primary);
    }
  }

  & span {
    position: absolute;
    right: -2rem;
    top: -1.6rem;
    width: 2.6rem;
    height: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: var(--color-white);
    background-color: var(--color-primary);
    border-radius: 50%;
  }
`;

function Header({ isShoppingCartOpen, handleToggleCart }) {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const totalQuantity = useSelector(getTotalCartQuantity);

  function handleToggleMenu() {
    setisSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <Container>
        <StyledHeader>
          <StyledButton onClick={handleToggleMenu}>
            <FaBars />
          </StyledButton>
          <StyledLink to="/">
            <img src="/header-logo.png" alt="logo of company" />
          </StyledLink>
          <StyledButton onClick={handleToggleCart}>
            <span>{totalQuantity}</span>
            <FaShoppingCart />
          </StyledButton>
        </StyledHeader>
        <Navigation />
      </Container>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        handleToggleMenu={handleToggleMenu}
      />
      <ShoppingCart
        isShoppingCartOpen={isShoppingCartOpen}
        handleToggleCart={handleToggleCart}
      />
    </>
  );
}

export default Header;
