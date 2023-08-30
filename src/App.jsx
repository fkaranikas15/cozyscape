import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Header from "./ui/Header";
import Footer from "./features/footer/Footer";

import ProductPage from "./pages/ProductPage";
import BlogPage from "./pages/BlogPage";
import { useState } from "react";
import ScrollToTop from "./utils/ScrollToTop";

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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories/:id" element={<Categories />} />
          <Route
            path="categories/:id/product/:id"
            element={<ProductPage handleToggleCart={handleToggleCart} />}
          />
          <Route path="blog/:id" element={<BlogPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
