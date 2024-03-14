import React from "react";
import "./App.css";
import Products from "./components/Products";
import CartProvider from "./contexts/CartProvider";
import Header from "./components/Header";
function App() {
  return (
    <CartProvider>
      <Header></Header>
      <Products></Products>
    </CartProvider>
  );
}

export default App;
