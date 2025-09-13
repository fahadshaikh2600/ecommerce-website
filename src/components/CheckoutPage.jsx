import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!address.trim()) {
      alert("Please enter your delivery address!");
      return;
    }

    alert(
      `✅ Order placed successfully!\n\nTotal: ₹${totalPrice.toFixed(
        2
      )}\nPayment: ${paymentMethod}`
    );

    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="checkout-page">
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-content">
        <div className="order-summary">
          <h3>Order Summary</h3>
          {cart.map((item) => (
            <div key={item.id} className="checkout-item">
              <span>
                {item.title} (x{item.qty})
              </span>
              <span>₹ {(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          <hr />
          <h3>Total: ₹ {totalPrice.toFixed(2)}</h3>
        </div>

        <div className="checkout-form">
          <h3>Shipping Address</h3>
          <textarea
            placeholder="Enter delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>

          <h3>Payment Method</h3>
          <label>
            <input
              className="cod"
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>
          <label>
            <input
              className="cod"
              type="radio"
              value="online"
              checked={paymentMethod === "online"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Online Payment (Dummy)
          </label>

          <div className="checkout-actions">
            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
