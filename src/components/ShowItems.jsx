import React from "react";
import { MyCart } from "../contexts/CartProvider";
import CartItems from "./CartItems";
function ShowItems() {
  const { cart, dispatch } = MyCart();
  console.log(cart);
  return (
    <div>
      {cart.map((value) => {
        return <CartItems key={value.id} {...value}></CartItems>;
      })}
    </div>
  );
}

export default ShowItems;
