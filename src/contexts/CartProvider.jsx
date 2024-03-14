import React from "react";
import { createContext, useContext, useReducer } from "react";
const cartContext = createContext();
function CartProvider({ children }) {
  function cartReducer(cart, action) {
    switch (action.type) {
      case "ADD_TO_CART": {
        return [...cart, action.payload];
      }
      case "INCREASE": {
        return cart.map((CartItem) => {
          if (CartItem.id === action.payload) {
            return { ...CartItem, quantity: CartItem.quantity + 1 };
          }
          return CartItem;
        });
      }
      case "DECREASE": {
        return cart.map((CartItem) => {
          if (CartItem.quantity <= 1) {
            return CartItem;
          }
          if (CartItem.id === action.payload) {
            return { ...CartItem, quantity: CartItem.quantity - 1 };
          }
          return CartItem;
        });
      }
      case "RESET": {
        return cart.map((CartItem) => {
          if (CartItem.id === action.payload) {
            return { ...CartItem, quantity: 1 };
          }
          return CartItem;
        });
      }
    }
  }
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <cartContext.Provider value={{ cart, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
export function MyCart() {
  return useContext(cartContext);
}
