import React, { useState } from "react";
import Modal from "../UI/Modal";
function Header() {
  const [showCart, setShowCart] = useState(false);
  function handleShowCart() {
    console.log("showing cart....");
    setShowCart(true);
  }
  if (showCart) {
    document.documentElement.style.overflowY = "hidden";
  } else {
    document.documentElement.style.overflowY = "";
  }
  return (
    <header>
      <nav>
        <h2>EasyShop</h2>
        <button onClick={handleShowCart}>show cart</button>
        {showCart && (
          <Modal setShowCart={setShowCart} showCart={showCart}></Modal>
        )}
      </nav>
    </header>
  );
}

export default Header;
