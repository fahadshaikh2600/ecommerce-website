import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCartQty, removeFromCart } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

export default function CartPage() {
  const cart = useSelector((s) => s.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <div className="cart-page">
      {cart.length === 0 ? (
        <div className="cart-empty-overlay">
          <div className="cart-header">
            <h2>Cart</h2>
            <button className="close-btn" onClick={() => navigate("/")}>
              X
            </button>
          </div>
          <div className="cart-empty">Your Cart is empty.</div>
        </div>
      ) : (
        <>
          <h1 className="cart-title">Shopping Cart</h1>
          <div className="cart-content">
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-image"
                  />
                  <div className="item-info">
                    <h3 className="cart-item-name">{item.title}</h3>
                    <p className="cart-item-price">₹ {item.price}</p>
                    <button
                      className="remove-btn"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="qty-controls">
                    <button
                      onClick={() =>
                        item.qty > 1 &&
                        dispatch(
                          updateCartQty({ id: item.id, qty: item.qty - 1 })
                        )
                      }
                      className="qty-button"
                    >
                      -
                    </button>
                    <span className="qty-display">{item.qty}</span>
                    <button
                      onClick={() =>
                        dispatch(
                          updateCartQty({ id: item.id, qty: item.qty + 1 })
                        )
                      }
                      className="qty-button"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="price-details">
              <h3 className="price-details-title">Price Details</h3>
              <p className="price-detail">
                Price ({cart.length} item{cart.length > 1 ? "s" : ""}): ₹{" "}
                {total}
              </p>
              <p className="price-detail">Delivery Charges: Free</p>
              <p className="price-detail">Total Amount: ₹ {total}</p>
              <button
                className="checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Checkout Now
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
