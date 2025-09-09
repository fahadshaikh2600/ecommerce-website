import React from "react";
import { ShoppingCart, Heart, LogIn, Search } from "lucide-react";

export const Header = ({ wishlistCount, cartCount }) => {
  return (
    <header className="w-full bg-[#202938] text-white">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <span className="text-xl">🛍️</span>
          <h1 className="text-2xl font-semibold"> F7 Store</h1>
        </div>

        <div className=" ml-auto px-6">
          <div className="flex items-center bg-white rounded-md overflow-hidden h-11 w-64">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-2 py-2 text-sm text-black focus:outline-none"
            />
            <button className="px-2 text-gray-600">
              <Search size={16} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Heart size={20} />
            <span>{wishlistCount}</span>
          </div>

          <div className="flex items-center gap-1">
            <ShoppingCart size={20} />
            <span>{cartCount}</span>
          </div>

          <button className="border border-white px-4 py-1 rounded-md hover:bg-white hover:text-black transition">
            <LogIn size={16} className="inline mr-1" /> Log In
          </button>
        </div>
      </div>
    </header>
  );
};
