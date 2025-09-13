import React from "react";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetails";
import CartPage from "./components/CartPage";
import WishlistPage from "./components/WishlistPage";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  const cartCount = useSelector((s) => s.cart.length);
  const wishlistCount = useSelector((s) => s.wishlist.length);

  return (
    <div className="app-container">
      <Header wishlistCount={wishlistCount} cartCount={cartCount} />

      <Toast />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />{" "}
          {/* ✅ Register route */}
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
