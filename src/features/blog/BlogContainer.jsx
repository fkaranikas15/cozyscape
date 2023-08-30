import { useNavigate, useParams } from "react-router-dom";
import { blogItems } from "../../data/AllData";
import { styled } from "styled-components";
import { Button } from "../../ui/Button";
import { FaArrowLeft } from "react-icons/fa";
import { device } from "../../utils/sizes";

const StyledBlogContainer = styled.div`
  margin: 8rem 0 16rem 0;

  & h3 {
    text-align: center;
    font-size: 3.2rem;
    margin-bottom: 4.8rem;
  }

  & div {
    text-align: right;
  }
`;

const BlogBox = styled.div`
  background-color: var(--color-light-grey);
  padding: 4.8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4.8rem;
  align-items: center;
  justify-items: center;

  margin-bottom: 4.8rem;

  @media ${device.laptopS} {
    grid-template-columns: 1fr;
  }

  & figure {
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
      width: 90%;
      object-fit: cover;

      @media ${device.tabletL} {
        width: 100%;
      }
    }
  }
`;

const BlogTextBox = styled.div`
  & p {
    font-size: 2rem;
    line-height: 1.7;
    letter-spacing: 2px;
    text-align: left;
    margin-bottom: 4.8rem;

    @media ${device.tablet} {
      height: 30rem;
      overflow-y: scroll;
    }
  }

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${device.mobileS} {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
  & span {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

function BlogContainer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const blogItem = blogItems.filter((item) => item.id === Number(id));
  const { title, img, description, numComments, date } = blogItem.at(0);
  return (
    <StyledBlogContainer>
      <h3>{title}</h3>
      <BlogBox>
        <figure>
          <img src={img} alt={`${title} photography`} />
        </figure>
        <BlogTextBox>
          <p>{description}</p>
          <div>
            <span>Comments: {numComments}</span>
            <span>{date}</span>
          </div>
        </BlogTextBox>
      </BlogBox>
      <div>
        <Button onClick={() => navigate(-1)}>
          {" "}
          <FaArrowLeft />
          Go back
        </Button>
      </div>
    </StyledBlogContainer>
  );
}

export default BlogContainer;
