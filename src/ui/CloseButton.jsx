import { styled } from "styled-components";

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 1rem;
  right: 2rem;
  cursor: pointer;

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    fill: var(--color-black);
    transition: all 0.3s;

    &:hover,
    &:active {
      fill: var(--color-primary);
    }
  }
`;
