import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedProduct } from "../redux/ProductsSlice";
import { addToCart } from "../redux/CartSlice";
import { addToWishlist } from "../redux/WishlistSlice";

export const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useSelector((s) => s.products.selectedProduct);

  if (!product) return null;

  return (
    <div className="product-detail-overlay">
      <div className="product-detail">
        <button
          className="close-btn"
          onClick={() => dispatch(clearSelectedProduct())}
        >
          ✕
        </button>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>₹ {product.price}</p>
        <div className="detail-actions">
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
          <button onClick={() => dispatch(addToWishlist(product))}>
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
