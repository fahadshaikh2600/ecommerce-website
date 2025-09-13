import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/WishlistSlice";
import { addToCart } from "../redux/CartSlice";
import "./WishlistSidebar.css";

export default function WishlistPage() {
  const wishlist = useSelector((s) => s.wishlist);
  const dispatch = useDispatch();

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-sidebar open">
        <div className="wishlist-header">
          <h2>Wishlist</h2>
          <button
            className="close-btn"
            onClick={() => (window.location.href = "/")}
          >
            X
          </button>
        </div>
        <div className="wishlist-empty">Your wishlist is empty.</div>
      </div>
    );
  }

  return (
    <div className="wishlist-sidebar open">
      <div className="wishlist-header">
        <h2>Wishlist</h2>
      </div>
      <div className="wishlist-items">
        {wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.title} />
            <div className="wishlist-item-info">
              <h3>{item.title}</h3>
              <p>₹ {item.price}</p>
            </div>
            <div className="wishlist-actions">
              <button
                className="add-to-cart"
                onClick={() => dispatch(addToCart(item))}
              >
                Add to Cart
              </button>
              <button
                className="remove-wishlist"
                onClick={() => dispatch(removeFromWishlist(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
