import { styled } from "styled-components";
import TextBox from "../../ui/TextBox";
import { Link } from "react-router-dom";

const StyledSliderItem = styled.div`
  width: 45rem;
  position: relative;
  overflow: hidden;

  & div:first-child::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 30rem;
    background-color: var(--color-hover);
    pointer-events: none;

    transition: all 1s;
  }

  & div:first-child:hover::after {
    left: 0;
  }

  & img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
    margin-bottom: 2rem;
  }

  & span {
    display: block;
    font-size: 1.8rem;
    color: var(--color-dark-grey);
    text-align: center;
    margin-top: -3.2rem;
  }
`;

const StyledLink = styled(Link)`
  &:link,
  &:visited {
    text-decoration: none;
    color: var(--color-black);
    transition: all 0.3s;
  }

  &:hover,
  &:active {
    color: var(--color-primary);
  }
`;

function SliderItem({ item }) {
  const { img, date, title, numComments, id } = item;
  return (
    <StyledSliderItem>
      <div>
        <Link to={`/blog/${id}`}>
          <img src={img} alt={title} />
        </Link>
      </div>
      <TextBox h3="2.2rem" h4="1.8rem">
        <h4>{date}</h4>
        <StyledLink to={`/blog/${id}`}>
          <h3>{title}</h3>
        </StyledLink>
      </TextBox>
      <span>{numComments} Comments</span>
    </StyledSliderItem>
  );
}

export default SliderItem;
