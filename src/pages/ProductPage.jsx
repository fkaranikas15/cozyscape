import Product from "../features/product/Product";
import TrendingProducts from "../features/products/TrendingProducts";
import { Container } from "../ui/Container";

function ProductPage({ handleToggleCart }) {
  return (
    <>
      <Container>
        <Product handleToggleCart={handleToggleCart} />
        <TrendingProducts />
      </Container>
    </>
  );
}

export default ProductPage;
