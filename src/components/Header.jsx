import React from "react";
import { Heart, ShoppingBag, LogIn, FileText } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/ProductsSlice";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export const Header = ({ wishlistCount, cartCount }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <div
          className="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
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
            <button
              className="login-btn-header"
              onClick={() => navigate("/login")}
            >
              <LogIn size={14} />
              Log In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
