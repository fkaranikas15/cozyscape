import { styled } from "styled-components";
import Navigation from "./Navigation";
import { FaTimes } from "react-icons/fa";
import { Overlay } from "./Overlay";
import { CloseButton } from "./CloseButton";

const StyledSidebar = styled.div`
  width: 40rem;
  height: 100vh;
  padding: 3.2rem 6.4rem;
  position: fixed;
  top: 0;
  left: ${(props) => (props.open === "true" ? "0" : "-100%")};
  background-color: var(--color-white);
  z-index: 100;

  transition: all 0.8s ease-in-out;
`;

function Sidebar({ isSidebarOpen, handleToggleMenu }) {
  return (
    <>
      <Overlay
        open={isSidebarOpen.toString()}
        onClick={handleToggleMenu}
      ></Overlay>
      <StyledSidebar open={isSidebarOpen.toString()}>
        <CloseButton onClick={handleToggleMenu}>
          <FaTimes />
        </CloseButton>
        <Navigation isSidebarNav="true" handleToggleMenu={handleToggleMenu} />
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
