import React from "react";
import { MyCart } from "../contexts/CartProvider";
function CartItems({ quantity, id, name, price, img }) {
  const { cart, dispatch } = MyCart();
  function quantityIncrease(itemID) {
    console.log("increasing...");
    dispatch({
      type: "INCREASE",
      payload: itemID,
    });
  }
  function quantityDecrease(itemID) {
    console.log("decreasing....");
    dispatch({
      type: "DECREASE",
      payload: itemID,
    });
  }
  function quantityReset(itemID) {
    console.log("resetting...");
    dispatch({
      type: "RESET",
      payload: itemID,
    });
  }
  function quantityDelete(itemID) {
    console.log("deleting....");
    dispatch({
      type: "DELETE_ITEM",
      payload: itemID,
    });
  }
  return (
    <div>
      <p>id: {id}</p>
      <p>name:{name}</p>
      <p>price: {price}</p>
      <p>img:{img}</p>
      <p>quantity:{quantity}</p>
      <button onClick={() => quantityIncrease(id)}>Increase</button>
      <button onClick={() => quantityDecrease(id)}>Decrease</button>
      <button onClick={() => quantityReset(id)}>Reset</button>
      <button onClick={() => quantityDelete(id)}>Delete</button>
    </div>
  );
}

export default CartItems;
