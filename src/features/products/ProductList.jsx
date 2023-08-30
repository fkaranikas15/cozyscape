import { useParams } from "react-router-dom";
import { items } from "../../data/AllData";
import ProductBox from "../../ui/ProductBox";
import { styled } from "styled-components";

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 5rem;
  padding: 4.8rem;
  margin-bottom: 16rem;
`;

function ProductList() {
  const { id } = useParams();
  const showedItems =
    id === "all" ? items : items.filter((item) => item.category === id);

  return (
    <StyledProductList>
      {showedItems.map((item) => (
        <ProductBox item={item} key={item.id} />
      ))}
    </StyledProductList>
  );
}

export default ProductList;
