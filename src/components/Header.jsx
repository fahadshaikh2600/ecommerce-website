import React from "react";
import { Heart, ShoppingBag, LogIn } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/ProductsSlice";
import { useNavigate } from "react-router-dom";
import "./Header.css";
export const Header = ({ wishlistCount, cartCount }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span>📦</span>
          <h1>Store</h1>
        </div>
        <div className="right-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </div>
          <div className="icons">
            <div className="icon-item" onClick={() => navigate("/wishlist")}>
              <Heart size={25} />
              <sup>{wishlistCount}</sup>
            </div>
            <div className="icon-item" onClick={() => navigate("/cart")}>
              <ShoppingBag size={22} />
              <sup>{cartCount}</sup>
            </div>
            <button className="login-btn">
              <LogIn size={14} />
              Log In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
