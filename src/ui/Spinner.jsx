import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const SpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSpinner = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, var(--color-primary));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`;

function Spinner() {
  return (
    <SpinnerContainer>
      <StyledSpinner></StyledSpinner>
    </SpinnerContainer>
  );
}

export default Spinner;
