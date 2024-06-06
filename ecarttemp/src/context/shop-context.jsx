// import { createContext, useState } from "react";
// import { PRODUCTS } from "../products";

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   PRODUCTS.forEach(product => {
//     cart[product.id] = 0;
//   });
//   return cart;
// };

// export const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart());
//   const [products] = useState(PRODUCTS);

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = PRODUCTS.find((product) => product.id === Number(item));
//         if (itemInfo) {
//           totalAmount += cartItems[item] * itemInfo.price;
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => {
//       const newCount = (prev[itemId] || 0) - 1;
//       if (newCount < 0) return prev;
//       return { ...prev, [itemId]: newCount };
//     });
//   };

//   const updateCartItemCount = (newAmount, itemId) => {
//     if (newAmount < 0) return;
//     setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
//   };

//   const checkout = () => {
//     setCartItems(getDefaultCart());
//   };

//   const contextValue = {
//     cartItems,
//     products,
//     addToCart,
//     updateCartItemCount,
//     removeFromCart,
//     getTotalCartAmount,
//     checkout,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };


import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products'; // Import your PRODUCTS array

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [products] = useState(PRODUCTS); // Add this line to hold products

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    products, // Provide products here
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
