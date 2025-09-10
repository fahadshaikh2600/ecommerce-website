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

  if (!product) return <p>Product not found.</p>;

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    console.log("Added to wishlist:", product.title); // Debug log
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log("Added to cart:", product.title); // Debug log
  };

  return (
    <div className="product-detail-page">
      <div className="image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="details">
        <div className="category">{product.category}</div>
        <h1>{product.title}</h1>
        <div className="rating">★★★★★</div>
        <p>{product.description}</p>
        <p>₹ {product.price}</p>
        <div className="detail-actions">
          <button onClick={handleAddToWishlist}>
            <Heart size={20} />
          </button>
          <button onClick={handleAddToCart}>
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
