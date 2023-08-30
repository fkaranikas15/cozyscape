import { useParams } from "react-router-dom";
import { items } from "../../data/AllData";
import { styled } from "styled-components";
import ProductImages from "./ProductImages";
import ProductDescription from "./ProductDescription";
import ProductDetails from "./ProductDetails";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "../Cart/cartSlice";
import { device } from "../../utils/sizes";

const StyledProduct = styled.div`
  text-align: center;
  margin: 8rem 0;

  & h3 {
    font-size: 4.8rem;
    margin-bottom: 4.8rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin-bottom: 8rem;

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
    gap: 3.2rem;
  }
`;

function Product({ handleToggleCart }) {
  const { id } = useParams();
  const [product] = items.filter((item) => item.id === Number(id));
  const { description, img, otherImgs, specs, price, texture, weight, size } =
    product;
  const productId = product.id;
  const currentQuantity = useSelector(getCurrentQuantityById(productId));

  return (
    <StyledProduct>
      <h3>{description}</h3>
      <ProductGrid>
        <ProductImages
          img={img}
          otherImgs={otherImgs}
          description={description}
        />
        <ProductDescription
          specs={specs}
          price={price}
          productId={productId}
          currentQuantity={currentQuantity}
          product={product}
          handleToggleCart={handleToggleCart}
        />
      </ProductGrid>
      <ProductDetails texture={texture} weight={weight} size={size} />
    </StyledProduct>
  );
}

export default Product;
