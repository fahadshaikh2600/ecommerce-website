import React, { useState } from "react";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { CartSidebar } from "./components/CartSidebar"; // Fixed here
import { WishlistSidebar } from "./components/WishlistSidebar";
import { useSelector } from "react-redux";

function App() {
  const cartCount = useSelector((s) => s.cart.length);
  const wishlistCount = useSelector((s) => s.wishlist.length);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        wishlistCount={wishlistCount}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onWishlistClick={() => setIsWishlistOpen(true)}
      />

      <Products />

      {/* Sidebars */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistSidebar
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
      />
    </div>
  );
}

export default App;
