import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCartQty } from "../redux/CartSlice";
export default function CartPage() {
  const cart = useSelector((s) => s.cart);
  const dispatch = useDispatch();

  const total = cart
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>₹ {item.price}</p>
              </div>
              <div className="qty-controls">
                <button
                  onClick={() =>
                    dispatch(updateCartQty({ id: item.id, qty: item.qty - 1 }))
                  }
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() =>
                    dispatch(updateCartQty({ id: item.id, qty: item.qty + 1 }))
                  }
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="price-details">
          <h3>Price Details</h3>
          <p>Price (1 item): ₹ {total}</p>
          <p>Delivery Charges: Free</p>
          <p>Total Amount: ₹ {total}</p>
          <button className="checkout-btn">Checkout Now</button>
        </div>
      </div>
    </div>
  );
}
