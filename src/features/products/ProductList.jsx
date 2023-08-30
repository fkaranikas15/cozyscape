import { useParams } from "react-router-dom";
import { items } from "../../data/AllData";
import ProductBox from "../../ui/ProductBox";
import { styled } from "styled-components";
import { device } from "../../utils/sizes";

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-template-columns: ${(props) => props.items === 1 && "30rem"};
  gap: 5rem;
  padding: 4.8rem;
  margin-bottom: 16rem;

  @media ${device.tabletL} {
    grid-template-columns: ${(props) => props.items === 1 && "50rem"};
  }
  @media ${device.tablet} {
    grid-template-columns: ${(props) => props.items === 1 && "1fr"};
  }
`;

function ProductList() {
  const { id } = useParams();
  const showedItems =
    id === "all" ? items : items.filter((item) => item.category === id);

  return (
    <StyledProductList items={showedItems.length}>
      {showedItems.map((item) => (
        <ProductBox item={item} key={item.id} />
      ))}
    </StyledProductList>
  );
}

export default ProductList;
