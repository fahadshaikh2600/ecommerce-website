import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products") // Replace with your API
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex">
      {/* Sidebar Categories */}
      <aside className="w-48 p-4 bg-gray-100">
        <h2 className="font-semibold text-gray-700 mb-4">Categories</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="cursor-pointer hover:text-blue-600">All</li>
          <li className="cursor-pointer hover:text-blue-600">Cloths</li>
          <li className="cursor-pointer hover:text-blue-600">Electronics</li>
          <li className="cursor-pointer hover:text-blue-600">Furniture</li>
          <li className="cursor-pointer hover:text-blue-600">Shoes</li>
          <li className="cursor-pointer hover:text-blue-600">Miscellaneous</li>
        </ul>
      </aside>

      {/* Product Grid */}
      <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
};
