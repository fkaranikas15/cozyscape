import { styled } from "styled-components";
import { Container } from "../../ui/Container";
import CallToAction from "./CallToAction";
import FooterNav from "./FooterNav";

const StyledFooter = styled.div`
  background-color: #f9f9f9;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <CallToAction />
        <FooterNav />
      </Container>
    </StyledFooter>
  );
}

export default Footer;
