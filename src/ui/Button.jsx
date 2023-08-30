import { css, styled } from "styled-components";

const variations = {
  primary: css`
    color: var(--color-white);
    background-color: var(--color-primary);
    border: 2px solid transparent;

    &:hover,
    &:active {
      background-color: transparent;
      color: var(--color-primary);
      border: 2px solid var(--color-primary);
    }
  `,
  addToCart: css`
    color: var(--color-black);
    background-color: transparent;
    border: 2px solid var(--color-black);

    &:hover,
    &:active {
      background-color: var(--color-black);
      color: var(--color-white);
      border: 2px solid var(--color-black);
    }
  `,
  buy: css`
    color: var(--color-white);
    background-color: var(--color-black);
    border: 2px solid var(--color-black);

    &:hover,
    &:active {
      background-color: transparent;
      color: var(--color-black);
    }
  `,
};

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 1.6rem 3.2rem;
  border: 2px solid transparent;

  ${(props) => variations[props.variation]}

  cursor: pointer;
  transition: all 0.3s;

  &:disabled {
    cursor: not-allowed;
  }
`;

Button.defaultProps = {
  variation: "primary",
};
