import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { addToWishlist } from "../redux/WishlistSlice";
import { showToast } from "../redux/ToastSlice";
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

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    dispatch(showToast("✅ Product successfully added to your cart!"));
    t;
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    dispatch(addToWishlist(product));
    dispatch(showToast("💖 Product successfully Added to Wishlist"));
  };

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{truncateText(product.description, 15)}</p>
      <p className="price">Price: ₹ {product.price}</p>

      <div className="product-actions">
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleAddToWishlist}>Add to Wishlist</button>
      </div>
    </div>
  );
};
