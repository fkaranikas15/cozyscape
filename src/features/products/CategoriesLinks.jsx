import { Link, useParams } from "react-router-dom";
import { items } from "../../data/AllData";
import { styled } from "styled-components";

const StyledCategories = styled.div`
  text-align: center;
  margin-top: 3.2rem;

  & h3 {
    font-size: 3.2rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 3.2rem;
  }

  & ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
    margin-bottom: 2rem;
  }
`;

const StyledLink = styled(Link)`
  &:visited,
  &:link {
    text-decoration: none;
    color: var(--color-black);
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    border: 2px solid var(--color-light-grey);
    padding: 1.2rem 1.6rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active {
    border: 2px solid var(--color-dark-grey);
  }
`;

function CategoriesLinks() {
  const { id } = useParams();
  const categories = items.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  return (
    <StyledCategories>
      <h3>{id}</h3>
      <ul>
        {uniqueCategories.map((category) => (
          <li key={category}>
            <StyledLink to={`/categories/${category}`}>{category}</StyledLink>
          </li>
        ))}
      </ul>
    </StyledCategories>
  );
}

export default CategoriesLinks;
