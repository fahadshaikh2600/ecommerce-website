import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/WishlistSlice";
import { addToCart } from "../redux/CartSlice";

export const WishlistSidebar = ({ isOpen, onClose }) => {
  const wishlist = useSelector((s) => s.wishlist);
  const dispatch = useDispatch();

  return (
    <div className={`wishlist-sidebar ${isOpen ? "open" : ""}`}>
      <div className="wishlist-header">
        <h2>Wishlist</h2>
        <button onClick={onClose}>✕</button>
      </div>
      <div className="wishlist-items">
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.title} />
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>₹ {item.price}</p>
              </div>
              <div className="item-actions">
                <button onClick={() => dispatch(addToCart(item))}>
                  Add to Cart
                </button>
                <button onClick={() => dispatch(removeFromWishlist(item.id))}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
