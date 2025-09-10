import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, filterByCategory } from "../redux/ProductsSlice";
import { ProductCard } from "./ProductCard";
import "./Products.css";
export const Products = () => {
  const dispatch = useDispatch();
  const { filtered, loading } = useSelector((s) => s.products);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <div className="products-container">
      <aside className="categories">
        <h2>Categories</h2>
        <ul>
          {[
            "All",
            "men's clothing",
            "women's clothing",
            "electronics",
            "jewelry",
          ].map((cat) => (
            <li
              key={cat}
              onClick={() => {
                dispatch(filterByCategory(cat));
                setActiveCategory(cat);
              }}
              className={activeCategory === cat ? "active" : ""}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>
      <main className="product-list">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </main>
    </div>
  );
};
