import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";
import { addToWishlist } from "../redux/WishlistSlice";
import { Heart, ShoppingCart } from "lucide-react";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const products = useSelector((s) => s.products.items);
  const product = products.find((p) => p.id === parseInt(id));

  const dispatch = useDispatch();

  if (!product) return <p className="not-found">Product not found.</p>;

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-detail-page">
      <div className="image-section">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="details-section">
        <p className="category">{product.category}</p>
        <h1 className="title">{product.title}</h1>
        <div className="rating">★★★★★</div>
        <p className="description">{product.description}</p>

        <div className="price">₹ {product.price}</div>

        <div className="actions">
          <button className="wishlist-btn" onClick={handleAddToWishlist}>
            <Heart size={18} /> Add to Wishlist
          </button>
          <button className="cart-btn" onClick={handleAddToCart}>
            <ShoppingCart size={18} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
