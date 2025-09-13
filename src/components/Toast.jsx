import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideToast } from "../redux/ToastSlice";
import "./Toast.css";

const Toast = () => {
  const { visible, message } = useSelector((state) => state.toast);
  const dispatch = useDispatch();

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => dispatch(hideToast()), 3500);
      return () => clearTimeout(timer);
    }
  }, [visible, dispatch]);

  if (!visible) return null;

  return (
    <div className="toast">
      <span className="icon">✔</span>
      {message}
    </div>
  );
};

export default Toast;
