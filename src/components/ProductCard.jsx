import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />

      {/* Title */}
      <h2 className="font-semibold text-base text-gray-800">{product.title}</h2>

      {/* Description */}
      <p className="text-sm text-gray-600 flex-grow">{product.description}</p>

      {/* Price */}
      <p className="font-semibold mt-2">Price : ₹ {product.price}</p>

      {/* Buttons */}
      <div className="flex gap-2 mt-3">
        <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded-md hover:bg-blue-700">
          + Add to Cart
        </button>
        <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded-md hover:bg-blue-700">
          + Add to Wishlist
        </button>
      </div>
    </div>
  );
};
