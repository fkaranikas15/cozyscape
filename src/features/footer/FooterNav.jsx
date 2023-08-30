import {
  FaFacebook,
  FaFax,
  FaGooglePlus,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { styled } from "styled-components";
import { device } from "../../utils/sizes";

const StyledFooterNav = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 2rem;
  padding: 6.4rem 0;

  @media ${device.laptopS} {
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }

  & img {
    width: 50%;
    margin-left: -3rem;
    margin-top: -3rem;
    cursor: pointer;

    @media ${device.laptopS} {
      width: 75%;
    }

    @media ${device.tablet} {
      width: 50%;
    }
    @media ${device.mobile} {
      width: 75%;
    }
  }

  & p {
    font-size: 1.8rem;
    color: var(--color-dark-grey);
    line-height: 1.7;
    width: 70%;
    margin-bottom: 2rem;
  }

  & h3 {
    font-size: 2.2rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    font-size: 1.8rem;
  }

  & li {
    color: var(--color-dark-grey);
    display: flex;
    align-items: center;
    gap: 1.6rem;
    cursor: pointer;

    transition: all 0.3s;

    &:hover {
      color: var(--color-primary);
    }
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: var(--color-black);
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      fill: var(--color-primary);
    }
  }
`;

function FooterNav() {
  const goTop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth",
    });
  };

  return (
    <StyledFooterNav>
      <div>
        <img src="/footer-logo.png" alt="footer logo" onClick={goTop} />
        <p>
          Elevate your space with our exclusive furniture pieces. Participate in
          our curated auctions and bring home comfort and style at your price.
        </p>
        <IconList>
          <FaFacebook />
          <FaGooglePlus />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </IconList>
      </div>
      <div>
        <h3>My account</h3>
        <ul>
          <li onClick={goTop}>Furnitures</li>
          <li onClick={goTop}>Electronics</li>
          <li onClick={goTop}>Skincare</li>
          <li onClick={goTop}>Accesories</li>
        </ul>
      </div>
      <div>
        <h3>Why choose us</h3>
        <ul>
          <li onClick={goTop}>Shippins & Returns</li>
          <li onClick={goTop}>Secure Shopping</li>
          <li onClick={goTop}>Affiliates</li>
          <li onClick={goTop}>Privacy</li>
          <li onClick={goTop}>Discounts</li>
        </ul>
      </div>
      <div>
        <h3>Store information</h3>
        <ul>
          <li onClick={goTop}>
            {" "}
            <FaMapMarkerAlt /> Square de la Couronne
          </li>
          <li onClick={goTop}>
            <FaPhoneAlt /> Call us: 123-456-789
          </li>
          <li onClick={goTop}>
            <FaRegEnvelope /> Email: cozyscape@gmail.com
          </li>
          <li onClick={goTop}>
            <FaFax /> Fax: 123456
          </li>
        </ul>
      </div>
    </StyledFooterNav>
  );
}

export default FooterNav;
