import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { addToWishlist } from "../redux/WishlistSlice";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length <= wordLimit
      ? text
      : words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{truncateText(product.description, 15)}</p>
      <p className="price">Price: ₹ {product.price}</p> {/* Matched image */}
      <div className="product-actions">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToCart(product));
          }}
        >
          Add to Cart
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToWishlist(product));
          }}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};
