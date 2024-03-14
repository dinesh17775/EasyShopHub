import React, { useState } from "react";
import "./index.css";
import { createPortal } from "react-dom";
import ShowItems from "../components/ShowItems";
function Modal({ showCart, setShowCart }) {
  function closeShowCart() {
    setShowCart(false);
  }
  return createPortal(
    <>
      <div className="modalBackDrop" onClick={closeShowCart}></div>
      <div className="modalContent">
        <ShowItems></ShowItems>
        <button className="closeModal" onClick={closeShowCart}>
          close Modal
        </button>
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
