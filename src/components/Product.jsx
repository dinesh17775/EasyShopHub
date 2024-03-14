import React from "react";
import { MyCart } from "../contexts/CartProvider";
function Product({ id, img, name, price }) {
  const { cart, dispatch } = MyCart();
  function handleCart() {
    for (let Item of cart) {
      if (Item.id === id) {
        alert(`${name} is already added in the cart`);
        return;
      }
    }
    const newCartItem = {
      id: id,
      name: name,
      img: img,
      price: price,
      quantity: 1,
    };
    dispatch({
      type: "ADD_TO_CART",
      payload: newCartItem,
    });
  }
  return (
    <div>
      <p>id: {id}</p>
      <img src={img} alt="" height={200} />
      <p>name: {name}</p>
      <p>price:{price}</p>
      <button onClick={handleCart}>Add to cart</button>
    </div>
  );
}

export default Product;
