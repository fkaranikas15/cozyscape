import { styled } from "styled-components";
import { Button } from "../../ui/Button";
import { device } from "../../utils/sizes";

const StyledCTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 0;
  border-bottom: 1px solid var(--color-light-grey);

  @media ${device.laptopS} {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  & h3 {
    font-size: 2.4rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  & p {
    font-size: 1.8rem;
    color: var(--color-dark-grey);
  }

  & input {
    font-size: 1.8rem;
    color: var(--color-black);
    padding: 1.6rem 3.2rem;
    border: 1px solid var(--color-primary);
    margin-right: 2rem;

    @media ${device.mobile} {
      margin-bottom: 2rem;
    }
  }
`;

function CallToAction() {
  return (
    <StyledCTA>
      <div>
        <h3>Know it all first!</h3>
        <p>
          Never miss any offer from Cozyscape by singing up to our Newsletter
        </p>
      </div>
      <div>
        <input type="email" placeholder="Enter your email" />
        <Button>Subscribe</Button>
      </div>
    </StyledCTA>
  );
}

export default CallToAction;
