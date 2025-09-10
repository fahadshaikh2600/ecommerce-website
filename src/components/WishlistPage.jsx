import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/WishlistSlice";
import { addToCart } from "../redux/CartSlice";
import "./WishlistSidebar.css";

export default function WishlistPage() {
  const wishlist = useSelector((s) => s.wishlist);
  const dispatch = useDispatch();

  if (wishlist.length === 0) return <p>Your wishlist is empty.</p>;

  return (
    <div className="wishlist-page">
      <h1>Wishlist</h1>
      <div className="wishlist-items">
        {wishlist.map((item) => (
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
        ))}
      </div>
    </div>
  );
}
