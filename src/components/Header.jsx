import React from "react";
import { ShoppingCart, Heart, LogIn, Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/ProductsSlice";

export const Header = ({
  wishlistCount,
  cartCount,
  onCartClick,
  onWishlistClick,
}) => {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span>🛍️</span>
          <h1>F7 Store</h1>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
          <button>
            <Search size={16} />
          </button>
        </div>
        <div className="icons">
          <div className="icon-item" onClick={onWishlistClick}>
            <Heart size={20} />
            <span>{wishlistCount}</span>
          </div>
          <div className="icon-item" onClick={onCartClick}>
            <ShoppingCart size={20} />
            <span>{cartCount}</span>
          </div>
          <button className="login-btn">
            <LogIn size={16} />
            Log In
          </button>
        </div>
      </div>
    </header>
  );
};
