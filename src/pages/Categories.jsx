import CategoriesLinks from "../features/products/CategoriesLinks";
import ProductList from "../features/products/ProductList";
import { Container } from "../ui/Container";

function Categories() {
  return (
    <>
      <Container>
        <CategoriesLinks />
        <ProductList />
      </Container>
    </>
  );
}

export default Categories;
