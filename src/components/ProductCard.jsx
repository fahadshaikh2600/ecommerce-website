import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { addToWishlist } from "../redux/WishlistSlice";
import { selectProduct } from "../redux/ProductsSlice";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="product-card"
      onClick={() => dispatch(selectProduct(product))}
    >
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>₹ {product.price}</p>
      <div className="product-actions">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToCart(product));
          }}
        >
          + Cart
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToWishlist(product));
          }}
        >
          ♥ Wishlist
        </button>
      </div>
    </div>
  );
};
