import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, filterByCategory } from "../redux/ProductsSlice";
import { ProductCard } from "./ProductCard";
import { ProductDetail } from "./ProductDetails";

export const Products = () => {
  const dispatch = useDispatch();
  const { filtered, loading, selectedProduct } = useSelector((s) => s.products);

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
            "jewelery",
          ].map((cat) => (
            <li key={cat} onClick={() => dispatch(filterByCategory(cat))}>
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
      {selectedProduct && <ProductDetail />}
    </div>
  );
};
