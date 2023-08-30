import { styled } from "styled-components";

const StyledTextBox = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 6.4rem;

  & h3 {
    font-size: ${(props) => props.h3};
    text-transform: uppercase;
    white-space: pre-wrap;
  }

  & h4 {
    font-size: ${(props) => props.h4};
    font-weight: 400;
    letter-spacing: 3px;
    color: var(--color-primary);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-primary);
    width: 10rem;
    height: 0.6rem;
  }
`;

function TextBox({ children, h3, h4 }) {
  return (
    <StyledTextBox h3={h3} h4={h4}>
      {children}
    </StyledTextBox>
  );
}

export default TextBox;
