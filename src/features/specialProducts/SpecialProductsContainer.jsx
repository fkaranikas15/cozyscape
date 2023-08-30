import { styled } from "styled-components";
import TextBox from "../../ui/TextBox";
import { items } from "../../data/AllData";
import SpecialProduct from "./SpecialProduct";

const SpecialProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 3.2rem;
  margin-bottom: 16rem;
`;

function SpecialProductsContainer() {
  const specialItems = items.filter((_, i) => i < 8);

  return (
    <>
      <TextBox h3="4.8rem" h4="2.4rem">
        <h4>Our Collection</h4>
        <h3>Special Products</h3>
      </TextBox>
      <SpecialProductsGrid>
        {specialItems.map((item) => (
          <SpecialProduct item={item} key={item.id} />
        ))}
      </SpecialProductsGrid>
    </>
  );
}

export default SpecialProductsContainer;
