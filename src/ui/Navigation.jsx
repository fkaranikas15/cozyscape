import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { device } from "../utils/sizes";

const Nav = styled.nav`
  padding: 2rem 0;
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: ${(props) => (props.sidebar ? "column" : "")};
  justify-content: center;
  gap: 3.2rem;

  & li {
    font-size: 1.8rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  @media ${device.tablet} {
    display: ${(props) => !props.sidebar && "none"};
  }
`;

const StyledLink = styled(Link)`
  &:visited,
  &:link {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    color: var(--color-black);
    transition: all 0.3s;
  }

  &:hover,
  &:active {
    color: var(--color-primary);
  }
`;

const DropdownContent = styled.div`
  display: none;
  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 1.8rem;
    position: absolute;
    right: ${(props) => (props.sidebar === "true" ? "1rem" : "")};
    z-index: 100;
    background-color: var(--color-white);
    padding: 2rem 4rem;
    box-shadow: 1rem 1rem 4rem rgba(0, 0, 0, 0.3);

    transition: all 0.3s;

    & li {
      font-size: 1.8rem;
      text-transform: none;
      color: var(--color-black);
      transition: all 0.3s;

      &:hover {
        color: var(--color-primary);
      }
    }
  }
`;

const DropdownLi = styled.li`
  &:hover ${DropdownContent} {
    display: block;
  }
`;

function Navigation({ isSidebarNav, handleToggleMenu }) {
  return (
    <Nav>
      <NavList sidebar={isSidebarNav} onClick={handleToggleMenu}>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/categories/all">Shop</StyledLink>
        </li>
        <DropdownLi>
          <StyledLink to="/categories/all">
            Categories{" "}
            {isSidebarNav === "true" ? <FaChevronRight /> : <FaChevronDown />}
          </StyledLink>
          <DropdownContent sidebar={isSidebarNav}>
            <ul>
              <li>
                <StyledLink to="/categories/furnitures">Furnitures</StyledLink>
              </li>
              <li>
                <StyledLink to="/categories/electronics">
                  Electronics
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/categories/lamps">Lamps</StyledLink>
              </li>
              <li>
                <StyledLink to="/categories/kitchen">Kitchen</StyledLink>
              </li>
              <li>
                <StyledLink to="/categories/chairs">Chairs</StyledLink>
              </li>
              <li>
                <StyledLink to="/categories/skin-care">Skin Care</StyledLink>
              </li>
            </ul>
          </DropdownContent>
        </DropdownLi>
        <li>
          <StyledLink to={`/blog/1`}>Blog</StyledLink>
        </li>
        <li>
          <StyledLink>Contact</StyledLink>
        </li>
      </NavList>
    </Nav>
  );
}

export default Navigation;
