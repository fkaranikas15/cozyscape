import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./ui/Header";
import Footer from "./features/footer/Footer";

import { Suspense, lazy, useState } from "react";
import ScrollToTop from "./utils/ScrollToTop";
import Spinner from "./ui/Spinner";

const Home = lazy(() => import("./pages/Home"));
const Categories = lazy(() => import("./pages/Categories"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));

function App() {
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  function handleToggleCart() {
    setIsShoppingCartOpen(!isShoppingCartOpen);
  }

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header
          isShoppingCartOpen={isShoppingCartOpen}
          handleToggleCart={handleToggleCart}
        />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="categories/:id" element={<Categories />} />
            <Route
              path="categories/:id/product/:id"
              element={<ProductPage handleToggleCart={handleToggleCart} />}
            />
            <Route path="blog/:id" element={<BlogPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
