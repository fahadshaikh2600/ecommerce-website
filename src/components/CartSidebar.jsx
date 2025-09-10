import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../redux/CartSlice";

export const CartSidebar = ({ isOpen, onClose }) => {
  const cart = useSelector((s) => s.cart);
  const dispatch = useDispatch();

  const total = cart
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button onClick={onClose}>✕</button>
      </div>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>₹ {item.price}</p>
                <p>Qty: {item.qty}</p>
              </div>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart-footer">
          <div className="total">
            <span>Total:</span>
            <span>₹ {total}</span>
          </div>
          <button className="clear-btn" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
          <button
            className="checkout-btn"
            onClick={() => alert("Proceeding to Checkout...")}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};
