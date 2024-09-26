import { useState } from "react";
import React from "react";
const { createContext } = require("react");
///create context
export const shoppingContext = createContext();
const ShoppingProvider = (props) => {
  const inititalItems =
    JSON.parse(window.localStorage.getItem("ALDokan_Cart")) || [];
  const initalCount = window.localStorage.getItem("ItemsCount") || 0;
  const initalPrice = window.localStorage.getItem("totalPrice") || 0;
  const [products, setProducts] = useState({
    items: inititalItems,
    itemsCount: initalCount,

    totalPrice: initalPrice,
  });
  ///helper function
  ///get prodocut qanuanitiyy
  const getProductQuantity = (id) => {
    const { items } = products;
    let quantity = 0;
    items.forEach((item) => {
      if (item.id === id) {
        quantity = item.quatnity;
        console.log(quantity);
      } else {
        quantity = 0;
      }
      //   return quantity;
    });
    return quantity;
  };
  //items count cLCULte
  const calculateItemsCount = (items) => {
    window.localStorage.setItem("ALDokan_Cart", JSON.stringify(items));
    let count = 0;
    items.forEach((item) => {
      count += item.quatnity;
    });
    window.localStorage.setItem("ItemsCount", count);
    return count;
  };
  ///Total Price Calculate
  const calculateTotalPrice = (items) => {
    let price = 0;
    items.forEach((item) => {
      price += item.price * item.quatnity;
    });
    window.localStorage.setItem("totalPrice", price);
    return price;
  };
  ///add to cart
  const addToCart = (product) => {
    const { items } = products;
    const productIndex = items.findIndex((item) => item.id === product.id);

    // console.log(productIndex);
    if (productIndex === -1) {
      items.push({ ...product, quatnity: 1 });
      console.log(product);
    } else {
      items[productIndex].quatnity++;
      console.log(product);
    }
    console.log(items);
    const itemsCount = calculateItemsCount(items);
    console.log(itemsCount);
    const totalPrice = calculateTotalPrice(items);
    console.log(totalPrice);
    setProducts({
      items,
      itemsCount,
      totalPrice,
    });
  };
  //remove from cart
  const removeFromCart = (product) => {
    const { items } = products;

    const productIndex = items.findIndex((item) => item.id === product.id);
    console.log(productIndex);
    if (productIndex === 0) {
      items.splice(productIndex, 1);
    }
    const itemsCount = calculateItemsCount(items);
    // console.log(itemsCount);
    const totalPrice = calculateTotalPrice(items);
    // console.log(totalPrice);
    setProducts({
      items,
      itemsCount,
      totalPrice,
    });
  };
  ///provide components and declare the value that wil passes througth components
  return (
    <shoppingContext.Provider
      value={{ products, addToCart, getProductQuantity, removeFromCart }}
    >
      {props.children}
    </shoppingContext.Provider>
  );
};
export default ShoppingProvider;
