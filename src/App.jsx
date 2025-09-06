import React from "react";
import { Header } from "./components/Header";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header wishlistCount={0} cartCount={0} />
      <Products />
    </div>
  );
}

export default App;
